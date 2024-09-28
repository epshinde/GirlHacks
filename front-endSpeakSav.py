import streamlit as st
from streamlit_webrtc import webrtc_streamer, WebRtcMode
import av  # Used for audio processing
import numpy as np
import soundfile as sf  # For audio file handling

# Function to apply CSS styling
def apply_custom_css():
    st.markdown(
        """
        <style>
        /* Centering elements */
        .center {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
        }

        /* Button styling */
        .stButton > button {
            background-color: #6E7DAB; /* Soft blue */
            color: #D1E3DD; /* Light text */
            padding: 15px 30px; /* Increased padding for bigger buttons */
            font-size: 18px; /* Larger font size */
            border-radius: 8px; /* Rounded corners */
            border: none; /* Remove default border */
            cursor: pointer; /* Pointer cursor on hover */
        }

        /* Button hover effect */
        .stButton > button:hover {
            background-color: #5762D5; /* Darker blue on hover */
            color: #FFFFFF; /* White text on hover */
        }

        /* Header styling */
        h1, h2, h3 {
            text-align: center; /* Center-align headers */
        }

        /* File uploader spacing */
        .file-uploader {
            margin-bottom: 20px; /* Space below the instruction */
        }

        /* Additional spacing for file upload instructions */
        .stFileUploader {
            margin-top: 10px; /* Space above the button */
        }
        </style>
        """,
        unsafe_allow_html=True
    )

# Apply custom CSS
apply_custom_css()

# Initialize session state for navigation
if 'page' not in st.session_state:
    st.session_state['page'] = 'home'

# Navigation function to change page
def navigate_to(page):
    st.session_state['page'] = page

# Function to process the recorded audio data
def process_audio(audio_data):
    # Example: Saving audio data to a WAV file (optional, for debugging)
    # sf.write('recorded_audio.wav', audio_data, samplerate=44100)
    st.write("Processing audio for speech-to-text...")  # Placeholder for processing

# Define audio recording callback
def audio_callback(frame):
    audio = frame.to_ndarray()
    process_audio(audio)  # Process audio directly after recording
    return av.AudioFrame.from_ndarray(audio, format="wav")

# HOME PAGE
if st.session_state['page'] == 'home':
    st.title('Welcome to SpeakSavvy')
    st.write("Please choose how you'd like to proceed:")

    col1, col2 = st.columns(2)
    with col1:
        st.button("AI-Powered Analysis", on_click=lambda: navigate_to('ai'))
    with col2:
        st.button("Real Presentation Coach", on_click=lambda: navigate_to('real_coach'))

# AI-POWERED ANALYSIS PAGE
elif st.session_state['page'] == 'ai':
    st.title('AI-Powered Presentation Analysis')

    # Speech-to-Text Analysis
    st.header('Speech-to-Text Analysis')
    
    # Option to upload or record audio
    col1, col2 = st.columns(2)
    
    with col1:
        uploaded_audio = st.file_uploader("Upload your audio file", type=['wav'])
        if uploaded_audio is not None:
            st.audio(uploaded_audio, format='audio/wav')
            # Process uploaded audio
            process_audio(uploaded_audio.read())  
    
    with col2:
        st.write("Or record your audio:")
        
        # Only audio without showing video
        webrtc_ctx = webrtc_streamer(
            key="audio", 
            mode=WebRtcMode.SENDONLY, 
            audio_receiver_size=1024, 
            audio_frame_callback=audio_callback,
            media_stream_constraints={"audio": True, "video": False},  # Only audio
            video_frame_callback=None,  # No video frame callback
        )

        if webrtc_ctx.audio_receiver:
            st.write("Recording in progress...")

    # Slides Analysis
    st.header('Slides Analysis')
    uploaded_slides = st.file_uploader("Upload your slides", type=['pptx', 'pdf'])
    if uploaded_slides is not None:
        st.write("Slides analysis in progress...")  # Placeholder for analysis

    # Back to Home
    st.button("Back to Home", on_click=lambda: navigate_to('home'))

# REAL PRESENTATION COACH PAGE
elif st.session_state['page'] == 'real_coach':
    st.title('Connect with a Real Presentation Coach')

    # Coach Selection
    st.header('Choose a Presentation Coach')
    coaches = ["Coach A", "Coach B", "Coach C"]
    selected_coach = st.selectbox("Select your coach", coaches)

    # Pairing Action
    if st.button("Pair with Coach"):
        st.write(f"Successfully paired with {selected_coach}. They will contact you soon!")

    # Back to Home
    st.button("Back to Home", on_click=lambda: navigate_to('home'))

# Footer (for all pages)
st.write("---")
st.write("Thank you for using Presentation Coach!")
st.write("Developed by MeMM")
