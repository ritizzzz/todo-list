function changeUiOnProjectClick(event){
    let projectId;
    let projectName; 
   
    if(event.target.tagName === 'DIV'){
        projectId = event.target.getAttribute('data-projectid');
        projectName = JSON.parse(localStorage.getItem(`project${projectId}`))['projectName']
    }else{
        let targetNode = event.target.parentNode;
        projectId = targetNode.getAttribute('data-projectid');
        projectName = JSON.parse(localStorage.getItem(`project${projectId}`))['projectName']
    }
    document.querySelector('.addTodo').setAttribute('data-belongsTo', projectId);
    document.querySelector('.projectNameDisplay').innerText = projectName;
}

export {changeUiOnProjectClick};