// src/components/Home.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import BackButton from './BackButton';

const Home = () => {
    const navigate = useNavigate();
    
    const [audience, setAudience] = useState('');
    const [domain, setDomain] = useState('');
    const [intent, setIntent] = useState('');
    const [engagement, setEngagement] = useState('');
    const [goal, setGoal] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const preferences = {audience: audience, domain: domain, intent: intent, engagement: engagement, goal: goal};
        localStorage.setItem('presentationPreferences', JSON.stringify(preferences));
        navigate('/select-coach');
    };

    return (
        <div className="home-page">
            <h1>Presentation Goals</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group-audience">
                    <label>Audience:</label>
                    <select value={audience} onChange={(e) => setAudience(e.target.value)} required>
                        <option value="">Select Audience</option>
                        <option value="general">General</option>
                        <option value="knowledgeable">Knowledgeable</option>
                        <option value="expert">Expert</option>
                    </select>
                </div>

                <div className="form-group-domain">
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

                <div className="form-group-intent">
                    <label>Intent:</label>
                    <select value={intent} onChange={(e) => setIntent(e.target.value)} required>
                        <option value="">Select Intent</option>
                        <option value="inform">Inform</option>
                        <option value="describe">Describe</option>
                        <option value="convince">Convince</option>
                        <option value="tell a story">Tell a Story</option>
                    </select>
                </div>

                <div className="form-group-engagement">
                    <label>Audience Engagement:</label>
                    <select value={engagement} onChange={(e) => setEngagement(e.target.value)} required>
                        <option value="">Select Engagement Level</option>
                        <option value="no engagement">No Engagement</option>
                        <option value="minimal engagement">Minimal Engagement</option>
                        <option value="considerable engagement">Considerable Engagement</option>
                    </select>
                </div>

                <div className="form-group-goal">
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
            <BackButton to="/startPage" />
        </div>
    );
};

export default Home;