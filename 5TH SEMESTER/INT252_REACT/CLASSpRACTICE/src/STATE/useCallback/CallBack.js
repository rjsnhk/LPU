import React, { useCallback, useState } from 'react'
import Footer from './Footer';

function CallBack() {
  let [value,setValue]=useState(0);

  const newFn=useCallback(()=>{},[value])
  return (
    <div>
<Footer newFn={newFn}/>

      <h2>{value}</h2>
      <button onClick={()=>setValue(prev=>prev+1)}>Click here</button>
    </div>
  )
}

export default CallBack
