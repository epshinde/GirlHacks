# Speak Savvy

**Speak Savvy** is an intelligent presentation coaching platform that helps users improve their public speaking skills through AI-powered analysis and personalized feedback. Whether you're preparing for an academic presentation, business pitch, or casual talk, Speak Savvy provides tools to analyze your speech, evaluate your delivery, and refine your presentation style.

## Features

- **AI Coach**: Get intelligent analysis of your presentations with two specialized modes:
  - **Speech Analysis**: Record or upload audio files to receive detailed feedback on your speech patterns, pace, clarity, and delivery
  - **Slides to Speech**: Convert your presentation slides into optimized speech content tailored to your audience and purpose

- **Professional Coach**: Access guidance from professional presentation coaching resources to help refine your speaking techniques

- **Presentation Preferences**: Customize your coaching experience by specifying:
  - Target audience (General, Knowledgeable, Expert)
  - Domain (Academic, Business, General, Casual, Creative)
  - Intent (Inform, Describe, Convince, Tell a Story)
  - Desired engagement level
  - Specific presentation goals

- **Real-time Feedback**: Get instant feedback on your presentations with detailed analysis and actionable recommendations

- **Audio Recording & Playback**: Built-in recording capabilities with playback functionality to review your speech

## Tech Stack

### Frontend
- **React** 18.3.1 - UI framework
- **React Router DOM** 6.26.2 - Navigation and routing
- **Axios** 1.7.7 - HTTP client for API communication
- **WaveSurfer.js** 7.8.6 - Audio visualization
- **Recorder.js** 1.0.7 - Audio recording capabilities

### Backend
- **Python** - Backend services for speech analysis and presentation coaching
  - `presentation_coach_final.py` - Main presentation coaching logic
  - `speech_conversion.py` - Speech and slides conversion utilities
  - `app.py` - Flask/FastAPI application server

## Getting Started

### Prerequisites
- Node.js and npm
- Python 3.x (for backend services)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd speak-savvy
   ```

2. **Install frontend dependencies**
   ```bash
   npm install
   ```

3. **Set up Python environment** (optional, for full backend functionality)
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   pip install -r requirements.txt
   ```

### Running the Application

**Start the React development server:**
```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000) in your browser.

**Start the Python backend** (if using backend features):
```bash
python src/components/app.py
```

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (one-way operation)

## Project Structure

```
speak-savvy/
├── src/
│   ├── components/
│   │   ├── AICoach.js - AI coaching selection interface
│   │   ├── SpeechAnalysis.js - Speech analysis tool
│   │   ├── SlidesToSpeech.js - Slide to speech conversion
│   │   ├── ProfessionalCoach.js - Professional coaching resources
│   │   ├── SelectCoach.js - Coach selection page
│   │   ├── Home.js - Presentation preferences form
│   │   ├── StartPage.js - Welcome/landing page
│   │   ├── Feedback.js - Feedback display
│   │   └── BackButton.js - Navigation component
│   ├── App.js - Main app routing
│   ├── index.js - Entry point
│   └── App.css - Global styles
├── public/
│   └── index.html
└── package.json
```

## Usage

1. **Start** by visiting the home page to set your presentation preferences
2. **Select** your preferred coaching style (AI Coach or Professional Coach)
3. **Choose** your analysis tool:
   - Upload audio or record directly for speech analysis
   - Convert your slides to optimized speech content
4. **Review** detailed feedback and recommendations
5. **Refine** your presentation based on the coaching insights