
function populateProject(projectArray){
    document.querySelectorAll('.projectCard').forEach(card => card.remove());
    for(let i = 0; i<projectArray.length; i++){
        let projectId = projectArray[i]['id'];
        let projectName = projectArray[i]['projectName'];

        let containerDiv = document.createElement('div');
        containerDiv.classList.add('navCard');
        containerDiv.classList.add('projectCard');
        containerDiv.setAttribute('data-projectid', projectId)
        
        let img = document.createElement('img');
        img.setAttribute('src', '../src/icons/folder.svg');
        img.setAttribute('alt', 'project');
        img.classList.add('icon');
        
        containerDiv.appendChild(img);
    
        let h3 = document.createElement('h3');
        h3.innerText = projectName;
    
        containerDiv.appendChild(h3);
        document.querySelector('.projects').appendChild(containerDiv);
    }
}

export {populateProject};