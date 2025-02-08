import React from 'react';
import { Box, Button } from '@mui/material';

const App: React.FC = () => {
  const handleClick = () => {
    console.log('Clicked!');
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100%"
    >
      <Button
        data-testid="button"
        onClick={handleClick}
        variant="contained"
        color="primary"
      >
        Click me!
      </Button>
    </Box>
  );
};

export default App;
