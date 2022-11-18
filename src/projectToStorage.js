function projectToStorage(projectId, projectClass){
    const projectName = document.querySelector('.projectName').value;    
    if(!localStorage.getItem(projectId)){
        let project = projectClass(projectId, projectName, []);
        localStorage.setItem(projectName+projectId, JSON.stringify(project))   
    }
}

export {projectToStorage};