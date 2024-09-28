import streamlit as st
from streamlit_webrtc import webrtc_streamer, WebRtcMode
import av  # Used for audio processing

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
            margin-top: 40px; /* Add margin for spacing */
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
            transition: background-color 0.3s, transform 0.3s; /* Smooth transition for hover */
            display: flex; /* Use flex to center content */
            align-items: center; /* Center items vertically */
            justify-content: center; /* Center items horizontally */
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
        }

        /* Button hover effect */
        .stButton > button:hover {
            background-color: #5762D5; /* Darker blue on hover */
            color: #FFFFFF; /* White text on hover */
            transform: translateY(-2px); /* Slight upward movement on hover */
        }

        /* Header styling */
        h1, h2, h3 {
            text-align: center; /* Center-align headers */
            color: #4B4B4D; /* Dark gray for headers */
        }

        /* File uploader spacing */
        .file-uploader {
            margin-bottom: 20px; /* Space below the instruction */
        }

        /* Center the footer */
        footer {
            text-align: center;
            margin-top: 40px; /* Add space above footer */
            font-size: 14px; /* Smaller font for footer */
            color: #7F8C8D; /* Gray color for footer */
        }

        /* Image in buttons */
        .button-img {
            width: 24px; /* Set image width */
            height: 24px; /* Set image height */
            margin-right: 8px; /* Space between image and text */
        }
        </style>
        """,
        unsafe_allow_html=True
    )

apply_custom_css()

# Initialize session state for navigation and goals
if 'page' not in st.session_state:
    st.session_state['page'] = 'home'
if 'goals_set' not in st.session_state:
    st.session_state['goals_set'] = False

# Navigation function to change page
def navigate_to(page):
    st.session_state['page'] = page

# Function to process the recorded audio data
def process_audio(audio_data):
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
        st.markdown(
            f'<button class="stButton" onclick="window.location.href=\'#\'">'
            f'<img class="button-img" src="GirlHacks/ai.jpeg" />'
            f'AI-Powered Analysis</button>',
            unsafe_allow_html=True
        )
    with col2:
        st.markdown(
            f'<button class="stButton" onclick="window.location.href=\'#\'">'
            f'<img class="button-img" src="ai.jpeg" />'
            f'Real Presentation Coach</button>',
            unsafe_allow_html=True
        )

# AI-POWERED ANALYSIS PAGE: Set Presentation Goals
elif st.session_state['page'] == 'ai' and not st.session_state['goals_set']:
    st.title('Set Your Presentation Goals')

    # Goals checkboxes
    goal_clarity = st.checkbox("Improve clarity of speech")
    goal_engagement = st.checkbox("Increase audience engagement")
    goal_time = st.checkbox("Stay within time limits")
    goal_confidence = st.checkbox("Boost presentation confidence")

    # Button to confirm goals and proceed
    col1, col2 = st.columns(2)
    with col1:
        if st.button("Back to Home"):
            navigate_to('home')  # Allows going back to home from goals page
    with col2:
        if st.button("Confirm Goals"):
            st.session_state['goals_set'] = True
            navigate_to('ai')  # Move to the next step

# AI-POWERED ANALYSIS PAGE: Upload Speech and Slides
elif st.session_state['page'] == 'ai' and st.session_state['goals_set']:
    st.title('AI-Powered Presentation Analysis')

    # Add a button to allow returning to the goals page
    if st.button("Edit Presentation Goals"):
        st.session_state['goals_set'] = False
        navigate_to('ai')  # Go back to goals page

    # Speech-to-Text Analysis
    st.header('Speech-to-Text Analysis')
    
    # Option to upload or record audio
    col1, col2 = st.columns(2)
    
    with col1:
        uploaded_audio = st.file_uploader("Upload your audio file", type=['wav'])
        if uploaded_audio is not None:
            st.audio(uploaded_audio, format='audio/wav')
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
