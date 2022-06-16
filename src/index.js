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

function showForm (event) {
    buildForm.appendFormQuestions(questionItems.getNames() , questionItems.getClasses(), questionItems.getTypes(), questionItems.getTags(), questionItems.getOptions())
    document.body.appendChild(buildForm.container)
    event.preventDefault();
    return
}

const buildForm = (() => {
    const container = document.createElement('div')
    container.setAttribute('id', 'formContainer')
    let formArea;

    const appendFormQuestions = (names, ids, types, tags, options) => {
        formArea = document.createElement('form')
        formArea.setAttribute('onsubmit', 'return false') //for debuging porpuses
        formArea.setAttribute('action' , '')
        formArea.setAttribute('id', 'form')

        for(let i = 0; i < ids.length; i++) {
            let node;
            if(tags[i] === 'select') {
                node = makeDomObject.makeSelect(tags[i], types[i], names[i], ids[i], options[i])
            }
            else if(tags[i] === 'input') {
                node = makeDomObject.makeInput(tags[i], types[i], names[i], ids[i])
            }
            let label = document.createElement('label')
            label.setAttribute('for', `${ids[i]}`)
            label.innerText = `${names[i]}`
            addToPage(formArea, label, node)
        }

        let submitBtn = createBtn('submit', 'Submit')
        formArea.addEventListener('submit', submitFormQuestions)

        addToPage(formArea, submitBtn, createBtn('reset', 'Clear'))
        addToPage(container, formArea)
    }

    return {container, appendFormQuestions}
})();

function submitFormQuestions(event) {
    const formData = new FormData(event.target)
    let data = Object.fromEntries(formData)

    if (data.title == '' && data.desc == '') {
        return
    }
    
    pageData.addNote(data)
    console.log(Object.entries(data))
    let note = makeDomObject.makeNote(Object.entries(data), data.dataId)
    document.body.appendChild(note)
    event.preventDefault();
    buildForm.container.removeChild(document.querySelector('form'))
    document.body.removeChild(buildForm.container)
    return
}

function addToPage (container, ...childNodes) {
    // if(!item) {
    //     warnEmptyList(container)
    // }
    for(let node of childNodes) {
        container.appendChild(node)
    }
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
        id++;
    }

    const getNotes = () => notesData

    return {addNote, getNotes}
})();

const createBtn = (type, name) => {
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
    const getNames = () => formItems.map(item => item.name)
    const getClasses = () => formItems.map(item => item.id)
    const getTypes = () => formItems.map(item => item.type)
    const getTags = () => formItems.map(item => item.tag)
    const getOptions = () => formItems.map(item => item.options)
    return {formItems, addFormItem, getNames, getClasses, getTypes, getTags, getOptions}
})();

const makeDomObject = (() => {
    let node;

    const makeSelect = (tag, type, name, id, options) => {
        node = document.createElement(`${tag}`)
        node.setAttribute('id',`${id}`)
        node.setAttribute('name', `${id}`)
        node.setAttribute('type', `${type}`)

        for(let option of options) {
            let opNode = document.createElement('option')
            opNode.setAttribute('value', `${option}`)
            opNode.innerText = `${option}`
            addToPage(node, opNode)
        }

        return node
    }

    const makeInput = (tag, type, name, id) => {
        node = document.createElement(`${tag}`)
        node.setAttribute('id',`${id}`)
        node.setAttribute('name', `${id}`)
        node.setAttribute('type', `${type}`)

        return node
    }

    const makeNote = (formArray, formId) => {
        node = document.createElement('div')
        let nodeChildren = []

        for(let array of formArray) {
            if(array[0] === 'dataId') {
                continue
            }
            let note = document.createElement('p')
            note.classList.add(`${array[0]}`)
            note.innerText = `${array[1]}`
            nodeChildren.push(note)
        }

        addToPage(node, ...nodeChildren)
        node.setAttribute('id', `card${formId}`)

        return node
    }
    return {makeSelect, makeInput, makeNote, node}
})();

const createQuestion = (() => {
    let question;

    const text = (name, id) => {
        question = {};
        question.tag = 'input'
        question.type = 'text'
        question.name = name
        question.id = id
        questionItems.addFormItem(question)
        return
    }

    const select = (name, id, options) => {
        question = {};
        question.tag = 'select'
        question.type = ''
        question.name = name
        question.id = id
        question.options = options
        questionItems.addFormItem(question)
        return
    }

    return {text, select}
})();

createQuestion.text('Title', 'title')
createQuestion.text('Description', 'desc')
createQuestion.text('Due Date', 'dueD')
createQuestion.text('Test', 'test')
createQuestion.select('Priority', 'priority', ['low', 'medium', 'high'])

console.log(questionItems.formItems)