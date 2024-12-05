import { useState } from 'react';
import React from 'react';

function FavColourLink() {
  const [color, setColor] = useState("Red");

  return (
    <div>
      <h1 style={{ color: color }}>My mobile color is {color}</h1>

      <a href="#" onClick={() => setColor("red")}>Red</a> <br/>
      <a href="#" onClick={() => setColor("blue")}>Blue</a> <br/>
      <a href="#" onClick={() => setColor("green")}>Green</a> <br/>
      <a href="#" onClick={() => setColor("white")}>White</a>
    </div>
  );
}

export default FavColourLink;
