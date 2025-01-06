/*In this lab, you'll create a simple, interactive 4-point rating system using emojis. 
Users will select an emoji to rate, and then provide detailed feedback in a text area. 
Your task is to implement this functionality in React, focusing on user interaction and state management.*/

import React, { useState } from "react";

export default function App() {
  const [selectedEmoji, setSelectedEmoji] = useState("");
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);
  const [feedbackText, setFeedbackText] = useState("");

  const handleEmojiClick = (emoji) => {
    setSelectedEmoji(emoji);
    setShowFeedbackForm(true);
  };

  const handleSubmit = () => {
    console.log(`Feedback: ${selectedEmoji} - ${feedbackText}`);
    setShowFeedbackForm(false);
    setFeedbackText("");
  };

  const handleReset = () => {
    setShowFeedbackForm(false);
    setFeedbackText("");
  };

  return (
    <div
      id="feedback"
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
          gap: "10px",
        }}
      >
        <button onClick={() => handleEmojiClick("😍")}>😍</button>
        <button onClick={() => handleEmojiClick("😀")}>😀</button>
        <button onClick={() => handleEmojiClick("🙁")}>🙁</button>
        <button onClick={() => handleEmojiClick("😭")}>😭</button>
      </div>
      <div>
        <button style={{ marginTop: "10px" }} onClick={handleReset}>
          Reset
        </button>
      </div>
      {showFeedbackForm && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            width: "20%",
            marginTop: "10px",
            alignItems: "center",
          }}
        >
          <textarea
            value={feedbackText}
            onChange={(e) => setFeedbackText(e.target.value)}
            placeholder="Enter your feedback"
            style={{ width: "150px", height: "150px" }}
          />
          <button id="submit" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      )}
    </div>
  );
}
