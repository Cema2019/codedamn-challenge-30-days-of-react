import React, { useState } from "react";
import { Button, Container, TextField, Typography, Box } from "@mui/material";

export default function App() {
  const [selectedEmoji, setSelectedEmoji] = useState<string | null>(null);
  const [showFeedbackForm, setShowFeedbackForm] = useState<boolean>(false);
  const [feedbackText, setFeedbackText] = useState<string>("");

  const handleEmojiClick = (emoji: string) => {
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
    setSelectedEmoji(null);
  };

  return (
    <Container sx={{ textAlign: "center", mt: 5 }}>
      <Typography variant="h5" gutterBottom>
        Rate your experience
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mb: 2 }}>
        {["😍", "😀", "🙁", "😭"].map((emoji) => (
          <Button key={emoji} variant="text" onClick={() => handleEmojiClick(emoji)}>
            <Typography sx={{ fontSize: 32 }}>{emoji}</Typography>
          </Button>
        ))}
      </Box>

      <Button variant="outlined" onClick={handleReset} sx={{ mb: 2 }}>
        Reset
      </Button>

      {showFeedbackForm && (
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2, mt: 2 }}>
          <TextField
            value={feedbackText}
            onChange={(e) => setFeedbackText(e.target.value)}
            placeholder="Enter your feedback"
            multiline
            rows={4}
            variant="outlined"
            sx={{ width: "250px" }}
          />
          <Button id="submit" variant="contained" color="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Box>
      )}
    </Container>
  );
}
