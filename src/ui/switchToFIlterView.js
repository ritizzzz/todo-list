function switchToFilterView(event){
    let displayName = (event.target.tagName === 'DIV') ? event.target.getAttribute('data-value') : event.target.parentNode.getAttribute('data-value');
    document.querySelector('.projectNameDisplay').innerText = displayName;
    document.querySelector('.deleteProject').style.display = 'none';
    document.querySelector('.addTodo').style.display = 'none';
}

export {switchToFilterView};