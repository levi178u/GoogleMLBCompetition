import asyncio
import csv
import google.generativeai as genai
from typing import List

async def get_mlb_data(api_key: str) -> List[str]:
    """
    Uses Gemini API to get MLB season data and returns it as paragraphs.
    """
    # Configure the Gemini API
    genai.configure(api_key=api_key)
    model = genai.GenerativeModel('gemini-pro')
    
    # Prompt for MLB seasons data
    prompt = """
    Please provide detailed information about MLB seasons from the modern era.

Analyze the following baseball play data and extract both play information and pitch-specific details.
    Format your response as a dictionary with these exact fields:

    Play-level fields:
    - season: The year of the play
    - play_id: The unique identifier for the play
    - title: The description of the play
    - exit_velocity: The ball's exit velocity (if available)
    - launch_angle: The launch angle of the ball (if available)
    - hit_distance: The distance the ball traveled (if available)
    - video_url: The URL of the play video

    Pitch-level fields (list of dictionaries for each pitch):
    - pitch_number: Sequential number of the pitch in the at-bat
    - pitch_type: The type of pitch thrown (code and description)
    - start_speed: Initial velocity of the pitch
    - end_speed: Final velocity of the pitch
    - break_data:
        - break_angle: Angle of the pitch break
        - break_length: Length of the pitch break
        - break_vertical: Vertical break measurement
        - break_horizontal: Horizontal break measurement
        - spin_rate: Pitch spin rate (rpm)
        - spin_direction: Direction of the spin
    - zone: Strike zone location
    - plate_time: Time from release to plate
    - is_strike: Whether the pitch was a strike
    - is_ball: Whether the pitch was a ball
    - description: Description of the pitch result
    - coordinates:
        - x: Horizontal position
        - y: Vertical position
        - pX: Horizontal position at plate
        - pZ: Vertical position at plate

    Format the response in clear, separate paragraphs.
    """
    
    # Make the API call
    response = await asyncio.to_thread(
        lambda: model.generate_content(prompt).text
    )
    
    # Split into paragraphs
    paragraphs = response.split('\n\n')
    return [p.strip() for p in paragraphs if p.strip()]

async def main():
    try:
        # Replace with your actual Gemini API key
        API_KEY = "AIzaSyAxGi7f2FomvRrSOdYAgOVUfcs8knjFT9w"
        
        # Get MLB data from Gemini
        paragraphs = await get_mlb_data(API_KEY)
        
        # Write to CSV
        with open("xyz.csv", mode='w', newline='', encoding='utf-8') as file:
            writer = csv.writer(file)
            writer.writerow(["Paragraph Number", "Content"])
            
            for idx, paragraph in enumerate(paragraphs, start=1):
                writer.writerow([idx, paragraph])
        
        print("Data successfully written to 'MLB.csv'.")
    
    except Exception as e:
        print(f"An error occurred: {e}")

if __name__ == "__main__":
    asyncio.run(main())