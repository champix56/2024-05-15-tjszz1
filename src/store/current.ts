import { createSlice } from "@reduxjs/toolkit";
import { emptyMeme } from "orsys-tjs-meme";

const initialState = emptyMeme;

const current = createSlice({
  name: "current",
  initialState,
  reducers: {
    clearMeme(state) {
      //mutation de state interdit -> state=emptyMeme
      delete state.id;
      Object.assign(state, emptyMeme);
    },
    changeMeme(state, action: { type: string; payload: object }) {
      delete state.id;
      Object.assign(state, action.payload);
    },
  },
});

export const {changeMeme,clearMeme} = current.actions

export const currentReducer = current.reducer;
