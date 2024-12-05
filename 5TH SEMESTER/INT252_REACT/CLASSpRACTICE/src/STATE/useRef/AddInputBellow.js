import React, { useRef, useState } from 'react'

function AddInputBellow() {
  let input=useRef();
  const [val,setVal]=useState('');

const onClicked=()=>{
  setVal(input.current.value);
}
  return (
    <div>
      <input type="text" ref={input} />

      
<button onClick={onClicked}>Click</button>
<p>{val}</p>
    </div>
  )
}

export default AddInputBellow
