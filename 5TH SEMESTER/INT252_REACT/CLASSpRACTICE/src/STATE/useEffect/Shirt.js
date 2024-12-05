import React, { useState } from 'react';

function Shirt() {
  const [brand, setBrand] = useState("h&m"); 

  const brandchange = () => {
    setBrand("zara");
  }

  return (
    <div>
      <h1>My shirt brand is {brand}</h1>
      <button onClick={brandchange}>CLICK</button>
    </div>
  );
}

export default Shirt;
