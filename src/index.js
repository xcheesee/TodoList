// SOLID-
// S - SINGUE RESPONSIBILITY
// O - OPEN/CLOSED
// L - LISKOV SUBSTITUTION PRINCIPLE
// I - INTERFACE SEGREGATION
// D - DEPENDENCY INVERSION
// DRY - DONT REPEAT YOURSELF

import './style.css';
import isValid from 'date-fns/isValid';
import isPast from 'date-fns/isPast';
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

function isPastDate (date) {
    let [day, month, year] = date.split('/');
    month--;
    //23:59:59 to be able to define note for same day
    let fDate = new Date(year, month , day, 23, 59, 59);

    if (isPast(fDate)) {
        return true;
    }
    return false;
}

function isValidDate (date) {
    let [day, month, year] = date.split('/');
    month--;
    //23:59:59 to be able to define note for same day
    let fDate = new Date(year, month , day, 23, 59, 59);

    if (isValid(fDate)) {
        return true;
    }
    return false;
}

// eslint-disable-next-line no-unused-vars
const handleFormErrors = (() => {
    const nTitleField = document.querySelector('#title');
    const nDescField = document.querySelector('#desc');
    const nDateField = document.querySelector('#date');
    const pNameField = document.querySelector('#name');

    nTitleField.addEventListener('blur', () => {
        if (!nTitleField.validity.valid) {
            nTitleField.reportValidity();
        } else {
            nTitleField.setCustomValidity('')
            nTitleField.reportValidity();
        }
    })

    nDescField.addEventListener('blur', () => {
        if (!nDescField.validity.valid) {
            nDescField.reportValidity();
        } else {
            nDescField.setCustomValidity('')
            nDescField.reportValidity();
        }
    })

    nDateField.addEventListener('blur', () => {
        if (isPastDate(nDateField.value)) {
            nDateField.setCustomValidity('Must not be past date!')
            nDateField.reportValidity();
        } else if (!isValidDate(nDateField.value) || nDateField.value === '') {
            nDateField.setCustomValidity('Please fill out this field.')
            nDateField.reportValidity();
        } else {
            nDateField.setCustomValidity('')
            nDateField.reportValidity();
        }
    })

    pNameField.addEventListener('blur', () => {
        if(!pNameField.validity.valid) {
            pNameField.reportValidity();
        }
    })
})();

// function checkForm (event) {
//     const currForm = event.target.id
//     if (currForm === 'nForm') {
//         const titleField = document.querySelector('#title')
//         const descField = document.querySelector('#desc')
//         const dateField = document.querySelector('#date')
//         showError.clearErrors();

//         if(titleField.validity.valid && descField.validity.valid && !isPastDate(dateField.value) && isValidDate(dateField.value)) {
//             showError.clearErrors();
//             return true
//         }

//         if (!titleField.validity.valid) {
//             showError.titleError(titleField);
//         }
//         if (!descField.validity.valid) {
//             showError.descError(descField);
//         }
//         if (isPastDate(dateField.value)) {
//             showError.pastDate();
//         }
//         if (!isValidDate(dateField.value)) {
//             showError.noDate();
//         }
//         return false
//     }
// }

// const showError = (() => {
//     const titleErr = document.querySelector('.titleError')
//     const descErr = document.querySelector('.descError')
//     const dateErr = document.querySelector('.dateError')
//     const emptyErr = '*This field must be filled'
//     const titleError = (element) => {
//         if(element.validity.valueMissing) {
//             titleErr.innerText = element.validationMessage
//             return
//         }
//     }
//     const descError = (element) => {
//         if(element.validity.valueMissing) {
//             return descErr.innerText = emptyErr
//         }
//     }
//     const pastDate = () =>  dateErr.innerText = '*Must not be past';
//     const noDate = () => dateErr.innerText = emptyErr;

//     return {titleError, descError, pastDate, noDate}
// })();

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
