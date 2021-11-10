import "./App.css";
import { useState, useEffect } from "react";
import WaterChild from "./WaterChild";

function App() {
  const [componentArray, setComponentArray] = useState([<WaterChild />]);
  const [isDisabledFillBtn, setIsDisabledFillBtn] = useState(false);
  const [isDisabledRemoveBtn, setIsDisabledRemoveBtn] = useState(true);
  const handlePlus = () => {
    if (componentArray.length < 5) {
      setComponentArray((oldArray) => [...oldArray, <WaterChild />]);
      setIsDisabledFillBtn(false);
      setIsDisabledRemoveBtn(true);
    }
  };
  const handleMinus = () => {
    if (componentArray.length > 0) {
      let tempArray = componentArray;
      let lengthOfArray = componentArray.length - 1;
      setComponentArray(tempArray.slice(0, lengthOfArray));
      setIsDisabledRemoveBtn(false);
      setIsDisabledFillBtn(true);
    }
  };

  return (
    <div className="parentContainer">
      <div className="mb50">
        <button
          className="button"
          type="button"
          style={{ backgroundColor: isDisabledFillBtn ? "#275c29" : "#4CAF50" }}
          onClick={() => handlePlus()}
        >
          Fill
        </button>
        <button
          style={{
            backgroundColor: isDisabledRemoveBtn ? "#326c80" : "#008CBA",
          }}
          className="button"
          type="button"
          onClick={() => handleMinus()}
        >
          Remove
        </button>
      </div>
      <div
        className="glass"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
        }}
      >
        <div>{componentArray}</div>
      </div>
    </div>
  );
}

export default App;
