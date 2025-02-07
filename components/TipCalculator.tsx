import React, { useState, ChangeEvent } from "react";
import { Container, TextField, Button, Typography, Box } from "@mui/material";

const App: React.FC = () => {
  const [bill, setBill] = useState<number>(0);
  const [tip, setTip] = useState<number>(0);
  const [total, setTotal] = useState<string>("");

  const handleBill = (e: ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    setBill(isNaN(value) ? 0 : Math.max(0, value));
  };

  const handleTip = (e: ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    setTip(isNaN(value) ? 0 : Math.max(0, value));
  };

  const calculateTotal = () => {
    const totalAmount = bill + (bill * tip) / 100;
    setTotal(totalAmount.toFixed(2));
  };

  return (
    <Container
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 2,
      }}
    >
      <Typography variant="h4">Tip Calculator</Typography>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 2, width: "100%", maxWidth: 300 }}>
        <TextField
          label="Bill Amount"
          type="number"
          variant="outlined"
          value={bill}
          onChange={handleBill}
          onFocus={() => {
            if (bill === 0) setBill(NaN);
          }}
          onBlur={() => {
            if (isNaN(bill)) setBill(0); 
          }}
          fullWidth
        />
        <TextField
          label="Tip Percentage"
          type="number"
          variant="outlined"
          value={tip}
          onChange={handleTip}
          onFocus={() => {
            if (tip === 0) setTip(NaN); 
          }}
          onBlur={() => {
            if (isNaN(tip)) setTip(0); 
          }}
          fullWidth
        />
        <Button variant="contained" color="primary" onClick={calculateTotal}>
          Calculate
        </Button>
      </Box>

      {total && <Typography variant="h6">Total Amount: ${total}</Typography>}
    </Container>
  );
};

export default App;
