// src/Feedback.js
import React, { useState, useEffect } from 'react';
import './Feedback.css'; // CSS file for general feedback styling
import './AnalysisResults.css'; // Separate CSS file for styling
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const Feedback = () => {
    const [goals, setGoals] = useState('');
    const [clarity, setClarity] = useState('');
    const [fillerWords, setFillerWords] = useState('');
    const [improvement, setImprovement] = useState('');
    const [summary, setSummary] = useState('');
    const navigate = useNavigate(); // Initialize the navigate function

    // Simulated fetch from backend (replace with actual fetch in a real scenario)
    useEffect(() => {
        // Example feedback data that would typically come from your backend
        const feedbackData = {
            goals: "Improve presentation skills and engage the audience.",
            clarity: "The presentation was clear, but some points could be elaborated.",
            fillerWords: "um, uh, like",
            improvement: "Practice speaking without filler words.",
            summary: "Overall, a good presentation with areas for improvement."
        };

        // Set the feedback state variables with the data fetched from backend
        setGoals(feedbackData.goals);
        setClarity(feedbackData.clarity);
        setFillerWords(feedbackData.fillerWords);
        setImprovement(feedbackData.improvement);
        setSummary(feedbackData.summary);
    }, []); // Empty dependency array means this runs once after initial render

    return (
        <div className="container">
            <h1>Presentation Feedback</h1>
            <div className="section">
                <h2>Goals</h2>
                <p>{goals}</p> {/* Display fetched feedback data */}
            </div>
            <div className="section">
                <h2>Clarity</h2>
                <p>{clarity}</p> {/* Display fetched feedback data */}
            </div>
            <div className="section">
                <h2>Filler Words</h2>
                <p>{fillerWords}</p> {/* Display fetched feedback data */}
            </div>
            <div className="section">
                <h2>Improvement</h2>
                <p>{improvement}</p> {/* Display fetched feedback data */}
            </div>
            <div className="section">
                <h2>Summary</h2>
                <p>{summary}</p> {/* Display fetched feedback data */}
            </div>
            <div className="button-container">
                <button onClick={() => navigate('/')}>Return to Home</button> {/* Navigate back to home */}
            </div>
        </div>
    );
};

export default Feedback;
