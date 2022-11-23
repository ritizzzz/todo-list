function returnAllProjects(){
    let projects = [];
    const regex = new RegExp(/[\D]+\d+/);
    if(localStorage.getItem('projectId')){
        const keys = Object.keys(localStorage)
        for(let i = 0; i<(localStorage.length); i++){
           if(regex.test(keys[i])){
                projects.push(JSON.parse(localStorage.getItem(keys[i])));
           }
        }
    }

    projects.sort((a, b) => {
        if(a.id > b.id){
            return 1
        }else{
            return -1
        }
    })
    return projects;
}

export {returnAllProjects}