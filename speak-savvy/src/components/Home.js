// src/components/Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import BackButton from './BackButton'; // Import BackButton

const Home = () => {
    const navigate = useNavigate();

    const handleAiAnalysis = () => {
        navigate('/ai');
    };

    const handleRealCoach = () => {
        navigate('/real-coach');
    };

    return (
        <div style={styles.container}>
            <h1>Welcome to SpeakSavvy</h1>
            <p>Please choose how you'd like to proceed:</p>

            <div style={styles.buttonContainer}>
                <button onClick={handleAiAnalysis} style={styles.button}>
                    AI-Powered Analysis
                </button>
                <button onClick={handleRealCoach} style={styles.button}>
                    Real Presentation Coach
                </button>
            </div>

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
    buttonContainer: {
        display: 'flex',
        justifyContent: 'space-around',
        width: '100%',
        margin: '20px 0',
    },
    button: {
        padding: '10px 20px',
        backgroundColor: '#FF677D', // Pastel Red
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        margin: '0 10px',
        transition: 'background-color 0.3s ease',
    }
};

export default Home;
