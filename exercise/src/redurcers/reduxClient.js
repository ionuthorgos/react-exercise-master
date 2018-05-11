import { createStore } from "redux";
const reducer = function(){

};

const store = createStore(reducer,0);

store.subscribe(()=>{});

store.dispatch({type:"A", payload:1});