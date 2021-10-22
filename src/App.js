import React from "react";
import { useSelector, useDispatch } from "react-redux";
function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.counter);

  return (
    <div>
      <div>{state}</div>
      <button onClick={() => dispatch({ type: "increment" })}>+1</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-1</button>
      <button onClick={() => dispatch({ type: "refresh" })}>Refresh</button>
    </div>
  );
}

export default App;
