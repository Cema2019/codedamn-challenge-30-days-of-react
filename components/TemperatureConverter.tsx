import React, { useState } from 'react';
import { TextField, Box } from '@mui/material';

const TemperatureConverter: React.FC = () => {
  const [celsius, setCelsius] = useState<number>(0);
  const [fahrenheit, setFahrenheit] = useState<number>((celsius * 9/5) + 32);

  const handleCelsiusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newCelsius = parseFloat(e.target.value);
    setCelsius(newCelsius);
    setFahrenheit((newCelsius * 9/5) + 32);
  };

  const handleFahrenheitChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newFahrenheit = parseFloat(e.target.value);
    setFahrenheit(newFahrenheit);
    setCelsius((newFahrenheit - 32) * 5/9);
  };

  return (
    <Box display="flex" flexDirection="column" gap={2} width={300}>
      <TextField
        id="celsius"
        label="Celsius"
        type="number"
        value={celsius}
        onChange={handleCelsiusChange}
        variant="outlined"
        fullWidth
      />
      <TextField
        id="fahrenheit"
        label="Fahrenheit"
        type="number"
        value={fahrenheit}
        onChange={handleFahrenheitChange}
        variant="outlined"
        fullWidth
      />
    </Box>
  );
};

export default TemperatureConverter;
