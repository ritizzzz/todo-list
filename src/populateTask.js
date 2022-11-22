function populateTask( taskArray){
    document.querySelector('.todos').innerHTML = '';
    console.log(taskArray);
    for(let i = 0; i<taskArray.length; i++){
        let taskId = taskArray[i]['taskId'];
        let title = taskArray[i]['taskTitle'];
        let description = taskArray[i]['taskDescription'];
        let dueDate = taskArray[i]['dueDate'];
        let priority = taskArray[i]['priority'];
        
        let todo = document.createElement('div');
        todo.classList.add('todo');
        todo.setAttribute('data-id', taskId);
    
        let input = document.createElement('input');
        input.setAttribute('type', 'checkbox');
        input.classList.add('markDone');
    
        todo.appendChild(input);
    
        let p = document.createElement('p');
        p.classList.add('titleDisplay');
        p.innerText = title;
    
        todo.appendChild(p);
    
        let emptyDiv = document.createElement('div');
        todo.appendChild(emptyDiv);
    
        let editIcon = document.createElement('img');
        editIcon.setAttribute('src', '../src/icons/pencil.svg');
        editIcon.setAttribute('alt', 'editIcon');
        editIcon.setAttribute('class', 'icon editIcon');
        editIcon.setAttribute('id', 'editIcon' + taskId);
        todo.appendChild(editIcon);
        
    
        let deleteIcon = document.createElement('img');
        deleteIcon.setAttribute('src', '../src/icons/delete-empty.svg');
        deleteIcon.setAttribute('alt', 'deleteTodo');
        deleteIcon.setAttribute('class', 'icon deleteTodo');
        deleteIcon.setAttribute('id', 'deleteIcon' + taskId);
        todo.appendChild(deleteIcon);
    
        let expandIcon = document.createElement('img');
        expandIcon.setAttribute('src', '../src/icons/dropdown.svg');
        expandIcon.setAttribute('alt', 'expandTodo');
        expandIcon.setAttribute('class', 'icon expandTodo');
        expandIcon.setAttribute('id', 'expandTodo' + taskId);
        todo.appendChild(expandIcon);
        
        
        let todoSlider = document.createElement('div');
        todoSlider.setAttribute('id', "todoSlider"+taskId)
        todoSlider.classList.add('todoSlider');
        todoSlider.style.gridArea = '2/1/3/7';
        
        let descriptionCont = document.createElement('p');
        descriptionCont.innerText = description;
        descriptionCont.classList.add('descriptionCont');
    
        let priorityCont = document.createElement('p');
        priorityCont.innerText = priority;
        priorityCont.classList.add('priorityCont');
    
        let dueDateCont = document.createElement('p');
        dueDateCont.innerText = dueDate;
        dueDateCont.classList.add('dueDateCont');
    
        
        
    
        todoSlider.appendChild(descriptionCont);
        todoSlider.appendChild(priorityCont);
        todoSlider.appendChild(dueDateCont);
        todoSlider.style.display = 'none';
    
    
        todo.appendChild(todoSlider);
    
    
        document.querySelector('.todos').appendChild(todo);    
        }
    }


export {populateTask};