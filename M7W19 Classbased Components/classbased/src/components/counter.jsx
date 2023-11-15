import React, { useState } from "react";

const Counter = (props) => {
  const [counter, setCounter ] = useState(0);
  const [counter2, setCounter2 ] = useState(0);
  const increment = () => {
    setCounter(counter + 1)
  }
  const decrement = () => {
    setCounter(counter - 1)
  }
  return (
    <div>
      <h1>The count is: {counter}. The message is: {props.message}</h1>
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    </div>
  )
};

export default Counter;
