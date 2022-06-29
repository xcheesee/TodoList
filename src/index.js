// SOLID-
// S - SINGUE RESPONSIBILITY
// O - OPEN/CLOSED
// L - LISKOV SUBSTITUTION PRINCIPLE
// I - INTERFACE SEGREGATION
// D - DEPENDENCY INVERSION
// DRY - DONT REPEAT YOURSELF

import './style.css';
// import isValid from 'date-fns/isValid';
// import isPast from 'date-fns/isPast';
import Datepicker from 'vanillajs-datepicker/Datepicker';
// import { eachMonthOfInterval } from 'date-fns';
// import { ka } from 'date-fns/locale';

const notesForm = document.querySelector('.nFormWrapper');
const projsForm = document.querySelector('.pFormWrapper');
const addBtn = document.querySelector('#notesBtn');
const projBtn = document.querySelector('#projBtn');
const nForm = document.querySelector('#nForm');
const pForm = document.querySelector('#pForm');
let currCardContainer = 'default';

// eslint-disable-next-line no-unused-vars
const datepicker = new Datepicker(document.querySelector('#date'), {
    autohide: true,
    format: 'dd/mm/yyyy'
});

function showNotesForm () {
    attachProjs(pageData.getProjs());
    notesForm.classList.toggle('showForm');
    return;
}

function showProjForm () {
    projsForm.classList.toggle('showForm');
    return;
}

function attachProjs (projObjValues) {
    const projSelector = document.querySelector('#projSelect');
    clearDom(projSelector);
    let projDomValues = makeDomObject.makeOptions(projObjValues);
    projDomValues.forEach(dom => projSelector.appendChild(dom));
    return;
}

function addNote (event) {
    event.preventDefault();
    let data = Object.fromEntries(new FormData(event.target));

    if(!checkForm(event)) return

    pageData.addNote(data)
      .then(makeDomObject.updateProjTabEle);

    if (currCardContainer === data.proj) showProjectNotes(pageData.getProject(data.proj));

    notesForm.classList.toggle('showForm');
    event.target.reset();
    return;
}

function addProject (event) {
    event.preventDefault();
    console.log(event.target.id)
    if (pageData.duplicateProj(event.target.name.value)) {
        projsForm.classList.toggle('showForm');
        event.target.reset();
        return;
    }
    // checkForm(event)

    const projSidebar = document.querySelector('.sidebar');

    let data = Object.fromEntries(new FormData(event.target));

    pageData.addProj(data)
      .then(addToPage(projSidebar, makeDomObject.makeProjTabEle(data.name)))

    projsForm.classList.toggle('showForm');
    event.target.reset();
    return;
}

function addToPage (container, ...childNodes) {
    return childNodes.forEach(node => container.appendChild(node));
}

const pageData = (() => {
    let projectsData = {
        default: {
            name: 'default',
            toDos: [],
            id: 0
        }
    };
    let noteId = 0;
    let projId = 1;

    const addNote = (item) => {
        return new Promise((resolve, reject) => {
            if(projectsData[item.proj]) {
                item.dataId = noteId;
                projectsData[item.proj].toDos.push(item);
                noteId++;
                resolve(item.proj)
            }
            else reject('Error: project not found')
        })

    };

    const addProj = (proj) => {
        return new Promise((resolve, reject) => {
            if(projectsData[proj.name]) reject('Project already on page')

            projectsData[proj.name] = {
                name: proj.name,
                toDos: [],
                id: projId
            };
            projId++;
            resolve(proj.name)
        })


    };

    const getProjs = () => {
        let projNames = [];
        for(let project in projectsData) {
            projNames.push(projectsData[project].name);
        }
        return projNames;
    };

    const getProjNotes = (proj) => projectsData[proj].toDos;

    const getProject = (proj) => projectsData[proj];

    const duplicateProj = (proj) => {
        if (projectsData[proj]) {
            return true;
            //add error message
        }
        return false;
    };

    return {addNote, addProj, getProjs, getProjNotes, duplicateProj, getProject};
})();

