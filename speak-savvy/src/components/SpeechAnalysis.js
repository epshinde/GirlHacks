import React, { useState, useEffect, useRef } from 'react';
import Recorder from 'recorder-js';
import WaveSurfer from 'wavesurfer.js';
import './SpeechAnalysis.css';
import BackButton from './BackButton';
import { useNavigate } from 'react-router-dom';

const SpeechAnalysis = () => {
    const navigate = useNavigate();
    const [recorder, setRecorder] = useState(null);
    const [recording, setRecording] = useState(false);
    const [audioBlob, setAudioBlob] = useState(null);
    const [waveform, setWaveform] = useState(null);
    const wavesurferRef = useRef(null);
    const [audioURL, setAudioURL] = useState('');

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
        setAudioURL(URL.createObjectURL(blob)); // Create URL for waveform
        setRecording(false);
    };

    const playAudio = () => {
        if (audioURL) {
            const audio = new Audio(audioURL);
            audio.play();
        }
    };

    const handleSubmit = () => {
        // Add logic to send audioBlob to backend if needed
        navigate('/feedback'); // Navigate to Feedback page
    };

    useEffect(() => {
        if (audioURL && wavesurferRef.current) {
            const ws = WaveSurfer.create({
                container: wavesurferRef.current,
                waveColor: 'orange', // Change this color as desired
                progressColor: 'purple',
                responsive: true,
            });
            ws.load(audioURL);
            setWaveform(ws);

            return () => ws.destroy(); // Cleanup
        }
    }, [audioURL]);

    return (
        <div className="speech-analysis-container">
            <h1>Speech Analysis</h1>
            <div className="waveform" ref={wavesurferRef} />
            <div className="controls">
                <button onClick={startRecording} disabled={recording}>
                    🎤 {/* Symbol for start recording */}
                </button>
                <button onClick={stopRecording} disabled={!recording}>
                    ⏹️ {/* Symbol for stop recording */}
                </button>
                <button onClick={playAudio} disabled={!audioBlob}>
                    ▶️ {/* Symbol for play */}
                </button>
            </div>
            <div className="button-container">
                <button onClick={handleSubmit}>
                    Submit for Analysis
                </button>
            </div>
            <BackButton to="/ai-coach" />
        </div>
    );
};

export default SpeechAnalysis;
