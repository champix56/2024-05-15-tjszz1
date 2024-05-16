import { createSlice } from "@reduxjs/toolkit";
import { emptyMeme, MemeInterface } from "orsys-tjs-meme";

const initialState = emptyMeme;

const current = createSlice({
  name: "current",
  initialState,
  reducers: {
    change: (
      state,
      action: {
        payload: MemeInterface;
        type: string;
      }
    ) => {
      delete state.id;
      Object.assign(state, action.payload);
    },
    clear: (state) => {
      delete state.id;
      Object.assign(state, initialState);
    },
  },
});
export const { change, clear } = current.actions;
export const currentReducer = current.reducer;
