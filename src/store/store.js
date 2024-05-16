import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { change, currentReducer } from "./current.ts";
import { fetchDatas, ressourcesReducer } from "./ressources.ts";
export const store = configureStore({
  reducer: combineReducers({
    current: currentReducer,
    ressources: ressourcesReducer,
  }),
});
store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch({ type: "current/change", payload: { text: "coucou" } });
store.dispatch(change({ text: "demat breizh" }));
store.dispatch(fetchDatas());
