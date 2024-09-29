import os
from groq import Groq

os.environ["GROQ_API_KEY"] = "API-KEY"

client = Groq()

def analyze_transcript(transcript, audience, domain, intent, engagement, goal):
    prompt = f"""
    Provide feedback in a casual manner that makes it sound like you are giving feedback to your friend! Use personal pronouns, such as 'you', when crafting your response. 
    Analyze the following presentation transcript, considering these user-defined goals:
    Audience: {audience}
    Domain: {domain}
    Intent: {intent}
    Audience Engagement: {engagement}
    Goal: {goal}
    
    1. Analyze the transcript to see how well it aligns with the initial goal. 
    2. Analyze the transcript to see how clearly it communicates the initial goal, describing specifically what the main topics are. 
    3. Count the number of each type of filler words that are used, including the total number of filler words used. Do not list out the filler words they do not use. Some examples of filler words include "um","well", "but","er","literally","actually","ah", "uh",  "so", "basically", "like", "you know", "okay", "right", "I mean". Create a list of each filler word that was used and how many times it was used.
    4. Provide feedback on how the presentation can be improved, with specific examples for each point, considering the specified audience, domain, intent, and goal.

    Presentation transcript:
    {transcript}

    Provide your analysis in a structured format. In addition to this, give specifics regarding what was done well and what was not done well and how to improve upon those areas where improvement is needed,
    based on input given from the user. User inputs are final and do not suggest that they should be changed. 
    Make sure to include a peppy compliment about what was done well, without explicitly stating that this is a compliment. Title this last bit as the 5th section, the Summary section. 
    """
    
    chat_completion = client.chat.completions.create(
        messages=[
            {
                "role": "system",
                "content": "You are an AI assistant that analyzes presentation transcripts."
            },
            {
                "role": "user",
                "content": prompt
            }
        ],
        model="mixtral-8x7b-32768",
        temperature=0.7,
        max_tokens=1000
    )


    return chat_completion.choices[0].message.content

def process_presentation(transcript, audience, domain, intent, engagement, goal):
    return analyze_transcript(transcript, audience, domain, intent, engagement, goal)