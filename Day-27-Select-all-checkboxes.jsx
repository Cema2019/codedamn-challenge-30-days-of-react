/*In this coding challenge your task is to finish the CheckboxList component. 
Your task is to implement the functionality to both:
Select the individual checkboxes.
Select all checkboxes when the Select All button is clicked.*/

import { useState } from "react";

const CheckboxList = () => {
  const [checkboxes, setCheckboxes] = useState([
    { id: 1, label: "Dogs", checked: false },
    { id: 2, label: "Cats", checked: false },
    { id: 3, label: "Cows", checked: false },
    { id: 4, label: "Deers", checked: false },
  ]);

  const handleCheckboxChange = (id) => {
    setCheckboxes(
      checkboxes.map((checkbox) => {
        if (checkbox.id === id) {
          return { ...checkbox, checked: !checkbox.checked };
        }
        return checkbox;
      })
    );
  };

  const handleSelectAll = () => {
    const allChecked = checkboxes.every((checkbox) => checkbox.checked);
    setCheckboxes(
      checkboxes.map((checkbox) => ({ ...checkbox, checked: !allChecked }))
    );
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
        data-testid="checkbox-container"
        style={{ display: "flex", flexDirection: "column", gap: "5px" }}
      >
        {checkboxes.map((checkbox, index) => (
          <label
            key={checkbox.id}
            style={{ display: "flex", alignItems: "center", gap: "5px" }}
          >
            <input
              data-testid={`checkbox-${index + 1}`}
              type="checkbox"
              checked={checkbox.checked}
              onChange={() => handleCheckboxChange(checkbox.id)}
            />
            {checkbox.label}
          </label>
        ))}
      </div>
      <button
        data-testid="button"
        onClick={handleSelectAll}
        style={{
          padding: "10px 20px",
          fontSize: "18px",
          width: "50%",
          border: "none",
          borderRadius: "4px",
          backgroundColor: "#333",
          color: "#fff",
          cursor: "pointer",
          marginTop: "24px",
          transition: "opacity 0.2s ease",
        }}
        onMouseOver={(e) => (e.target.style.opacity = "0.8")}
        onMouseOut={(e) => (e.target.style.opacity = "1")}
      >
        Select All
      </button>
    </div>
  );
};

export default CheckboxList;

