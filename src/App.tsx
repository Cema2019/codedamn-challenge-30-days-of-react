import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { CssBaseline, Container, Typography } from "@mui/material";
import Navigation from "../components/Navigation";
import HomePage from "../components/HomePage"; 
import Tabs from "../components/Tabs"; 
import TemperatureConverter from "../components/TemperatureConverter";
import RandomNamePicker from "../components/RandomNamePicker";

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
          <Route path="/" element={<HomePage />} /> 
          <Route path="/tabs" element={<Tabs />} />
          <Route path="/temperature" element={<TemperatureConverter />} />
          <Route path="/name-picker" element={<RandomNamePicker />} />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;

