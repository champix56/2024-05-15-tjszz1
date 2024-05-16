import React, { useEffect } from "react";
import FlexW1Grow from "../../components/layout/FlexW1Grow/FlexW1Grow";
import MemeSVGViewer from "../../components/ui/MemeSVGViewer/MemeSVGViewer.store";
import MemeForm from "../../components/functionnal/MemeForm/MemeForm.store";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { change, clear } from "../../store/current";
import { RootState, store } from "../../store/store";

function Editor() {
  const dispatch = useDispatch();
  const params = useParams();
  const memes = useSelector((s: RootState) => s.ressources.memes);
  useEffect(() => {
    if (params.id !== undefined) {
      dispatch(
        change(
          store
            .getState()
            .ressources.memes.find((m) => m.id === Number(params.id))
        )
      );
    } else {
      dispatch(clear());
    }
    return () => {
      dispatch(clear());
    };
  }, [params, memes, dispatch]);
  return (
    <FlexW1Grow>
      <MemeSVGViewer />
      <MemeForm />
    </FlexW1Grow>
  );
}

export default Editor;
