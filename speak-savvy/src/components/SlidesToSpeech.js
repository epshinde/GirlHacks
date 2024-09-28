// src/components/SlidesToSpeech.js
import React, { useState } from 'react';
import './SlidesToSpeech.css';
import BackButton from './BackButton'; // Import the BackButton component

const SlidesToSpeech = () => {
    const [slideFile, setSlideFile] = useState(null);

    const handleFileUpload = (e) => {
        setSlideFile(e.target.files[0]);
    };

    return (
        <div className="slides-to-speech-container">
            <BackButton to="/ai-coach" /> {/* Update the to prop to navigate to AICoach */}
            <h1>Slides to Speech</h1>
            <div className="file-upload-section">
                <label htmlFor="slidesUpload">Upload your Slides (PPT, PDF):</label>
                <input type="file" id="slidesUpload" accept=".ppt,.pptx,.pdf" onChange={handleFileUpload} />
            </div>

            <div className="actions">
                <button>Submit Slides</button>
            </div>
        </div>
    );
};

export default SlidesToSpeech;
