import React, { useState, useEffect } from 'react';
import { Container, Box, Typography, Button } from '@mui/material';

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(() => {
    const savedCount = localStorage.getItem('count');
    return savedCount !== null ? JSON.parse(savedCount) : 0;
  });

  useEffect(() => {
    localStorage.setItem('count', JSON.stringify(count));
  }, [count]);

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '90%',
        gap: 2,
      }}
    >
      <Typography variant="h4" data-testid="count-id">
        Count: {count}
      </Typography>
      <Box sx={{ display: 'flex', gap: 2 }}>
        <Button
          data-testid="inc-id"
          variant="contained"
          onClick={() => setCount(count + 1)}
        >
          +
        </Button>
        <Button
          data-testid="dec-id"
          variant="contained"
          onClick={() => setCount(count - 1)}
        >
          -
        </Button>
      </Box>
    </Container>
  );
};

export default Counter;
