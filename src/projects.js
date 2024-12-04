import{ all_tasks, task }  from './tasks'
import allTasksRender from './index'

export let projects = [{
    title: "Gym"
}]

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
        const title = document.createElement('p')
        const icon = document.createElement('p')
        const projects = document.querySelector('.options')
        const projectDisplay = document.querySelector('#project-display')
        const removeProject = document.createElement('button')
        
        projectTab.classList.add('card')
        projectTab.style.position = 'relative'
        icon.innerHTML = '<i class="fa-solid fa-file" style="color: #000000;"></i>'
        title.textContent = project.title
        removeProject.classList.add('button')
        removeProject.innerHTML = '<i class="fa-regular fa-x" style="color: #000000;"></i>'
        removeProject.style.position = 'absolute'
        removeProject.style.right = '15px'
        projectTab.appendChild(icon)
        projectTab.appendChild(title)
        projectTab.appendChild(removeProject)
        projects.appendChild(projectTab)

        removeProject.addEventListener('click', () => {
            removeProjectTasks(project)
            removeProject.closest("div").remove()
            projectDisplay.textContent = ""
        })

        projectTab.addEventListener('click', () => {
            if (projectTab){
                projectDisplay.textContent = project.title
                task.clearTaks()
                allTasksRender(getProjectTasks(project))
            }
        })
    }
}

function getProjectTasks(project){
    let ans = []
    for (let i=0; i<all_tasks.length; i++){
        if (all_tasks[i].projectTitle === project.title){
            ans.push(all_tasks[i])
        }
    }
    return ans
}

function removeProjectTasks(project){
    let projectTasks = getProjectTasks(project)
    for (let i =0; i < projectTasks.length; i++){
        const index = all_tasks.indexOf(projectTasks[i]);
        all_tasks.splice(index, 1);
    }
}