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

eventEmit.subscribe("createTask", closeForm);
eventEmit.subscribe("createTask", closeOverlay);
eventEmit.subscribe("createTask", taskToUI);
eventEmit.subscribe("createTask", taskToStorage);
eventEmit.subscribe("createTask", addListenerToTodo);



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
    eventEmit.trigger('addProject');
})

document.querySelector('.cancelProcess').addEventListener('click', ()=>{
    eventEmit.trigger('closeProjectForm');
})

document.querySelector('.addTask').addEventListener("click", ()=>{
    eventEmit.trigger("createTask", taskClass);
})

