/*In this lab, you will create a simple React application that generates a multiplication table based on a user-entered number. This exercise will test your skills in handling user inputs, dynamically rendering data, and structuring your application's UI.*/

import { useState, useEffect } from "react";

function App() {
  const [number, setNumber] = useState("");
  const [table, setTable] = useState([]);

  useEffect(() => {
    setTable([]);
  }, [number]);

  const handleGenerateTable = () => {
    const num = Number(number);
    if (num >= 0 && num <= 1000) {
      const newTable = [];
      for (let i = 1; i <= 20; i++) {
        newTable.push(`${num} x ${i} = ${num * i}`);
      }
      setTable(newTable);
    } else {
      alert("Please enter a number between 0 and 1000.");
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleGenerateTable();
    }
  };

  return (
    <div>
      <input
        type="number"
        id="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        onKeyDown={handleKeyDown}
        style={{
          border: "2px solid black",
          borderRadius: "2px",
          paddingLeft: "10px",
          margin: "10px",
        }}
      />
      <button
        id="generateTable"
        onClick={handleGenerateTable}
        style={{
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          fontSize: "15px",
        }}
      >
        Generate Table
      </button>
      {number && (
        <ul id="multiplicationTable" style={{ listStyleType: "none" }}>
          {table.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
