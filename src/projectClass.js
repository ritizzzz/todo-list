const projectClass = function(idArg, projectNameArg, projectTasksArg){
    let id = idArg;
    let projectName = projectNameArg;
    let taskArray = projectTasksArg;


    return {id, projectName, taskArray}

}

export {projectClass};