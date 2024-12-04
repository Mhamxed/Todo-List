/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasks */ \"./src/tasks.js\");\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects */ \"./src/projects.js\");\n\n\n\n\n//tasks side\nconst add_task_button = document.querySelector(\"#add-task\")\nconst add_task_form = document.getElementById(\"add-task-form\")\nconst nav = document.querySelector('.nav')\nconst main = document.querySelector('.main')\nconst title = document.querySelector('#title')\nconst description = document.querySelector('#description')\nconst duedate = document.querySelector('#dueDate')\nconst submitTask = document.querySelector('#submit-task')\nconst titleError = document.querySelector('.title-error')\nconst inbox = document.querySelector('#all-tasks')\nconst projectDisplay = document.querySelector('#project-display')\n\nallTasksRender(_tasks__WEBPACK_IMPORTED_MODULE_0__.all_tasks)\nrenderProjects(_projects__WEBPACK_IMPORTED_MODULE_1__.projects)\n\n\nadd_task_button.addEventListener('click', () => {\n    openTaskPopup()\n})\n\n//close popup if clicked elsewhere\ndocument.addEventListener('click', (e) => {\n    if (!add_task_form.contains(e.target) && add_task_button !== e.target){\n        CloseTaskPopup()\n        resetTaskPopUp()\n    }\n})\n\nsubmitTask.addEventListener('click', (e) => {\n    e.preventDefault();\n    if (title.value === \"\"){\n        titleError.textContent = \"*Title required\"\n    } else if (projectDisplay === \"Today\" || projectDisplay === \"This Week\" || projectDisplay === \"Inbox\"){\n        const taskObject  = _tasks__WEBPACK_IMPORTED_MODULE_0__.task.createTaskObject(title.value, description.value, duedate.value)\n        _tasks__WEBPACK_IMPORTED_MODULE_0__.task.createTaskBar(taskObject)\n        CloseTaskPopup()\n        resetTaskPopUp()\n    } else {\n        const taskObject  = _tasks__WEBPACK_IMPORTED_MODULE_0__.task.createTaskObject(title.value, description.value, duedate.value, projectDisplay.textContent)\n        _tasks__WEBPACK_IMPORTED_MODULE_0__.task.createTaskBar(taskObject)\n        CloseTaskPopup()\n        resetTaskPopUp()\n    }\n})\n\nfunction openTaskPopup(){\n    add_task_form.classList.add('scale-popup')\n    nav.classList.add('blur-task-form')\n    main.classList.add('blur-task-form')\n}\n\nfunction CloseTaskPopup(){\n    add_task_form.classList.remove('scale-popup')\n    nav.classList.remove('blur-task-form')\n    main.classList.remove('blur-task-form')\n}\n\nfunction resetTaskPopUp(){\n    title.value = \"\"\n    description.value = \"\"\n    duedate.value = \"\"\n    titleError.textContent = \"\"\n}\n\n//project side\nconst add_project_button  = document.querySelector(\"#add-project-button\")\nconst add_project_form = document.querySelector(\".add-project\")\nconst submit_project_button = document.querySelector('#submit-projet')\n\nconst project_title = document.querySelector(\"#project-title\")\nconst project_title_error = document.querySelector(\".project-title-error\")\n\nadd_project_button.addEventListener('click', () => {\n    openProjectPopup()\n})\n\ndocument.addEventListener('click', (e) => {\n    if (!add_project_form.contains(e.target) && add_project_button !== e.target){\n        closeProjectPopup()\n        resetProjectPopUp()\n    }\n})\n\nsubmit_project_button.addEventListener('click', (e) => {\n    e.preventDefault();\n    if (project_title.value === \"\"){\n        project_title_error.textContent = \"*Title required\"\n    } else {\n        const projectObject  = _projects__WEBPACK_IMPORTED_MODULE_1__.project.createProjectObject(project_title.value)\n        _projects__WEBPACK_IMPORTED_MODULE_1__.project.createProject(projectObject)\n        closeProjectPopup()\n        resetProjectPopUp()\n    }\n})\n\nfunction openProjectPopup(){\n    add_project_form.classList.add('scale-project-popup')\n    nav.classList.add('blur-project-form')\n    main.classList.add('blur-project-form')\n}\n\nfunction closeProjectPopup(){\n    add_project_form.classList.remove('scale-project-popup')\n    nav.classList.remove('blur-project-form')\n    main.classList.remove('blur-project-form')\n}\n\nfunction resetProjectPopUp(){\n    project_title.value = \"\"\n    project_title_error.textContent = \"\"\n\n}\n\nfunction allTasksRender(tasks){\n    for (let i = 0; i < tasks.length; i++){\n        _tasks__WEBPACK_IMPORTED_MODULE_0__.task.createTaskBar(tasks[i])\n    }\n}\n\nfunction renderProjects(projects){\n    for (let i = 0; i < projects.length; i++){\n        _projects__WEBPACK_IMPORTED_MODULE_1__.project.createProject(projects[i])\n    }\n}\n\n//display all tasks\ninbox.addEventListener('click', () => {\n    _tasks__WEBPACK_IMPORTED_MODULE_0__.task.clearTaks()\n    projectDisplay.textContent = \"Inbox\"\n    allTasksRender(_tasks__WEBPACK_IMPORTED_MODULE_0__.all_tasks)\n})\n\n//display today's tasks\nconst todayTab = document.querySelector('#today-tasks')\nconst today = new Date()\nconst todayDate = `${today.getFullYear()}-${today.getMonth() + 1}-0${today.getDate()}`\n\nfunction todayTasks(){\n    let ans = []\n    for (let i = 0; i < _tasks__WEBPACK_IMPORTED_MODULE_0__.all_tasks.length; i++){\n        if (_tasks__WEBPACK_IMPORTED_MODULE_0__.all_tasks[i].duedate === todayDate){\n            ans.push(_tasks__WEBPACK_IMPORTED_MODULE_0__.all_tasks[i])\n        }\n    }\n    return ans\n}\n\ntodayTab.addEventListener('click', () => {\n    _tasks__WEBPACK_IMPORTED_MODULE_0__.task.clearTaks()\n    projectDisplay.textContent = \"Today\"\n    allTasksRender(todayTasks())\n})\n\n//display this week tasks\nfunction getCurrentWeek(){\n    let curr = new Date //get current week dates\n    let week = []\n\n    for (let i = 1; i <= 7; i++) {\n        let first = curr.getDate() - curr.getDay() + i \n        let day = new Date(curr.setDate(first)).toISOString().slice(0, 10)\n        week.push(day)\n    }\n    return week\n}\n\nfunction getCurrWeekTasks(){\n    let ans = []\n    const week = getCurrentWeek()\n    for (let i = 0; i < _tasks__WEBPACK_IMPORTED_MODULE_0__.all_tasks.length; i++){\n        if (week.includes(_tasks__WEBPACK_IMPORTED_MODULE_0__.all_tasks[i].duedate)){\n            ans.push(_tasks__WEBPACK_IMPORTED_MODULE_0__.all_tasks[i])\n        }\n    }\n    return ans\n}\n\nconst CurrentWeek = document.querySelector('#this-week')\nCurrentWeek.addEventListener('click', () => {\n    _tasks__WEBPACK_IMPORTED_MODULE_0__.task.clearTaks()\n    projectDisplay.textContent = \"This Week\"\n    allTasksRender(getCurrWeekTasks())\n})\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (allTasksRender);\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   project: () => (/* binding */ project),\n/* harmony export */   projects: () => (/* binding */ projects)\n/* harmony export */ });\n/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasks */ \"./src/tasks.js\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\n\n\nlet projects = [{title: \"Gym\"}, {title: \"Study\"}, {title: \"Food\"}, {title: \"Health\"}, {title: \"Relationship\"}]\n\nclass project {\n    constructor (title) {\n        this.title = title\n    }\n\n    static createProjectObject(title){\n        const project_object = new project(title)\n        projects.push(project_object)\n        return project_object\n    }\n    \n    static createProject(project){\n        const projectTab = document.createElement('div')\n        const titleBox = document.createElement('div')\n        const title = document.createElement('p')\n        const icon = document.createElement('p')\n        const projects = document.querySelector('.options')\n        const projectDisplay = document.querySelector('#project-display')\n        const removeProject = document.createElement('button')\n        const inbox = document.querySelector('#all-tasks')\n        \n        projectTab.classList.add('card')\n\n        titleBox.style.display = \"flex\"\n        titleBox.style.gap = \"10px\"\n        titleBox.style.flexGrow = \"1\"\n        icon.innerHTML = '<i class=\"fa-solid fa-file\" style=\"color: #000000;\"></i>'\n        title.textContent = project.title\n        removeProject.classList.add('button')\n        removeProject.innerHTML = '<i class=\"fa-regular fa-x\" style=\"color: #000000;\"></i>'\n\n        removeProject.classList.add('remove-project-btn')\n\n        titleBox.appendChild(icon)\n        titleBox.appendChild(title)\n        projectTab.appendChild(titleBox)\n        projectTab.appendChild(removeProject)\n        projects.appendChild(projectTab)\n\n        removeProject.addEventListener('click', () => {\n            removeProjectTasks(project)\n            removeProject.closest(\".card\").remove()\n            inbox.click()\n        })\n\n        titleBox.addEventListener('click', () => {\n            projectDisplay.textContent = project.title\n            _tasks__WEBPACK_IMPORTED_MODULE_0__.task.clearTaks()\n            ;(0,_index__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(getProjectTasks(project))\n        })\n    }\n}\n\nfunction getProjectTasks(project){\n    let ans = []\n    for (let i=0; i < _tasks__WEBPACK_IMPORTED_MODULE_0__.all_tasks.length; i++){\n        if (_tasks__WEBPACK_IMPORTED_MODULE_0__.all_tasks[i].projectTitle === project.title){\n            ans.push(_tasks__WEBPACK_IMPORTED_MODULE_0__.all_tasks[i])\n        }\n    }\n    return ans\n}\n\nfunction removeProjectTasks(project){\n    let projectTasks = getProjectTasks(project)\n    for (let i =0; i < projectTasks.length; i++){\n        const index = _tasks__WEBPACK_IMPORTED_MODULE_0__.all_tasks.indexOf(projectTasks[i]);\n        _tasks__WEBPACK_IMPORTED_MODULE_0__.all_tasks.splice(index, 1);\n    }\n}\n\n//# sourceURL=webpack://todo-list/./src/projects.js?");

