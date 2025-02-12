/*In this lab, you'll create a simple interest calculator using React. 
This calculator will take input for the principal amount, annual interest rate, and time in years, and then calculate the simple interest and total amount.

Objectives
Implement the simple interest calculation logic that responds to input changes.
Display the calculated interest and total amount with two decimal places.*/

import { useEffect, useState } from "react";

function App() {
  const [principal, setPrincipal] = useState(1000);
  const [rate, setRate] = useState(7);
  const [time, setTime] = useState(5);
  const [simpleInterest, setSimpleInterest] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const calculatedInterest = (principal * rate * time) / 100;
    setSimpleInterest(calculatedInterest.toFixed(2));
    setTotalAmount((principal + calculatedInterest).toFixed(2));
  }, [principal, rate, time]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "lightgray",
      }}
    >
      <div
        style={{
          padding: "1.5rem",
          backgroundColor: "white",
          border: '1px solid gray',
          borderRadius: "0.5rem",
          boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.5)",
        }}
      >
        <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
          Simple Interest Calculator
        </h2>

        <div style={{ marginBottom: "0.75rem" }}>
          <label
            htmlFor="principal"
            style={{
              display: "block",
              marginBottom: "0.5rem",
              fontSize: "0.875rem",
              fontWeight: "500",
              color: "#4a5568",
            }}
          >
            Principal Amount ($):
          </label>
          <input
            type="number"
            id="principal"
            value={principal}
            onChange={(e) => setPrincipal(parseFloat(e.target.value))}
            style={{
              border: "1px solid #e2e8f0",
              padding: "0.5rem",
              borderRadius: "0.25rem",
              width: "100%",
            }}
            min="0"
          />
        </div>

        <div style={{ marginBottom: "0.75rem" }}>
          <label
            htmlFor="rate"
            style={{
              display: "block",
              marginBottom: "0.5rem",
              fontSize: "0.875rem",
              fontWeight: "500",
              color: "#4a5568",
            }}
          >
            Annual Interest Rate (%):
          </label>
          <input
            type="number"
            id="rate"
            value={rate}
            onChange={(e) => setRate(parseFloat(e.target.value))}
            style={{
              border: "1px solid #e2e8f0",
              padding: "0.5rem",
              borderRadius: "0.25rem",
              width: "100%",
            }}
            step="0.01"
            min="0"
          />
        </div>

        <div style={{ marginBottom: "0.75rem" }}>
          <label
            htmlFor="time"
            style={{
              display: "block",
              marginBottom: "0.5rem",
              fontSize: "0.875rem",
              fontWeight: "500",
              color: "#4a5568",
            }}
          >
            Time (Years):
          </label>
          <input
            type="number"
            id="time"
            value={time}
            onChange={(e) => setTime(parseFloat(e.target.value))}
            style={{
              border: "1px solid #e2e8f0",
              padding: "0.5rem",
              borderRadius: "0.25rem",
              width: "100%",
            }}
            min="0"
          />
        </div>

        <div style={{ marginBottom: "0.75rem" }}>
          <span style={{color: "#4a5568"}}>Simple Interest</span>
          <div
            id="simpleInterest"
            style={{
              padding: "0.5rem",
              backgroundColor: "#edf2f7",
              borderRadius: "0.25rem",
              border: '1px solid lightgray',
            }}
          >
            {simpleInterest}
          </div>
        </div>

        <div style={{ marginBottom: "0.75rem" }}>
          <span style={{color: "#4a5568"}}>Total Amount</span>
          <div
            id="totalAmount"
            style={{
              padding: "0.5rem",
              backgroundColor: "#edf2f7",
              borderRadius: "0.25rem",
              border: '1px solid lightgray',
            }}
          >
            {totalAmount}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
