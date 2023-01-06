import { Project } from "./Project";
import { DOM } from "./DOMmanip";

export function Storage() {
    const addNewProject = (newProject) => {
        //add Project to localStorage
        localStorage.setItem(newProject.name, JSON.stringify(newProject));
        DOM().updateNavBar();
    }

    const removeProject = (pname) => {
        localStorage.removeItem(pname);
    }

    return { addNewProject, removeProject };
}