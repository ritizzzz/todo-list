function taskToUI(taskClass){
    const title = document.querySelector('#title').value;
    const description = document.querySelector('#description').value;
    const dueDate = document.querySelector('#dueDate').value;
    const priority = document.querySelector('#priority').value;
    console.log(description);
    console.log(priority);
    console.log(dueDate);

    let todo = document.createElement('div');
    todo.classList.add('todo');
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
    
    let deleteIcon = document.createElement('img');
    deleteIcon.setAttribute('src', '../src/icons/delete-empty.svg');
    deleteIcon.setAttribute('alt', 'deleteTodo');
    deleteIcon.setAttribute('class', 'icon deleteTodo');

    todo.appendChild(deleteIcon);

    let expandIcon = document.createElement('img');
    expandIcon.setAttribute('src', '../src/icons/dropdown.svg');
    expandIcon.setAttribute('alt', 'expandTodo');
    expandIcon.setAttribute('class', 'icon expandTodo');

    let label = document.createElement('label');
    label.setAttribute('for', 'slideDown')

    label.appendChild(expandIcon);

    let slideDownCheckbox = document.createElement('input');
    slideDownCheckbox.setAttribute('type', 'checkbox');
    slideDownCheckbox.setAttribute('id', 'slideDown');
    slideDownCheckbox.setAttribute('name', 'slideDown');
    slideDownCheckbox.style.display = 'none';

    todo.appendChild(slideDownCheckbox);;
    todo.appendChild(label);


    let todoSlider = document.createElement('div');
    todoSlider.setAttribute('id', 'todoSlider');

    let descriptionCont =  document.createElement('p');
    descriptionCont.innerText = description;

    todoSlider.appendChild(descriptionCont);
    todo.appendChild(todoSlider);
    
    document.querySelector('.todos').appendChild(todo);

}


export {taskToUI};