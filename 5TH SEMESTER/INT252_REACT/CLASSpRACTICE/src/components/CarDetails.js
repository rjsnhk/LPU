import React from 'react'

function CarDetails({carinfo}) {
  return (
    <div>
      <h1>The details Of Car</h1>
      <h2>Car Model: {carinfo.model}</h2>
      <h2>Cost of Car: {carinfo.cost}</h2>
      <h2>Car Company: {carinfo.company}</h2>
    </div>
  )
}

export default CarDetails
