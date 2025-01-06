/*Your task is to build an application that:
Takes input for a starting number and an ending number.
Generates a random number between (and including) those two numbers upon a button click.
Displays the generated random number or appropriate error messages based on input validation.*/

import { useState } from "react";

function App() {
  const [startRange, setStartRange] = useState("");
  const [endRange, setEndRange] = useState("");
  const [randomNumber, setRandomNumber] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleStartRangeChange = (e) => {
    setStartRange(e.target.value);
  };

  const handleEndRangeChange = (e) => {
    setEndRange(e.target.value);
  };

  const generateRandomNumber = () => {
    const start = Number(startRange);
    const end = Number(endRange);
    if (!start || !end || start < 0 || end > 1000 || start >= end) {
      setErrorMessage("Invalid Input");
      setRandomNumber(null);
      return;
    }
    setErrorMessage("");
    const random = Math.floor(Math.random() * (end - start + 1)) + start;
    setRandomNumber(random);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
        gap: "8px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "50%",
        }}
      >
        <label htmlFor="startRange">Start value: </label>
        <input
          type="number"
          id="startRange"
          value={startRange}
          onChange={handleStartRangeChange}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "50%",
        }}
      >
        <label htmlFor="endRange">End value: </label>
        <input
          type="number"
          id="endRange"
          value={endRange}
          onChange={handleEndRangeChange}
        />
      </div>
      <button id="generate" onClick={generateRandomNumber}>
        Generate
      </button>
      <div id="randomNumber">
        {errorMessage
          ? errorMessage
          : randomNumber !== null
          ? randomNumber
          : ""}
      </div>
    </div>
  );
}

export default App;
