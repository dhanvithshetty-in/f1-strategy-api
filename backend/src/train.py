import pandas as pd
import joblib
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestRegressor
from sklearn.metrics import mean_absolute_error

from src.paths import CLEANED_DATA_FILE, MODELS_DIR, MODEL_FILE, COLUMNS_FILE


def train_f1_model():
    print("Starting AI training (delta method)...")

    MODELS_DIR.mkdir(parents=True, exist_ok=True)

    df = pd.read_csv(CLEANED_DATA_FILE)

    df["Tire_Fuel_Interaction"] = df["TyreLife"] / (df["FuelLoad"] + 1)
    df = pd.get_dummies(df, columns=["Compound"])

    X = df.drop(columns=["LapDelta", "Driver"])
    y = df["LapDelta"]

    X_train, X_test, y_train, y_test = train_test_split(
        X, y, test_size=0.2, random_state=42
    )

    model = RandomForestRegressor(
        n_estimators=1000,
        max_depth=10,
        min_samples_leaf=2,
        random_state=42,
    )

    print("Learning from track data...")
    model.fit(X_train, y_train)

    predictions = model.predict(X_test)
    error = mean_absolute_error(y_test, predictions)
    print(f"Model accuracy: average error {round(error, 3)} seconds delta.")

    joblib.dump(model, MODEL_FILE)
    joblib.dump(X.columns.tolist(), COLUMNS_FILE)
    print(f"Model saved to {MODELS_DIR}")


if __name__ == "__main__":
    train_f1_model()
