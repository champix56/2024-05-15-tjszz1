import React from "react";
import Mf from "./MemeForm";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { changeMeme, saveMeme } from "../../../store/current";
import { MemeInterface } from "orsys-tjs-meme";
import { useNavigate } from "react-router-dom";
interface IMemeFormProps {
  style?: object;
}
const MemeForm: React.FC<IMemeFormProps> = (props) => {
  const meme = useSelector((state: RootState) => state.current);
  const images = useSelector((s: RootState) => s.ressources.images); //useSelector((state:RootState)=>state.ressources.images.find(i=>i.id===state.current.imageId));
  const dispatch = useDispatch();
  const nav=useNavigate()
  return (
    <Mf
      {...props}
      meme={meme}
      images={images}
      onMemeChange={(m:MemeInterface) => {
        dispatch(changeMeme(m));
      }}
      onMemeSubmit={(m) => {dispatch(saveMeme(m));
        nav('/thumbnail')
      }}
    />
  );
};

export default MemeForm;
