import React, { useRef, useState } from "react";

function USEREFCA3() {
  const count = useRef(); 
  const [input, setInput] = useState("");

  return (
    <div>
      <h1>Focus Input using useRef</h1>
      <input
        type="text"
        ref={count}
        placeholder="Click the button to focus"
      />
      <button
        onClick={() => {
          count.current.focus(); 
          setInput(count.current.value);
        }}
      >
        Focus Input
      </button>
      <p>{input}</p> 
    </div>
  );
}

export default USEREFCA3;
