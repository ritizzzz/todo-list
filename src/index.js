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

eventEmit.subscribe("init", populateTask);
eventEmit.subscribe("init", addListenerToTodo);

eventEmit.subscribe("initProject", populateProject);



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
    addListenerToProject(assignProjectId(true), changeUiOnProjectClick, returnTaskForProject, populateTask)

})

document.querySelector('.cancelProcess').addEventListener('click', ()=>{
    eventEmit.trigger('closeProjectForm');
})

document.querySelector('.addTask').addEventListener("click", ()=>{
    eventEmit.trigger("createTask", assignTaskId(false), taskClass);
})

document.addEventListener('DOMContentLoaded', ()=>{
    eventEmit.trigger("init", returnTaskForProject(0));
    eventEmit.trigger("initProject", returnAllProjects());
    addListenerToProject(returnAllProjects(), changeUiOnProjectClick, returnTaskForProject, populateTask)

    if(typeof assignProjectId(true) === 'object'){
        projectToStorage(assignProjectId(), projectClass);
        populateProject(returnAllProjects());
    }
    
    
})