const makeDomObject = (() => {
    let node;

    const makeNote = ({title, desc, date, prio, dataId}) => {
        node = document.createElement('div');
        node.setAttribute('id', `card${dataId}`);
        node.classList.add('card');

        const t = document.createElement('h2');
        t.setAttribute('id', 'cardTitle');
        t.innerText = `${title}`;

        const d = document.createElement('p');
        d.setAttribute('id', 'cardDesc');
        d.innerText = `${desc}`;

        const dueDate = document.createElement('p');
        dueDate.setAttribute('id', `cardDate`);
        dueDate.innerText = `${date}`;

        const priority = document.createElement('p');
        priority.setAttribute('id', 'cardPrio');
        priority.innerText = `${prio} priority`;
        
        addToPage(node, t, d, dueDate, priority);

        return node;
    };

    const makeOptions = (values) => {
        let domItems = values.map(value => {
            let domValue = document.createElement('option');
            domValue.setAttribute('value', value);
            domValue.innerText = capitalized(value);
            return domValue;
        });
        return domItems;
    };

    const makeProjTabEle = (projectName) => {
        let sidebarEle = document.createElement('p');
        sidebarEle.setAttribute('id', `${projectName}`);
        sidebarEle.innerText = `${projectName}--------${pageData.getProjNotes(projectName).length}`;
        sidebarEle.addEventListener('click', getProjectNotes);
        return sidebarEle;
    };

    const updateProjTabEle = (projectName) => {
        let sidebarEle = document.querySelector(`#${projectName}`);
        sidebarEle.innerText = `${projectName}--------${pageData.getProjNotes(projectName).length}`;
        return;
    };

    const initSidebar = () => {
        for(let proj of pageData.getProjs()) {
            addToPage(document.querySelector('.sidebar'), makeProjTabEle(proj));
        }
        return;
    };

    return {makeNote, makeOptions, makeProjTabEle, updateProjTabEle, initSidebar};
})();

// function isFormValid ({title, desc, dueD}) {
//     let [day, month, year] = dueD.split('/');
//     month--;
//     //23:59:59 to be able to define note for same day
//     let fDate = new Date(year, month , day, 23, 59, 59);

//     if(title === '') {
//         let title = document.querySelector('#title');
//         title.classList.add('failTitle');
//         return false;
//     } else if (desc === '') {
//         let desc = document.querySelector('#desc');
//         desc.classList.add('failDesc');
//         return false;
//     } else if (!isValid(fDate)) {
//         let d = document.querySelector('#dueD');
//         d.classList.remove('pastDate');
//         d.classList.add('blankDate');
//         return false;
//     } else if (isPast(fDate)) {
//         let d = document.querySelector('#dueD');
//         d.classList.remove('blankDate');
//         d.classList.add('pastDate');
//         return false;
//     }

//     return true;
// }

function checkForm (event) {
    const currForm = event.target.id
    if (currForm === 'nForm') {
        const titleField = document.querySelector('#title')
        const descField = document.querySelector('#desc')
        // const dateField = document.querySelector('#date')

        if (!titleField.validity.valid) {
            showError.clearErrors()
            showError.titleError(titleField)
            return false
        } else if (!descField.validity.valid) {
            showError.clearErrors()
            showError.descError(descField)
            return false
        }
        showError.clearErrors()
        return true
        // else if (!descField.validity.valid) showError.descError(descField)
        // else if (invalidDate(dateField)) showError.dateError(dateField)
    }
}

const showError = (() => {
    const titleErr = document.querySelector('.titleError')
    const descErr = document.querySelector('.descError')
    // const dateErr = document.querySelector('.dateError')
    const emptyErr = '*This field must be filled'
    const titleError = (element) => {
        if(element.validity.valueMissing) {
            titleErr.innerText = emptyErr
            return
        }
    }
    const descError = (element) => {
        if(element.validity.valueMissing) {
            descErr.innerText = emptyErr
            return
        }
    }
    const clearErrors = () => {
        titleErr.innerText = '';
    }
    return {titleError, descError, clearErrors}
})();

function capitalized (value) {
    let str = value;
    let str2 = str.charAt(0).toUpperCase() + str.slice(1);
    return str2;
}

function clearDom (element) {
    while (element.firstChild) {
       element.removeChild(element.firstChild);
    }
}

function getProjectNotes (event) {
    const project = event.target.id;
    currCardContainer = project;
    showProjectNotes(pageData.getProject(project));
}

function showProjectNotes ({name, toDos}) {

    const container = document.querySelector('.cardContainer');
    const projCont = document.createElement('div');
    projCont.setAttribute('id', `${name}Container`);
    projCont.innerText = `${name} Project`;
    toDos.forEach(obj => addToPage(projCont, makeDomObject.makeNote(obj)));
    clearDom(container);
    container.appendChild(projCont);

}

nForm.addEventListener('submit', addNote);
pForm.addEventListener('submit', addProject)
projBtn.onclick = showProjForm;
addBtn.onclick = showNotesForm;

makeDomObject.initSidebar();
showProjectNotes(pageData.getProject('default'));
