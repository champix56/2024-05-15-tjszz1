import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { emptyMeme, MemeInterface } from "orsys-tjs-meme";
import { RESSOURCES_NAME, REST_ADR } from "../config/config";

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
  extraReducers(builder) {
    builder.addCase(
      saveCurrent.fulfilled,
      (s, a: { type: string; payload: MemeInterface }) => {
        Object.assign(s,a.payload)
      }
    );
  },
});
export const saveCurrent = createAsyncThunk(
  "current/save",
  async (meme: MemeInterface) => {
    const prSave = await fetch(
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
    return await prSave.json();
  }
);
export const { change, clear } = current.actions;
export const currentReducer = current.reducer;
