import React, { useState } from 'react';
import Recorder from 'recorder-js';
import './SpeechAnalysis.css';
import BackButton from './BackButton';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SpeechAnalysis = () => {
    const navigate = useNavigate();
    const [audioFile, setAudioFile] = useState(null);
    const [recorder, setRecorder] = useState(null);
    const [recording, setRecording] = useState(false);
    const [audioBlob, setAudioBlob] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleFileUpload = (e) => {
        setAudioFile(e.target.files[0]);
    };

    const startRecording = async () => {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const recorder = new Recorder(audioContext);
        recorder.init(stream);
        setRecorder(recorder);
        recorder.start();
        setRecording(true);
    };

    const stopRecording = async () => {
        const { blob } = await recorder.stop();
        setAudioBlob(blob);
        setRecording(false);
    };

    const playAudio = () => {
        if (audioBlob) {
            const audioURL = URL.createObjectURL(audioBlob);
            const audio = new Audio(audioURL);
            audio.play();
        }
    };

    const handleSubmit = async () => {
        setIsLoading(true);
        const formData = new FormData();
        
        if (audioFile) {
            formData.append('audio', audioFile);
        } else if (audioBlob) {
            formData.append('audio', audioBlob, 'recorded_audio.wav');
        } else {
            alert('Please upload or record an audio file first.');
            setIsLoading(false);
            return;
        }

        formData.append("audience", JSON.parse(localStorage.getItem("presentationPreferences")).audience);
        formData.append("domain", JSON.parse(localStorage.getItem("presentationPreferences")).domain);
        formData.append("intent", JSON.parse(localStorage.getItem("presentationPreferences")).intent);
        formData.append("engagement", JSON.parse(localStorage.getItem("presentationPreferences")).engagement);
        formData.append("goal", JSON.parse(localStorage.getItem("presentationPreferences")).goal);

        localStorage.removeItem("presentationPreferences");

        try {
            const response = await axios.post('http://localhost:5000/api/analyze-speech', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            
            // Assuming the backend returns the analysis result
            const analysisResult = response.data.feedback;
            
            // Store the result in localStorage
            localStorage.setItem('speechAnalysisResult', JSON.stringify(analysisResult));
            formData.delete('audio');
            
            // Navigate to the feedback page
            navigate('/feedback');
        } catch (error) {
            console.error('Error submitting audio for analysis:', error);
            alert('An error occurred while analyzing the speech. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="speech-analysis-container">
            <BackButton to="/ai-coach" />
            <h1>Speech Analysis</h1>
            <div className="file-upload-section">
                <label htmlFor="audioUpload">Upload a WAV File:</label>
                <input 
                    type="file" 
                    id="audioUpload" 
                    accept=".wav" 
                    onChange={handleFileUpload} 
                />
            </div>

            <div className="audio-record-section">
                <h2>Or Record Audio:</h2>
                {!recording ? (
                    <button onClick={startRecording}>Start Recording</button>
                ) : (
                    <button onClick={stopRecording}>Stop Recording</button>
                )}
                {audioBlob && <button onClick={playAudio}>Play Recording</button>}
            </div>

            <div className="button-container">
                <button onClick={handleSubmit} disabled={isLoading}>
                    {isLoading ? 'Analyzing...' : 'Submit for Analysis'}
                </button>
            </div>
        </div>
    );
};

export default SpeechAnalysis;