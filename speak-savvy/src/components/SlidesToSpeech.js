// src/components/SlidesToSpeech.js
import React, { useState } from 'react';
import './SlidesToSpeech.css';
import BackButton from './BackButton'; // Import the BackButton component
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const SlidesToSpeech = () => {
    const [slideFile, setSlideFile] = useState(null);
    const navigate = useNavigate(); // Initialize useNavigate

    const handleFileUpload = (e) => {
        setSlideFile(e.target.files[0]);
    };

    const handleSubmit = () => {
        // Logic to handle slide file submission can go here
        navigate('/feedback'); // Navigate to the Feedback page after submission
    };

    return (
        <div className="slides-to-speech-container">
            <h1>Slides to Speech</h1>
            <div className="file-upload-section">
                <label htmlFor="slidesUpload">Upload your Slides (PPT, PDF):</label>
                <input type="file" id="slidesUpload" accept=".ppt,.pptx,.pdf" onChange={handleFileUpload} />
            </div>

            <div className="actions">
                <button onClick={handleSubmit}>Submit Slides</button>
            </div>
            
            <BackButton to="/ai-coach" /> {/* Place back button at the bottom */}
        </div>
    );
};

export default SlidesToSpeech;
