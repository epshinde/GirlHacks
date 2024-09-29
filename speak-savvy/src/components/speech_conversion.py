import time
import azure.cognitiveservices.speech as speechsdk

def recognize_from_audio(audioFileName):
    speech_config = speechsdk.SpeechConfig(subscription='YOUR-API-KEY', region='eastus')
    speech_config.speech_recognition_language="en-US"

    audio_config = speechsdk.audio.AudioConfig(filename=audioFileName)
    speech_recognizer = speechsdk.SpeechRecognizer(speech_config=speech_config, audio_config=audio_config)
    
    done = False
    daText = ""
    
    def stop_cb(evt):
        speech_recognizer.stop_continuous_recognition()
        nonlocal done
        done = True
    
    def addText(evt):
        nonlocal daText
        daText = daText + evt.result.text

    speech_recognizer.recognized.connect(lambda evt: addText(evt))
    speech_recognizer.session_started.connect(lambda evt: print('SESSION STARTED: {}'.format(evt.result.text)))
    speech_recognizer.session_stopped.connect(lambda evt: print('SESSION STOPPED {}'.format(evt.result.text)))
    speech_recognizer.canceled.connect(lambda evt: print('CANCELED {}'.format(evt.result.text)))

    speech_recognizer.session_stopped.connect(stop_cb)
    speech_recognizer.canceled.connect(stop_cb)

    speech_recognizer.start_continuous_recognition()

    while not done:
        time.sleep(.5)

    return daText