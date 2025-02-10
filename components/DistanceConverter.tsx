import React, { useState } from 'react';
import {
  Container,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Button,
  Typography,
} from '@mui/material';

const conversionRates: Record<string, number> = {
  centimeters: 1,
  inches: 2.54,
  feet: 30.48,
  meters: 100,
  kilometers: 100000,
  miles: 160934.4,
};

export default function DistanceConverter() {
  const [fromUnit, setFromUnit] = useState<string>('centimeters');
  const [toUnit, setToUnit] = useState<string>('meters');
  const [fromValue, setFromValue] = useState<string>('');
  const [result, setResult] = useState<string>('');
  const [conversionMessage, setConversionMessage] = useState<string>('');

  const handleConvert = () => {
    const fromRate = conversionRates[fromUnit];
    const toRate = conversionRates[toUnit];
    const convertedValue = (
      (parseFloat(fromValue) * fromRate) /
      toRate
    ).toFixed(3);
    setResult(convertedValue);
    setConversionMessage(
      `${fromValue} ${fromUnit} equals ${convertedValue} ${toUnit}`
    );
  };

  return (
    <Container maxWidth="sm">
      <Box
        display="flex"
        flexDirection="column"
        gap={3}
        p={4}
        border={2}
        borderRadius={4}
        borderColor="grey.400"
        mt={8}
        textAlign="center"
      >
        <Typography variant="h5">Distance Converter</Typography>

        <Box display="flex" gap={2}>
          <FormControl fullWidth>
            <InputLabel>From</InputLabel>
            <Select
              value={fromUnit}
              onChange={(e) => setFromUnit(e.target.value)}
            >
              {Object.keys(conversionRates).map((unit) => (
                <MenuItem key={unit} value={unit}>
                  {unit}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl fullWidth>
            <InputLabel>To</InputLabel>
            <Select value={toUnit} onChange={(e) => setToUnit(e.target.value)}>
              {Object.keys(conversionRates).map((unit) => (
                <MenuItem key={unit} value={unit}>
                  {unit}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>

        <TextField
          label="Enter amount"
          type="number"
          fullWidth
          value={fromValue}
          onChange={(e) => setFromValue(e.target.value)}
        />

        <Button variant="contained" color="primary" onClick={handleConvert}>
          Convert
        </Button>

        {result && (
          <Typography variant="h6" color="primary">
            {conversionMessage}
          </Typography>
        )}
      </Box>
    </Container>
  );
}
