function modifyTaskStorage(event, taskClass){
    const taskId = event.target.getAttribute('data-editto');
    const project = JSON.parse(localStorage.getItem(taskId))['belongsTo'];
    const title = document.querySelector('#titleEdit').value;
    const description = document.querySelector('#descriptionEdit').value;
    const dueDate = document.querySelector('#dueDateEdit').value;
    const priority = document.querySelector('#priorityEdit').value;
    const task = taskClass(taskId, title, description, dueDate, priority, project);
    localStorage.removeItem(taskId);
    localStorage.setItem(taskId, JSON.stringify(task));
    

}

export {modifyTaskStorage};