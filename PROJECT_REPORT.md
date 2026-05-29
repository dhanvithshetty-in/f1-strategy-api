# F1 Strategy API Project Report

## 1. Purpose
This repository is an F1 strategy prediction project that:
- downloads and processes race session data,
- cleans and engineers features for modeling,
- trains a lap delta regression model,
- serves predictions via FastAPI,
- simulates strategy performance over a stint.

## 2. Key Files

### `src/main.py`
- FastAPI application.
- Endpoints:
  - `GET /` health check.
  - `POST /predict` returns predicted lap delta.
- Loads model artifacts from:
  - `models/f1_tire_model.pkl`
  - `models/model_columns.pkl`
- Creates feature `Tire_Fuel_Interaction` at runtime.

### `src/train.py`
- Loads cleaned dataset from `data/multi_race_cleaned.csv`.
- Builds the feature `Tire_Fuel_Interaction`.
- One-hot encodes `Compound`.
- Trains `RandomForestRegressor`.
- Saves model files:
  - `models/f1_tire_model.pkl`
  - `models/model_columns.pkl`

### `src/strategy_sim.py`
- Loads the trained model and its feature columns.
- Simulates lap-by-lap predictions for soft and hard tire stints.
- Computes and prints total stint penalty.
- Plots predicted delta curves.

### `src/cleaner.py`
- Reads raw race data from `data/multi_race_raw.csv`.
- Converts lap times to seconds.
- Filters abnormal laps.
- Calculates `LapDelta` and removes outliers.
- Adds `Tire_Fuel_Interaction`.
- Writes cleaned output for training.

### `src/processor.py`
- Uses `fastf1` to fetch race session data.
- Generates `FuelLoad` by lap number.
- Saves combined raw data to `data/multi_race_raw.csv`.

### `schema.py`
- Defines `PredictionInput` model for API validation.
- Validates:
  - `TyreLife`
  - `FuelLoad`
  - one-hot compound indicators.

## 3. Dependencies
Listed in `requirements.txt`:
- fastf1
- pandas
- scikit-learn
- xgboost
- fastapi
- uvicorn
- joblib
- pydantic

Note: `xgboost` is currently included but not referenced in the source code.

## 4. Data and Models

### Data
- `data/bahrain_2024.csv`
- `data/cleaned_bahrain_2024.csv`
- `data/multi_race_cleaned.csv`
- `data/multi_race_raw.csv`

### Model artifacts
- `models/f1_tire_model.pkl`
- `models/model_columns.pkl`

## 5. Current Status
- No syntax errors found in the inspected Python files.
- Model files are present under `models/`.
- The shell environment appears to have an active `.venv`.

## 6. Observations
- `processor.py` and `cleaner.py` are responsible for the data pipeline, but the pipeline relies on `TyreLife` being present in raw data.
- `xgboost` is listed in dependencies but unused.
- No automated tests or CI configuration are included in the current repository.

## 7. Recommended Next Steps
- Verify the raw dataset schema before running `src/cleaner.py`.
- Add a `README.md` describing installation and execution steps.
- Add tests for data cleaning, training, and API input validation.
- Remove unused dependencies or integrate `xgboost` if intended.
