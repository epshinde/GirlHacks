// src/components/AiGoals.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import BackButton from './BackButton'; // Import BackButton

const AiGoals = () => {
    const navigate = useNavigate();

    const handleGoalsConfirmation = () => {
        navigate('/upload');
    };

    return (
        <div style={styles.container}>
            <h1>Set Your Presentation Goals</h1>
            {/* Goals checkboxes */}
            <label>
                <input type="checkbox" /> Improve clarity of speech
            </label>
            <label>
                <input type="checkbox" /> Increase audience engagement
            </label>
            <label>
                <input type="checkbox" /> Stay within time limits
            </label>
            <label>
                <input type="checkbox" /> Boost presentation confidence
            </label>

            <button onClick={handleGoalsConfirmation} style={styles.confirmButton}>
                Confirm Goals
            </button>

            {/* Back Button */}
            <BackButton to="/" />
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        padding: '20px',
    },
    confirmButton: {
        padding: '10px 20px',
        backgroundColor: '#FF677D', // Pastel Red
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        margin: '20px 0',
        transition: 'background-color 0.3s ease',
    }
};

export default AiGoals;
