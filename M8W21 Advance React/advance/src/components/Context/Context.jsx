import React, { useState } from "react";
import Parent from "./Parent";
import Count from "./Count";
import CounterContext from "./CounterContext";

const Context = () => {
  const [counter, setCounter] = useState(0);
  const increment = () => {
    setCounter(counter + 1)
  }

  const decrement = () => {
    setCounter(counter - 1)
  }

  const values = {
    counter,
    increment,
    decrement
  }
  return (
    <div>
      <CounterContext.Provider value={values}>
        <Count />

        <Parent />
      </CounterContext.Provider>
    </div>
  )
};

export default Context;
