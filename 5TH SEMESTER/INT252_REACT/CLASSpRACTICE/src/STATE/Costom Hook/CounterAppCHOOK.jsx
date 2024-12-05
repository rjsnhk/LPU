import React, { useRef, useState } from 'react'


//useCounter is a custom hook created by me 
function useCounter(initialValue=0){
  const[count,setCount]=useState(initialValue);
  const increment = () => setCount(c=>c+1);
  const decrement = () => setCount(c=>c-1);
  const reset = () => setCount(c=>initialValue);

  return {count,increment,decrement,reset};
}



// function CounterAppCHOOK() {

//   const {count, increment, decrement, reset}=useCounter(0);
//   return (
//     <div>
//       <h1>Increment Decrement using custom hook</h1>

      


//       <h3>{count}</h3>
//       <button onClick={increment}>Increment</button>
//       <button onClick={decrement}>Decrement</button>
//       <button onClick={reset}>Reset</button>
//     </div>
//   )
// }




//custom hook 2

// Custom hook
function useCalculator(initialValue = 0) {
  const [count, setCount] = useState(initialValue);
  const add = (num) => setCount((c) => c + Number(num));
  const subtract = (num) => setCount((c) => c - Number(num));
  const multiply = (num) => setCount((c) => c * Number(num));
  const divide = (num) => setCount((c) => c / Number(num));
  return { count, add, subtract, multiply, divide };
}

function CounterAppCHOOK() {
  const { count, add, subtract, multiply, divide } = useCalculator(0);
  const num = useRef(0);

  return (
    <div>
      <input type="number" ref={num} />

      <h3>{count}</h3>
      <button onClick={() => add(num.current.value)}>Add</button>
      <button onClick={() => subtract(num.current.value)}>Subtract</button>
      <button onClick={() => multiply(num.current.value)}>Multiply</button>
      <button onClick={() => divide(num.current.value)}>Divide</button>
    </div>
  );
}

export default CounterAppCHOOK;

