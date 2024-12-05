import {useState} from 'react'
import React from 'react';

function FavoriteColor() {
  const [colour,setColour]=useState("Red");
  return (
    <div>
      <h1 style={{color: colour}}>My mobile color is {colour} </h1>
      <button onMouseOver={()=>{setColour("yellow")}}>Touch it</button>
     
    </div>
  )
}

export default FavoriteColor
