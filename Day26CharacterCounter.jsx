/*In this lab, you're tasked with creating a simple React application that allows users to type text into a textarea. 
As users type, the application will display the number of characters entered in real-time.*/

import { useState } from "react";

export default function App() {
  const [comment, setComment] = useState("");

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
      <textarea
        id="textInput"
        value={comment}
        onChange={(e) => {
          setComment(e.target.value);
        }}
      />
      <div id="count">{comment.length}</div>
    </div>
  );
}
