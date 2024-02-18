import Display from "./components/Display";
import styles from "./App.module.css";
import ButtonContainer from "./components/ButtonContainer";
import { useState } from "react";

function App() {
  const [calVal, setCalVal] = useState("");
  // const onButtonClick = (event) => console.log( event)
  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }

    console.log(buttonText);
  };
  return (
    <div className={styles.calculator}>
      <Display displayValue={calVal} />
      <ButtonContainer onButtonClick={onButtonClick} />
    </div>
  );
}

export default App;
