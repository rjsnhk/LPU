import React from 'react'

function Footer() {
  // return React.createElement('footer',null,"We are currently open")

const hour=new Date().getHours();
const openHour=8;
const closeHour=22;
const isOpen=hour>=openHour&&hour<=closeHour;
console.log(isOpen);


// if (hour>=openHour && hour<=closeHour) alert("we are open"); else alert("we are closed");

  return (
    <div className='footer'> <footer>{new Date().toLocaleTimeString()}, We're Currently Open </footer></div>
  )
}

export default Footer
