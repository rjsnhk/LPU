import React from 'react'
import { useRef } from 'react';

function Counter() {
  let ref=useRef(0);
  function clickHandle(){
    ref.current=ref.current+1;
    alert("you clicked "+ ref.current +" times:" );
  }
  return (
    <div>
      <button onClick={clickHandle}>Click Me</button>
    </div>
  )
}

export default Counter
