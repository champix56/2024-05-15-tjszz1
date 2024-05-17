import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { MemeInterface, emptyMeme } from "orsys-tjs-meme";
import { RESSOURCES_NAME, REST_ADR } from "../config/config";

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
  extraReducers(builder) {
    builder.addCase(saveMeme.fulfilled, (s, a) => {
      Object.assign(s, a.payload);
    });
  },
});
export const saveMeme = createAsyncThunk(
  "current/save",
  async (meme: MemeInterface) => {
    const prs = await fetch(
      `${REST_ADR}${
        undefined === meme.id
          ? RESSOURCES_NAME.meme
          : `${RESSOURCES_NAME.meme}/${meme.id}`
      }`,
      {
        method: undefined === meme.id ? "POST" : "PUT",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(meme),
      }
    );
    return await prs.json();
  }
);
export const { changeMeme, clearMeme } = current.actions;

export const currentReducer = current.reducer;
