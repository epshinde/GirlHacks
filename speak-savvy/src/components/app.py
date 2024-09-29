from flask import Flask, request, jsonify
from flask_cors import CORS
import speech_conversion
import presentation_coach_final
import os
import traceback
import uuid
import time

app = Flask(__name__)
CORS(app)

def delete_file_with_retry(file_path, max_retries=5, delay=1):
    for _ in range(max_retries):
        try:
            if os.path.exists(file_path):
                os.remove(file_path)
            return
        except PermissionError:
            time.sleep(delay)
    raise Exception(f"Failed to delete file {file_path} after {max_retries} attempts")

@app.route('/api/analyze-speech', methods=['POST'])
def analyze_speech():
    if 'audio' not in request.files:
        return jsonify({'error': 'No audio file provided'}), 400

    audio_file = request.files['audio']
    
    # Generate a unique filename
    unique_filename = f"temp_audio_{uuid.uuid4()}.wav"
    temp_path = os.path.join(os.path.dirname(__file__), unique_filename)

    try:
        audio_file.save(temp_path)

        with open(temp_path, 'rb') as file:
            transcript = speech_conversion.recognize_from_audio(temp_path)

        audience = request.form.get('audience')
        domain = request.form.get('domain')
        intent = request.form.get('intent')
        engagement = request.form.get('engagement')
        goal = request.form.get('goal')

        feedback = presentation_coach_final.process_presentation(
            transcript, audience, domain, intent, engagement, goal
        )

        return jsonify({'feedback': feedback})
    except Exception as e:
        app.logger.error(f"An error occurred: {str(e)}")
        app.logger.error(traceback.format_exc())
        return jsonify({'error': str(e)}), 500
    finally:
        try:
            delete_file_with_retry(temp_path)
        except Exception as e:
            app.logger.error(f"Failed to delete temporary file: {str(e)}")

if __name__ == '__main__':
    app.run(debug=True)