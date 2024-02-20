import React from "react";
import type { RootState } from "./store";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./slices/counter-slice";
import ToolkitProvier from "./ToolkitProvider";

export function CounterContent() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <button
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <span>{count}</span>
      <button
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
    </div>
  );
}

export default function Counter() {
  return (
    <ToolkitProvier>
      <CounterContent />
    </ToolkitProvier>
  );
}
