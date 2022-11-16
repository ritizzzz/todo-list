
function assignTaskId(){
    if(!localStorage.getItem('taskId')){
        localStorage.setItem('taskId', '0');
    }else{
        let id = parseInt(localStorage.getItem('taskId'));
        localStorage.removeItem('taskId');
        localStorage.setItem('taskId', id+1)
    }

    return localStorage.getItem('taskId');
}

export {assignTaskId};