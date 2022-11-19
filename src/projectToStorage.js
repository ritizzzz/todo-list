function projectToStorage(projectId, projectClass){
    let projectName = (document.querySelector('.projectName').value === "") ? "Default Project" : document.querySelector('.projectName').value; 
    let project = projectClass(projectId, projectName, []);
    localStorage.setItem("project"+projectId, JSON.stringify(project))   
}

export {projectToStorage};