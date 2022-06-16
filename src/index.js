// SOLID-
// S - SINGUE RESPONSIBILITY
// O - OPEN/CLOSED
// L - LISKOV SUBSTITUTION PRINCIPLE
// I - INTERFACE SEGREGATION
// D - DEPENDENCY INVERSION
// DRY - DONT REPEAT YOURSELF


import './style.css';

const addBtn = document.querySelector('#addBtn')
addBtn.onclick = showForm

const buildForm = (() => {
    const container = document.createElement('div')
    container.setAttribute('id', 'formContainer')
    let formArea;

    
    const appendItems = (names, ids, nodes, types) => {
        formArea = document.createElement('form')
        // formArea.setAttribute('onsubmit', 'return false')
        formArea.setAttribute('action' , '')
        formArea.setAttribute('id', 'form')
        for(let i = 0; i < nodes.length; i++) {
            let node = document.createElement('input')
            node.setAttribute('id',`${ids[i]}`)
            node.setAttribute('name', `${ids[i]}`)
            node.setAttribute('type', `${types[i]}`)
            let label = document.createElement('label')
            label.setAttribute('for', `${ids[i]}`)
            label.innerText = `${names[i]}`
            formArea.appendChild(label)
            formArea.appendChild(node)
        }
        let submitBtn = createBtn('submit', 'Submit')
        formArea.appendChild(submitBtn)
        formArea.appendChild(createBtn('reset', 'Clear'))
        formArea.addEventListener('submit', submitItems)
        // submitBtn.addEventListener('click', () => document.body.removeChild(container))
        container.appendChild(formArea)
    }

    return {container, appendItems}
})();


function showForm (event) {
    buildForm.appendItems(questionItems.getNames() , questionItems.getClasses(), questionItems.getNodes(), questionItems.getTypes())
    document.body.appendChild(buildForm.container)
    event.preventDefault();
    return
}

function submitItems(event) {
    const formData = new FormData(event.target)
    let data = Object.fromEntries(formData)
    pageData.addNote(data)
    console.log(data)
    addToPage(document.body, data.title, data.desc, data.dueD, data.priority, data.dataId)
    event.preventDefault();
    document.body.removeChild(buildForm.container)
    return
}

function createNote (title, desc, date, priority, id) {
    let noteCard = document.createElement('div')
    let noteTitle = document.createElement('h2')
    noteTitle.innerText = `${title}`
    let noteDesc = document.createElement('p')
    noteDesc.innerText = `${desc}`
    let noteDate = document.createElement('p')
    noteDate.innerText = `${date}`
    let notePrio = document.createElement('p')
    notePrio.innerText = `${priority}`
    noteCard.appendChild(noteTitle)
    noteCard.appendChild(noteDesc)
    noteCard.appendChild(noteDate)
    noteCard.appendChild(notePrio)
    noteCard.setAttribute('id', `card${id}`)
    return noteCard
}

function addToPage (container, title, desc, date, priority, id) {
    // if(!item) {
    //     warnEmptyList(container)
    // }
    let note = createNote(title, desc, date, priority, id)
    container.appendChild(note)
    return
}

// function warnEmptyList(container) {
//     container.innerHTML = '<p id="warnEmpty">Nothing to Track!</p>'
//     return
// }

const pageData = (() => {
    let notesData = [];
    let id = 0;
    const addNote = (item) => {
        item.dataId = id
        notesData.push(item)
        console.log(notesData)
        id++;
    }
    const getNotes = () => notesData

    return {addNote, getNotes}
})();

function createBtn(type, name) {
    let btn = document.createElement('button')
    btn.setAttribute('type', type)
    btn.setAttribute('id', type)
    btn.innerText = name
    return btn
}

const questionItems = (() => {
    let formItems = []
    const addFormItem = (...items) => {
        items.forEach(item => formItems.push(item))
    }
    const getNodes = () => formItems.map(item => item.node)
    const getNames = () => formItems.map(item => item.name)
    const getClasses = () => formItems.map(item => item.id)
    const getTypes = () => formItems.map(item => item.type)
    return {formItems, addFormItem, getNodes, getNames, getClasses, getTypes}
})();


const title = {
    name: 'Title',
    id: 'title',
    type: 'text',
    node: document.createElement('input')
}
const desc = {
    name: 'Description',
    id: 'desc',
    type: 'text',
    node: document.createElement('input')
}
const dueDate = {
    name: 'Due date',
    id: 'dueD',
    type: 'text',
    node: document.createElement('input')
}
const priority = {
    name: 'Priority',
    id: 'priority',
    type: 'text',
    node: document.createElement('input')
}

questionItems.addFormItem(title, desc, dueDate, priority)
console.log(questionItems.formItems)