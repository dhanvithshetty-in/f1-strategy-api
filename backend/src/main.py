from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import joblib
import pandas as pd

from src.paths import MODEL_FILE, COLUMNS_FILE, MODELS_DIR
from src.schema import PredictionInput, PredictionOutput

app = FastAPI(
    title="F1 Strategy Predictor",
    description="Production-grade inference engine for F1 tire degradation loops.",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://127.0.0.1:3000",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

model = None
model_columns = None

try:
    model = joblib.load(MODEL_FILE)
    model_columns = joblib.load(COLUMNS_FILE)
    print(f"AI model loaded from {MODELS_DIR}")
except Exception as e:
    print("CRITICAL: Could not load model artifacts.")
    print(f"  Expected directory: {MODELS_DIR}")
    print(f"  Run: python -m src.train  (from the backend/ folder)")
    print(f"  Detail: {e}")


@app.get("/")
def home():
    return {
        "status": "ONLINE",
        "framework": "FastAPI",
        "pipeline": "Nominal",
        "modelLoaded": model is not None,
    }


@app.post("/predict", response_model=PredictionOutput)
def predict_lap_delta(data: PredictionInput) -> PredictionOutput:
    if model is None or model_columns is None:
        raise HTTPException(
            status_code=503,
            detail=(
                "Model artifacts not loaded. Train with "
                "`python -m src.train` from the backend/ directory."
            ),
        )

    payload = data.model_dump()
    tyre_life = payload["tyreLife"]
    fuel_load = payload["fuelLoad"]
    compound = payload["compound"]

    input_mapped = {
        "TyreLife": int(round(tyre_life)),
        "FuelLoad": float(round(fuel_load, 2)),
        "Compound_SOFT": 1 if compound == "SOFT" else 0,
        "Compound_MEDIUM": 1 if compound == "MEDIUM" else 0,
        "Compound_HARD": 1 if compound == "HARD" else 0,
        "Tire_Fuel_Interaction": float(tyre_life / (fuel_load + 1)),
    }

    input_df = pd.DataFrame([input_mapped]).reindex(columns=model_columns, fill_value=0)
    prediction = model.predict(input_df)[0]

    return PredictionOutput(lapDelta=round(float(prediction), 3))
