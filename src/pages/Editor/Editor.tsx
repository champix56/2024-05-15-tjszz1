import React, { useEffect } from "react";
import FlexW1Grow from "../../components/layout/FlexW1Grow/FlexW1Grow";
import MemeSVGViewer from "../../components/ui/MemeSVGViewer/MemeSVGViewer";
import MemeForm from "../../components/functionnal/MemeForm/MemeForm.store";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changeMeme, clearMeme } from "../../store/current";
import { RootState } from "../../store/store";
import { MemeInterface } from "orsys-tjs-meme";

interface IEditorProps {}

const Editor: React.FC<IEditorProps> = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const memes = useSelector((s: RootState) => s.ressources.memes);
  console.log(params);
  useEffect(() => {
    if (undefined !== params.id)
      dispatch(
        changeMeme(
          memes.find((m) => m.id === Number(params.id)) as MemeInterface
        )
      );
    else {
      dispatch(clearMeme());
    }
    return () => {
      dispatch(clearMeme());
    };
  }, [params.id, memes, dispatch]);
  return (
    <FlexW1Grow>
      <MemeSVGViewer />
      <MemeForm />
    </FlexW1Grow>
  );
};

export default Editor;
