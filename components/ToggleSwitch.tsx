import { useState } from 'react';
import { Box, Button } from '@mui/material';

interface ToggleState {
  text: 'on' | 'off';
  backgroundColor: string;
  textColor: string;
}

export default function App() {
  const [state, setState] = useState<ToggleState>({
    text: 'on',
    backgroundColor: 'black',
    textColor: 'white',
  });

  const handleStateChange = () => {
    setState((prevState) => ({
      text: prevState.text === 'on' ? 'off' : 'on',
      backgroundColor: prevState.text === 'on' ? 'lightgray' : 'black',
      textColor: prevState.text === 'on' ? 'black' : 'white',
    }));
  };

  return (
    <Box
      textAlign="center"
      p={3}
      minHeight="90%"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Button
        id="toggle"
        variant="contained"
        onClick={handleStateChange}
        sx={{
          backgroundColor: state.backgroundColor,
          color: state.textColor,
        }}
      >
        {state.text}
      </Button>
    </Box>
  );
}
