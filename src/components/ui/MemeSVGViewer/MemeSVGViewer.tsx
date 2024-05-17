import React from "react";
import { MemeSVGViewer as Mv } from "orsys-tjs-meme";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
interface IMemeSVGViewerProps {}

const MemeSVGViewer: React.FC<IMemeSVGViewerProps> = (props) => {
  const meme = useSelector((s: RootState) => s.current);
  const images = useSelector((s: RootState) => s.ressources.images);
  return (
    <Mv
      {...props}
      meme={meme}
      image={images.find((i) => i.id === meme.imageId)}
      basePath=""
    />
  );
};

export default MemeSVGViewer;
