import React from "react";
import { Link } from "react-router-dom";
import { Box, Button } from "@mui/material";

const Navigation: React.FC = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", gap: 2, marginY: 3 }}>
      <Button variant="contained" component={Link} to="/">
        Home
      </Button>
      <Button variant="contained" component={Link} to="/tabs">
        Day 1
      </Button>
      <Button variant="contained" component={Link} to="/temperature">
        Day 2
      </Button>
      <Button variant="contained" component={Link} to="/name-picker">
        Day 3
      </Button>
    </Box>
  );
};

export default Navigation;
