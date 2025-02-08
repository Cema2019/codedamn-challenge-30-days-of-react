import React, { useEffect, useState } from 'react';
import { Box, TextField, Typography, Paper } from '@mui/material';

const App: React.FC = () => {
  const [principal, setPrincipal] = useState<number>(0);
  const [rate, setRate] = useState<number>(0);
  const [time, setTime] = useState<number>(0);
  const [simpleInterest, setSimpleInterest] = useState<string>('0');
  const [totalAmount, setTotalAmount] = useState<string>('0');

  useEffect(() => {
    const calculatedInterest = (principal * rate * time) / 100;
    setSimpleInterest(calculatedInterest.toFixed(2));
    setTotalAmount((principal + calculatedInterest).toFixed(2));
  }, [principal, rate, time]);

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      bgcolor="lightgray"
    >
      <Paper
        elevation={3}
        sx={{
          padding: '1.5rem',
          borderRadius: '0.5rem',
          backgroundColor: 'white',
        }}
      >
        <Typography variant="h5" gutterBottom>
          Simple Interest Calculator
        </Typography>

        <Box mb={2}>
          <TextField
            fullWidth
            label="Principal Amount ($)"
            type="number"
            value={principal}
            onChange={(e) => setPrincipal(parseFloat(e.target.value))}
            inputProps={{ min: 0 }}
          />
        </Box>

        <Box mb={2}>
          <TextField
            fullWidth
            label="Annual Interest Rate (%)"
            type="number"
            value={rate}
            onChange={(e) => setRate(parseFloat(e.target.value))}
            inputProps={{ step: '0.01', min: 0 }}
          />
        </Box>

        <Box mb={2}>
          <TextField
            fullWidth
            label="Time (Years)"
            type="number"
            value={time}
            onChange={(e) => setTime(parseFloat(e.target.value))}
            inputProps={{ min: 0 }}
          />
        </Box>

        <Box mb={2}>
          <Typography variant="body1" color="textSecondary">
            Simple Interest
          </Typography>
          <Paper
            variant="outlined"
            sx={{
              padding: '0.5rem',
              backgroundColor: '#edf2f7',
              borderRadius: '0.25rem',
            }}
          >
            <Typography variant="body1">{simpleInterest}</Typography>
          </Paper>
        </Box>

        <Box mb={2}>
          <Typography variant="body1" color="textSecondary">
            Total Amount
          </Typography>
          <Paper
            variant="outlined"
            sx={{
              padding: '0.5rem',
              backgroundColor: '#edf2f7',
              borderRadius: '0.25rem',
            }}
          >
            <Typography variant="body1">{totalAmount}</Typography>
          </Paper>
        </Box>
      </Paper>
    </Box>
  );
};

export default App;
