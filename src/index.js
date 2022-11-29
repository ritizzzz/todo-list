import "./styles.css";
import { openOverlay } from "./ui/openOverlay";
import { openForm } from "./ui/openForm";
import { closeForm } from "./ui/closeForm";
import { closeOverlay } from "./ui/closeOverlay";
import {openProjectFormComponents} from "./ui/openProjectForm"
import { closeProjectFormComponents } from "./ui/closeProjectForm";
import { addProjectToUI } from "./ui/newProjectUI";
import { taskClass } from "./classes/taskClass";
import { taskToStorage } from "./backend/taskToStorage";
import { taskToUI } from "./ui/taskToUI";
import { projectClass } from "./classes/projectClass";
import {addListenerToTodo} from "./listeners/addListenerTodo";
import {projectToStorage} from "./backend/projectToStorage";
import { assignTaskId } from "./backend/assignTaskId";
import { returnTaskForProject } from "./mediator/returnTaskForProject";
import { populateTask } from "./ui/populateTask";
import { assignProjectId } from "./backend/assignProjectId";
import { returnAllProjects } from "./mediator/returnAllProjects";
import { populateProject } from "./ui/populateProject";
import { addListenerToProject } from "./listeners/addListenerToProject";
import { changeUiOnProjectClick } from "./ui/changeUI";
import {closeEditForm } from "./ui/closeEditForm";
import { modifyTaskStorage } from "./backend/modifyTaskStorage";
import { openConfirmDelete } from "./ui/openConfirmDelete";
import { closeConfirmDelete } from "./ui/closeConfirmDelete";
import { deleteProject } from "./backend/deleteProject";
import { validTaskInput } from "./validate/taskFormValidation";
const  eventEmit = (function(){
    let _events = {};
    
    const subscribe = function (type, callBack){
        if(_events[type]){
            _events[type].push(callBack);
        }else{
            _events[type] = [callBack];
        }
        
    };

    
    const trigger = function (type, ...args){
        if(_events[type]){
            _events[type].forEach(callback => {
                callback(...args);
            })
        }   
    }

    return {subscribe, trigger};
})();


eventEmit.subscribe("newTaskButtonClicked", openOverlay);
eventEmit.subscribe("newTaskButtonClicked", openForm);

eventEmit.subscribe("overlayClicked", closeForm);
eventEmit.subscribe("overlayClicked", closeEditForm);
eventEmit.subscribe("overlayClicked", closeOverlay);
eventEmit.subscribe("overlayClicked", closeConfirmDelete);

eventEmit.subscribe("addProjectClicked", openProjectFormComponents);
eventEmit.subscribe("closeProjectForm", closeProjectFormComponents);

eventEmit.subscribe("addProject", closeProjectFormComponents);
eventEmit.subscribe("addProject", addProjectToUI);
eventEmit.subscribe("addProject", projectToStorage);

eventEmit.subscribe("createTask", closeForm);
eventEmit.subscribe("createTask", closeOverlay);
eventEmit.subscribe("createTask", taskToUI);
eventEmit.subscribe("createTask", taskToStorage);
eventEmit.subscribe("createTask", addListenerToTodo);

eventEmit.subscribe("editTask", modifyTaskStorage);
eventEmit.subscribe("editTask", closeOverlay);
eventEmit.subscribe("editTask", closeEditForm);

eventEmit.subscribe("openConfirmDeleteProject", openConfirmDelete);
eventEmit.subscribe("openConfirmDeleteProject", openOverlay);


eventEmit.subscribe("initProject", populateProject);

document.querySelector('.editTask').addEventListener('click', ()=>{
    const projId = document.querySelector('.addTodo').getAttribute('data-belongsto').slice(-1);
    eventEmit.trigger('editTask', event, taskClass);
    populateTask(returnTaskForProject(parseInt(projId)));
    addListenerToTodo(returnTaskForProject(parseInt(projId)));
})


document.querySelector('.addTodo').addEventListener("click", () => {
    eventEmit.trigger("newTaskButtonClicked");
});

document.querySelector(".overlay").addEventListener("click", ()=> {
    eventEmit.trigger("overlayClicked");
})

document.querySelector('.openProjectForm').addEventListener('click', ()=>{
    eventEmit.trigger('addProjectClicked');
})

document.querySelector('.addProject').addEventListener('click', ()=>{
    eventEmit.trigger('addProject', assignProjectId(false), projectClass);
    addListenerToProject(assignProjectId(true), changeUiOnProjectClick, returnTaskForProject, populateTask, addListenerToTodo)

})

document.querySelector('.cancelProcess').addEventListener('click', ()=>{
    eventEmit.trigger('closeProjectForm');
})

document.querySelector('.addTask').addEventListener("click", ()=>{
    eventEmit.trigger("createTask", assignTaskId(false), taskClass);
})

document.addEventListener('DOMContentLoaded', ()=>{
 
    if(typeof assignProjectId(true) === 'object'){
        projectToStorage(assignProjectId(), projectClass);
        populateProject(returnAllProjects());
    }else{
        eventEmit.trigger("initProject", returnAllProjects());
    }

    document.querySelector('.projectNameDisplay').innerText = returnAllProjects()[0]['projectName'];
    document.querySelector('.addTodo').setAttribute('data-belongsTo', returnAllProjects()[0]['id']);
    populateTask(returnTaskForProject(parseInt(returnAllProjects()[0]['id'])));
    addListenerToTodo(returnTaskForProject(parseInt(returnAllProjects()[0]['id'])));


    addListenerToProject(returnAllProjects(), changeUiOnProjectClick, returnTaskForProject, populateTask, addListenerToTodo)
              
})


document.querySelector('.deleteProject').addEventListener('click', ()=>{
    eventEmit.trigger('openConfirmDeleteProject');
    console.log(document.querySelector('.addTodo').getAttribute('data-belongsTo'));
})

document.querySelector('.cancelDeleteProject').addEventListener('click', ()=>{
    eventEmit.trigger('overlayClicked');
})

document.querySelector('.deleteProjectConfirmed').addEventListener('click', ()=>{
    eventEmit.trigger('overlayClicked');
    if(returnAllProjects().length > 1){
        deleteProject();
        document.querySelector('.projectNameDisplay').innerText = returnAllProjects()[0]['projectName'];
        document.querySelector('.addTodo').setAttribute('data-belongsTo', returnAllProjects()[0]['id']);
        populateTask(returnTaskForProject(parseInt(returnAllProjects()[0]['id'])));
        addListenerToTodo(returnTaskForProject(parseInt(returnAllProjects()[0]['id'])));
        populateProject(returnAllProjects());
        addListenerToProject(returnAllProjects(), changeUiOnProjectClick, returnTaskForProject, populateTask, addListenerToTodo)
    }
})

document.querySelectorAll('.addInputField').forEach(field => {
    field.addEventListener('keyup', ()=>{
        console.log(validTaskInput(event));
        if(validTaskInput(event)){
            document.querySelector('.addTask').disabled = false;
        }else{
            document.querySelector('.addTask').disabled = true;
        }
    })
})