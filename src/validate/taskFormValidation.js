function validTaskInput(event){
    const patterns = {
        title: /^.{5,40}$/,
        description: /^.{30,200}$/,
        dueDate:  /^.{1,}$/ 
    }
    const id = event.target.getAttribute('id');
    let valid = true;

    const values = {
        title: document.querySelector('#title').value,
        description: document.querySelector('#description').value,
        dueDate: document.querySelector('#dueDate').value
    }
    if(!patterns[id].test(event.target.value)){
        document.querySelector(`.${id}Error`).classList.add('errorActive')
    }else{
        document.querySelector(`.${id}Error`).classList.remove('errorActive')
    }

    Object.keys(patterns).forEach(key => {
        if(!patterns[key].test(values[key])){
            valid =  false;
        }
    })
    return valid;
    
}

export {validTaskInput};