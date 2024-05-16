import {
  ImageInterface,
  MemeInterface,
  MemeSVGViewer,
  emptyMeme,
} from "orsys-tjs-meme";
import React, { Component } from "react";
import FlexH3Grow from "../layout/FlexH3Grow/FlexH3Grow";
import Header from "../ui/Header/Header";
import NavBar from "../ui/NavBar/NavBar";
import FlexW1Grow from "../layout/FlexW1Grow/FlexW1Grow";
import Footer from "../ui/Footer/Footer";
import MemeForm from "../functionnal/MemeForm/MemeForm";
import { RESSOURCES_NAME, REST_ADR } from "../../config/config";
import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Editor from "../../pages/Editor/Editor";

interface IAppProps {}

interface IAppState {
  meme: MemeInterface;
  images: Array<ImageInterface>;
  memes: Array<MemeInterface>;
}

class App extends Component<IAppProps, IAppState> {
  // state = {};
  constructor(props: IAppProps) {
    super(props);
    this.state = {
      meme: emptyMeme,
      images: [],
      memes: [],
    };
  }
  componentDidMount(): void {
    fetch(`${REST_ADR}${RESSOURCES_NAME.images}`)
      .then((r) => r.json())
      .then((arr) => this.setState({ images: arr }));
  }
  render() {
    return (
      <FlexH3Grow>
        <Header />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/new" element={<Editor />} />
          <Route path="/edit/:id" element={<Editor />} />
        </Routes>

        <Footer />
      </FlexH3Grow>
    );
  }
}

export default App;
