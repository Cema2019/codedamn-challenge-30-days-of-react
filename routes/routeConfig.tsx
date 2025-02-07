
import HomePage from "../components/HomePage";
import Tabs from "../components/Tabs";
import TemperatureConverter from "../components/TemperatureConverter";
import RandomNamePicker from "../components/RandomNamePicker";
import LoanCalculator from "../components/LoanCalculator";
import ReactCounterBug from "../components/ReactCounterBug";
import SimplePagination from "../components/SimplePagination";
import MultiplicationTable from "../components/MultiplicationTable";
import HoverCounter from "../components/HoverCounter";
import ToggleSwitch from "../components/ToggleSwitch";
import DaysUntilElement from "../components/DaysUntilElement";
import UseTheme from "../components/UseTheme";
import ParagraphToggling from "../components/ParagraphToggling";

export const routeConfig = [
  { path: "/", element: <HomePage />, label: "Home"  },
  { path: "/tabs", element: <Tabs />, label: "Day 1"  },
  { path: "/temperature", element: <TemperatureConverter />, label: "Day 2"  },
  { path: "/name-picker", element: <RandomNamePicker />, label: "Day 3"  },
  { path: "/loan-calculator", element: <LoanCalculator />, label: "Day 4"  },
  { path: "/react-counter-bug", element: <ReactCounterBug />, label: "Day 5"  },
  { path: "/simple-pagination", element: <SimplePagination />, label: "Day 6"  },
  { path: "/multiplication-table", element: <MultiplicationTable />, label: "Day 7"  },
  { path: "/hover-counter", element: <HoverCounter />, label: "Day 8"  },
  { path: "/toggle-switch", element: <ToggleSwitch />, label: "Day 9"  },
  { path: "/days-until-element", element: <DaysUntilElement />, label: "Day 10"  },
  { path: "/use-theme", element: <UseTheme />, label: "Day 11"  },
  { path: "/paragraph-toggling", element: <ParagraphToggling />, label: "Day 12"  },
];

