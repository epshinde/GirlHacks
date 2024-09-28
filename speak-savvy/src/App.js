// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import SelectCoach from './components/SelectCoach';
import AICoach from './components/AICoach';
import SpeechAnalysis from './components/SpeechAnalysis';
import SlidesToSpeech from './components/SlidesToSpeech';
import ProfessionalCoach from './components/ProfessionalCoach';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/select-coach" element={<SelectCoach />} />
                <Route path="/ai-coach" element={<AICoach />} />
                <Route path="/speech-analysis" element={<SpeechAnalysis />} />
                <Route path="/slides-to-speech" element={<SlidesToSpeech />} />
                <Route path="/professional-coach" element={<ProfessionalCoach />} />
            </Routes>
        </Router>
    );
};

export default App;
