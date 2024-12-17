/*Temperature Converter

Welcome to the Celsius to Fahrenheit (and vice versa) converter lab! In this coding challenge, you will be building a simple temperature converter to practice your skills in React.

Objective
Your task is to design a two-way temperature converter:

Convert Celsius to Fahrenheit.
Convert Fahrenheit to Celsius.
Instructions
Setup: This lab provides a complete environment for you. No extra setup is required on your end. Start coding directly!

Input Fields: Implement two input fields:

A Celsius input with the id of celsius.
A Fahrenheit input with the id of fahrenheit.
Both fields should be of the number type.

Default Value: The Celsius input (#celsius) should be initialized with a value of 0 when the application starts.

Synchronization: The most critical aspect of this lab is to keep the Celsius and Fahrenheit inputs synchronized. When a user enters a value in one input, the other should automatically adjust to reflect the converted temperature.

Conversion Formulae
To convert from Celsius to Fahrenheit:
Fahrenheit = (Celsius × 9/5) + 32

To convert from Fahrenheit to Celsius:
Celsius = (Fahrenheit - 32) × 5/9

Challenges Information
Challenge 1: Create Celsius Input
Objective:

Implement an input field to capture temperatures in Celsius.
Requirements:

The input field should have an id attribute labeled celsius.
It must be of type number so only numerical values can be entered.
Challenge 2: Create Fahrenheit Input
Objective:

Design an input field to capture temperatures in Fahrenheit.
Requirements:

The input field must have an id attribute named fahrenheit.
It should be of the type number.
Challenge 3: Initialize Celsius Value
Objective:

Set a starting value for the Celsius input field when the application is loaded.
Requirements:

When the application is initiated, the #celsius input field should automatically have the value 0.
Challenge 4: Synchronize Celsius and Fahrenheit Fields
Objective:

Keep the Celsius and Fahrenheit input fields in sync. If one field is updated, the other should adjust to reflect the right converted temperature.
Requirements:

When a value is entered into the #celsius field, the #fahrenheit field should reflect its Fahrenheit equivalent. Use the formula: Fahrenheit = (Celsius * 9/5) + 32.
Similarly, when a value is inputted into the #fahrenheit field, the #celsius field should adjust to its Celsius equivalent. Use the formula: Celsius = (Fahrenheit - 32) * 5/9.*/

import { useState } from 'react';

function TemperatureConverter() {
  const [celsius, setCelsius] = useState(0);
  const [fahrenheit, setFahrenheit] = useState((celsius * 9/5) + 32);

  const handleCelsiusChange = (e) => {
    const newCelsius = e.target.value;
    setCelsius(newCelsius);
    setFahrenheit((newCelsius * 9/5) + 32);
  };

  const handleFahrenheitChange = (e) => {
    const newFahrenheit = e.target.value;
    setFahrenheit(newFahrenheit);
    setCelsius((newFahrenheit - 32) * 5/9);
  };

  return (
    <div>
      <input
        id="celsius"
        type="number"
        value={celsius} 
        onChange={handleCelsiusChange}
      />
      <input
        id="fahrenheit"
        type="number"
        value={fahrenheit}
        onChange={handleFahrenheitChange}
      />
    </div>
  );
}

export default TemperatureConverter;
