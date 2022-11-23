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

    tasks.sort((a, b) => {
        if(a.taskId > b.taskId){
            return 1;
        }else{
            return -1;
        }
    })

    return tasks;
}

export {returnTaskForProject};