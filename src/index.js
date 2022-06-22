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
const cardContainer = document.querySelector('.cardContainer')
const addBtn = document.querySelector('#notesBtn')
const projBtn = document.querySelector('#projBtn')
addBtn.onclick = showNotesForm
const datepicker = new Datepicker(document.querySelector('#date'), {
    autohide: true,
    format: 'dd/mm/yyyy'
})
const nForm = document.querySelector('#nForm')
nForm.addEventListener('submit', submitNoteQuestions)
// projBtn.onclick = showProjForm

function showNotesForm(event) {
    console.log(pageData.getProjs())
    attachProjs(pageData.getProjs())
    notesForm.classList.toggle('showForm')
}

function attachProjs(projValues) {
    const projSelect = document.querySelector('#projSelect')
    let projDoms = makeDomObject.makeOptions(projValues)
    projDoms.forEach(dom => projSelect.appendChild(dom))
}


// function showNotesForm(event) {
    
//     // buildForm.appendFormQuestions(questionItems.formItems, 'noteForm')
//     mainPage.appendChild(buildForm.container)
    

    
//     event.preventDefault();
//     return
// }

// function showProjForm(event) {
//     buildForm.appendFormQuestions(questionItems.projItems, 'projForm')
//     mainPage.appendChild(buildForm.container)
//     event.preventDefault();
//     return
// }

// const buildForm = (() => {
//     const container = document.createElement('div')
//     container.setAttribute('id', 'formContainer')
//     let formArea;

//     // const appendProjectForm = () => {
//     //     formArea = makeDomObject.makeForm();
//     // }

//     const appendFormQuestions = (questions, type) => {
//         formArea = makeDomObject.makeForm(type);
//         let node;

//         for(let question of questions) {
//             if(question.tag === 'select') {
//                 node = makeDomObject.makeSelect(question)
//             }
//             else if(question.tag === 'input') {
//                 node = makeDomObject.makeInput(question)
//             }
//             let label = makeDomObject.makeLabel(question)
//             addToPage(formArea, label, node)
//         }

//         formArea.addEventListener('submit', submitFormQuestions)
//         addToPage(formArea, makeDomObject.makeBtn('submit', 'Submit'), makeDomObject.makeBtn('reset', 'Clear'))
//         return addToPage(container, formArea)
//     }

//     return {container, appendFormQuestions}
// })();

function submitNoteQuestions(event) {
    
    const formType = event.target.id
    const formData = new FormData(event.target)
    let data = Object.fromEntries(formData)
// if(formType === 'nForm' ){
    // if (!isFormValid(data)) {
    //     return
    // }
    
    pageData.addNote(data)
    // console.log(formType)
    cardContainer.appendChild(makeDomObject.makeNote(data))
    // buildForm.container.removeChild(document.querySelector('form'))
    // mainPage.removeChild(buildForm.container)
// }
    // else if(formType === 'projForm') {
    //     pageData.addProj(data)
    //     //need to attach project name to page
    //     console.log(pageData.getProjs())
    //     buildForm.container.removeChild(document.querySelector('form'))
    //     mainPage.removeChild(buildForm.container)
    // }
    notesForm.classList.toggle('showForm')
    event.preventDefault();
    return
}

function addToPage (container, ...childNodes) {
    return childNodes.forEach(node => container.appendChild(node))
}

const pageData = (() => {
    let notesData = [];
    let projectsData = [];
    let id = 0;

    const addNote = (item) => {
        item.dataId = id
        notesData.push(item)
        id++;
    }

    const addProj = (proj) => {
        projectsData.push(proj)
    }

    const getNotes = () => notesData
    const getProjs = () => projectsData

    return {addNote, getNotes, addProj, getProjs}
})();

// const questionItems = (() => {
//     let formItems = []
//     let projItems = []

//     const addFormItem = (...items) => {
//         items.forEach(item => formItems.push(item))
//     }

//     const addProjItem = (...items) => {
//         items.forEach(item => projItems.push(item))
//     }
//     // const getNames = () => formItems.map(item => item.name)
//     // const getClasses = () => formItems.map(item => item.id)
//     // const getTypes = () => formItems.map(item => item.type)
//     // const getTags = () => formItems.map(item => item.tag)
//     // const getOptions = () => formItems.map(item => item.options)
//     return {formItems, projItems, addFormItem, addProjItem}
// })();

