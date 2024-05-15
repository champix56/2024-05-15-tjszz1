import React, { useEffect, useState } from "react";
import Button from "../ui/Button/Button.tsx";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(-10000);
  useEffect(() => {
    console.log("declenchement de l'effect didMount & didUpdate", counter);
    // return () => {
    //   console.log('démontage')
    // };
  }, [counter]);
  useEffect(() => {
    setCounter(0);
  }, []);
  return (
    <div style={{ textAlign: "center" }}>
      <div>counter : {counter}</div>
      <Button
      style={{padding:'0', }}
        onbuttonclick={(maValue: any) => {
          console.log("buttonclicked from App", maValue);
          setCounter(counter - 1);
          // console.log('====================================');
          // console.log(counter);
          // console.log('====================================');
        }}
        bgColor="tomato"
      >
        -1
      </Button>
      &nbsp;
      <Button
        onbuttonclick={(maValue: any) => {
          console.log("buttonclicked from App", maValue);
          setCounter(counter + 1);
          // console.log('====================================');
          // console.log(counter);
          // console.log('====================================');
        }}
      >
        +1
      </Button>
    </div>
  );
}

export default App;
