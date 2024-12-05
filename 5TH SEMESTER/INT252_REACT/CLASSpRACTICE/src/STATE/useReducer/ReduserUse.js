import React from 'react'
import { useReducer } from 'react';

const counterReducer=(state,action)=>{
  switch(action.type){
    case "increase":
      return {count:state.count+1};
    case "decrease":
      return {count:state.count-1};
    default:
      return state;


  }
}


function ReduserUse() {
  const initialState ={count: 0};
  const [state, dispatch] =useReducer(counterReducer, initialState);
  return (
    <div>
      <h1>Counter App</h1>
      <p>Count: {state.count}</p>
      <button onClick={()=> dispatch({type :"increase"})}>Increase</button>
      <button onClick={()=> dispatch({type :"decrease"})}>Decrease</button>
    </div>
  )
}

export default ReduserUse;
