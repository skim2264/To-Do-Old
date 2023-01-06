import { Project } from "./Project";
import { Storage } from "./Storage";

export function DOM() {
    //Update nav bar with current projects
    const updateNavBar = () => {
        const projectsTabs = document.querySelector('#projectsTabs');
        projectsTabs.replaceChildren();
        let keys = Object.keys(localStorage);
        for (let i = 0; i < keys.length; i++) {
            addProject(keys[i]);
        }
    }

    //add Project to nav bar
    const addProject = (pname) => {
        const listItemTabs = document.createElement('ul');
        listItemTabs.setAttribute('class', 'listItemTabs');
        
        const newProjectTab = document.createElement('li');
        newProjectTab.setAttribute('class', 'projectTab');

        const projectNavButton = document.createElement('button');
        projectNavButton.setAttribute('class', 'project-name-nav');
        projectNavButton.setAttribute('type', 'button');
        projectNavButton.textContent = pname;

        newProjectTab.appendChild(projectNavButton);
        newProjectTab.appendChild(listItemTabs);
        projectsTabs.appendChild(newProjectTab);
    };
    
    return { updateNavBar };
}
const displayDiv = document.querySelector('#displayDiv');
const listItemDiv = document.querySelector('#listItem');
const projectButton = document.querySelector('#newProjectButton');
const projectsTabs = document.querySelector('#projectsTabs');

//display new Task Form
export const taskForm = () => {
    listItemDiv.replaceChildren();
    const taskForm = document.querySelector('#newTaskForm');
    taskForm.style.display = "flex";
};



//remove Project from nav bar 
export const removeProject = (pname) => {

};

export const openProject = (pname) => {
    displayDiv.replaceChildren();
    const list = JSON.parse(localStorage.getItem(pname));
    for (i in list) {
        const div = document.createElement('div');
        div.textContent = list[i];
        displayDiv.appendChild(div);
    }
    const butDiv = document.createElement('div');
    butDiv.innerHTML = "<button type='button' id='newTaskButton'>+ Create a New Task</button>";
    displayDiv.appendChild(butDiv);
};