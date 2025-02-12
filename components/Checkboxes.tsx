import React, { useState } from 'react';
import {
  Container,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
} from '@mui/material';

interface CheckboxItem {
  id: number;
  label: string;
  checked: boolean;
}

const CheckboxList: React.FC = () => {
  const [checkboxes, setCheckboxes] = useState<CheckboxItem[]>([
    { id: 1, label: 'Dogs', checked: false },
    { id: 2, label: 'Cats', checked: false },
    { id: 3, label: 'Cows', checked: false },
    { id: 4, label: 'Deers', checked: false },
  ]);

  const handleCheckboxChange = (id: number): void => {
    setCheckboxes(
      checkboxes.map((checkbox) =>
        checkbox.id === id
          ? { ...checkbox, checked: !checkbox.checked }
          : checkbox
      )
    );
  };

  const handleSelectAll = (): void => {
    const allChecked = checkboxes.every((checkbox) => checkbox.checked);
    setCheckboxes(
      checkboxes.map((checkbox) => ({ ...checkbox, checked: !allChecked }))
    );
  };

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        gap: 2,
      }}
    >
      <Box
        sx={{ display: 'flex', flexDirection: 'column', gap: '5px' }}
      >
        {checkboxes.map((checkbox) => (
          <FormControlLabel
            key={checkbox.id}
            control={
              <Checkbox
                checked={checkbox.checked}
                onChange={() => handleCheckboxChange(checkbox.id)}
              />
            }
            label={checkbox.label}
          />
        ))}
      </Box>
      <Button
        onClick={handleSelectAll}
        variant="contained"
        sx={{
          padding: '10px 20px',
          fontSize: '18px',
          width: '50%',
          borderRadius: '4px',
          backgroundColor: '#333',
          color: '#fff',
          mt: 3,
          transition: 'opacity 0.2s ease',
          '&:hover': { opacity: 0.8 },
        }}
      >
        Select All
      </Button>
    </Container>
  );
};

export default CheckboxList;
