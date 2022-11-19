function addListenerToProject(id, changeUiOnProjectClick, returnTaskForProject, populateTask){

    console.log(id);
    console.log(typeof id);
    if(typeof id === 'string'){
        document.querySelector(`[data-projectid='${id}']`).addEventListener('click', ()=>{
            changeUiOnProjectClick(event);
            populateTask(returnTaskForProject(parseInt(id)));
        })
    }else{
        for(let i = 0; i<id.length; i++){
            document.querySelector(`[data-projectid='${id[i]['id']}']`).addEventListener('click', ()=>{
                changeUiOnProjectClick(event);
                populateTask(returnTaskForProject(parseInt(id[i]['id'])));

            })
        }
    }
}

export {addListenerToProject};