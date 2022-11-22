
function addListenerToProject(id, changeUiOnProjectClick, returnTaskForProject, populateTask, addListenerTodo){

    if(typeof id === 'string'){
        document.querySelector(`[data-projectid='${id}']`).addEventListener('click', ()=>{
            changeUiOnProjectClick(event);
        })
    }else{
        for(let i = 0; i<id.length; i++){
            document.querySelector(`[data-projectid='${id[i]['id']}']`).addEventListener('click', ()=>{
                changeUiOnProjectClick(event);
                populateTask(returnTaskForProject(parseInt(id[i]['id'])));
                addListenerTodo(returnTaskForProject(parseInt(id[i]['id'])));


            })
        }
    }
}

export {addListenerToProject};