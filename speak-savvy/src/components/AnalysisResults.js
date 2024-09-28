import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import './AnalysisResults.css'; // Create a separate CSS file for styling

const AnalysisResults = () => {
    const location = useLocation();
    const { analysisData } = location.state || {}; // Assuming you will pass analysis data through state

    return (
        <div className="analysis-container">
            <h1>Analysis Results</h1>
            {analysisData ? (
                <div className="results">
                    <h2>Speech Analysis</h2>
                    <p>{analysisData.speechAnalysis}</p>

                    <h2>Slides Analysis</h2>
                    <p>{analysisData.slidesAnalysis}</p>
                </div>
            ) : (
                <p>No analysis data available.</p>
            )}
            <Link to="/upload" className="back-button">Go Back</Link>
        </div>
    );
};

export default AnalysisResults;
