import React, { useState } from "react";
import { Container, Box, Typography, Button } from "@mui/material";

const App: React.FC = () => {
  const [vote1, setVote1] = useState<number>(0);
  const [vote2, setVote2] = useState<number>(0);
  const [vote3, setVote3] = useState<number>(0);
  const [vote4, setVote4] = useState<number>(0);

  return (
    <Container
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h4" id="question">
        Choose your option
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          maxWidth: "300px",
          mt: 2,
        }}
      >
        <Button
          variant="outlined"
          onClick={() => setVote1(vote1 + 1)}
        >
          Option 1 - Votes: {vote1}
        </Button>
        <Button
          variant="outlined"
          onClick={() => setVote2(vote2 + 1)}
        >
          Option 2 - Votes: {vote2}
        </Button>
        <Button
          variant="outlined"
          onClick={() => setVote3(vote3 + 1)}
        >
          Option 3 - Votes: {vote3}
        </Button>
        <Button
          variant="outlined"
          onClick={() => setVote4(vote4 + 1)}
        >
          Option 4 - Votes: {vote4}
        </Button>
      </Box>
    </Container>
  );
};

export default App;
