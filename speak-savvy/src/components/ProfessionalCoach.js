// src/components/ProfessionalCoach.js
import React, { useState } from 'react';
import BackButton from './BackButton';

const coaches = [
    { id: 1, name: 'Coach A', email: 'coachA@example.com' },
    { id: 2, name: 'Coach B', email: 'coachB@example.com' },
    { id: 3, name: 'Coach C', email: 'coachC@example.com' },
];

const ProfessionalCoach = () => {
    const [selectedCoach, setSelectedCoach] = useState(null);
    const [message, setMessage] = useState('');

    const handleSendMessage = (coach) => {
        // Here you would implement the logic to send a message
        // For now, let's just log the message to the console
        console.log(`Message sent to ${coach.name}: ${message}`);
        setMessage(''); // Clear the message field after sending
    };

    return (
        <div className="professional-coach-container">
            <BackButton to="/select-coach" /> {/* Navigate back to select coach page */}
            <h1>Select a Professional Coach</h1>
            <div className="coaches-list">
                {coaches.map((coach) => (
                    <div key={coach.id} className="coach-card">
                        <h2>{coach.name}</h2>
                        <p>Email: {coach.email}</p>
                        <textarea
                            placeholder="Write your message here..."
                            value={selectedCoach === coach.id ? message : ''}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                        <button onClick={() => handleSendMessage(coach)}>Send Message</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProfessionalCoach;
