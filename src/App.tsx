import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { CssBaseline, Container, Typography } from "@mui/material";
import Navigation from "../components/Navigation";
import { routeConfig } from "../routes/routeConfig";

const App: React.FC = () => {
  return (
    <Router>
      <CssBaseline />
      <Container maxWidth="md">
        <Typography variant="h4" align="center" gutterBottom>
          30 days of React
        </Typography>

        <Navigation />

        <Routes>
          {routeConfig.map(({ path, element }, index) => (
            <Route key={index} path={path} element={element} />
          ))}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;

