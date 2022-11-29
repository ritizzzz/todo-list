function editTaskValidation(event){
    const patterns = {
        titleEdit: /^.{5,40}$/,
        descriptionEdit: /^.{30,200}$/,
        dueDateEdit:  /^.{1,}$/ 
    }
    const id = event.target.getAttribute('id');
    let valid;

    const values = {
        titleEdit: document.querySelector('#titleEdit').value,
        descriptionEdit: document.querySelector('#descriptionEdit').value,
        dueDateEdit: document.querySelector('#dueDateEdit').value
    }
    
    if(!patterns[id].test(event.target.value)){
        document.querySelector(`.${id}Error`).classList.add('errorActive')
    }else{
        document.querySelector(`.${id}Error`).classList.remove('errorActive')
    }

    Object.keys(patterns).forEach(key => {
        if(!patterns[key].test(values[key])){
            valid =  false;
        }else{
            valid =  true;
        }
    })
    return valid;
}

export {editTaskValidation};