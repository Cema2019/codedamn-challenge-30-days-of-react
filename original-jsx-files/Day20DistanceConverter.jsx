/*In this lab, you'll build a simple React application to convert distances between various units: centimeters, inches, miles, feet, kilometers, and meters. 
Your task is to create a user interface with select elements for unit conversion, an input field for the value, a convert button, and a display area for the result.*/

import { useState } from "react";

export default function App() {
  const conversionRates = {
    centimeters: 1,
    inches: 2.54,
    feet: 30.48,
    meters: 100,
    kilometers: 100000,
    miles: 160934.4,
  };

  const [fromUnit, setFromUnit] = useState("centimeters");
  const [toUnit, setToUnit] = useState("meters");
  const [fromValue, setFromValue] = useState("");
  const [result, setResult] = useState("");
  const [conversionMessage, setConversionMessage] = useState("");

  const handleConvert = () => {
    const fromRate = conversionRates[fromUnit];
    const toRate = conversionRates[toUnit];
    const result = ((fromValue * fromRate) / toRate).toFixed(3);
    setResult(result);
    setConversionMessage(`${fromValue} ${fromUnit} equals ${result} ${toUnit}`);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",

          gap: "20px",
          border: "2px solid gray",
          padding: "20px",
          borderRadius: "20px",
        }}
      >
        <div style={{ display: "flex", gap: "20px", marginTop: "50px" }}>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <label htmlFor="fromUnit">From:</label>
            <select
              id="fromUnit"
              value={fromUnit}
              onChange={(e) => setFromUnit(e.target.value)}
            >
              {Object.keys(conversionRates).map((unit) => (
                <option key={unit} value={unit}>
                  {unit}
                </option>
              ))}
            </select>
          </div>

          <div
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <label htmlFor="toUnit">To:</label>
            <select
              id="toUnit"
              value={toUnit}
              onChange={(e) => setToUnit(e.target.value)}
            >
              {Object.keys(conversionRates).map((unit) => (
                <option key={unit} value={unit}>
                  {unit}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <label htmlFor="fromValue">Enter amount:</label>
          <input
            type="number"
            id="fromValue"
            value={fromValue}
            onChange={(e) => setFromValue(e.target.value)}
          />
        </div>

        <button id="convert" onClick={handleConvert}>
          Convert
        </button>
        <div id="outputValue">{result}</div>
        <p>{conversionMessage}</p>
      </div>
    </div>
  );
}
