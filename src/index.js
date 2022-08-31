import "./styles.css"
const  eventEmit = (function(){
    let _events = {};
    
    const subscribe = function (type, callBack){
        if(_events[type]){
            _events[type].push = callBack;
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

document.querySelector('.expandTodo').addEventListener('click', ()=>{
    document.querySelector('.todo').style.height = '400px';
})