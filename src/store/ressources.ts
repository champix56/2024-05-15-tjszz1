import { createSlice } from "@reduxjs/toolkit";
import { ImageInterface, MemeInterface } from "orsys-tjs-meme";
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
        state.memes.push(action.payload)
    },
  },
});

export const {addMeme} = ressources.actions;

export const ressourcesReducer = ressources.reducer;
