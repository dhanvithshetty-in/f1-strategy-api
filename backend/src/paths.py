"""Repository path resolution — independent of process working directory."""
from pathlib import Path

SRC_DIR = Path(__file__).resolve().parent
BACKEND_DIR = SRC_DIR.parent
PROJECT_ROOT = BACKEND_DIR.parent

MODELS_DIR = BACKEND_DIR / "models"
DATA_DIR = PROJECT_ROOT / "data"

MODEL_FILE = MODELS_DIR / "f1_tire_model.pkl"
COLUMNS_FILE = MODELS_DIR / "model_columns.pkl"
CLEANED_DATA_FILE = DATA_DIR / "multi_race_cleaned.csv"
