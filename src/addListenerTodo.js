
function addListenerToTodo(id){
    
    if(typeof id === 'string'){
        document.querySelector(`#expandTodo${id}`).addEventListener('click', ()=>{
            toggleSlider(event);
        })
        document.querySelector(`#deleteIcon${id}`).addEventListener('click', ()=>{
            deleteTask(event);
        })
        document.querySelector(`#editIcon${id}`).addEventListener('click', ()=>{
            openEdit(event);
            populateEdit(event);
        })
        document.querySelector(`.markDone${id}`).addEventListener('click', ()=>{
            event.target.parentNode.classList.toggle('completed');
            toggleCompleted(event);
            closeSlider(event);
        })


    }else{
        for(let i = 0; i<id.length; i++){
            document.querySelector(`#expandTodo${id[i]['taskId']}`).addEventListener('click', ()=>{
                toggleSlider(event);
            })  
            document.querySelector(`#deleteIcon${id[i]['taskId']}`).addEventListener('click', ()=>{
                deleteTask(event);
            })
            document.querySelector(`#editIcon${id[i]['taskId']}`).addEventListener('click', ()=>{
                openEdit();
                populateEdit(event);
            })
            document.querySelector(`.markDone${id[i]['taskId']}`).addEventListener('click', ()=>{
                event.target.parentNode.classList.toggle('completed');
                toggleCompleted(event);
                closeSlider(event);
            })
        }
    }
}

function closeSlider(event){
    let specificId = event.target.getAttribute('class').slice(-1);
    const display = document.querySelector(`#todoSlider${specificId}`).style.display;
    if(display !== 'none'){
        document.querySelector(`#todoSlider${specificId}`).style.display = 'none';
        document.querySelector(`#expandTodo${specificId}`).style.transform = 'rotate(0deg)';
    }
}

function toggleSlider(event){
    let specificId = event.target.getAttribute('id').slice(-1);
        event.target.style.transition = '0.3s';
        const display = document.querySelector(`#todoSlider${specificId}`).style.display;
        if(display === 'none'){
            document.querySelector(`#todoSlider${specificId}`).style.display = 'grid';
            event.target.style.transform = 'rotate(-180deg)';
        }else{
            document.querySelector(`#todoSlider${specificId}`).style.display = 'none';
            event.target.style.transform = 'rotate(0deg)';
        }

}

function deleteTask(event){
    const specificId = event.target.getAttribute('id').slice(-1);
    document.querySelector(`[data-id="${specificId}"]`).remove();
    localStorage.removeItem(specificId);
}

function openEdit(){
    document.querySelector('.taskEditForm').style.transition = '0.5s';
    document.querySelector('.taskEditForm').style.transform = 'scale(1)'; 
    document.querySelector('.overlay').style.display = 'block';
}

function populateEdit(event){
    let specificId = event.target.getAttribute('id').slice(-1);
    
    const task = JSON.parse(localStorage.getItem(specificId));
    document.querySelector('#titleEdit').value = task['taskTitle'];
    document.querySelector('#descriptionEdit').value = task['taskDescription'];
    document.querySelector('#dueDateEdit').value = task['dueDate'];
    document.querySelectorAll('.editOption').forEach(option => {
        if(option.value === task['priority']){
            option.setAttribute('selected', true);
        }
    })
    document.querySelector('.editTask').setAttribute('data-editto', specificId);
}


function toggleCompleted(event){
    const specificId = event.target.getAttribute('class').slice(-1);
    let task = JSON.parse(localStorage.getItem(specificId));
    if(task['completed']){
        task['completed'] = false;
    }else{
        task['completed'] = true;
    }
    localStorage.removeItem(specificId)
    localStorage.setItem(specificId, JSON.stringify(task));

    console.log(localStorage.getItem(specificId));
}
export {addListenerToTodo};