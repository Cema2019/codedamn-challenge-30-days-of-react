import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { CssBaseline, Box, Typography, useMediaQuery } from "@mui/material";
import Navigation from "../components/Navigation";
import { routeConfig } from "../routes/routeConfig";

const App: React.FC = () => {

  const isSmallScreen = useMediaQuery("(max-width:600px)");
  
  return (
    <Router>
      <CssBaseline />
      <Box sx={{ display: "flex" }}>

        <Navigation drawerWidth={120} />

        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            mt: isSmallScreen ? "48px" : 0,
          }}
        >
          <Typography variant="h4" align="center" gutterBottom>
            30 Days of React
          </Typography>

          <Routes>
            {routeConfig.map(({ path, element }, index) => (
              <Route key={index} path={path} element={element} />
            ))}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Box>
      </Box>
    </Router>
  );
};

export default App;
