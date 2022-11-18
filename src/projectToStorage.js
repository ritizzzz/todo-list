function projectToStorage(projectId, projectClass){
    let projectName = (document.querySelector('.projectName').value === "") ? "Default Project" : document.querySelector('.projectName').value; 
    console.log(projectName);
    let project = projectClass(projectId, projectName, []);
    localStorage.setItem(projectName+projectId, JSON.stringify(project))   
}

export {projectToStorage};