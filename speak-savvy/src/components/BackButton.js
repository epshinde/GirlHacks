// src/components/BackButton.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const BackButton = ({ to }) => {
    const navigate = useNavigate();
    
    return (
        <button onClick={() => navigate(to)} style={styles.button}>
            Back
        </button>
    );
};

const styles = {
    button: {
        padding: '10px 20px',
        backgroundColor: '#FFB3BA', // Pastel Pink
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        margin: '20px 0', // Add some margin for spacing
        transition: 'background-color 0.3s ease',
    }
};

export default BackButton;
