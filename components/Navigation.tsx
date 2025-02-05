import React from "react";
import { Link } from "react-router-dom";
import { Box, Button } from "@mui/material";
import { routeConfig } from "../routes/routeConfig";

const Navigation: React.FC = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", gap: 2, marginY: 3 }}>
      {routeConfig.map(({ path, label }) => (
        <Button
          key={path}
          variant="contained"
          component={Link}
          to={path}
        >
          {label}
        </Button>
      ))}
    </Box>
  );
};

export default Navigation;
