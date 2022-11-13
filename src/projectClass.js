const projectClass = function(projectName, projectTasks){
    let _projectName = projectName;
    let _taskArray = projectTasks;

    const getProjectName = function(){
        return _projectName;
    }

    const getTaskList = function(){
        return _taskArray;
    }

    return {getProjectName, getTaskList}

}

export {projectClass};