function returnTaskForProject(projectId){
    let tasks = [];
    if(localStorage.getItem('taskId')){
        const numOfTasks = parseInt(localStorage.getItem('taskId'));
        for(let i = 0; i<(numOfTasks + 1); i++){
            const task = JSON.parse(localStorage.getItem(i));
            if(task.belongsTo === projectId){
                tasks.push(task);
            }
        }
    }
    return tasks;
}

export {returnTaskForProject};