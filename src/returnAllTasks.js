function returnAllTasks(){
    let tasks = [];
    if(localStorage.getItem('taskId')){
        const numOfTasks = parseInt(localStorage.getItem('taskId'));
        for(let i = 0; i<(numOfTasks + 1); i++){
            tasks.push(JSON.parse(localStorage.getItem(i)));
        }
    }
    return tasks;
}

export {returnAllTasks};