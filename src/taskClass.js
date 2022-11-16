const taskClass = function(taskIdArg, taskTitleArg, taskDescriptionArg, duedateArg, priorityArg, belongsToArg){
    const taskId = taskIdArg;
    const taskTitle = taskTitleArg;
    const taskDescription = taskDescriptionArg;
    const dueDate = duedateArg;
    const priority = priorityArg;
    const belongsTo = belongsToArg;

    const setTaskId = function(id){
        taskId = id;
    }

    const setTaskTitle = function(title){
        taskTitle = title;
    }

    const setTaskDescription = function(description){
        taskDescription = description;
    }

    const setDueDate = function(date){
        dueDate = date;
    }

    const setPriority = function(priorityEdit){
        priority = priorityEdit;
    }

    const setBelongsTo = function(belongsToEdit){
        belongsTo = belongsToEdit;
    }

    return {taskId, taskTitle, taskDescription, dueDate, priority, belongsTo, setTaskId, setTaskTitle, setTaskDescription, setDueDate, setPriority, setBelongsTo}
}

export {taskClass}