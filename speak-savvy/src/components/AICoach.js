// src/components/AICoach.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import BackButton from './BackButton'; // Import the BackButton component

const AICoach = () => {
    const navigate = useNavigate();

    return (
        <div className="ai-coach-page">
            <BackButton to="/select-coach" /> {/* Navigate back to Select Your Coach page */}
            <h1>Choose AI Analysis</h1>
            <div className="button-container">
                <button onClick={() => navigate('/speech-analysis')}>
                    Speech Analysis
                </button>
                <button onClick={() => navigate('/slides-to-speech')}>
                    Slides to Speech
                </button>
            </div>
        </div>
    );
};

export default AICoach;
