// src/components/StartPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './StartPage.css'; // Create this file for styling

const StartPage = () => {
    const navigate = useNavigate();

    const handleStart = () => {
        navigate('/home'); // Navigate to the Home page
    };


    return (
        <div className="start-page">
            <h1>Welcome to Speak Savvy</h1>
            <p>Enhance your presentation skills with Professional & AI-powered Coaches</p>
            <button onClick={handleStart}>Get Started</button>
            
        </div>
    );
};

export default StartPage;