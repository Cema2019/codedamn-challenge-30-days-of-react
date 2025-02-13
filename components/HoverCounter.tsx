import React, { useState } from "react";
import { Button, Typography, Box } from "@mui/material";

const App: React.FC = () => {
  const [hoverCount, setHoverCount] = useState<number>(0);

  const handleHover = () => {
    setHoverCount((prevCount) => prevCount + 1);
  };

  return (
    <Box textAlign="center" p={3} minHeight="90%"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
>
      <Button
        data-testid="button"
        variant="contained"
        color="primary"
        onMouseEnter={handleHover}
      >
        Hover Me
      </Button>
      <Typography data-testid="count" variant="h4" mt={2}>
        {hoverCount}
      </Typography>
    </Box>
  );
};

export default App;
