import { createReducer, createAction, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    count: 0,
}

export const increment = createAction<number>("INCREMENT");
export const decrement = createAction<number>("DECREMENT");



export const appReducer = createReducer(initialState, (builder) => {
  builder.addCase(increment.type, (state, action: PayloadAction<number>) => {
    state.count += action.payload;
  })
  .addCase(decrement.type, (state, action: PayloadAction<number>) => {
    state.count -= action.payload;
  })
});
