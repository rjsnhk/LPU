import React from 'react'
import Zoo from './Zoo'

function Animal() {

  
  const ani1="Cow";
  return (
    <div>
      <h1>Animal Names{ani1} {'lion'} {'bear'}</h1>
      <Zoo a1={ani1} a2={'lion'} a3={'bear'} />
    </div>
  )
}



export default Animal
