import React, { useEffect, useState } from 'react';
import { Button, Container, Typography } from '@mui/material';

export default function App() {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    console.log(`newCount: ${count}`);
  }, [count]);

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Typography variant="h4" gutterBottom>
        {count}
      </Typography>
      <Button
        id="increment"
        data-testid="incrementBtn"
        variant="contained"
        color="primary"
        onClick={() => setCount((prev) => prev + 1)}
      >
        Increment
      </Button>
    </Container>
  );
}
