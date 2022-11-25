const taskClass = function(taskIdArg, taskTitleArg, taskDescriptionArg, duedateArg, priorityArg, belongsToArg, completedArg){
    const taskId = taskIdArg;
    const taskTitle = taskTitleArg;
    const taskDescription = taskDescriptionArg;
    const dueDate = duedateArg;
    const priority = priorityArg;
    const belongsTo = belongsToArg;
    const completed = completedArg;

    return {taskId, taskTitle, taskDescription, dueDate, priority, belongsTo, completed}
}

export {taskClass}