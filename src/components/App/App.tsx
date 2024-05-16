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
    this.setState({
      meme: { ...this.state.meme, text: "Coucou", y: 200, fontSize: 25 },
    });
  }
  render() {
    return (
      <FlexH3Grow>
        <Header />
        <NavBar />
        <FlexW1Grow>
          <MemeSVGViewer
            meme={this.state.meme}
            image={this.state.images.find(
              (img) => img.id === this.state.meme.imageId
            )}
            basePath=""
          />
          <div>Formulaire</div>
        </FlexW1Grow>
        <Footer />
      </FlexH3Grow>
    );
  }
}

export default App;
