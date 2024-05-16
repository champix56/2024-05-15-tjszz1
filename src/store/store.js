import { configureStore } from "@reduxjs/toolkit";
import {currentReducer} from './current.ts'
export const store = configureStore({
  reducer: currentReducer,
});
