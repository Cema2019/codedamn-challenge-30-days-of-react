import React from "react";
import HomePage from "../components/HomePage";
import Tabs from "../components/Tabs";
import TemperatureConverter from "../components/TemperatureConverter";
import RandomNamePicker from "../components/RandomNamePicker";
import LoanCalculator from "../components/LoanCalculator";
import ReactCounterBug from "../components/ReactCounterBug";


export const routeConfig = [
  { path: "/", element: <HomePage />, label: "Home"  },
  { path: "/tabs", element: <Tabs />, label: "Day 1"  },
  { path: "/temperature", element: <TemperatureConverter />, label: "Day 2"  },
  { path: "/name-picker", element: <RandomNamePicker />, label: "Day 3"  },
  { path: "/loan-calculator", element: <LoanCalculator />, label: "Day 4"  },
  { path: "/react-counter-bug", element: <ReactCounterBug />, label: "Day 5"  },
];

