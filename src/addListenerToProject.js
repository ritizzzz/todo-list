function addListenerToProject(id){


    if(typeof id === 'string'){
        document.querySelector(`[data-projectId='${id}']`).addEventListener('click', ()=>{
            console.log('hello world');
        })
    }else{
        for(let i = 0; i<id.length; i++){
            document.querySelector(`[data-projectId='${id[i]['id']}']`).addEventListener('click', ()=>{
                console.log('hello world');
            })
        }
    }
}

export {addListenerToProject};