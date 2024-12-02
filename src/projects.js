export class project {
    constructor (title, description, duedate) {
        this.title = title
        this.description = description
        this.duedate = duedate
        this.tasks = []
    }

    static createProjectObject(title, description, duedate){
        const project_object = new project(title, description, duedate)
        projects.push(project_object)
        return project_object
    }
    
    static createProject(project){
        const projectTab = document.createElement('div')
        const title = document.createElement('p')
        const icon = document.createElement('p')
        const projects = document.querySelector('.options')
        
        projectTab.classList.add('card')
        icon.innerHTML = '<i class="fa-solid fa-file" style="color: #000000;"></i>'
        title.textContent = project.title
        projectTab.appendChild(icon)
        projectTab.appendChild(title)
        projects.appendChild(projectTab)
    }
}

export let projects = [];