import HomePage from "../components/HomePage";
import Tabs from "../components/Tabs";
import TemperatureConverter from "../components/TemperatureConverter";
import RandomNamePicker from "../components/RandomNamePicker";

export const routeConfig = [
  { path: "/", element: <HomePage />, label: "Home"  },
  { path: "/tabs", element: <Tabs />, label: "Day 1"  },
  { path: "/temperature", element: <TemperatureConverter />, label: "Day 2"  },
  { path: "/name-picker", element: <RandomNamePicker />, label: "Day 3"  },
];