/***/ }),

/***/ "./src/tasks.js":
/*!**********************!*\
  !*** ./src/tasks.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   all_tasks: () => (/* binding */ all_tasks),\n/* harmony export */   task: () => (/* binding */ task)\n/* harmony export */ });\nlet all_tasks =[]\n\nclass task {\n    constructor (title, description, duedate, projectTitle, done) {\n        this.title = title\n        this.description = description\n        this.duedate = duedate\n        this.projectTitle = projectTitle\n        this.done = false\n    }\n\n    //create the task bar with the form filled infos\n    static createTaskObject(title, description, duedate, projectTitle, done){\n        const task_object = new task(title, description, duedate, projectTitle, done)\n        all_tasks.push(task_object)\n        return task_object\n    }\n\n    static createTaskBar(task){\n        const bar = document.createElement('div')\n        const titleBox = document.createElement('div')\n        const descriptionBox = document.createElement('div')\n        const title = document.createElement('p')\n        const description = document.createElement('p')\n        const duedate = document.createElement('p')\n        const remove_btn = document.createElement('button')\n        const content = document.querySelector('.content')\n        const checkbox = document.createElement('input')\n\n        bar.classList.add('task-bar')\n\n        titleBox.style.display = \"flex\"\n        titleBox.style.gap = \"10px\"\n\n        descriptionBox.style.display = \"flex\"\n        descriptionBox.style.gap = \"30px\"\n\n        titleBox.appendChild(checkbox)\n        titleBox.appendChild(title)\n\n        descriptionBox.appendChild(description)\n        descriptionBox.appendChild(duedate)\n        descriptionBox.appendChild(remove_btn)\n\n        checkbox.type = \"checkbox\"\n        checkbox.classList.add('checkbox')\n\n\n        //toggle on/off if the task has been done\n        if (task.done == true){\n            checkbox.checked = true\n            title.style.textDecoration = \"line-through\"\n            description.style.textDecoration = \"line-through\"\n        } else {\n            checkbox.checked = false\n            title.style.textDecoration = \"none\"\n            description.style.textDecoration = \"none\"\n        }\n        title.style.fontWeight = \"bold\"\n        title.textContent = `${task.title}`\n        description.textContent = `${task.description}`\n        description.style.maxWidth = '500px'\n        duedate.textContent = `${task.duedate}`\n\n        checkbox.addEventListener('change', () => {\n            if (checkbox.checked){\n                console.log(\"checked\")\n                task.done = true\n                title.style.textDecoration = \"line-through\"\n                description.style.textDecoration = \"line-through\"\n            } else {\n                task.done = false\n                title.style.textDecoration = \"none\"\n                description.style.textDecoration = \"none\"\n            }\n        })\n\n\n        remove_btn.classList.add('button')\n        remove_btn.innerHTML = '<i class=\"fa-solid fa-trash\" style=\"color: #000000;\"></i>'\n        remove_btn.addEventListener('click', () => {\n            content.removeChild(bar)\n            const index = all_tasks.indexOf(task);\n            all_tasks.splice(index, 1);\n\n        })\n        bar.appendChild(titleBox)\n        bar.appendChild(descriptionBox)\n        content.appendChild(bar)\n    }\n\n    static clearTaks(){\n        const content = document.querySelector('.content')\n        const tasks = document.querySelectorAll('.task-bar')\n        tasks.forEach(task => content.removeChild(task))\n    }\n}\n\nconst run = {\n    title: \"Run\",\n    description: \"Run for 5km!!\",\n    duedate: \"2024-12-03\",\n    projectTitle: \"Health\"\n}\n\nconst breakfast = {\n    title: \"Breakfast\",\n    description: \"Have a Smoked Salmon Bagel and banana smoothie\",\n    duedate: \"2024-12-03\",\n    projectTitle: \"Food\"\n}\n\nconst lunch = {\n    title: \"Lunch\",\n    description: \"Have steamed rice, chicken, spinage and olive oil\",\n    duedate: \"2024-12-03\",\n    projectTitle: \"Food\"\n}\n\nconst dinner = {\n    title: \"Dinner\",\n    description: \"Have leftovers, keep it light\",\n    duedate: \"2024-12-03\",\n    projectTitle: \"Food\"\n}\n\nconst gym = {\n    title: \"Gym\",\n    description: \"Hit the gym, push day\",\n    duedate: \"2024-12-03\",\n    projectTitle: \"Gym\"\n}\nconst sun = {\n    title: \"Touch grass\",\n    description: \"30 mins in the sun\",\n    duedate: \"2024-12-03\",\n    projectTitle: \"Health\"\n}\n\nconst study = {\n    title: \"study software engineering\",\n    description: \"6 hours of focus on the Odin Project Javascript path\",\n    duedate: \"2024-12-03\",\n    projectTitle: \"Study\"\n}\n\nconst GF = {\n    title: \"Spend time with GF\",\n    description: \"Hang out with Girlfriend\",\n    duedate: \"2024-12-03\",\n    projectTitle: \"Relationship\"\n}\n\nconst mom = {\n    title: \"Phone call with fam\",\n    description: \"30 min phone call with the fam\",\n    duedate: \"2024-12-03\",\n    projectTitle: \"Relationship\"\n}\n\n\n\nall_tasks.push(run)\nall_tasks.push(breakfast)\nall_tasks.push(lunch)\nall_tasks.push(dinner)\nall_tasks.push(gym)\nall_tasks.push(sun)\nall_tasks.push(study)\nall_tasks.push(GF)\nall_tasks.push(mom)\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/tasks.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;