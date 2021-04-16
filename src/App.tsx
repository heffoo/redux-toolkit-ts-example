import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { increment, decrement } from "./store/state";
import "./App.scss";
import { useAppSelector } from "./store/index";
import { addToDo, delToDo } from "./store/todoState";
import { nanoid } from "@reduxjs/toolkit";
import { GuessNumber } from "./components/guessTheNumber";

function App() {
  const count = useAppSelector((state) => state.app.count);
  const [value, setValue] = useState("");

  const dispatch = useDispatch();

  const todos = useAppSelector((state) => state.tasks);
  console.log(todos);



  return (
    <div className="App">
      <div className="div1">
        <button className="button" onClick={() => dispatch(decrement(1))}>
          decrement
        </button>
        <span>{count}</span>
        <button className="button" onClick={() => dispatch(increment(1))}>
          increment
        </button>
        <button onClick={() => window.location.reload()}>Refresh Page</button>
      </div>

      <GuessNumber />
      <div className="div3">
        <form
          className="form"
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(addToDo({ title: value, id: nanoid() }));
            setValue("");
          }}
        >
          <input value={value} onChange={(e) => setValue(e.target.value)} />
        </form>
        <div>
          {todos.map((todo) => (
            <div key={todo.id} className="task">
              <p>{todo.title}</p>
              <button onClick={() => dispatch(delToDo({ title: todo.title, id: todo.id }))}>x</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
