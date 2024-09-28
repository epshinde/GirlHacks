// src/components/Home.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'; // Import CSS file for styling

const Home = () => {
    const navigate = useNavigate();
    
    // State variables for the form inputs
    const [audience, setAudience] = useState('');
    const [domain, setDomain] = useState('');
    const [intent, setIntent] = useState('');
    const [engagement, setEngagement] = useState('');
    const [goal, setGoal] = useState('');

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // You can store or send the data as needed here
        navigate('/select-coach'); // Navigate to the SelectCoach page
    };

    return (
        <div className="home-page">
            <h1>Presentation Goals</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Audience:</label>
                    <select value={audience} onChange={(e) => setAudience(e.target.value)} required>
                        <option value="">Select Audience</option>
                        <option value="general">General</option>
                        <option value="knowledgeable">Knowledgeable</option>
                        <option value="expert">Expert</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>Domain:</label>
                    <select value={domain} onChange={(e) => setDomain(e.target.value)} required>
                        <option value="">Select Domain</option>
                        <option value="academic">Academic</option>
                        <option value="business">Business</option>
                        <option value="general">General</option>
                        <option value="casual">Casual</option>
                        <option value="creative">Creative</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>Intent:</label>
                    <select value={intent} onChange={(e) => setIntent(e.target.value)} required>
                        <option value="">Select Intent</option>
                        <option value="inform">Inform</option>
                        <option value="describe">Describe</option>
                        <option value="convince">Convince</option>
                        <option value="tell a story">Tell a Story</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>Audience Engagement:</label>
                    <select value={engagement} onChange={(e) => setEngagement(e.target.value)} required>
                        <option value="">Select Engagement Level</option>
                        <option value="no engagement">No Engagement</option>
                        <option value="minimal engagement">Minimal Engagement</option>
                        <option value="considerable engagement">Considerable Engagement</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>What do you want to accomplish with your presentation?</label>
                    <textarea
                        value={goal}
                        onChange={(e) => setGoal(e.target.value)}
                        required
                        rows="4"
                    />
                </div>

                <button type="submit">Continue</button>
            </form>
        </div>
    );
};

export default Home;
