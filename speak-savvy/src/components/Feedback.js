// src/Feedback.js
import React, { useState, useEffect } from 'react';
import './Feedback.css'; // CSS file for general feedback styling
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const Feedback = () => {
    const [feedback, setFeedback] = useState('');
    const navigate = useNavigate(); // Initialize the navigate function

    // Simulated fetch from backend (replace with actual fetch in a real scenario)
    useEffect(() => {
        // Example feedback string coming from backend
        const feedbackString = `
            Your presentation was well-organized but there are areas to improve. You used filler words like 'um' and 'uh' which distracted from the flow. Clarity was good, but more emphasis on engagement would be helpful. Focus on reducing filler words and consider adding more visual aids.
        `;

        // Set the feedback state variable with the string fetched from the backend
        setFeedback(feedbackString);
    }, []); // Empty dependency array means this runs once after initial render

    return (
        <div className="container">
            <h1>Presentation Feedback</h1>
            <div className="feedback-text">
                <p>{feedback}</p> {/* Display the feedback string in a paragraph element */}
            </div>
            <div className="button-container">
                <button onClick={() => navigate('/')}>Return to Home</button> {/* Navigate back to home */}
            </div>
        </div>
    );
};

export default Feedback;
