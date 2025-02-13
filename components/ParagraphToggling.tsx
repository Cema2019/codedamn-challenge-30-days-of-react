import React, { useState } from "react";
import { Container, Typography, Button } from "@mui/material";

const App: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(true);

  const toggleVisibility = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <Container
      sx={{
        minHeight: "90%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 2,
      }}
    >
      {isVisible && <Typography variant="body1">This is the paragraph you can toggle.</Typography>}

      <Button variant="contained" color="primary" onClick={toggleVisibility}>
        Toggle Paragraph
      </Button>
    </Container>
  );
};

export default App;
