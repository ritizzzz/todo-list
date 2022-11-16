let id = 0;
function addListenerToTodo(){
    document.querySelector(`#expandTodo${id}`).addEventListener('click', ()=>{
        let id = event.target.getAttribute('id').slice(-1);
        event.target.style.transition = '0.3s';
        const display = document.querySelector(`#todoSlider${id}`).style.display;
        if(display === 'none'){
            document.querySelector(`#todoSlider${id}`).style.display = 'grid';
            event.target.style.transform = 'rotate(-180deg)';
        }else{
            document.querySelector(`#todoSlider${id}`).style.display = 'none';
            event.target.style.transform = 'rotate(0deg)';
        }
    })
    id += 1;

}

export {addListenerToTodo};