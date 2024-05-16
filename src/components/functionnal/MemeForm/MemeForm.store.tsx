import React from "react";
import Mf from "./MemeForm.tsx";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store.ts";
import { change, saveCurrent } from "../../../store/current";
import { MemeInterface } from "orsys-tjs-meme";

interface IMemeFormProps {}

const MemeForm: React.FC<IMemeFormProps> = (props) => {
  const meme = useSelector((s: RootState) => s.current);
  const images = useSelector((s: RootState) => s.ressources.images);
  const dispatch = useDispatch;
  return (
    <Mf
      {...props}
      meme={meme}
      images={images}
      onMemeChange={(m: MemeInterface) => {
        dispatch(change(m));
      }}
      onMemeSubmit={(m: MemeInterface) => {
        dispatch(saveCurrent(m));
      }}
    />
  );
};
export default MemeForm;
