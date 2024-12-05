import React, { useState, useEffect } from 'react';
import "./Activity6.css";

function Activity6() {
  const [count, setCount] = useState(0);
  const [mode, setMode] = useState('light'); 

  useEffect(() => {
    console.log(`Counter value: ${count}`);
  }, [count]);


  const toggleMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={`app ${mode}`}>
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>

      <button onClick={() => setCount((c) => c - 1)}>Decrement</button>
      <div>
      <button onClick={toggleMode}>
        {mode === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
      </button>
      </div>
    </div>
  );
}

export default Activity6;
