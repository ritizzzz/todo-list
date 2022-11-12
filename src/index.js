import "./styles.css";
import { openOverlay } from "./openOverlay";
import { openForm } from "./openForm";
import { closeForm } from "./closeForm";
import { closeOverlay } from "./closeOverlay";
import {openProjectFormComponents} from "./openProjectForm"
import { closeProjectFormComponents } from "./closeProjectForm";
import { addProjectToUI } from "./newProjectUI";

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
                console.log(_events[type])
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