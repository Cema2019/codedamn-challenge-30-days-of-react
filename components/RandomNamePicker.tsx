import React, { useState, useRef } from 'react';
import { TextField, Button, Dialog, DialogActions, DialogContent, DialogTitle, Box } from '@mui/material';

const RandomNamePicker: React.FC = () => {
  const [nameList, setNameList] = useState<string[]>([]);
  const [pickedNames, setPickedNames] = useState<string[]>([]);
  const [currentName, setCurrentName] = useState<string>('');
  const [showDialog, setShowDialog] = useState<boolean>(false);
  const pickedNameRef = useRef<string>('');

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && currentName.trim() !== '') {
      setNameList((prev) => [...prev, currentName]);
      setCurrentName('');
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
    <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
      <TextField
        id="nameInput"
        label="Enter Name"
        variant="outlined"
        value={currentName}
        onChange={(e) => setCurrentName(e.target.value)}
        onKeyDown={handleKeyPress}
        fullWidth
      />
      <Box id="nameList">
        {nameList.map((name, index) => (
          <span key={index} className="name">{name}</span>
        ))}
      </Box>
      <Button variant="contained" color="primary" onClick={pickName}>Pick a Name</Button>
      <Box id="pickedList">
        {pickedNames.map((name, index) => (
          <span key={index} className="name">{name}</span>
        ))}
      </Box>
      
      {/* Dialog for showing the picked name */}
      <Dialog open={showDialog} onClose={() => setShowDialog(false)}>
        <DialogTitle>Picked Name</DialogTitle>
        <DialogContent>
          <p>{pickedNameRef.current}</p>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowDialog(false)} color="primary">Close</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default RandomNamePicker;
