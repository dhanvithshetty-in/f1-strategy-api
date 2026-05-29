import joblib
import pandas as pd
import numpy as np

from src.paths import MODEL_FILE, COLUMNS_FILE

model = joblib.load(MODEL_FILE)
model_columns = joblib.load(COLUMNS_FILE)


def create_sample(tyre_life, fuel_load, compound):
    input_data = {
        "TyreLife": tyre_life,
        "FuelLoad": fuel_load,
        "Compound_SOFT": 1 if compound == "SOFT" else 0,
        "Compound_MEDIUM": 1 if compound == "MEDIUM" else 0,
        "Compound_HARD": 1 if compound == "HARD" else 0,
        "Tire_Fuel_Interaction": tyre_life / (fuel_load + 1),
    }
    df = pd.DataFrame([input_data])
    return df.reindex(columns=model_columns, fill_value=0)


print("--- STEP 1: EDGE CASE TESTING ---")

case_a = create_sample(tyre_life=1, fuel_load=100, compound="SOFT")
pred_a = model.predict(case_a)[0]
print(f"New Softs + Heavy Fuel (100kg) Delta: {round(pred_a, 3)} seconds")

case_b = create_sample(tyre_life=30, fuel_load=10, compound="SOFT")
pred_b = model.predict(case_b)[0]
print(f"30-Lap Softs + Light Fuel (10kg) Delta: {round(pred_b, 3)} seconds")

if pred_b > pred_a:
    print("Physics check passed: worn tires penalized despite low fuel load.")
else:
    print("Physics check failed: model may still be fuel-biased.")

print("\n--- STEP 2: FEATURE IMPORTANCE ---")

importances = model.feature_importances_
indices = np.argsort(importances)[::-1]

print("Feature importance:")
for rank, i in enumerate(indices):
    feature_name = model_columns[i]
    importance_score = importances[i] * 100
    print(f"{rank + 1}. {feature_name.ljust(25)} : {round(importance_score, 2)}%")
