import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { fetchAll, ressourcesReducer } from "./ressources";
import { currentReducer } from "./current";

export const store = configureStore({
  reducer: combineReducers({
    ressources: ressourcesReducer,
    current: currentReducer,
  }),
});
store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(fetchAll());

// Get the type of our store variable
export type AppStore = typeof store
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
