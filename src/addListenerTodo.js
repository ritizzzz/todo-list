
function addListenerToTodo(id){
    document.querySelector(`#expandTodo${id}`).addEventListener('click', ()=>{
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
    })

}

export {addListenerToTodo};