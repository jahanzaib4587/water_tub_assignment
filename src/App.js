import "./App.css";
import { useState, useEffect } from "react";
import WaterChild from "./WaterChild";

function App() {
  const [componentArray, setComponentArray] = useState([]);
  const [isDisabledFillBtn, setIsDisabledFillBtn] = useState(false);
  const [isDisabledRemoveBtn, setIsDisabledRemoveBtn] = useState(true);
  const handlePlus = () => {
    if (componentArray.length < 5) {
      for (let i = 1; i <= 5; i++) {
        setTimeout(() => {
          setComponentArray((oldArray) => [...oldArray, <WaterChild />]);
        }, i * 1000);
      }
    }
    setIsDisabledFillBtn(true);
  };
  const handleMinus = () => {
    let tempArray = componentArray;
    if (componentArray.length > 0) {
      for (let i = 1; i <= 5; i++) {
        setTimeout(() => {
          let lengthOfArray = tempArray.length - i;
          setComponentArray(tempArray.slice(0, lengthOfArray));
        }, i * 1000);
      }
      setIsDisabledRemoveBtn(true);
    }
  };
  useEffect(() => {
    if (componentArray.length === 5) {
      setIsDisabledRemoveBtn(false);
    }
    if (componentArray.length === 0) {
      setIsDisabledFillBtn(false);
    }
  }, [componentArray]);

  return (
    <div className="parentContainer">
      <div className="mb50">
        <button
          className="button"
          type="button"
          style={{
            backgroundColor: isDisabledFillBtn ? "#275c29" : "#4CAF50",
            cursor: isDisabledFillBtn ? "not-allowed" : "pointer",
          }}
          disabled={isDisabledFillBtn}
          onClick={() => handlePlus()}
        >
          Fill
        </button>
        <button
          style={{
            backgroundColor: isDisabledRemoveBtn ? "#326c80" : "#008CBA",
            cursor: isDisabledRemoveBtn ? "not-allowed" : "pointer",
          }}
          className="button"
          type="button"
          onClick={() => handleMinus()}
          disabled={isDisabledRemoveBtn}
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
