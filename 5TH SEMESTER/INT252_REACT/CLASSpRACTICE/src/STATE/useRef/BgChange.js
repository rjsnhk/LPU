import React, { useRef } from 'react'

function BgChange() {
let input=useRef();

const onClicked=()=>{
  input.current.style.background="yellow";
}


  return (
    <div>
      <input type="text" ref={input} />

      
      <button onClick={onClicked}>Click</button>
      
    </div>
  )
}

export default BgChange
