import{ all_tasks, task }  from './tasks'
import allTasksRender from './index'

export let projects = [{title: "Gym"}, {title: "Study"}, {title: "Food"}, {title: "Health"}, {title: "Relationship"}]

export class project {
    constructor (title) {
        this.title = title
    }

    static createProjectObject(title){
        const project_object = new project(title)
        projects.push(project_object)
        return project_object
    }
    
    static createProject(project){
        const projectTab = document.createElement('div')
        const titleBox = document.createElement('div')
        const title = document.createElement('p')
        const icon = document.createElement('p')
        const projects = document.querySelector('.options')
        const projectDisplay = document.querySelector('#project-display')
        const removeProject = document.createElement('button')
        const inbox = document.querySelector('#all-tasks')
        
        //create the project div and add all the element to it
        projectTab.classList.add('card')
        titleBox.style.display = "flex"
        titleBox.style.gap = "10px"
        titleBox.style.flexGrow = "1"
        icon.innerHTML = '<i class="fa-solid fa-file" style="color: #000000;"></i>'
        title.textContent = project.title
        removeProject.classList.add('button')
        removeProject.innerHTML = '<i class="fa-regular fa-x" style="color: #000000;"></i>'

        removeProject.classList.add('remove-project-btn')

        titleBox.appendChild(icon)
        titleBox.appendChild(title)
        projectTab.appendChild(titleBox)
        projectTab.appendChild(removeProject)
        projects.appendChild(projectTab)

        //remove the project tab when the user clicks the X button
        removeProject.addEventListener('click', () => {
            removeProjectTasks(project)
            removeProject.closest(".card").remove()
            inbox.click()
        })

        //display tasks when the user clicks on a project tab
        titleBox.addEventListener('click', () => {
            projectDisplay.textContent = project.title
            task.clearTaks()
            allTasksRender(getProjectTasks(project))
        })
    }
}

//filter the projects tasks based on naming
function getProjectTasks(project){
    let ans = []
    for (let i=0; i < all_tasks.length; i++){
        if (all_tasks[i].projectTitle === project.title){
            ans.push(all_tasks[i])
        }
    }
    return ans
}

//remove a project tasks based on naming
function removeProjectTasks(project){
    let projectTasks = getProjectTasks(project)
    for (let i =0; i < projectTasks.length; i++){
        const index = all_tasks.indexOf(projectTasks[i]);
        all_tasks.splice(index, 1);
    }
}