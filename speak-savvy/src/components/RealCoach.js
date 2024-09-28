// src/components/RealCoach.js
import React from 'react';
import BackButton from './BackButton';

const RealCoach = () => {
    return (
        <div style={styles.container}>
            <h1>Connect with a Real Presentation Coach</h1>

            <h2>Choose a Presentation Coach</h2>
            <select>
                <option value="coach-a">Coach A</option>
                <option value="coach-b">Coach B</option>
                <option value="coach-c">Coach C</option>
            </select>

            <button style={styles.pairButton}>
                Pair with Coach
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
    pairButton: {
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

export default RealCoach;
