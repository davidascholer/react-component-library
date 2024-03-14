import React from "react";
import useCounterStore from "./store";

export function Counter() {
  const { counter, increment, reset } = useCounterStore();

  return (
    <div>
      <h1>Counter {counter}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Counter;
