import React, { useState } from 'react';
import { Box, Button, Typography, Grid, Paper } from '@mui/material';

const generateRandomColor = (): string => {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
};

const App: React.FC = () => {
  const [currentPalette, setCurrentPalette] = useState<string[]>([]);
  const [savedPalettes, setSavedPalettes] = useState<string[][]>([]);

  const generatePalette = () => {
    const newPalette = Array.from({ length: 5 }, generateRandomColor);
    setCurrentPalette(newPalette);
  };

  const savePalette = () => {
    if (currentPalette.length > 0) {
      setSavedPalettes([...savedPalettes, currentPalette]);
    }
  };

  const deletePalette = (index: number) => {
    setSavedPalettes(savedPalettes.filter((_, i) => i !== index));
  };

  return (
    <Box mt={4} p={2}>
      <Button variant="contained" color="primary" onClick={generatePalette}>
        Generate Palette
      </Button>

      {currentPalette.length > 0 && (
        <Box mt={3}>
          <Grid container spacing={2} justifyContent="center">
            {currentPalette.map((color, index) => (
              <Grid item key={index}>
                <Paper
                  sx={{
                    bgcolor: color,
                    color: 'white',
                    p: 2,
                    textAlign: 'center',
                    borderRadius: 1,
                    minWidth: 80,
                  }}
                >
                  {color}
                </Paper>
              </Grid>
            ))}
          </Grid>
          <Box mt={2}>
            <Button variant="contained" color="success" onClick={savePalette}>
              Save Palette
            </Button>
          </Box>
        </Box>
      )}

      {savedPalettes.length > 0 && (
        <Box mt={4}>
          <Typography variant="h6">Saved Palettes</Typography>
          <Grid container spacing={3} direction="column">
            {savedPalettes.map((palette, index) => (
              <Grid item key={index}>
                <Paper sx={{ p: 2 }}>
                  <Grid container spacing={1}>
                    {palette.map((color, idx) => (
                      <Grid item key={idx}>
                        <Paper
                          sx={{
                            bgcolor: color,
                            color: 'white',
                            p: 2,
                            textAlign: 'center',
                            borderRadius: 1,
                            minWidth: 80,
                          }}
                        >
                          {color}
                        </Paper>
                      </Grid>
                    ))}
                  </Grid>
                  <Box mt={1}>
                    <Button
                      variant="contained"
                      color="error"
                      onClick={() => deletePalette(index)}
                    >
                      Delete
                    </Button>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
    </Box>
  );
};

export default App;
