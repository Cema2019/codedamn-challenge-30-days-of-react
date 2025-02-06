import React, { useState, KeyboardEvent, ChangeEvent } from "react";
import {
  Container,
  TextField,
  Button,
  List,
  ListItem,
  Typography,
  Paper,
  Box,
} from "@mui/material";

const App: React.FC = () => {
  const [number, setNumber] = useState<string>("");
  const [table, setTable] = useState<string[]>([]);

  const handleGenerateTable = () => {
    const num = Number(number);
    if (num >= 0 && num <= 1000) {
      const newTable: string[] = [];
      for (let i = 1; i <= 20; i++) {
        newTable.push(`${num} x ${i} = ${num * i}`);
      }
      setTable(newTable);
    } else {
      alert("Please enter a number between 0 and 1000.");
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNumber(event.target.value);
    setTable([]);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleGenerateTable();
    }
  };

  return (
    <Container sx={{ padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        Multiplication Table Generator
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
        <TextField
          type="number"
          label="Enter a number"
          variant="outlined"
          value={number}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        <Button variant="contained" color="primary" onClick={handleGenerateTable}>
          Generate Table
        </Button>
      </Box>
      {number && table.length > 0 && (
        <Paper elevation={3} sx={{ padding: 2 }}>
          <List>
            {table.map((item, index) => (
              <ListItem key={index}>
                <Typography>{item}</Typography>
              </ListItem>
            ))}
          </List>
        </Paper>
      )}
    </Container>
  );
};

export default App;
