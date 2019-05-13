export function createStore(reducer){
    let currentValue 
    let currentListener = []
    function getState(){
        return currentValue
    }
    function subscribe(listener){
        currentListener.push(listener)
    }
    function dispatch(action){
        currentValue = reducer(currentValue,action)
        currentListener.forEach(v => { v() })
    }
    dispatch({type:'@@myredux'})
    return {getState,subscribe,dispatch}
}