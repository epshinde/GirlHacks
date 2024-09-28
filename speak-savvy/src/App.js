// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import AiGoals from './components/AiGoals';
import UploadPage from './components/UploadPage'; // Import your new UploadPage component
import RealCoach from './components/RealCoach';
import './App.css';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/ai" element={<AiGoals />} />
                <Route path="/upload" element={<UploadPage />} /> {/* Ensure this route is included */}
                <Route path="/real-coach" element={<RealCoach />} />
            </Routes>
        </Router>
    );
};

export default App;
