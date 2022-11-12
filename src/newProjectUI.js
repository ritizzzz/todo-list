
function addProjectToUI(){
    let projectName = document.querySelector('.projectName').value;
    
    let containerDiv = document.createElement('div');
    containerDiv.classList.add('navCard');
    containerDiv.classList.add('projectCard');
    
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

export {addProjectToUI};