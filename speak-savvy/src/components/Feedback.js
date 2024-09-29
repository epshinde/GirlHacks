// src/Feedback.js
import React, { useState, useEffect } from 'react';
import './Feedback.css';
import { useNavigate } from 'react-router-dom';

const Feedback = () => {
    const [feedback, setFeedback] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const storedFeedback = localStorage.getItem('speechAnalysisResult');
        
        if (storedFeedback) {
            setFeedback(JSON.parse(storedFeedback));
            localStorage.removeItem('speechAnalysisResult');
        }
    }, []);

    return (
        <div className="container">
            <h1>Presentation Feedback</h1>
            <div className="feedback-text">
                <pre>{feedback}</pre>
            </div>
            <div className="button-container">
                <button onClick={() => navigate('/')}>Return to Home</button>
            </div>
        </div>
    );
};

export default Feedback;