import { useState } from 'react';
import { Container, TextField, Typography } from '@mui/material';

export default function App() {
  const [comment, setComment] = useState<string>('');

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '90%',
      }}
    >
      <TextField
        id="textInput"
        label="Type your text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        multiline
        rows={4}
        variant="outlined"
        sx={{ width: '300px', mb: 2 }}
      />
      <Typography variant="h6">Character count: {comment.length}</Typography>
    </Container>
  );
}
