const taskClass = function(taskId, taskTitle, taskDescription, duedate, priority, belongsTo){
    const _taskId = taskId;
    const _taskTitle = taskTitle;
    const _taskDescription = taskDescription;
    const _dueDate = duedate;
    const _priority = priority;
    const _belongsTo = belongsTo;

    const getTaskId = function(){
        return _taskId;
    }

    const getTaskTitle = function(){
        return _taskTitle;
    }

    const getTaskDescription = function(){
        return _taskDescription;
    }

    const getDueDate = function(){
        return _dueDate;
    }

    const getPriority = function(){
        return _priority;
    }

    const getBelongsTo = function(){
        return _belongsTo;
    }

    return {getTaskId, getTaskTitle, getTaskDescription, getDueDate, getPriority, getBelongsTo}
}

