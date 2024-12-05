import React from 'react'
import { useState } from 'react'
function Image() {
  const[image,setImage]=useState("/Images/dog2.jpeg")
  return (
    <div>
      <img src={image} alt="" onClick={()=>{setImage("/Images/dog3.jpeg")}} />
    </div>
  )
}

export default Image
