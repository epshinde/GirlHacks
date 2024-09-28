// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Create a CSS file for styling

const Home = () => {
    return (
        <div className="center">
            <h1>Welcome to SpeakSavvy</h1>
            <p>Please choose how you'd like to proceed:</p>
            <div className="button-container">
                <Link to="/ai">
                    <button className="stButton">
                        <img className="button-img" src="ai.jpeg" alt="AI" />
                        AI-Powered Analysis
                    </button>
                </Link>
                <Link to="/real-coach">
                    <button className="stButton">
                        <img className="button-img" src="coach.jpeg" alt="Coach" />
                        Real Presentation Coach
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Home;
