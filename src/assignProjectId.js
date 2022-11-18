
function assignProjectId(){
    if(!localStorage.getItem('projectId')){
        localStorage.setItem('projectId', '0');
    }else{
        let id = parseInt(localStorage.getItem('projectId'));
        localStorage.removeItem('projectId');
        localStorage.setItem('projectId', id+1)
    }

    return localStorage.getItem('projectId');
}

export {assignProjectId};