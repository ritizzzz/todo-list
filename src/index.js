import "./styles.css";
import { openOverlay } from "./openOverlay";
import { openForm } from "./openForm";
import { closeForm } from "./closeForm";
import { closeOverlay } from "./closeOverlay";
import {openProjectFormComponents} from "./openProjectForm"
import { closeProjectFormComponents } from "./closeProjectForm";
import { addProjectToUI } from "./newProjectUI";
import { taskClass } from "./taskClass";
import { taskToStorage } from "./taskToStorage";
import { taskToUI } from "./taskToUI";
import { projectClass } from "./projectClass";
import {addListenerToTodo} from "./addListenerTodo";
import {projectToStorage} from "./projectToStorage";
import { assignTaskId } from "./assignTaskId";
import { returnTaskForProject } from "./returnTaskForProject";
import { populateTask } from "./populateTask";
import { assignProjectId } from "./assignProjectId";
import { returnAllProjects } from "./returnAllProjects";
import { populateProject } from "./populateProject";
import { addListenerToProject } from "./addListenerToProject";
import { changeUiOnProjectClick } from "./changeUI";
import {closeEditForm } from "./closeEditForm";
import { modifyTaskStorage } from "./modifyTaskStorage";

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

eventEmit.subscribe("initProject", populateProject);

document.querySelector('.editTask').addEventListener('click', ()=>{
    const projId = document.querySelector('.addTodo').getAttribute('data-belongsto').slice(-1);
    eventEmit.trigger('editTask', event, taskClass);
    populateTask(returnTaskForProject(parseInt(projId)));
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
