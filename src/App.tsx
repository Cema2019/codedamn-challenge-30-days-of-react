import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { CssBaseline, Container, Typography } from "@mui/material";
import Navigation from "../components/Navigation";
import Tabs from "../components/Tabs"; // Homepage Component
import TemperatureConverter from "../components/TemperatureConverter";
import RandomNamePicker from "../components/RandomNamePicker";

const App: React.FC = () => {
  return (
    <Router>
      <CssBaseline />
      <Container maxWidth="md">
        <Typography variant="h4" align="center" gutterBottom>
          React Router Example
        </Typography>

        {/* Navigation Bar */}
        <Navigation />

        {/* Routes Configuration */}
        <Routes>
          <Route path="/" element={<Tabs />} /> {/* Homepage */}
          <Route path="/temperature" element={<TemperatureConverter />} />
          <Route path="/name-picker" element={<RandomNamePicker />} />
          {/* Redirect for unmatched routes */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;

