export class task {
    constructor (title, description, duedate) {
        this.title = title
        this.description = description
        this.duedate = duedate
        this.project = ""
    }

    //create the task bar with the form filled infos
    static createTaskObject(title, description, duedate){
        const task_object = new task(title, description, duedate)
        all_tasks.push(task_object)
        return task_object
    }

    static createTaskBar(task){
        const bar = document.createElement('div')
        const title = document.createElement('p')
        const description = document.createElement('p')
        const duedate = document.createElement('p')
        const remove_btn = document.createElement('button')
        const content = document.querySelector('.content')

        bar.classList.add('task-bar')
        title.style.fontWeight = "bold"
        title.textContent = `${task.title}`
        description.textContent = `${task.description}`
        description.style.maxWidth = '500px'
        duedate.textContent = `${task.duedate}`

        remove_btn.classList.add('button')
        remove_btn.innerHTML = '<i class="fa-solid fa-trash" style="color: #000000;"></i>'
        remove_btn.addEventListener('click', () => {
            remove_btn.closest("div").remove()
        })

        bar.appendChild(title)
        bar.appendChild(description)
        bar.appendChild(duedate)
        bar.appendChild(remove_btn)

        content.appendChild(bar)
    }

    static clearTaks(){
        const content = document.querySelector('.content')
        const tasks = document.querySelectorAll('.task-bar')
        tasks.forEach(task => content.removeChild(task))
    }
}

export let all_tasks = []
