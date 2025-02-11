import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Container } from '@mui/material';

const App: React.FC = () => {
  const [start, setStart] = useState<number>(0);
  const [end, setEnd] = useState<number>(1000);
  const [randomNumber, setRandomNumber] = useState<number | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const generateRandomNumber = () => {
    if (!start || !end || start < 0 || end > 1000 || start >= end) {
      setErrorMessage('Invalid Input');
      setRandomNumber(null);
      return;
    }

    setErrorMessage('');
    const random = Math.floor(Math.random() * (end - start + 1)) + start;
    setRandomNumber(random);
  };

  return (
    <Container
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        flexDirection: 'column',
        gap: 2,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          width: '50%',
        }}
      >
        <TextField
          id="start"
          label="Start Value"
          type="number"
          value={start}
          onChange={(e) => setStart(Number(e.target.value))}
          inputProps={{ min: 0, max: 1000 }}
          fullWidth
        />
        <TextField
          id="end"
          label="End Value"
          type="number"
          value={end}
          onChange={(e) => setEnd(Number(e.target.value))}
          inputProps={{ min: 0, max: 1000 }}
          fullWidth
        />
      </Box>

      <Button
        id="generate"
        variant="contained"
        color="primary"
        onClick={generateRandomNumber}
      >
        Generate
      </Button>

      <Typography id="randomNumber" variant="h6">
        {errorMessage ? errorMessage : `Random Number: ${randomNumber}`}
      </Typography>
    </Container>
  );
};

export default App;
