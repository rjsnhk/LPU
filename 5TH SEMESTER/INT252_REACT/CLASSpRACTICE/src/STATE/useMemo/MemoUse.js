// import React, { useState } from 'react'

// function MemoUse() {
// const [val,setVal]=useState(0);
// const [counter,setCounter]=useState(0);


// function cubenum(val){
//   console.log('done');
//   return (Math.pow(val,3));
// }
// let result=cubenum(val);

//   return (
//     <div>
//       <input type="number" value={val} onChange={(e)=>setVal(e.target.value)} />
//       <h1>Val is : {result}</h1>

//       <button onClick={()=>{setCounter(counter+1)}}>Counter++</button>
//       <h1>Counter : {counter}</h1>
//     </div>
//   )
// }

// export default MemoUse







///using memo

import React, { useMemo, useState } from 'react'

function MemoUse() {
const [val,setVal]=useState(0);
const [counter,setCounter]=useState(0);


function cubenum(val){
  console.log('done');
  return (Math.pow(val,3));
}
let result=useMemo(()=>cubenum(Number(val)),[counter]);

  return (
    <div>
      <input type="number" value={val} onChange={(e)=>setVal(e.target.value)} />
      <h1>Val is : {result}</h1>

      <button onClick={()=>{setCounter(counter+1)}}>Counter++</button>
      <h1>Counter : {counter}</h1>
    </div>
  )
}

export default MemoUse

