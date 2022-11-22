
function addListenerToProject(id, changeUiOnProjectClick, returnTaskForProject, populateTask, addListenerTodo){

    if(typeof id === 'string'){
        document.querySelector(`[data-projectid='${id}']`).addEventListener('click', ()=>{
            document.querySelector('.todos').innerHTML = '';
            changeUiOnProjectClick(event);
            populateTask(returnTaskForProject(parseInt(id)));
            addListenerTodo(returnTaskForProject(parseInt(id)));

        })
    }else{
        for(let i = 0; i<id.length; i++){
            document.querySelector(`[data-projectid='${id[i]['id']}']`).addEventListener('click', ()=>{
                document.querySelector('.todos').innerHTML = '';
                changeUiOnProjectClick(event);
                populateTask(returnTaskForProject(parseInt(id[i]['id'])));
                addListenerTodo(returnTaskForProject(parseInt(id[i]['id'])));


            })
        }
    }
}

export {addListenerToProject};