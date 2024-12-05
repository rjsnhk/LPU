// import React, { useState } from 'react'

// function SumofTwo() {
// const [val1,setVal1]=useState(0);
// const [val2,setVal2]=useState(0);
// const [counter,setCounter]=useState(0);


// function sum(val1,val2){
//   console.log('done');
//   return (Number(val1)+Number(val2));
// }
// let result=sum(val1,val2);

//   return (
//     <div>
//       <input type="number" value={val1} onChange={(e)=>setVal1(e.target.value)} />
//       <input type="number" value={val2} onChange={(e)=>setVal2(e.target.value)} />
//       <h1>Val is : {result}</h1>

//       <button onClick={()=>{setCounter(counter+1)}}>Counter++</button>
//       <h1>Counter : {counter}</h1>
//     </div>
//   )
// }

// export default SumofTwo



/////using useMemo

import React, { useState, useMemo } from 'react'

function SumofTwo() {
const [val1,setVal1]=useState(0);
const [val2,setVal2]=useState(0);
const [counter,setCounter]=useState(0);


function sum(val1,val2){
  console.log('done');
  return (Number(val1)+Number(val2));
}
let result=useMemo(()=>sum(val1,val2),[val1]);

  return (
    <div>
      <input type="number" value={val1} onChange={(e)=>setVal1(e.target.value)} />
      <input type="number" value={val2} onChange={(e)=>setVal2(e.target.value)} />
      <h1>Val is : {result}</h1>

      <button onClick={()=>{setCounter(counter+1)}}>Counter++</button>
      <h1>Counter : {counter}</h1>
    </div>
  )
}

export default SumofTwo
