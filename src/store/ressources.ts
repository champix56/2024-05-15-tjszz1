import { createSlice } from "@reduxjs/toolkit";
import { ImageInterface, MemeInterface } from "orsys-tjs-meme";
export interface IRessourcesState {
  memes: Array<MemeInterface>;
  images: Array<ImageInterface>;
}
const initialState: IRessourcesState = {
  memes: [],
  images: [],
};

const ressources = createSlice({
  name: 'ressources',
  initialState,
  reducers: {
  },
});

// export const {} = ressources.actions;

export  const ressourcesReducer=ressources.reducer;
