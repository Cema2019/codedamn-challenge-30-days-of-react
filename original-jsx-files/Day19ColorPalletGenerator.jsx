/*In this lab, you'll create a simple React application that generates random color palettes.*/

import { useState } from "react";

const generateRandomColor = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

function App() {
  const [currentPalette, setCurrentPalette] = useState([]);
  const [savedPalettes, setSavedPalettes] = useState([]);

  const generatePalette = () => {
    const newPalette = Array.from({ length: 5 }, () => generateRandomColor());
    setCurrentPalette(newPalette);
  };

  const savePalette = () => {
    setSavedPalettes([...savedPalettes, currentPalette]);
  };

  const deletePalette = (index) => {
    const newSavedPalettes = savedPalettes.filter((_, i) => i !== index);
    setSavedPalettes(newSavedPalettes);
  };

  return (
    <div style={{ marginTop: "2rem", padding: "1rem" }}>
      <button
        id="generate"
        style={{
          padding: "0.5rem 1rem",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "0.25rem",
          cursor: "pointer",
        }}
        onClick={generatePalette}
      >
        Generate Palette
      </button>

      <div id="current-palette" style={{ marginTop: "1.5rem" }}>
        {currentPalette.length > 0 && (
          <>
            <div
              style={{ display: "flex", gap: "0.5rem", marginBottom: "1rem" }}
            >
              {currentPalette.map((color, index) => (
                <div
                  key={index}
                  style={{
                    backgroundColor: color,
                    padding: "1rem",
                    borderRadius: "0.25rem",
                    textAlign: "center",
                    color: "white",
                  }}
                >
                  {color}
                </div>
              ))}
            </div>
            <button
              id="save"
              style={{
                padding: "0.5rem 1rem",
                backgroundColor: "#28a745",
                color: "white",
                border: "none",
                borderRadius: "0.25rem",
                cursor: "pointer",
              }}
              onClick={savePalette}
            >
              Save Palette
            </button>
          </>
        )}
      </div>

      <div id="saved-palettes" style={{ marginTop: "2rem" }}>
        {savedPalettes.length > 0 && (
          <div>
            <h4>Saved Palettes</h4>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
            >
              {savedPalettes.map((palette, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5rem",
                  }}
                >
                  <div style={{ display: "flex", gap: "0.5rem" }}>
                    {palette.map((color, idx) => (
                      <div
                        key={idx}
                        style={{
                          backgroundColor: color,
                          padding: "1rem",
                          borderRadius: "0.25rem",
                          textAlign: "center",
                          color: "white",
                        }}
                      >
                        {color}
                      </div>
                    ))}
                  </div>
                  <button
                    style={{
                      padding: "0.5rem 1rem",
                      backgroundColor: "#dc3545",
                      color: "white",
                      border: "none",
                      borderRadius: "0.25rem",
                      cursor: "pointer",
                    }}
                    onClick={() => deletePalette(index)}
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
