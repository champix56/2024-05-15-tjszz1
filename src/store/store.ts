import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { addMeme, fetchAll, ressourcesReducer } from "./ressources";
import { emptyMeme } from "orsys-tjs-meme";
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

// store.dispatch(addMeme({ ...emptyMeme, text: "coucou 1" }));
// store.dispatch(addMeme({ ...emptyMeme, text: "coucou 2" }));
// store.dispatch(addMeme({ ...emptyMeme, text: "coucou 3" }));
//setInterval(() => {
  store.dispatch(fetchAll());
//}, 15000);
