import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
// import Msv  from "./MemeSVGViewer.tsx";
import {MemeSVGViewer as Msv} from 'orsys-tjs-meme'
interface IMemeSVGViewerProps {}
const MemeSVGViewer: React.FC<IMemeSVGViewerProps> = (props) => {
  const meme = useSelector((state: RootState) => state.current);
  const images = useSelector((state: RootState) => state.ressources.images);
  console.log(images,meme)
  return (
    <Msv
      {...props}
      meme={meme}
      image={images.find((i) => i.id === meme.imageId)}
      basePath=""
    />
  );
};
export default MemeSVGViewer;
