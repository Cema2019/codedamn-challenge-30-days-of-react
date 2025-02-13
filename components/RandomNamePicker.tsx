import React, { useState, useRef } from 'react';
import {
  TextField,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Box,
  Typography,
} from '@mui/material';

const RandomNamePicker: React.FC = () => {
  const [nameList, setNameList] = useState<string[]>([]);
  const [pickedNames, setPickedNames] = useState<string[]>([]);
  const [currentName, setCurrentName] = useState<string>('');
  const [showDialog, setShowDialog] = useState<boolean>(false);
  const pickedNameRef = useRef<string>('');

  const handleAddName = (event?: React.KeyboardEvent<HTMLDivElement>) => {
    // If the event is a keyboard event and the key is not "Enter", do nothing
    if (event && event.key !== 'Enter') {
      return;
    }

    // Add the name to the list if it's not empty
    if (currentName.trim() !== '') {
      setNameList((prev) => [...prev, currentName]);
      setCurrentName(''); // Clear the input field
    }
  };

  const pickName = () => {
    if (nameList.length > 0) {
      const index = Math.floor(Math.random() * nameList.length);
      const name = nameList[index];
      pickedNameRef.current = name; // Store the picked name in a ref to access it later
      setPickedNames((prev) => [...prev, name]);
      setNameList((prev) => prev.filter((_, i) => i !== index));
      setShowDialog(true); // Open the dialog
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      minHeight="90%"
      gap={2}
    >
      <Box display="flex" flexDirection="row" gap={2} alignItems="center">
        <TextField
          id="nameInput"
          label="Enter Name"
          variant="outlined"
          value={currentName}
          onChange={(e) => setCurrentName(e.target.value)}
          onKeyDown={handleAddName}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleAddName()}
        >
          Add Name
        </Button>
      </Box>
      <Box id="nameList" display="flex" flexWrap="wrap" gap={2}>
        {nameList.map((name, index) => (
          <Typography key={index} variant="body1">
            {name}
          </Typography>
        ))}
      </Box>

      <Button variant="contained" color="primary" onClick={pickName}>
        Pick a Name
      </Button>
      <Box id="pickedList" display="flex" flexWrap="wrap" gap={2}>
        {pickedNames.map((name, index) => (
          <Typography key={index} variant="body1" className="name">
            {name}
          </Typography>
        ))}
      </Box>

      {/* Dialog for showing the picked name */}
      <Dialog open={showDialog} onClose={() => setShowDialog(false)}>
        <DialogTitle>Picked Name</DialogTitle>
        <DialogContent>
          <p>{pickedNameRef.current}</p>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowDialog(false)} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default RandomNamePicker;
