import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import SelectCoach from './components/SelectCoach';
import AICoach from './components/AICoach';
import SpeechAnalysis from './components/SpeechAnalysis';
import SlidesToSpeech from './components/SlidesToSpeech';
import ProfessionalCoach from './components/ProfessionalCoach';
import StartPage from './components/StartPage';
import Feedback from './components/Feedback';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<StartPage />} />
                <Route path="/home" element={<Home />} />
                <Route path="/select-coach" element={<SelectCoach />} />
                <Route path="/ai-coach" element={<AICoach />} />
                <Route path="/speech-analysis" element={<SpeechAnalysis />} />
                <Route path="/slides-to-speech" element={<SlidesToSpeech />} />
                <Route path="/professional-coach" element={<ProfessionalCoach />} />
                <Route path="/feedback" element={<Feedback />} />
                <Route path="/startPage" element={<StartPage />} />
            </Routes>
        </Router>
    );
};

export default App;