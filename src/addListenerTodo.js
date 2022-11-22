
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

    }else{
        for(let i = 0; i<id.length; i++){
            document.querySelector(`#expandTodo${id[i]['taskId']}`).addEventListener('click', ()=>{
                toggleSlider(event);
            })  
            document.querySelector(`#deleteIcon${id[i]['taskId']}`).addEventListener('click', ()=>{
                deleteTask(event);
            })
            document.querySelector(`#editIcon${id[i]['taskId']}`).addEventListener('click', ()=>{
                openEdit(event);
                populateEdit(event);
            })
        }
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
    let specificId = event.target.getAttribute('id').slice(-1);
    document.querySelector(`[data-id="${specificId}"]`).remove();
    localStorage.removeItem(specificId);
}

function openEdit(event){
    let specificId = event.target.getAttribute('id').slice(-1);
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
}

export {addListenerToTodo};