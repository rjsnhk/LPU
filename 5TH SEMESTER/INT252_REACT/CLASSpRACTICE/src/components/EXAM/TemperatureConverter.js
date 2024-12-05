import React, { useState } from "react";

const TemperatureConverter = () => {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');

  const handleCelsiusChange = (e) => {
    const celsiusValue = e.target.value;
    setCelsius(celsiusValue);
    if (celsiusValue === "") {
      setFahrenheit('');
    } else {
      const fahrenheitValue = (celsiusValue * 9 / 5) + 32;
      setFahrenheit(fahrenheitValue.toFixed(1));
    }
  };

  return (
    <div>
      <h1>Temperature Converter</h1>
      <input
        type="number"
        id="celsius"
        value={celsius}
        onChange={handleCelsiusChange}
        placeholder="Celsius"
      />
      {fahrenheit && <p> {celsius}° Celcious is equal to {fahrenheit} °F</p>}
    </div>
  );
};

export default TemperatureConverter