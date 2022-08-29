const  eventEmit = (function(){
    let _events = {};
    
    const publish = function (type, callBack){
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

    return {publish, trigger};
})();
