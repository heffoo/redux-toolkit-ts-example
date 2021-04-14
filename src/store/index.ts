import { appReducer } from './state';
import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from 'react-redux';

const rootReducer = configureStore({
    reducer: {
      app: appReducer,
    },
  });


export type RootState = ReturnType<typeof rootReducer.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default rootReducer;