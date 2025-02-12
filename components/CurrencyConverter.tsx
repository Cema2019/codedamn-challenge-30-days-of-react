import React, { useState } from 'react';
import {
  Button,
  TextField,
  Typography,
  Container,
  Alert,
} from '@mui/material';

const CurrencyConverter: React.FC = () => {
  const [fromCurrency, setFromCurrency] = useState<string>('');
  const [toCurrency, setToCurrency] = useState<string>('');
  const [amount, setAmount] = useState<string>('');
  const [convertedAmount, setConvertedAmount] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleConvert = async () => {
    if (!fromCurrency || !toCurrency || !amount) {
      setErrorMessage('Please fill in all fields');
      return;
    }

    try {
      const response = await fetch(
        `https://open.er-api.com/v6/latest/${fromCurrency}`
      );
      if (!response.ok) throw new Error('Failed to fetch data');

      const data = await response.json();
      const rate = data.rates[toCurrency];

      if (rate) {
        const convertedValue = (Number(amount) * rate).toFixed(2);
        setConvertedAmount(`${toCurrency} ${convertedValue}`);
        setErrorMessage('');
      } else {
        setErrorMessage(
          `Exchange rate for ${toCurrency} not found. \nValidate currency codes`
        );
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        setErrorMessage(
          'Error fetching conversion data. \nValidate currency codes'
        );
      } else {
        setErrorMessage('Error fetching conversion data');
      }
    }
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        gap: 2,
      }}
    >
      <Typography variant="h4" gutterBottom>
        Currency Converter
      </Typography>

      <TextField
        label="Amount"
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        inputProps={{ min: 0 }}
        fullWidth
        placeholder="Enter amount"
      />

      <TextField
        label="From Currency (e.g., EUR)"
        value={fromCurrency}
        onChange={(e) => setFromCurrency(e.target.value.toUpperCase())}
        inputProps={{ maxLength: 3 }}
        fullWidth
        placeholder="From: e.g., EUR"
      />

      <TextField
        label="To Currency (e.g., USD)"
        value={toCurrency}
        onChange={(e) => setToCurrency(e.target.value.toUpperCase())}
        inputProps={{ maxLength: 3 }}
        fullWidth
        placeholder="To: e.g., USD"
      />

      <Button variant="contained" color="primary" onClick={handleConvert}>
        Convert
      </Button>

      {errorMessage && <Alert severity="error">{errorMessage}</Alert>}

      {convertedAmount && (
        <Alert severity="info">Converted Value: {convertedAmount}</Alert>
      )}
    </Container>
  );
};

export default CurrencyConverter;
