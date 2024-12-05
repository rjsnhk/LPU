import React from 'react'

function Theater(props) {
const {m1,m2,m3}=props;
  return (
    <div>
      
      <h3> I recently wathched {m1}</h3>
      <h3> I watch tomorrow {m2}</h3>
      <h3> I yesterday wathched {m3}</h3>
    </div>
  )
}

export default Theater

