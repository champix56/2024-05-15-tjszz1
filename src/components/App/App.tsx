import { ImageInterface, MemeInterface, emptyMeme } from "orsys-tjs-meme";
import React, { Component } from "react";
import FlexH3Grow from "../layout/FlexH3Grow/FlexH3Grow";
import Header from "../ui/Header/Header";
import NavBar from "../ui/NavBar/NavBar";
import FlexW1Grow from "../layout/FlexW1Grow/FlexW1Grow";
import Footer from "../ui/Footer/Footer";
import MemeForm from "../functionnal/MemeForm/MemeForm.store";
import { RESSOURCES_NAME, REST_ADR } from "../../config/config";
import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home/Home";
import { store } from "../../store/store";
import MemeSVGViewer from "../ui/MemeSVGViewer/MemeSVGViewer";
import Editor from "../../pages/Editor/Editor";
import Thumbnail from "../../pages/Thumbnail/Thumbnail";

interface IAppProps {}

 

class App extends Component<IAppProps, void> {
  // state = {};
  constructor(props: IAppProps) {
    super(props);
   
    console.log(store);
  }

  render() {
    return (
      <FlexH3Grow>
        <Header />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/thumbnail" element={<Thumbnail />} />
          <Route path="/new" element={<Editor />} />
          <Route path="/edit/:id" element={<Editor />} />
        </Routes>

        <Footer />
      </FlexH3Grow>
    );
  }
}

export default App;
