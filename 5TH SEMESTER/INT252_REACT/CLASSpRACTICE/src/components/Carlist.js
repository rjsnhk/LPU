import React from 'react'
//we can run without key but if we dont give key then when we inspect it show no unique key error
function Carlist() {

  const numbers=[1,2,3,4,5,6,7,8,9,10];

  const cars=[
    {id:1,name:"Toyota",price:20000},
    {id:2,name:"Honda",price:25000},
    {id:3,name:"Ford",price:30000},
    {id:4,name:"BMW",price:35000},
    {id:5,name:"Mercedes",price:40000}
  ]
  return (
    <div>
      <ul>
        {
          cars.map((car)=>(
            <li key={car.id}> 
              {car.id}-{car.name}={car.price}
            </li>
          ))
        }
      </ul>

      {numbers.map((num)=><p>{num*2}</p>)}
    </div>
  )
}

export default Carlist
