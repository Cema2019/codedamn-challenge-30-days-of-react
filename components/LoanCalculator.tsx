import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
  Alert,
} from '@mui/material';

const LoanCalculator: React.FC = () => {
  const [cost, setCost] = useState<string>('');
  const [interval, setInterval] = useState<string>('');
  const [output, setOutput] = useState<string>('');

  const handleTotal = () => {
    if (!cost || !interval || Number(interval) === 0) {
      alert('Please enter valid number inputs');
      return;
    }

    const monthlyInstallment = (Number(cost) / Number(interval)).toFixed(2);
    setOutput(`Monthly Installment: $${monthlyInstallment}`);
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      p={2}
    >
      <Box width="100%" maxWidth="500px">
        <Typography variant="h5" align="center" gutterBottom>
          Equated Monthly Installment
        </Typography>
        <Typography variant="h5" align="center" gutterBottom mb={2}>
          (EMI) Calculator
        </Typography>
        <Card>
          <CardContent>
            <Box mb={2}>
              <TextField
                label="Total Loan Amount"
                type="number"
                value={cost}
                onChange={(e) => setCost(e.target.value)}
                inputProps={{ min: 0 }}
                fullWidth
                placeholder="Enter total loan amount"
              />
            </Box>
            <Box mb={2}>
              <TextField
                label="Number of Payments (Months)"
                type="number"
                value={interval}
                onChange={(e) => setInterval(e.target.value)}
                inputProps={{ min: 0 }}
                fullWidth
                placeholder="Enter number of months"
              />
            </Box>
            <Box display="flex" justifyContent="center" mb={2}>
              <Button variant="contained" color="primary" onClick={handleTotal}>
                Calculate
              </Button>
            </Box>
            {output && (
              <Alert severity="info" sx={{ textAlign: 'center' }}>
                {output}
              </Alert>
            )}
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default LoanCalculator;
