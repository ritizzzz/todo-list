function deleteProject(){
    const projectId = document.querySelector('.addTodo').getAttribute('data-belongsto');
    const project = JSON.parse(localStorage.getItem(`project${projectId}`));
    const tasksInProject = project['taskArray'];
    for(let i = 0; i<tasksInProject.length; i++){
        localStorage.removeItem(tasksInProject[i]);
    }

    localStorage.removeItem(`project${projectId}`);

}

export {deleteProject};