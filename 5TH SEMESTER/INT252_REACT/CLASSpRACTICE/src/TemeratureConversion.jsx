import React, { useState } from 'react';

function TemperatureConversion() {
    const [celsius, setCelsius] = useState('');
    const [fahrenheit, setFahrenheit] = useState('');
    const [history, setHistory] = useState([]);

    const convertCelsiusToFahrenheit = (c) => (c * 9/5) + 32;
    const convertFahrenheitToCelsius = (f) => (f - 32) * 5/9;

    const handleCelsiusChange = (e) => {
        const c = parseFloat(e.target.value);
        setCelsius(e.target.value);
        if (!isNaN(c)) {
            const f = convertCelsiusToFahrenheit(c).toFixed(2);
            setFahrenheit(f);
            addToHistory(c, f);
        } else {
            setFahrenheit('');
        }
    };

    const handleFahrenheitChange = (e) => {
        const f = parseFloat(e.target.value);
        setFahrenheit(e.target.value);
        if (!isNaN(f)) {
            const c = convertFahrenheitToCelsius(f).toFixed(2);
            setCelsius(c);
            addToHistory(c, f);
        } else {
            setCelsius('');
        }
    };

    const addToHistory = (c, f) => {
        setHistory([...history, `${c}°C = ${f}°F`]);
    };

    const clearHistory = () => {
        setHistory([]);
    };

    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <h2>Temperature Converter</h2>
            <div>
                <label>
                    Celsius
                    <input
                        type="number"
                        value={celsius}
                        onChange={handleCelsiusChange}
                    />
                </label>
                <span> = </span>
                <label>
                    Fahrenheit
                    <input
                        type="number"
                        value={fahrenheit}
                        onChange={handleFahrenheitChange}
                    />
                </label>
            </div>

            <h3>Conversion History</h3>
            <ul>
                {history.map((record, index) => (
                    <li key={index}>{record}</li>
                ))}
            </ul>
            <button onClick={clearHistory}>Clear History</button>
        </div>
    );
}

export default TemperatureConversion;
