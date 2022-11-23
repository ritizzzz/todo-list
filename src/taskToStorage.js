

function taskToStorage(taskId, taskClass){
    const title = document.querySelector('#title').value;
    const description = document.querySelector('#description').value;
    const dueDate = document.querySelector('#dueDate').value;
    const priority = document.querySelector('#priority').value;
    const belongsTo = document.querySelector('.addTodo').getAttribute('data-belongsTo');
    const completed = false;

    let newTask = taskClass(taskId, title, description, dueDate, priority, belongsTo, completed);
    localStorage.setItem(taskId, JSON.stringify(newTask));


}

export {taskToStorage};