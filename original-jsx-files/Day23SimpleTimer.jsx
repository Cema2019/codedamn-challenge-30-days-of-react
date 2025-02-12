/*In this lab, you will create a simple React application that implements a timer. 
The app will start counting from zero and increment upwards, stopping at a user-defined number of seconds. 
This lab will test your skills in React state management, event handling, and basic styling using Tailwind CSS.*/

import { useState, useEffect } from "react";

export default function App() {
  const [timer, setTimer] = useState(0);
  const [inputSeconds, setInputSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  const handleStart = () => {
    setIsActive(true);
    const id = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer < inputSeconds) {
          return prevTimer + 1;
        } else {
          clearInterval(id);
          setIsActive(false);
          return prevTimer;
        }
      });
    }, 1000);
    setIntervalId(id);
  };

  const handleStop = () => {
    clearInterval(intervalId);
    setIsActive(false);
  };

  useEffect(() => {
    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, [intervalId]);

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
      <input
        id="seconds-input"
        type="number"
        value={inputSeconds}
        onChange={(e) => setInputSeconds(Number(e.target.value))}
        style={{
          textAlign: "center",
          padding: "8px",
          border: "1px solid #ccc",
          borderRadius: "4px",
          marginBottom: "8px",
        }}
      />
      <div style={{ marginBottom: "8px" }}>
        <button
          id="start"
          onClick={handleStart}
          disabled={isActive}
          style={{
            backgroundColor: isActive ? "#d3d3d3" : "#007bff",
            color: "#fff",
            padding: "8px 16px",
            border: "none",
            borderRadius: "4px",
            marginRight: "8px",
            cursor: isActive ? "not-allowed" : "pointer",
          }}
        >
          Start
        </button>
        <button
          id="stop"
          onClick={handleStop}
          disabled={!isActive}
          style={{
            backgroundColor: !isActive ? "#d3d3d3" : "#dc3545",
            color: "#fff",
            padding: "8px 16px",
            border: "none",
            borderRadius: "4px",
            marginRight: "8px",
            cursor: !isActive ? "not-allowed" : "pointer",
          }}
        >
          Stop
        </button>
        <button
          onClick={() => {
            setTimer(0);
            setInputSeconds(0);
          }}
          disabled={isActive}
          style={{
            backgroundColor: isActive ? "#d3d3d3" : "#28a745",
            color: "#fff",
            padding: "8px 16px",
            border: "none",
            borderRadius: "4px",
            cursor: isActive ? "not-allowed" : "pointer",
          }}
        >
          Reset
        </button>
      </div>
      <div
        id="timer"
        style={{
          textAlign: "center",
          fontSize: "24px",
          fontWeight: "bold",
          marginTop: "16px",
        }}
      >
        {timer}
      </div>
    </div>
  );
}
