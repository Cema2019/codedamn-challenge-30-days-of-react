import HomePage from '../components/HomePage';
import Tabs from '../components/Tabs';
import TemperatureConverter from '../components/TemperatureConverter';
import RandomNamePicker from '../components/RandomNamePicker';
import LoanCalculator from '../components/LoanCalculator';
import ReactCounterBug from '../components/ReactCounterBug';
import SimplePagination from '../components/SimplePagination';
import MultiplicationTable from '../components/MultiplicationTable';
import HoverCounter from '../components/HoverCounter';
import ToggleSwitch from '../components/ToggleSwitch';
import DaysUntilElement from '../components/DaysUntilElement';
import UseTheme from '../components/UseTheme';
import ParagraphToggling from '../components/ParagraphToggling';
import TipCalculator from '../components/TipCalculator';
import BasicPolling from '../components/BasicPolling';
import InterestCalculator from '../components/InterestCalculator';
import SimpleClock from '../components/SimpleClock';
import SignUpForm from '../components/SignUpForm';
import ClickMe from '../components/ClickMe';
import ColorPalletGenerator from '../components/ColorPalletGenerator';
import DistanceConverter from '../components/DistanceConverter';
import FaqComponent from '../components/FaqComponent';
import CorrectAnswers from '../components/correct-answers/CorrectAnswers';
import SimpleTimer from '../components/SimpleTimer';
import StateMismatch from '../components/StateMismatch';
import RatingComponent from '../components/RatingComponent';
import CharacterCounter from '../components/CharacterCounter';
import Checkboxes from '../components/Checkboxes';
import LocalStorage from '../components/LocalStorage';

export const routeConfig = [
  { path: '/', element: <HomePage />, label: 'Home' },
  { path: '/tabs', element: <Tabs />, label: 'Day 1' },
  { path: '/temperature', element: <TemperatureConverter />, label: 'Day 2' },
  { path: '/name-picker', element: <RandomNamePicker />, label: 'Day 3' },
  { path: '/loan-calculator', element: <LoanCalculator />, label: 'Day 4' },
  { path: '/react-counter-bug', element: <ReactCounterBug />, label: 'Day 5' },
  { path: '/simple-pagination', element: <SimplePagination />, label: 'Day 6' },
  {
    path: '/multiplication-table',
    element: <MultiplicationTable />,
    label: 'Day 7',
  },
  { path: '/hover-counter', element: <HoverCounter />, label: 'Day 8' },
  { path: '/toggle-switch', element: <ToggleSwitch />, label: 'Day 9' },
  {
    path: '/days-until-element',
    element: <DaysUntilElement />,
    label: 'Day 10',
  },
  { path: '/use-theme', element: <UseTheme />, label: 'Day 11' },
  {
    path: '/paragraph-toggling',
    element: <ParagraphToggling />,
    label: 'Day 12',
  },
  { path: '/tip-calculator', element: <TipCalculator />, label: 'Day 13' },
  { path: '/basic-polling', element: <BasicPolling />, label: 'Day 14' },
  {
    path: '/interest-calculator',
    element: <InterestCalculator />,
    label: 'Day 15',
  },
  { path: '/simple-clock', element: <SimpleClock />, label: 'Day 16' },
  { path: '/sign-up-form', element: <SignUpForm />, label: 'Day 17' },
  { path: '/click-me', element: <ClickMe />, label: 'Day 18' },
  {
    path: '/color-pallete',
    element: <ColorPalletGenerator />,
    label: 'Day 19',
  },
  {
    path: '/distance-converter',
    element: <DistanceConverter />,
    label: 'Day 20',
  },
  {
    path: '/faq-component',
    element: <FaqComponent />,
    label: 'Day 21',
  },
  {
    path: '/correct-answers',
    element: <CorrectAnswers />,
    label: 'Day 22',
  },
  {
    path: '/simple-timer',
    element: <SimpleTimer />,
    label: 'Day 23',
  },
  {
    path: '/state-mismatch',
    element: <StateMismatch />,
    label: 'Day 24',
  },
  {
    path: '/rating-component',
    element: <RatingComponent />,
    label: 'Day 25',
  },
  {
    path: '/character-counter',
    element: <CharacterCounter />,
    label: 'Day 26',
  },
  {
    path: '/Checkboxes',
    element: <Checkboxes />,
    label: 'Day 27',
  },
  {
    path: '/local-storage',
    element: <LocalStorage />,
    label: 'Day 28',
  },
];
