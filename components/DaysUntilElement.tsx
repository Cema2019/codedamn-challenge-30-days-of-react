import React, { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";

const App: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [daysUntilSelectedDate, setDaysUntilSelectedDate] = useState<number | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(event.target.value);
    setErrorMessage("");
    setDaysUntilSelectedDate(null);
  };

  const calculateDays = () => {
    const today = new Date();
    const futureDate = new Date(selectedDate);
    const timeDiff = futureDate.getTime() - today.getTime();

    if (timeDiff < 0) {
      setErrorMessage("Error: The picked date is in the past.");
      setDaysUntilSelectedDate(null);
    } else {
      const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
      setDaysUntilSelectedDate(daysDiff);
    }
  };

  return (
    <Box
      sx={{
        minHeight: "90%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f3f4f6",
      }}
    >
      <Box
        sx={{
          padding: "2rem",
          backgroundColor: "white",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          borderRadius: "8px",
        }}
      >
        <TextField
          id="datePicker"
          type="date"
          value={selectedDate}
          onChange={handleDateChange}
          fullWidth
          sx={{ mb: 2 }}
        />
        <Button
          id="findDays"
          variant="contained"
          color="primary"
          fullWidth
          onClick={calculateDays}
          sx={{
            mb: 2,
            ":hover": {
              backgroundColor: "#1e40af", 
            },
          }}
        >
          Find Days
        </Button>
        {daysUntilSelectedDate !== null && (
          <Typography sx={{ color: "#10b981" }}>
            Days until selected date: <span id="daysLeft">{daysUntilSelectedDate}</span>
          </Typography>
        )}
        {errorMessage && (
          <Typography id="error" sx={{ color: "#ef4444" }}>
            {errorMessage}
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default App;
