import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ImageInterface, MemeInterface } from "orsys-tjs-meme";
import { RESSOURCES_NAME, REST_ADR } from "../config/config";
export interface IRessourcesState {
  memes: Array<MemeInterface>;
  images: Array<ImageInterface>;
}
const initialState: IRessourcesState = {
  memes: [],
  images: [],
};

const ressources = createSlice({
  name: "ressources",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchDatas.fulfilled,
      (
        s,
        action: {
          type: string;
          payload: {
            images: Array<ImageInterface>;
            memes: Array<MemeInterface>;
          };
        }
      ) => {
        s.images.splice(0);
        s.images.push(...action.payload.images);
        s.memes.splice(0);
        s.memes.push(...action.payload.memes);
      }
    );
  },
});

// export const {} = ressources.actions;

export const fetchDatas = createAsyncThunk(
  "ressources/ressources",
  async () => {
    const prImages = await fetch(`${REST_ADR}${RESSOURCES_NAME.images}`);
    const prMemes = await fetch(`${REST_ADR}${RESSOURCES_NAME.meme}`);
    const prFull = await Promise.all([prMemes, prImages]);
    return await {
      images: await prFull[0].json(),
      memes: await prFull[1].json(),
    };
  }
);

export const ressourcesReducer = ressources.reducer;
