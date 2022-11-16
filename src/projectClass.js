const projectClass = function(projectNameArg, projectTasksArg){
    let projectName = projectNameArg;
    let taskArray = projectTasksArg;

    const getProjectName = function(){
        return projectName;
    }

    const getTaskList = function(){
        return taskArray;
    }

    return {projectName, taskArray, getProjectName, getTaskList}

}

export {projectClass};