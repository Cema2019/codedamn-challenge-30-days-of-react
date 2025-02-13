import React, { useState } from 'react';
import { Button, Container } from '@mui/material';

const useTheme = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light'); 

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return { theme, toggleTheme };
};

const App: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <Container
        sx={{
          minHeight: '90%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: theme === 'light' ? 'white' : 'black',
          color: theme === 'light' ? 'black' : 'white',
          transition: 'background-color 0.3s ease-in',
        }}
      >
        <Button variant="contained" onClick={toggleTheme}>
          Toggle Theme
        </Button>
      </Container>
    </>
  );
};

export default App;
