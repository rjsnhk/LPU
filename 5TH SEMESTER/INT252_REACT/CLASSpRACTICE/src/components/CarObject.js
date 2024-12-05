import React from 'react'
import CarDetails from './CarDetails'

function CarObject() {
  const latestCar={model:"Ghost",cost:"4cr",company:"Rolls Royce"}
  return (
    <div>
      <CarDetails carinfo={latestCar} />
    </div>
  )
}

export default CarObject