const makeDomObject = (() => {
    let node;

    // const makeSelect = ({tag, id, options}) => {
    //     node = document.createElement(`${tag}`)
    //     node.setAttribute('id',`${id}`)
    //     node.setAttribute('name', `${id}`)
    //     node.setAttribute('autocomplete', 'off')

    //     for(let option of options) {
    //         let opNode = document.createElement('option')
    //         opNode.setAttribute('value', `${option}`)
    //         opNode.innerText = `${option}`
    //         addToPage(node, opNode)
    //     }

    //     return node
    // }

    // const makeInput = ({tag, type, id}) => {
    //     node = document.createElement(`${tag}`)
    //     node.setAttribute('id',`${id}`)
    //     node.setAttribute('name', `${id}`)
    //     node.setAttribute('type', `${type}`)
    //     node.setAttribute('autocomplete', 'off')

    //     return node
    // }

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



    // const makeForm = (type) => {
    //     let form = document.createElement('form')
    //     form.setAttribute('onsubmit', 'return false') //for debuging porpuses
    //     form.setAttribute('action' , '')
    //     form.setAttribute('id', `${type}`)
    //     return form
    // }

    // const makeLabel = ({name, id}) => {
    //     let label = document.createElement('label')
    //     label.setAttribute('for', `${id}`)
    //     label.innerText = `${name}`
    //     label.classList.add(`${id}Label`)
    //     return label
    // }


    // const makeBtn = (type, name) => {
    //     node = document.createElement('button')
    //     node.setAttribute('type', type)
    //     node.setAttribute('id', type)
    //     node.innerText = name
    //     return node
    // }

    const makeOptions = (values) => {
        let domItems = values.map(value => {
            let domValue = document.createElement('option')
            domValue.setAttribute('value', value)
            domValue.innerText = capitalized(value)
            return domValue
        })
        return domItems
    }

    return {makeNote, makeOptions}
})();

// const createQuestion = (() => {
//     let question;

//     const text = (name, id) => {
//         question = {};
//         question.tag = 'input'
//         question.type = ''
//         question.name = name
//         question.id = id
//         return question
//         // return questionItems.addFormItem(question)
//     }

//     const select = (name, id, options) => {
//         question = {};
//         question.tag = 'select'
//         question.name = name
//         question.id = id
//         question.options = options
//         return question
//         // return questionItems.addFormItem(question)
//     }

//     return {text, select}
// })();

function isFormValid({title, desc, dueD}) {
    let [day, month, year] = dueD.split('/')
    month--;
    //23:59:59 to be able to define note for same day
    let fDate = new Date(year, month , day, 23, 59, 59)
    console.log(fDate)

    if(title === '') {
        let title = document.querySelector('#title')
        title.classList.add('failTitle')
        return false
    }
    else if(desc === '') {
        let desc = document.querySelector('#desc')
        desc.classList.add('failDesc')
        return false
    }
    else if(!isValid(fDate)) {
        let d = document.querySelector('#dueD')
        d.classList.remove('pastDate')
        d.classList.add('blankDate')
        return false
    }
    else if(isPast(fDate)) {
        let d = document.querySelector('#dueD')
        d.classList.remove('blankDate')
        d.classList.add('pastDate')
        return false
    }

    return true
}

function capitalized(value) {
    let str = value
    let str2 = str.charAt(0).toUpperCase() + srt.slice(1);
    return str2
}

// questionItems.addFormItem(createQuestion.text('Title', 'title'))
// questionItems.addFormItem(createQuestion.text('Description', 'desc'))
// questionItems.addFormItem(createQuestion.text('Due Date', 'dueD'))
// questionItems.addFormItem(createQuestion.select('Priority', 'priority', ['Low', 'Medium', 'High']))
// questionItems.addProjItem(createQuestion.text('Name', 'name'))
// questionItems.addFormItem(createQuestion.select('Project', 'project', pageData.getProjs()))//move addFormItem to appendForm
// console.log(questionItems.formItems)