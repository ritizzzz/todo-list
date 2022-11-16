function projectToStorage(projectClass){
    const projectName = document.querySelector('.projectName').value;    
    if(!localStorage.getItem(projectName)){
        let project = projectClass(projectName, []);
        localStorage.setItem(projectName, JSON.stringify(project))   
    }
}

export {projectToStorage};