/*In this lab, you will be developing a simple React application that toggles the visibility of a paragraph. 
You'll be testing your skills in handling user interactions and managing component states in React.

Objectives
Your main objective is to create a toggling mechanism where a paragraph's visibility can be controlled through a button click. 
This will challenge your understanding of component states and event handlers in React.*/

import { useState } from "react";

function App() {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {isVisible && <p>This is the paragraph you can toggle.</p>}

      <button onClick={toggleVisibility}>Toggle Paragraph</button>
    </div>
  );
}

export default App;

