
export class Task{
    /* form = document.getElementById('newTaskForm');
    tname = form.elements['tname'];
    ddate = form.elements['ddate'];
    descrip = form.elements['descrip'];
    priority = form.elements['priority']; */

    constructor(name, date, descrip, priority) {
        this.name = name;
        this.date = date;
        this.descrip = descrip;
        this.priority = priority;
        
    }

    setName(name) {
        this.name = name;
    }

    setDate(date) {
        this.date = date;
    }

    setDescrip(descrip) {
        this.descrip = descrip;
    }

    setPriority(priority) {
        this.priority = priority;
    }

    getName() {
        return this.name;
    }

    getDate() {
        return this.date;
    }

    getdescrip() {
        return this.descrip;
    }

    getPriority() {
        return this.priority;
    }
};