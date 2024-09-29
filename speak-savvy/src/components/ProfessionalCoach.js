// src/components/ProfessionalCoach.js
import React, { useState } from 'react';
import BackButton from './BackButton';
import './ProfessionalCoach.css'; // Import CSS for styling

const coaches = [
    { id: 1, name: 'Coach A', email: 'coachA@example.com' },
    { id: 2, name: 'Coach B', email: 'coachB@example.com' },
    { id: 3, name: 'Coach C', email: 'coachC@example.com' },
];

const ProfessionalCoach = () => {
    const [currentCoachIndex, setCurrentCoachIndex] = useState(0);
    const [message, setMessage] = useState('');

    const handleSendMessage = () => {
        const coach = coaches[currentCoachIndex];
        console.log(`Message sent to ${coach.name}: ${message}`);
        setMessage(''); // Clear the message field after sending
    };

    const nextCoach = () => {
        setCurrentCoachIndex((prevIndex) => (prevIndex + 1) % coaches.length);
    };

    const prevCoach = () => {
        setCurrentCoachIndex((prevIndex) => (prevIndex - 1 + coaches.length) % coaches.length);
    };

    const currentCoach = coaches[currentCoachIndex]; // Get current coach

    return (
        <div className="professional-coach-container">
            <h1>Select a Professional Coach</h1>
            <div className="coach-card">
                <h2>{currentCoach.name}</h2>
                <p>Email: {currentCoach.email}</p>
                <textarea
                    placeholder="Write your message here..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <div className="button-container">
                    <button onClick={handleSendMessage}>Send Message</button>
                    <button onClick={prevCoach} disabled={coaches.length <= 1}>Previous</button>
                    <button onClick={nextCoach} disabled={coaches.length <= 1}>Next</button>
                </div>
            </div>
            <BackButton to="/select-coach" /> {/* Move BackButton to the bottom */}
        </div>
    );
};

export default ProfessionalCoach;
