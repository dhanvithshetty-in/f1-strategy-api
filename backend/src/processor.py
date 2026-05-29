import fastf1
import pandas as pd
import os

# 1. Setup Cache (Crucial: This avoids downloading 500MB every time you run)
CACHE_DIR = 'cache/'
if not os.path.exists(CACHE_DIR):
    os.makedirs(CACHE_DIR)
fastf1.Cache.enable_cache(CACHE_DIR)

def get_race_data(year, race_name):
    """
    Downloads race data and adds a simple fuel estimate.
    """
    print(f"🏎️  Fetching {year} {race_name} Grand Prix...")
    
    # Load the session (R = Race)
    session = fastf1.get_session(year, race_name, 'R')
    session.load(telemetry=False, weather=True) # Skip telemetry for speed
    
    laps = session.laps
    
    # Simple Feature Engineering:
    # Cars start with ~110kg and burn roughly 1.6kg per lap.
    laps['FuelLoad'] = 110 - (laps['LapNumber'] * 1.6)
    
    return laps

if __name__ == "__main__":
    races = [
        (2024, 'Bahrain'),
        (2024, 'Saudi Arabia'),
        (2024, 'Australia')
    ]
    
    all_laps = []
    
    for year, race in races:
        try:
            data = get_race_data(year, race)
            all_laps.append(data)
        except Exception as e:
            print(f"⚠️ Could not load {race}: {e}")

    # Combine all races into one big dataset
    final_df = pd.concat(all_laps)
    
    # Save the massive dataset
    output_path = 'data/multi_race_raw.csv'
    final_df.to_csv(output_path, index=False)
    print(f"✅ Success! Combined {len(races)} races into {output_path}")
    
    