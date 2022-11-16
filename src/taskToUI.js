let id = 0;
function taskToUI(taskClass){
    const title = document.querySelector('#title').value;
    const description = document.querySelector('#description').value;
    const dueDate = document.querySelector('#dueDate').value;
    const priority = document.querySelector('#priority').value;
    
    let todo = document.createElement('div');
    todo.classList.add('todo');
    todo.setAttribute('data-id', id);

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
    editIcon.setAttribute('id', 'editIcon' + id);
    todo.appendChild(editIcon);
    

    let deleteIcon = document.createElement('img');
    deleteIcon.setAttribute('src', '../src/icons/delete-empty.svg');
    deleteIcon.setAttribute('alt', 'deleteTodo');
    deleteIcon.setAttribute('class', 'icon deleteTodo');
    deleteIcon.setAttribute('id', 'deleteIcon' + id);
    todo.appendChild(deleteIcon);

    let expandIcon = document.createElement('img');
    expandIcon.setAttribute('src', '../src/icons/dropdown.svg');
    expandIcon.setAttribute('alt', 'expandTodo');
    expandIcon.setAttribute('class', 'icon expandTodo');
    expandIcon.setAttribute('id', 'expandTodo' + id);
    todo.appendChild(expandIcon);
    
    
    let todoSlider = document.createElement('div');
    todoSlider.setAttribute('id', 'todoSlider'+id)
    todoSlider.setAttribute('class', 'todoSlider');
    todoSlider.style.gridArea = '2/1/3/7';



    
    let descriptionCont = document.createElement('p');
    descriptionCont.innerText = description;
    descriptionCont.classList.add('descriptionCont');

    let priorityCont = document.createElement('p');
    priorityCont.innerText = priority;
    priorityCont.classList.add('priorityCont');

    let dueDateCont = document.createElement('p');
    dueDateCont.innerText = `Duedate: ${dueDate}`;
    dueDateCont.classList.add('dueDateCont');

    todoSlider.style.padding = '0px 5px';

    todoSlider.appendChild(descriptionCont);
    todoSlider.appendChild(priorityCont);
    todoSlider.appendChild(dueDateCont);

    todoSlider.style.display = 'none';


    todo.appendChild(todoSlider);


    document.querySelector('.todos').appendChild(todo);
    id += 1;
}

export {taskToUI};