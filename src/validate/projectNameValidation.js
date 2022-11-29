function projectNameValidation(event){
    const value = event.target.value;
    const pattern = /^.{5,20}$/;
    let valid;
    if(!pattern.test(value)){
        document.querySelector('.projectError').classList.add('errorActive');
        valid = false;
    }else{
        document.querySelector('.projectError').classList.remove('errorActive');
        valid = true;
    }

    return valid;
}

export {projectNameValidation};