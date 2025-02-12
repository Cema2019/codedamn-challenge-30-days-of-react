import { useState, useEffect } from 'react';
import { Button, TextField, Typography, Box, Container } from '@mui/material';

export default function TimerApp() {
  const [timer, setTimer] = useState<number>(0);
  const [inputSeconds, setInputSeconds] = useState<number>(0);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [intervalId, setIntervalId] = useState<number | null>(null);

  const handleStart = () => {
    if (inputSeconds > 0) {
      setIsActive(true);
      const id = setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer < inputSeconds) {
            return prevTimer + 1;
          } else {
            clearInterval(id);
            setIsActive(false);
            return prevTimer;
          }
        });
      }, 1000);
      setIntervalId(id);
    }
  };

  const handleStop = () => {
    if (intervalId) {
      clearInterval(intervalId);
      setIsActive(false);
    }
  };

  useEffect(() => {
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [intervalId]);

  return (
    <Container maxWidth="sm" sx={{ textAlign: 'center', mt: 5 }}>
      <TextField
        id="seconds-input"
        type="number"
        label="Set Timer (seconds)"
        value={inputSeconds}
        onChange={(e) => setInputSeconds(Number(e.target.value))}
        fullWidth
        sx={{ mb: 2 }}
        disabled={isActive}
      />
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 2 }}>
        <Button
          id="start"
          variant="contained"
          color="primary"
          onClick={handleStart}
          disabled={isActive || inputSeconds <= 0}
        >
          Start
        </Button>
        <Button
          id="stop"
          variant="contained"
          color="error"
          onClick={handleStop}
          disabled={!isActive}
        >
          Stop
        </Button>
        <Button
          variant="contained"
          color="success"
          onClick={() => {
            setTimer(0);
            setInputSeconds(0);
          }}
          disabled={isActive}
        >
          Reset
        </Button>
      </Box>
      <Typography variant="h4" fontWeight="bold" id="timer">
        {timer} seconds
      </Typography>
    </Container>
  );
}
