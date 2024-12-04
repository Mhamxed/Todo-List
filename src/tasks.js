export let all_tasks =[]

export class task {
    constructor (title, description, duedate, projectTitle) {
        this.title = title
        this.description = description
        this.duedate = duedate
        this.projectTitle = projectTitle
        this.done = false
    }

    //create the task bar with the form filled infos
    static createTaskObject(title, description, duedate, projectTitle){
        const task_object = new task(title, description, duedate, projectTitle)
        all_tasks.push(task_object)
        return task_object
    }

    static createTaskBar(task){
        const bar = document.createElement('div')
        const titleBox = document.createElement('div')
        const descriptionBox = document.createElement('div')
        const title = document.createElement('p')
        const description = document.createElement('p')
        const duedate = document.createElement('p')
        const remove_btn = document.createElement('button')
        const content = document.querySelector('.content')
        const checkbox = document.createElement('input')

        bar.classList.add('task-bar')

        titleBox.style.display = "flex"
        titleBox.style.gap = "10px"

        descriptionBox.style.display = "flex"
        descriptionBox.style.gap = "30px"

        titleBox.appendChild(checkbox)
        titleBox.appendChild(title)

        descriptionBox.appendChild(description)
        descriptionBox.appendChild(duedate)
        descriptionBox.appendChild(remove_btn)

        checkbox.type = "checkbox"
        checkbox.classList.add('checkbox')


        //toggle on/off if the task has been done
        if (task.done == true){
            checkbox.checked = true
            title.style.textDecoration = "line-through"
            description.style.textDecoration = "line-through"
        } else {
            checkbox.checked = false
            title.style.textDecoration = "none"
            description.style.textDecoration = "none"
        }
        title.style.fontWeight = "bold"
        title.textContent = `${task.title}`
        description.textContent = `${task.description}`
        description.style.maxWidth = '500px'
        duedate.textContent = `${task.duedate}`

        //manage tasks checkbox
        checkbox.addEventListener('change', () => {
            if (checkbox.checked){
                console.log("checked")
                task.done = true
                title.style.textDecoration = "line-through"
                description.style.textDecoration = "line-through"
            } else {
                task.done = false
                title.style.textDecoration = "none"
                description.style.textDecoration = "none"
            }
        })

        //create a listen to the remove button
        remove_btn.classList.add('button')
        remove_btn.innerHTML = '<i class="fa-solid fa-trash" style="color: #000000;"></i>'
        remove_btn.addEventListener('click', () => {
            content.removeChild(bar)
            const index = all_tasks.indexOf(task);
            all_tasks.splice(index, 1);

        })
        bar.appendChild(titleBox)
        bar.appendChild(descriptionBox)
        content.appendChild(bar)
    }

    static clearTaks(){
        const content = document.querySelector('.content')
        const tasks = document.querySelectorAll('.task-bar')
        tasks.forEach(task => content.removeChild(task))
    }
}

//add some tasks so when the user reloads they get displayed

const run = {
    title: "Run",
    description: "Run for 5km!!",
    duedate: "2024-12-03",
    projectTitle: "Health"
}

const breakfast = {
    title: "Breakfast",
    description: "Have a Smoked Salmon Bagel and banana smoothie",
    duedate: "2024-12-03",
    projectTitle: "Food"
}

const lunch = {
    title: "Lunch",
    description: "Have steamed rice, chicken, spinage and olive oil",
    duedate: "2024-12-03",
    projectTitle: "Food"
}

const dinner = {
    title: "Dinner",
    description: "Have leftovers, keep it light",
    duedate: "2024-12-03",
    projectTitle: "Food"
}

const gym = {
    title: "Gym",
    description: "Hit the gym, push day",
    duedate: "2024-12-03",
    projectTitle: "Gym"
}
const sun = {
    title: "Touch grass",
    description: "30 mins in the sun",
    duedate: "2024-12-03",
    projectTitle: "Health"
}

const study = {
    title: "Study software engineering",
    description: "6 hours of focus on the Odin Project Javascript path",
    duedate: "2024-12-03",
    projectTitle: "Study"
}

const GF = {
    title: "Spend time with GF",
    description: "Hang out with Girlfriend",
    duedate: "2024-12-03",
    projectTitle: "Relationship"
}

const mom = {
    title: "Phone call with fam",
    description: "30 min phone call with the fam",
    duedate: "2024-12-03",
    projectTitle: "Relationship"
}

all_tasks.push(run)
all_tasks.push(breakfast)
all_tasks.push(lunch)
all_tasks.push(dinner)
all_tasks.push(gym)
all_tasks.push(sun)
all_tasks.push(study)
all_tasks.push(GF)
all_tasks.push(mom)


