import React from "react";
import Button from "../ui/Button/Button.tsx";
import "./App.css";

function App() {
  return (
    <Button
      onbuttonclick={(maValue: any) => {
        console.log("buttonclicked from App", maValue);
      }}
    >
      <div>rgfdsrdfgrd</div>
      <div>oihuhiug</div>
      <div>jyfyitrf</div>
      {/* dfghjk */}

    </Button>
  );
}

export default App;
