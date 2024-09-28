// src/components/AiGoals.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AiGoals = () => {
    const [goals, setGoals] = useState({
        clarity: false,
        engagement: false,
        time: false,
        confidence: false,
    });

    const handleChange = (event) => {
        const { name, checked } = event.target;
        setGoals({ ...goals, [name]: checked });
    };

    return (
        <div className="center">
            <h1>Set Your Presentation Goals</h1>
            <label>
                <input type="checkbox" name="clarity" checked={goals.clarity} onChange={handleChange} />
                Improve clarity of speech
            </label>
            <label>
                <input type="checkbox" name="engagement" checked={goals.engagement} onChange={handleChange} />
                Increase audience engagement
            </label>
            <label>
                <input type="checkbox" name="time" checked={goals.time} onChange={handleChange} />
                Stay within time limits
            </label>
            <label>
                <input type="checkbox" name="confidence" checked={goals.confidence} onChange={handleChange} />
                Boost presentation confidence
            </label>
            <div className="button-container">
                <Link to="/">
                    <button className="stButton">Back to Home</button>
                </Link>
                <Link to="/ai-analysis">
                    <button className="stButton">Confirm Goals</button>
                </Link>
            </div>
        </div>
    );
};

export default AiGoals;
