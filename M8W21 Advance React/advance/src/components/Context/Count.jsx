import React, { useContext } from "react";
import CounterContext from "./CounterContext";

const Count = () => {

  const { counter } = useContext(CounterContext)
  return (
    <div>
      <h1>{counter}</h1>
    </div>
  )
};

export default Count;
