import {isSameWeek} from "date-fns";
function returnTaskForWeek(){
    let tasks = [];

    if(localStorage.getItem('taskId')){
        const keys = Object.keys(localStorage)
        for(let i = 0; i<(localStorage.length); i++){
            if(!Number.isNaN(parseInt(keys[i]))){
                const task = JSON.parse(localStorage.getItem(keys[i]));
                tasks.push(task);
            }
        }
    }    
    let filteredTasks = tasks.filter((task)=>{
        const currentDate = new Date().toJSON().slice(0, 10);
 
        return (isSameWeek(new Date(currentDate), new Date(task['dueDate'])));
    })
    return filteredTasks;
}

export {returnTaskForWeek};