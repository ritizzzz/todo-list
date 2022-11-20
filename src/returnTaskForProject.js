function returnTaskForProject(projectId){
    let tasks = [];

    if(localStorage.getItem('taskId')){
        const keys = Object.keys(localStorage)
        for(let i = 0; i<(localStorage.length); i++){
            if(!Number.isNaN(parseInt(keys[i]))){
                const task = JSON.parse(localStorage.getItem(keys[i]));
                if(parseInt(task.belongsTo) === projectId){
                    tasks.push(task);
                }
            }
        }
    }
    return tasks;
}

export {returnTaskForProject};