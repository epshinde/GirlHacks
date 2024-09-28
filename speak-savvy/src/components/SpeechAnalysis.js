// src/components/SpeechAnalysis.js
import React, { useState } from 'react';
import Recorder from 'recorder-js'; // Assuming you're using Recorder.js for audio recording
import './SpeechAnalysis.css';
import BackButton from './BackButton'; // Import the BackButton component

const SpeechAnalysis = () => {
    const [audioFile, setAudioFile] = useState(null);
    const [recorder, setRecorder] = useState(null);
    const [recording, setRecording] = useState(false);
    const [audioBlob, setAudioBlob] = useState(null);

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

    return (
        <div className="speech-analysis-container">
            <BackButton to="/ai-coach" />
            <h1>Speech Analysis</h1>
            <div className="file-upload-section">
                <label htmlFor="audioUpload">Upload a WAV File:</label>
                <input type="file" id="audioUpload" accept=".wav" onChange={handleFileUpload} />
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

            <div className="actions">
                <button>Submit for Analysis</button>
            </div>
        </div>
    );
};

export default SpeechAnalysis;
