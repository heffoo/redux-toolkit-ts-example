import { createReducer, createAction, PayloadAction } from "@reduxjs/toolkit";
import { TaskType } from "./state-types";
import { nanoid } from "@reduxjs/toolkit";

const InitialState: TaskType[] = [{ title: "123", id: nanoid() }];

export const addToDo = createAction<TaskType>("ADD_TODO");
export const delToDo = createAction<TaskType>("DEL_TODO");

export const tasksReducer = createReducer(InitialState, (builder) => {
  builder
    .addCase(addToDo.type, (state, action: PayloadAction<TaskType>) => {
      return [...state, { title: action.payload.title, id: action.payload.id }];
    })
    .addCase(delToDo.type, (state, action: PayloadAction<TaskType>) => {
      return [...state.filter((task) => task.id !== action.payload.id)];
    });
});
