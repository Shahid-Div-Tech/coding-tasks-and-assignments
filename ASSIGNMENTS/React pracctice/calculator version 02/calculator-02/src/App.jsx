import { useState } from "react";
import style from "./App.module.css";
import ButtonsContainer from "./components/ButtonsContainer";
import Display from "./components/Display";

function App() {
  let [previous, current] = useState("");
  return (
    <div className={style.calculator}>
      <Display displayvalue={previous}></Display>
      <ButtonsContainer
        buttonhandle={(buttonText) => {
          if (buttonText === "C") {
            current("");
          } else if (buttonText === "=") {
            const result = eval(previous);
            current(result);
          } else {
            const newdisplayvalue = previous + buttonText;
            current(newdisplayvalue);
          }
        }}
      ></ButtonsContainer>
    </div>
  );
}

export default App;
