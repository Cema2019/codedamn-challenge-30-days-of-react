/*In this lab, you will create a simple React application that allows a user to pick a future date from an input field and calculate the number of days from the current date to the selected date. Moreover, the app will display an error if the picked date is in the past.

Steps to Build the App
Create Date Input: Start by creating an input field that allows users to select a date. Ensure this input has the id attribute set to datePicker.

Add Button: Implement a button labeled 'Find Days' with an id attribute of findDays. This button will trigger the calculation of days.

Display Result: Upon clicking the 'Find Days' button, your app should calculate the number of days between the current date and the selected future date. Display this result in a user-friendly way.

Error Handling: If a date in the past is entered, your application should display an error message in a div with an id of error.*/

import React, { useState } from "react";

function App() {
  // State to hold the selected date and error message
  const [selectedDate, setSelectedDate] = useState("");
  const [daysUntilSelectedDate, setDaysUntilSelectedDate] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Function to handle the date change
  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
    setErrorMessage("");
    setDaysUntilSelectedDate("");
  };

  // Function to calculate the number of days from today to the selected date
  const calculateDays = () => {
    const today = new Date();
    const futureDate = new Date(selectedDate);
    const timeDiff = futureDate.getTime() - today.getTime();

    if (timeDiff < 0) {
      setErrorMessage("Error: The picked date is in the past.");
    } else {
      const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
      setDaysUntilSelectedDate(daysDiff);
    }
  };

  // Inline styles
  const containerStyle = {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f3f4f6", // gray-100
  };

  const boxStyle = {
    padding: "2rem",
    backgroundColor: "white",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
  };

  const inputStyle = {
    border: "2px solid #d1d5db", // gray-300
    padding: "0.5rem",
    borderRadius: "4px",
  };

  const buttonContainerStyle = {
    marginTop: "1rem",
  };

  const buttonStyle = {
    backgroundColor: "#3b82f6", // blue-500
    color: "white",
    fontWeight: "bold",
    padding: "0.5rem 1rem",
    borderRadius: "4px",
    border: "none",
    cursor: "pointer",
  };

  const buttonHoverStyle = {
    backgroundColor: "#1e40af", // blue-700
  };

  const successMessageStyle = {
    color: "#10b981", // green-600
  };

  const errorMessageStyle = {
    color: "#ef4444", // red-500
  };

  return (
    <div style={containerStyle}>
      <div style={boxStyle}>
        <div>
          <input
            type="date"
            id="datePicker"
            value={selectedDate}
            onChange={handleDateChange}
            style={inputStyle}
          />
        </div>
        <div style={buttonContainerStyle}>
          <button
            id="findDays"
            onClick={calculateDays}
            style={buttonStyle}
            onMouseEnter={(e) =>
              (e.target.style.backgroundColor =
                buttonHoverStyle.backgroundColor)
            }
            onMouseLeave={(e) =>
              (e.target.style.backgroundColor = buttonStyle.backgroundColor)
            }
          >
            Find Days
          </button>
        </div>
        {daysUntilSelectedDate && (
          <div style={successMessageStyle}>
            Days until selected date:{" "}
            <span id="daysLeft">{daysUntilSelectedDate}</span>
          </div>
        )}
        {errorMessage && (
          <div id="error" style={errorMessageStyle}>
            {errorMessage}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
