import "./App.css";
import { useState, useEffect } from "react";
import WaterChild from "./WaterChild";

function App() {
  const [componentArray, setComponentArray] = useState([]);
  const handlePlus = () => {
    if (componentArray.length < 5) {
      setComponentArray((oldArray) => [...oldArray, <WaterChild />]);
    }
  };
  const handleMinus = () => {
    console.log(componentArray.length);
    if (componentArray.length > 0) {
      let tempArray = componentArray;
      let lengthOfArray = componentArray.length - 1;
      setComponentArray(tempArray.slice(0, lengthOfArray));
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        backgroundColor: "#fff",
      }}
    >
      <div style={{ marginBottom: "50px" }}>
        <button
          className="button"
          type="button"
          style={{ backgroundColor: "#4CAF50" }}
          onClick={() => handlePlus()}
        >
          Fill
        </button>
        <button
          style={{ backgroundColor: "#008CBA" }}
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
