// src/components/RealCoach.js
import React from 'react';
import { Link } from 'react-router-dom';

const RealCoach = () => {
    return (
        <div className="center">
            <h1>Connect with a Real Presentation Coach</h1>
            <h2>Choose a Presentation Coach</h2>
            <select>
                <option>Coach A</option>
                <option>Coach B</option>
                <option>Coach C</option>
            </select>
            <div className="button-container">
                <button className="stButton">Pair with Coach</button>
                <Link to="/">
                    <button className="stButton">Back to Home</button>
                </Link>
            </div>
        </div>
    );
};

export default RealCoach;
