import "./styles.css";
import { openOverlay } from "./openOverlay.js";
import { openForm } from "./openForm.js";

const  eventEmit = (function(){
    let _events = {};
    
    const subscribe = function (type, callBack){
        if(_events[type]){
            _events[type][_events[type].length] = callBack;
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

document.querySelector(".addTodo").addEventListener("click", () => {
    eventEmit.trigger("newTaskButtonClicked");
});
