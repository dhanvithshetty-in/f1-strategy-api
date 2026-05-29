from typing import Literal

from pydantic import BaseModel, Field

CompoundName = Literal["SOFT", "MEDIUM", "HARD"]


class PredictionInput(BaseModel):
    """JSON body from the Next.js client (camelCase keys)."""

    tyreLife: float = Field(..., gt=0, lt=100)
    fuelLoad: float = Field(..., gt=0, lt=115)
    compound: CompoundName = Field(..., description="Tire compound: SOFT, MEDIUM, or HARD")


class PredictionOutput(BaseModel):
    lapDelta: float = Field(..., description="Predicted lap time delta in seconds")
