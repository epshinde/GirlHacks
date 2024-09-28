// src/components/UploadPage.js
import React, { useState } from 'react';
import BackButton from './BackButton';

const UploadPage = () => {
    const [audioFile, setAudioFile] = useState(null);
    const [slidesFile, setSlidesFile] = useState(null);
    const [recording, setRecording] = useState(false);
    const [mediaRecorder, setMediaRecorder] = useState(null);

    const handleAudioUpload = (event) => {
        setAudioFile(event.target.files[0]);
    };

    const handleSlidesUpload = (event) => {
        setSlidesFile(event.target.files[0]);
    };

    const startRecording = () => {
        navigator.mediaDevices.getUserMedia({ audio: true })
            .then((stream) => {
                const recorder = new MediaRecorder(stream);
                setMediaRecorder(recorder);

                recorder.ondataavailable = (event) => {
                    setAudioFile(new Blob([event.data], { type: 'audio/wav' }));
                };

                recorder.start();
                setRecording(true);
            })
            .catch((error) => {
                console.error("Error accessing microphone: ", error);
            });
    };

    const stopRecording = () => {
        if (mediaRecorder) {
            mediaRecorder.stop();
            setRecording(false);
        }
    };

    const handleSubmit = () => {
        // Handle upload logic here
        // Send audioFile and slidesFile to the backend for analysis
        console.log('Uploading audio:', audioFile);
        console.log('Uploading slides:', slidesFile);
    };

    return (
        <div style={styles.container}>
            <h1>Upload Your Audio and Slides</h1>

            <div style={styles.section}>
                <h2>Audio</h2>
                <input
                    type="file"
                    accept=".wav"
                    onChange={handleAudioUpload}
                    style={styles.input}
                />
                <div>
                    <button onClick={startRecording} disabled={recording} style={styles.recordButton}>
                        {recording ? "Recording..." : "Record Audio"}
                    </button>
                    <button onClick={stopRecording} disabled={!recording} style={styles.recordButton}>
                        Stop Recording
                    </button>
                </div>
            </div>

            <div style={styles.section}>
                <h2>Slides</h2>
                <input
                    type="file"
                    accept=".pptx, .pdf"
                    onChange={handleSlidesUpload}
                    style={styles.input}
                />
            </div>

            <button onClick={handleSubmit} style={styles.submitButton}>
                Submit for Analysis
            </button>

            {/* Back Button */}
            <BackButton to="/ai" />
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        padding: '20px',
    },
    section: {
        margin: '20px 0',
        width: '100%', // Ensures sections take full width
    },
    input: {
        margin: '10px 0',
        padding: '10px',
        borderRadius: '5px',
        border: '1px solid #ccc',
        width: '80%',
    },
    recordButton: {
        padding: '10px 20px',
        backgroundColor: '#FFB3BA', // Pastel Pink
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        margin: '10px 5px',
        transition: 'background-color 0.3s ease',
    },
    submitButton: {
        padding: '10px 20px',
        backgroundColor: '#FF677D', // Pastel Red
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        margin: '20px 0',
        transition: 'background-color 0.3s ease',
    }
};

export default UploadPage;
