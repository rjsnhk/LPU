import React, { useState } from 'react'

function ShirtChange() {

  const[shirt,setShirt]=useState({
    brand:"ss",
    color:"red",
    size:40,
    type:"regular"
  });
  function changeShirts(){
    setShirt((prev)=>{
      return {...prev,brand:"RNM",size:12,color:"black"}
    })
  };




  return (
    <div>
      <h1>My shirt details</h1>
      <h4 style={{color:shirt.color}}> its a {shirt.brand} color {shirt.color} size {shirt.size} type {shirt.type}</h4>
      <button onClick={changeShirts}>Change Shirt</button>
    </div>
  )
}

export default ShirtChange
