import joblib
import pandas as pd
import matplotlib.pyplot as plt

from src.paths import MODEL_FILE, COLUMNS_FILE

model = joblib.load(MODEL_FILE)
model_columns = joblib.load(COLUMNS_FILE)


def get_lap_delta(tyre_life, fuel_load, compound):
    input_data = {
        "TyreLife": tyre_life,
        "FuelLoad": fuel_load,
        "Compound_SOFT": 1 if compound == "SOFT" else 0,
        "Compound_MEDIUM": 1 if compound == "MEDIUM" else 0,
        "Compound_HARD": 1 if compound == "HARD" else 0,
        "Tire_Fuel_Interaction": tyre_life / (fuel_load + 1),
    }
    input_df = pd.DataFrame([input_data])
    input_df = input_df.reindex(columns=model_columns, fill_value=0)
    return model.predict(input_df)[0]


def simulate_race_strategy(strategy_plan, total_race_laps=40):
    fuel_load = 100
    fuel_per_lap = 100 / total_race_laps
    race_history = []
    total_penalty = 0
    current_lap = 1

    for stint_idx, (stint_laps, compound) in enumerate(strategy_plan):
        if stint_idx > 0:
            total_penalty += 22.0
            race_history.append(22.0)
            current_lap += 1

        tyre_life = 1
        for _ in range(stint_laps):
            if len(race_history) >= total_race_laps:
                break

            delta = get_lap_delta(tyre_life, fuel_load, compound)
            race_history.append(delta)
            total_penalty += delta

            tyre_life += 1
            fuel_load -= fuel_per_lap
            current_lap += 1

    return total_penalty, race_history


if __name__ == "__main__":
    one_stop_plan = [(20, "SOFT"), (20, "HARD")]
    two_stop_plan = [(15, "SOFT"), (15, "SOFT"), (10, "MEDIUM")]

    print("Simulating Strategy 1: One-Stop (Soft -> Hard)...")
    one_stop_total, one_stop_history = simulate_race_strategy(one_stop_plan)

    print("Simulating Strategy 2: Two-Stop (Soft -> Soft -> Medium)...")
    two_stop_total, two_stop_history = simulate_race_strategy(two_stop_plan)

    print("\nMULTI-STINT RACE OPTIMIZATION RESULTS:")
    print(f"One-Stop Total Penalty (inc. Pit Stop): {round(one_stop_total, 2)} seconds")
    print(f"Two-Stop Total Penalty (inc. Pit Stops): {round(two_stop_total, 2)} seconds")

    if one_stop_total < two_stop_total:
        print(
            f"Recommendation: One-Stop is faster by "
            f"{round(two_stop_total - one_stop_total, 2)}s!"
        )
    else:
        print(
            f"Recommendation: Two-Stop is faster by "
            f"{round(one_stop_total - two_stop_total, 2)}s!"
        )

    print("\nGenerating strategy profile timeline...")
    plt.figure(figsize=(12, 6))
    plt.plot(
        range(1, len(one_stop_history) + 1),
        one_stop_history,
        label="One-Stop (S -> H)",
        color="cyan",
        linewidth=2,
    )
    plt.plot(
        range(1, len(two_stop_history) + 1),
        two_stop_history,
        label="Two-Stop (S -> S -> M)",
        color="magenta",
        linewidth=2,
    )

    plt.gca().set_facecolor("#111111")
    plt.gcf().set_facecolor("#111111")
    plt.tick_params(colors="white")
    plt.title("F1 Multi-Stint Strategy Matrix Over 40 Laps", color="white", fontsize=14)
    plt.xlabel("Race Timeline (Laps)", color="white")
    plt.ylabel("Lap Penalty / Pit Cost (Seconds)", color="white")
    plt.legend()
    plt.grid(color="gray", linestyle="--", alpha=0.2)
    plt.ylim(0, 5)
    plt.show()
