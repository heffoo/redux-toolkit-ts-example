import React from "react";
import { useDispatch } from "react-redux";
import { increment, decrement } from "./store/state";
import "./App.css";
import { useAppSelector } from "./store/index";

function App() {
  const count = useAppSelector((state) => state.app.count);

  const dispatch = useDispatch();

  return (
    <div className="App">
      <button className="button" onClick={() => dispatch(decrement(1))}>
        decrement
      </button>
      <span>{count}</span>
      <button className="button" onClick={() => dispatch(increment(1))}>
        increment
      </button>
    </div>
  );
}

export default App;
