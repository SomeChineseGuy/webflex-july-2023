import React, { useContext } from "react";
import CounterContext from "./CounterContext";

const Children = () => {
  const {increment, decrement} = useContext(CounterContext)
  console.log();
  return (
    
    <div>
      
        <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
};

export default Children;
