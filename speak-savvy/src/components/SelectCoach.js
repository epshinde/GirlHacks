// src/components/SelectCoach.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import BackButton from './BackButton';
import './SelectCoach.css'; // Ensure you import the CSS file

const SelectCoach = () => {
    const navigate = useNavigate();

    return (
        <div className="select-coach-page">
            <h1>Select Your Coach</h1>
            <div className="button-container">
                <button onClick={() => navigate('/professional-coach')}>
                    Professional Coach
                </button>
                <button onClick={() => navigate('/ai-coach')}>
                    AI Coach
                </button>
            </div>
            <BackButton to="/" /> {/* Move the back button here */}
        </div>
    );
};

export default SelectCoach;
