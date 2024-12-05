import React, { useEffect, useState } from 'react'

function IncreDecri() {

  const[value,setValue]=useState(0);

function increment(){
  setValue(value+1);
  console.log(value);
}
function decrement(){
  setValue(value-1);
}

// useEffect(()=>{
//   setValue((prev)=>prev+1);
// });

// useEffect(()=>{
//   setValue((prev)=>prev+1);
// },[]);


// useEffect(()=>{
//   setValue((prev)=>prev+1);
// },[value]);

useEffect(()=>{
  setTimeout(()=>{
    setValue((prev)=>prev+1);
  },1000)
},[value]);



  return (
    <div>
      {/* <h2>number is {value} </h2> */}
      {/* <button onClick={increment}>IncreMent</button> 
      <br /> <br />
      <button onClick={decrement}>Decriment</button> */}

<h1>I have rendered {value} times</h1>

    </div>
  )
}

export default IncreDecri
