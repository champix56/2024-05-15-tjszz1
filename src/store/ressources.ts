import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ImageInterface, MemeInterface } from "orsys-tjs-meme";
import { RESSOURCES_NAME, REST_ADR } from "../config/config";
import { saveMeme } from "./current";
interface IRessourcesState {
  memes: Array<MemeInterface>;
  images: Array<ImageInterface>;
}
const initialState: IRessourcesState = {
  images: [],
  memes: [],
};

const ressources = createSlice({
  name: "ressources",
  initialState,
  reducers: {
    addMeme(state, action: { type: string; payload: MemeInterface }) {
      state.memes.push(action.payload);
    },
  },
  extraReducers(builder) {
    builder.addCase(
      fetchAll.fulfilled,
      (state, action: { type: string; payload: { memes: []; images: [] } }) => {
        state.memes.splice(0);
        state.memes.push(...action.payload.memes);
        state.images.splice(0);
        state.images.push(...action.payload.images);
      }
    );
    builder.addCase(
      saveMeme.fulfilled.toString(),
      (s, a: { type: string; payload: MemeInterface }) => {
        const position = s.memes.findIndex((m) => m.id === a.payload.id);
        if (position < 0) {
          s.memes.push(a.payload);
        } else {
          s.memes[position] = a.payload;
        }
      }
    );
  },
});

export const fetchAll = createAsyncThunk("ressources/fetchData", async () => {
  const prmemes = await fetch(`${REST_ADR}${RESSOURCES_NAME.meme}`);
  const primages = await fetch(`${REST_ADR}${RESSOURCES_NAME.images}`);
  const pall = await Promise.all([prmemes, primages]);
  return { memes: await pall[0].json(), images: await pall[1].json() };
});

export const { addMeme } = ressources.actions;

export const ressourcesReducer = ressources.reducer;
