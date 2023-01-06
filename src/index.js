import { DOM, taskForm, openProject } from './DOMmanip';
import { Project } from './Project';
import { Task } from './Task';
import { Storage } from './Storage';
import './style.css';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';
import { compareAsc, format } from 'date-fns'

//localStorage.clear();

//create new Project or List on button press
let createNewModule = (function() {
    //on Project form submit create a new project
    const projectForm = document.querySelector('#newProjectForm');
    projectForm.onsubmit = () => {
        const pname = projectForm.elements['pname'].value;
        Storage().addNewProject(new Project(pname));
    };
    //display task form when task button is pressed
    const taskButton = document.querySelector('#newTaskButton');
    taskButton.addEventListener('click', taskForm);

    //on Task form submit create a new task
    const taskForm = document.querySelector('#newTaskForm');
    taskForm.onsubmit;

    //Open Project on button press on nav bar
    const pbtns = document.querySelectorAll('.project-name-nav');
    pbtns.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            openProject(btn.textContent);
        });
    }); 

})();