

function taskToStorage(taskId, taskClass){
    const title = document.querySelector('#title').value;
    const description = document.querySelector('#description').value;
    const dueDate = document.querySelector('#dueDate').value;
    const priority = document.querySelector('#priority').value;
    
    let newTask = taskClass(taskId, title, description, dueDate, priority, 1);
    localStorage.setItem(taskId, JSON.stringify(newTask));


}

export {taskToStorage};