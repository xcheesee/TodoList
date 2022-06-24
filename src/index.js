// SOLID-
// S - SINGUE RESPONSIBILITY
// O - OPEN/CLOSED
// L - LISKOV SUBSTITUTION PRINCIPLE
// I - INTERFACE SEGREGATION
// D - DEPENDENCY INVERSION
// DRY - DONT REPEAT YOURSELF

import './style.css';
import isValid from 'date-fns/isValid'
import isPast from 'date-fns/isPast'
import Datepicker from 'vanillajs-datepicker/Datepicker';
import { ka } from 'date-fns/locale';

const mainPage = document.querySelector('.mainPage')
const notesForm = document.querySelector('.nFormWrapper')
const projsForm = document.querySelector('.pFormWrapper')
const cardContainer = document.querySelector('.cardContainer')
const addBtn = document.querySelector('#notesBtn')
const projBtn = document.querySelector('#projBtn')
addBtn.onclick = showNotesForm
projBtn.onclick = showProjForm
const nForm = document.querySelector('#nForm')
const pForm = document.querySelector('#pForm')
nForm.addEventListener('submit', submitNoteQuestions)
pForm.addEventListener('submit', submitProjsQuestions)
let currCardContainer;

const datepicker = new Datepicker(document.querySelector('#date'), {
    autohide: true,
    format: 'dd/mm/yyyy'
})

function showNotesForm () {
    attachProjs(pageData.getProjs())
    notesForm.classList.toggle('showForm')
    return
}

function showProjForm () {
    projsForm.classList.toggle('showForm')
    return
}

function attachProjs (projObjValues) {
    const projSelect = document.querySelector('#projSelect')
    clearPage(projSelect)
    let projDomValues = makeDomObject.makeOptions(projObjValues)
    projDomValues.forEach(dom => projSelect.appendChild(dom))
    return
}

function submitNoteQuestions (event) {
    const formData = new FormData(event.target)
    let data = Object.fromEntries(formData)
    
    pageData.addNote(data)
    makeDomObject.updateProjTabEle(data.proj)
    // cardContainer.appendChild(makeDomObject.makeNote(data))
    if(currCardContainer == data.proj) {
        showProjectNotes(data.proj)
    }
    notesForm.classList.toggle('showForm')
    event.preventDefault();
    event.target.reset()
    return
}

function submitProjsQuestions (event) {
    const projSidebar = document.querySelector('.sidebar')
    const formData = new FormData(event.target)
    let data = Object.fromEntries(formData)
    console.log(data)
    if(pageData.duplicateProj(data.name)) return
    pageData.addProj(data)
    addToPage(projSidebar, makeDomObject.makeProjTabEle(data.name))
    projsForm.classList.toggle('showForm')
    event.preventDefault();
    event.target.reset()
    return
}

function addToPage (container, ...childNodes) {
    return childNodes.forEach(node => container.appendChild(node))
}

const pageData = (() => {
    let notesData = [];
    let projectsData = {
        default: {
            name: 'default',
            toDos: [],
            id: 0
        }
    }
    let noteId = 0;
    let projId = 1;

    const addNote = (item) => {
        item.dataId = noteId
        projectsData[item.proj].toDos.push(item)
        console.log(item, projectsData)
        noteId++;
    }

    const addProj = (proj) => {
        if(projectsData[proj.name]) return false
        projectsData[proj.name] = {
            name: proj.name,
            toDos: [],
            id: projId
        }
        projId++;
        console.log(projectsData)
        console.log(getProjs())
        return true
    }

    const getNotes = () => notesData

    const getProjs = () => {
        let projNames = []
        for(let project in projectsData) {
            projNames.push(projectsData[project].name)
        }
        return projNames
    }

    const getProjNotes = (proj) => projectsData[proj].toDos

    const getProjData = (proj) => projectsData[proj]

    const duplicateProj = (proj) => {
        if (projectsData[proj]) {
            return true
            //add error message
        }
        return false
    }

    return {addNote, getNotes, addProj, getProjs, getProjNotes, duplicateProj, getProjData}
})();

const makeDomObject = (() => {
    let node;

    const makeNote = ({title, desc, date, prio, dataId}) => {
        node = document.createElement('div')
        node.setAttribute('id', `card${dataId}`)
        node.classList.add('card')

        const t = document.createElement('h2')
        t.setAttribute('id', 'cardTitle')
        t.innerText = `${title}`

        const d = document.createElement('p')
        d.setAttribute('id', 'cardDesc')
        d.innerText = `${desc}`

        const dueDate = document.createElement('p')
        dueDate.setAttribute('id', `cardDate`)
        dueDate.innerText = `${date}`

        const priority = document.createElement('p')
        priority.setAttribute('id', 'cardPrio')
        priority.innerText = `${prio} priority`
        
        addToPage(node, t, d, dueDate, priority)

        return node
    }

    const makeOptions = (values) => {
        let domItems = values.map(value => {
            let domValue = document.createElement('option')
            domValue.setAttribute('value', value)
            domValue.innerText = capitalized(value)
            return domValue
        })
        return domItems
    }

    const makeProjTabEle = (projectName) => {
        let sidebarEle = document.createElement('p')
        sidebarEle.setAttribute('id', `${projectName}`)
        sidebarEle.innerText = `${projectName}--------${pageData.getProjNotes(projectName).length}`
        sidebarEle.addEventListener('click', getProjectNotes)
        return sidebarEle
    }

    const updateProjTabEle = (projectName) => {
        let sidebarEle = document.querySelector(`#${projectName}`)
        sidebarEle.innerText = `${projectName}--------${pageData.getProjNotes(projectName).length}`
        return
    }

    const initSidebar = () => {
        for(let proj of pageData.getProjs()) {
            addToPage(document.querySelector('.sidebar'), makeProjTabEle(proj))
        }
        return
    }

    return {makeNote, makeOptions, makeProjTabEle, updateProjTabEle, initSidebar}
})();

function isFormValid ({title, desc, dueD}) {
    let [day, month, year] = dueD.split('/')
    month--;
    //23:59:59 to be able to define note for same day
    let fDate = new Date(year, month , day, 23, 59, 59)
    console.log(fDate)

    if(title === '') {
        let title = document.querySelector('#title')
        title.classList.add('failTitle')
        return false
    } else if (desc === '') {
        let desc = document.querySelector('#desc')
        desc.classList.add('failDesc')
        return false
    } else if (!isValid(fDate)) {
        let d = document.querySelector('#dueD')
        d.classList.remove('pastDate')
        d.classList.add('blankDate')
        return false
    } else if (isPast(fDate)) {
        let d = document.querySelector('#dueD')
        d.classList.remove('blankDate')
        d.classList.add('pastDate')
        return false
    }

    return true
}

function capitalized (value) {
    let str = value
    let str2 = str.charAt(0).toUpperCase() + str.slice(1);
    return str2
}

function clearPage (element) {
    while (element.firstChild) {
       element.removeChild(element.firstChild)
    }
}

function getProjectNotes (event) {
    const project = event.target.id
    currCardContainer = project
    showProjectNotes(project)
}

function showProjectNotes (data) {
    const projectData = pageData.getProjData(data)
    const container = document.querySelector('.cardContainer')
    const projCont = document.createElement('div')
    projCont.setAttribute('id', `${data}Container`)
    projCont.innerText = `${data} Project`
    projectData.toDos.forEach(obj => addToPage(projCont, makeDomObject.makeNote(obj)))
    clearPage(container)
    container.appendChild(projCont)

}

makeDomObject.initSidebar()