import pandas as pd
import numpy as np

def clean_f1_data(file_path):
    print(f"🧹 Performing Surgical Clean on: {file_path}")
    df = pd.read_csv(file_path)
    
    df['LapTimeSeconds'] = pd.to_timedelta(df['LapTime']).dt.total_seconds()

    # 1. STRONGER FILTER
    # A racing lap is very consistent. Let's use 105% of the median.
    median_lap = df['LapTimeSeconds'].median()
    df = df[df['LapTimeSeconds'] < (median_lap * 1.05)].copy()

    # 2. CALCULATE DELTA
    df['BestLap'] = df.groupby('Driver')['LapTimeSeconds'].transform('min')
    df['LapDelta'] = df['LapTimeSeconds'] - df['BestLap']

    # 3. THE "OUTLIER CRUSHER"
    # If a delta is more than 5 seconds, it's NOT a normal racing lap.
    # We remove these to keep the AI focused on pure tire wear.
    df_clean = df[df['LapDelta'] < 5.0].copy()

    df_clean = df_clean.dropna(subset=['Compound', 'TyreLife', 'FuelLoad', 'LapDelta'])
    
    # Calculate Tire-Fuel Interaction feature
    df_clean['Tire_Fuel_Interaction'] = df_clean['TyreLife'] / (df_clean['FuelLoad'] + 1)
    
    print(f"✅ Cleaned Max Delta: {round(df_clean['LapDelta'].max(), 2)}s") 
    print(f"📊 Laps remaining: {len(df_clean)}")
    
    return df_clean[['Driver', 'Compound', 'TyreLife', 'FuelLoad', 'LapDelta', 'Tire_Fuel_Interaction']]
if __name__ == "__main__":
    raw_file = 'data/multi_race_raw.csv'
    output_file = 'data/multi_race_cleaned.csv'
    
    try:
        cleaned_data = clean_f1_data(raw_file)
        cleaned_data.to_csv(output_file, index=False)
        print(f"Success! Cleaned file created with {len(cleaned_data)} laps.")
    except Exception as e:
        print(f"❌ Error during cleaning: {e}")