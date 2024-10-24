// src/App.js
import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
    const [leftValue, setLeftValue] = useState('');
    const [rightValue, setRightValue] = useState('');

    const handleLeftSubmit = async () => {
        const response = await axios.post('http://localhost:5000/submit', {
            value: parseFloat(leftValue),
            source: 'left',
        });
        setRightValue(response.data.newValue);
    };

    const handleRightSubmit = async () => {
        const response = await axios.post('http://localhost:5000/submit', {
            value: parseFloat(rightValue),
            source: 'right',
        });
        setLeftValue(response.data.newValue);
    };

    return (
        <div className="container">
            <div className="input-container">
                <input
                    type="number"
                    value={leftValue}
                    onChange={(e) => setLeftValue(e.target.value)}
                    placeholder="Left Input"
                />
                <button onClick={handleLeftSubmit}>Submit Left</button>
            </div>
            <div className="input-container">
                <input
                    type="number"
                    value={rightValue}
                    onChange={(e) => setRightValue(e.target.value)}
                    placeholder="Right Input"
                />
                <button onClick={handleRightSubmit}>Submit Right</button>
            </div>
        </div>
    );
}

export default App;
