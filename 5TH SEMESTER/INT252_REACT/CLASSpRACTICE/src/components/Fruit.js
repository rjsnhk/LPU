import React from 'react'
import MangoClass from './MangoClass'


function Fruit() {
  const fruit={name:"Mango",color:"Yellow"};

  //* conditional renter
  // const fruit={};
  return (
    <div>
<h1>Conditional Renter</h1>
      {/* <MangoClass fruit={fruit} /> */}

      {/* //* conditional renter */}

      {fruit.name!==undefined && fruit.color!==undefined ? 
      <MangoClass fruit={fruit}/>:null}
    </div>
  )
}

export default Fruit
