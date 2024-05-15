import React from "react";
import Button from "../ui/Button/Button.tsx";
import "./App.css";

function App() {
  return (
    <Button
      titre="Mon button"
      onbuttonclick={(maValue: any) => {
        console.log("buttonclicked from App", maValue);
      }}
    />
  );
}

export default App;
