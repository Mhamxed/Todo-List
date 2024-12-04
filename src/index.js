import{ task, all_tasks }  from './tasks'
import { project, projects } from './projects'


//tasks side
const add_task_button = document.querySelector("#add-task")
const add_task_form = document.getElementById("add-task-form")
const nav = document.querySelector('.nav')
const main = document.querySelector('.main')
const title = document.querySelector('#title')
const description = document.querySelector('#description')
const duedate = document.querySelector('#dueDate')
const submitTask = document.querySelector('#submit-task')
const titleError = document.querySelector('.title-error')
const inbox = document.querySelector('#all-tasks')
const projectDisplay = document.querySelector('#project-display')

allTasksRender(all_tasks)
renderProjects(projects)


add_task_button.addEventListener('click', () => {
    openTaskPopup()
})

//close popup if clicked elsewhere
document.addEventListener('click', (e) => {
    if (!add_task_form.contains(e.target) && add_task_button !== e.target){
        CloseTaskPopup()
        resetTaskPopUp()
    }
})

submitTask.addEventListener('click', (e) => {
    e.preventDefault();
    if (title.value === ""){
        titleError.textContent = "*Title required"
    } else if (projectDisplay === "Today" || projectDisplay === "This Week" || projectDisplay === "Inbox"){
        const taskObject  = task.createTaskObject(title.value, description.value, duedate.value)
        task.createTaskBar(taskObject)
        CloseTaskPopup()
        resetTaskPopUp()
    } else {
        const taskObject  = task.createTaskObject(title.value, description.value, duedate.value)
        task.createTaskBar(taskObject)
        CloseTaskPopup()
        resetTaskPopUp()
    }
})

function openTaskPopup(){
    add_task_form.classList.add('scale-popup')
    nav.classList.add('blur-task-form')
    main.classList.add('blur-task-form')
}

function CloseTaskPopup(){
    add_task_form.classList.remove('scale-popup')
    nav.classList.remove('blur-task-form')
    main.classList.remove('blur-task-form')
}

function resetTaskPopUp(){
    title.value = ""
    description.value = ""
    duedate.value = ""
    titleError.textContent = ""
}

//project side
const add_project_button  = document.querySelector("#add-project-button")
const add_project_form = document.querySelector(".add-project")
const submit_project_button = document.querySelector('#submit-projet')

const project_title = document.querySelector("#project-title")
const project_title_error = document.querySelector(".project-title-error")

add_project_button.addEventListener('click', () => {
    openProjectPopup()
})

document.addEventListener('click', (e) => {
    if (!add_project_form.contains(e.target) && add_project_button !== e.target){
        closeProjectPopup()
        resetProjectPopUp()
    }
})

submit_project_button.addEventListener('click', (e) => {
    e.preventDefault();
    if (project_title.value === ""){
        project_title_error.textContent = "*Title required"
    } else {
        const projectObject  = project.createProjectObject(project_title.value)
        project.createProject(projectObject)
        closeProjectPopup()
        resetProjectPopUp()
    }
})

function openProjectPopup(){
    add_project_form.classList.add('scale-project-popup')
    nav.classList.add('blur-project-form')
    main.classList.add('blur-project-form')
}

function closeProjectPopup(){
    add_project_form.classList.remove('scale-project-popup')
    nav.classList.remove('blur-project-form')
    main.classList.remove('blur-project-form')
}

function resetProjectPopUp(){
    project_title.value = ""
    project_title_error.textContent = ""

}

function allTasksRender(tasks){
    for (let i = 0; i < tasks.length; i++){
        task.createTaskBar(tasks[i])
    }
}

function renderProjects(projects){
    for (let i = 0; i < projects.length; i++){
        project.createProject(projects[i])
    }
}

//display all tasks
inbox.addEventListener('click', () => {
    task.clearTaks()
    projectDisplay.textContent = "Inbox"
    allTasksRender(all_tasks)
})

//display today's tasks
const todayTab = document.querySelector('#today-tasks')
const today = new Date()
const todayDate = `${today.getFullYear()}-${today.getMonth() + 1}-0${today.getDate()}`

function todayTasks(){
    let ans = []
    for (let i = 0; i < all_tasks.length; i++){
        if (all_tasks[i].duedate === todayDate){
            ans.push(all_tasks[i])
        }
    }
    return ans
}

todayTab.addEventListener('click', () => {
    task.clearTaks()
    projectDisplay.textContent = "Today"
    allTasksRender(todayTasks())
})

//display this week tasks
function getCurrentWeek(){
    let curr = new Date //get current week dates
    let week = []

    for (let i = 1; i <= 7; i++) {
        let first = curr.getDate() - curr.getDay() + i 
        let day = new Date(curr.setDate(first)).toISOString().slice(0, 10)
        week.push(day)
    }
    return week
}

function getCurrWeekTasks(){
    let ans = []
    const week = getCurrentWeek()
    for (let i = 0; i < all_tasks.length; i++){
        if (week.includes(all_tasks[i].duedate)){
            ans.push(all_tasks[i])
        }
    }
    return ans
}

const CurrentWeek = document.querySelector('#this-week')
CurrentWeek.addEventListener('click', () => {
    task.clearTaks()
    projectDisplay.textContent = "This Week"
    allTasksRender(getCurrWeekTasks())
})

export default allTasksRender;