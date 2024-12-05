import React, { useEffect, useRef, useState } from 'react'

function ValueCount() {
const [value,setValue]=useState(0);
const count=useRef(0);

useEffect(()=>{
  count.current=count.current+1;
})


  return (
    <div>
      <button onClick={()=>{setValue(prev=>prev+1)}}>Increment</button>
      <h2>Number is {value}</h2>
      <button onClick={()=>{setValue(prev=>prev-1)}}>Decrement</button>
      <h1>Render Count {count.current}</h1>
    </div>
  )
}

export default ValueCount
