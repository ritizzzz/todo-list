
function addListenerToTodo(id){

    if(typeof id === 'string'){
        document.querySelector(`#expandTodo${id}`).addEventListener('click', ()=>{
            toggleSlider(event);
        })
        document.querySelector(`#deleteIcon${id}`).addEventListener('click', ()=>{
            deleteTask(event);
        })
    }else{
        for(let i = 0; i<id.length; i++){
            document.querySelector(`#expandTodo${id[i]['taskId']}`).addEventListener('click', ()=>{
                toggleSlider(event);
            })  
            document.querySelector(`#deleteIcon${id[i]['taskId']}`).addEventListener('click', ()=>{
                deleteTask(event);
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

export {addListenerToTodo};