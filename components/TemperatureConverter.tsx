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