

const taskElement = document.getElementById('task')
const taskButton = document.getElementById('task-button')
const taskListElement = document.getElementById('task-list')

let taskText = ""
let taskListArray = []
let idCount = 0

taskElement.addEventListener('input', ev => {
    taskText = taskElement.value
})

taskButton.addEventListener('click', ev => {
    ev.preventDefault()
    newTask(taskText)
    taskElement.value = ""
    taskParce(taskListArray)
})

const newTask = (text) => {
    idCount++
    taskListArray.push({
        desc: text,
        _id: idCount
    })
}

const removeTask = (index) => {
    console.log(index)
    idCount--
    taskListArray.splice(index, 1)
    taskParce(taskListArray)
}


const taskParce = (array) => {
    taskListElement.innerHTML = ''
    if (array.length < 1) return 
    array.map(item => {
        taskListElement.innerHTML += `
        <div id="${item._id}" class="task-group">
            <h5>${item.desc}</h5>
        </div>
        `
        let task = document.getElementById(`${item._id}`)
        task.addEventListener('click', ev => {
            removeTask(item._id - 1)
            console.log('clicked!')
        })
    })
}