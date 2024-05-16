import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { currentReducer } from "./current.ts";
import {ressourcesReducer} from './ressources.ts'
export const store = configureStore({
  reducer: combineReducers({
    current: currentReducer,
    ressources: ressourcesReducer,
  }),
});
