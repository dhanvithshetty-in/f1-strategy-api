import reflex as rx
import joblib
import pandas as pd
import numpy as np

PRIMARY_ACCENT = "#00F0FF"
SECONDARY_ACCENT = "#0D9488"
ROOT_BACKGROUND = "radial-gradient(circle at 50% 50%, #061f24 0%, #010408 100%)"
PANEL_BACKGROUND = "rgba(11, 12, 15, 0.85)"

# Load the ML Brain
model = joblib.load('models/f1_tire_model.pkl')
model_columns = joblib.load('models/model_columns.pkl')


class DashboardState(rx.State):
    """Manages reactive calculations and structural state metrics."""
    tyre_life: float = 1.0
    fuel_load: float = 100.0
    compound: str = "SOFT"
    predicted_delta: float = 0.0

    def calculate_prediction(self):
        input_data = {
            "TyreLife": int(self.tyre_life),
            "FuelLoad": self.fuel_load,
            "Compound_SOFT": 1 if self.compound == 'SOFT' else 0,
            "Compound_MEDIUM": 1 if self.compound == 'MEDIUM' else 0,
            "Compound_HARD": 1 if self.compound == 'HARD' else 0,
            "Tire_Fuel_Interaction": self.tyre_life / (self.fuel_load + 1)
        }
        df = pd.DataFrame([input_data])
        df = df.reindex(columns=model_columns, fill_value=0)
        self.predicted_delta = round(float(model.predict(df)[0]), 3)

    def set_tyre_life(self, val: list[float]):
        self.tyre_life = val[0]
        self.calculate_prediction()

    def set_fuel_load(self, val: list[float]):
        self.fuel_load = val[0]
        self.calculate_prediction()

    def select_compound(self, comp_name: str):
        self.compound = comp_name
        self.calculate_prediction()

    @rx.var
    def deg_severity_color(self) -> str:
        if self.predicted_delta < 1.8:
            return "#00FFB2" 
        elif self.predicted_delta < 2.5:
            return "#FFB800" 
        return "#FF0055" 

    @rx.var
    def deg_label(self) -> str:
        if self.predicted_delta < 1.8:
            return "OPTIMAL"
        elif self.predicted_delta < 2.5:
            return "DEGRADING"
        return "CRITICAL"

    @rx.var
    def interaction_index(self) -> str:
        return str(round(self.tyre_life / (self.fuel_load + 1), 3))

    @rx.var
    def tyre_life_display(self) -> str:
        return str(int(self.tyre_life))

    @rx.var
    def fuel_load_display(self) -> str:
        return str(int(self.fuel_load))

    @rx.var
    def predicted_delta_str(self) -> str:
        return f"{self.predicted_delta:.3f}"


# ─── GLASSMORPHISM PANEL ───────────────────────────────────────────────────────
def glass_panel(*children, **props) -> rx.Component:
    panel_position = props.pop("position", "relative")
    
    return rx.box(
        *children,
        background=PANEL_BACKGROUND,
        border="1px solid rgba(255, 255, 255, 0.04)",
        border_radius="16px",
        box_shadow=(
            "0 12px 40px rgba(0,0,0,0.75), "
            "inset 0 1px 0 rgba(255,255,255,0.02)"
        ),
        backdrop_filter="blur(16px)",
        position=panel_position,
        overflow="hidden",
        width="100%",
        height="100%",
        **props
    )


# ─── SECTION LABEL ────────────────────────────────────────────────────────────
def section_label(number: str, title: str) -> rx.Component:
    return rx.vstack(
        rx.hstack(
            rx.box(
                rx.text(
                    number,
                    color=PRIMARY_ACCENT, 
                    size="1",
                    font_family="monospace",
                    font_weight="700",
                    letter_spacing="1px"
                ),
                padding_x="6px",
                padding_y="1px",
                border=f"1px solid {PRIMARY_ACCENT}",
                border_radius="4px",
                background="rgba(0, 240, 255, 0.08)"
            ),
            rx.text(
                "//",
                color="#444448",
                size="1",
                font_family="monospace"
            ),
            spacing="2",
            align_items="center"
        ),
        rx.text(
            title,
            color="#FFFFFF",
            size="2",
            font_weight="700",
            letter_spacing="1px",
            font_family="monospace"
        ),
        spacing="2",
        align_items="start",
        margin_bottom="20px"
    )


# ─── COMPOUND BUTTON ──────────────────────────────────────────────────────────
def compound_button(name: str, color_hex: str, glow_hex: str, is_active) -> rx.Component:
    return rx.box(
        # Glow background layer
        rx.box(
            position="absolute",
            top="0", left="0", right="0", bottom="0",
            border_radius="10px",
            background=rx.cond(is_active, glow_hex, "transparent"),
            transition="all 0.3s ease",
            pointer_events="none"
        ),
        # Content row
        rx.hstack(
            rx.box(
                width="10px",
                height="10px",
                border_radius="50%",
                background=color_hex,
                box_shadow=rx.cond(
                    is_active,
                    f"0 0 12px 3px {color_hex}",
                    f"0 0 4px {color_hex}77"
                ),
                transition="all 0.2s ease",
                flex_shrink="0"
            ),
            rx.vstack(
                rx.text(
                    name,
                    font_weight="700",
                    size="2",
                    letter_spacing="1.5px",
                    color="white",
                    font_family="monospace"
                ),
                rx.text(
                    rx.cond(is_active, "● SELECTED", "○ STANDBY"),
                    size="1",
                    color=rx.cond(is_active, color_hex, "#555558"),
                    letter_spacing="1px",
                    font_family="monospace"
                ),
                spacing="0",
                align_items="start"
            ),
            rx.spacer(),
            rx.box(
                width="6px",
                height="6px",
                border_radius="50%",
                background=rx.cond(is_active, color_hex, "#26262a"),
                transition="all 0.2s ease",
            ),
            spacing="3",
            align_items="center",
            position="relative",
            z_index="1"
        ),
        on_click=lambda: DashboardState.select_compound(name),
        padding_x="18px",
        padding_y="14px",
        width="100%",
        background=rx.cond(is_active, "rgba(22,22,26,0.4)", "rgba(12,12,14,0.2)"),
        border_radius="10px",
        cursor="pointer",
        position="relative",
        border=rx.cond(
            is_active,
            f"1px solid {color_hex}",
            "1px solid rgba(255,255,255,0.03)"
        ),
        transform=rx.cond(is_active, "scale(1.02)", "scale(1)"),
        transition="all 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
        _hover={
            "border_color": color_hex,
            "background": "rgba(22,22,26,0.6)",
            "transform": "scale(1.01)"
        }
    )


# ─── TELEMETRY SLIDER ─────────────────────────────────────────────────────────
def telemetry_slider(
    label: str,
    unit: str,
    value_var,
    min_val: int,
    max_val: int,
    default_val: int,
    on_commit,
    accent: str = PRIMARY_ACCENT 
) -> rx.Component:
    return rx.vstack(
        rx.hstack(
            rx.text(
                label,
                size="1",
                color="#888890",
                letter_spacing="1px",
                font_family="monospace",
                font_weight="700",
                text_transform="uppercase"
            ),
            rx.spacer(),
            rx.hstack(
                rx.text(
                    value_var,
                    size="2",
                    color="white",
                    font_family="monospace",
                    font_weight="700",
                ),
                rx.text(
                    unit,
                    size="1",
                    color="#666668",
                    font_family="monospace",
                ),
                spacing="1",
                align_items="baseline"
            ),
            width="100%",
            align_items="center"
        ),
        rx.box(
            rx.slider(
                min=min_val,
                max=max_val,
                default_value=[default_val],
                on_value_commit=on_commit,
                color_scheme="green", # FIX: Swapped out 'emerald' for native Radix 'green' token
                width="100%",
                size="1"
            ),
            width="100%",
            padding_y="6px",
            style={
                "& [data-radix-slider-track]": {
                    "background": "#16161a",
                    "height": "3px",
                },
                "& [data-radix-slider-range]": {
                    "background": accent,
                },
                "& [data-radix-slider-thumb]": {
                    "width": "12px",
                    "height": "12px",
                    "background": "white",
                    "border": f"2px solid {accent}",
                    "box_shadow": f"0 0 8px {accent}",
                    "transition": "transform 0.1s ease",
                },
                "& [data-radix-slider-thumb]:hover": {
                    "transform": "scale(1.25)",
                },
            }
        ),
        width="100%",
        spacing="1",
        margin_bottom="16px"
    )


# ─── DOT GRID OVERLAY ────────────────────────────────────────────────────────
def dot_grid_overlay() -> rx.Component:
    return rx.box(
        position="absolute",
        top="0", left="0", right="0", bottom="0",
        border_radius="14px",
        pointer_events="none",
        z_index="0",
        style={
            "background_image": (
                "radial-gradient(circle, rgba(255,255,255,0.015) 1px, transparent 1px)"
            ),
            "background_size": "16px 16px",
            "opacity": "0.8",
        }
    )


# ─── DELTA READOUT ────────────────────────────────────────────────────────────
def delta_readout() -> rx.Component:
    return rx.center(
        rx.vstack(
            # Status badge
            rx.box(
                rx.text(
                    DashboardState.deg_label,
                    size="1",
                    color=DashboardState.deg_severity_color,
                    letter_spacing="2px",
                    font_family="monospace",
                    font_weight="700",
                ),
                padding_x="10px",
                padding_y="3px",
                border=rx.cond(
                    DashboardState.predicted_delta < 1.8,
                    "1px solid rgba(0,255,178,0.2)",
                    rx.cond(
                        DashboardState.predicted_delta < 2.5,
                        "1px solid rgba(255,184,0,0.2)",
                        "1px solid rgba(255,0,85,0.2)"
                    )
                ),
                border_radius="4px",
                background=rx.cond(
                    DashboardState.predicted_delta < 1.8,
                    "rgba(0,255,178,0.03)",
                    rx.cond(
                        DashboardState.predicted_delta < 2.5,
                        "rgba(255,184,0,0.03)",
                        "rgba(255,0,85,0.03)"
                    )
                ),
            ),
            # Main delta number
            rx.hstack(
                rx.text(
                    DashboardState.predicted_delta_str,
                    font_size="56px",
                    line_height="0.9",
                    color=DashboardState.deg_severity_color,
                    font_weight="700",
                    font_family="monospace",
                    letter_spacing="-1px",
                ),
                rx.text(
                    "s",
                    font_size="24px",
                    color="#666668",
                    font_family="monospace",
                    margin_left="2px"
                ),
                align_items="baseline",
                spacing="0"
            ),
            rx.text(
                "PREDICTED DEG COST / LAP",
                color="#666668",
                size="1",
                letter_spacing="1px",
                font_family="monospace",
                text_align="center"
            ),
            align_items="center",
            spacing="3"
        ),
        width="100%",
        padding_y="28px",
        margin_y="12px",
        background="rgba(6,6,8,0.6)",
        border_radius="12px",
        border="1px solid rgba(255,255,255,0.02)",
        position="relative",
        z_index="1"
    )


# ─── METRIC ROW ──────────────────────────────────────────────────────────────
def metric_row(label: str, value) -> rx.Component:
    return rx.hstack(
        rx.text(
            label,
            size="1",
            color="#888890",
            letter_spacing="1px",
            font_family="monospace",
            font_weight="500",
            text_transform="uppercase"
        ),
        rx.spacer(),
        rx.text(
            value,
            color="#FFFFFF",
            font_family="monospace",
            size="2",
            font_weight="700"
        ),
        width="100%",
        align_items="center",
        padding_y="10px",
        border_bottom="1px solid rgba(255,255,255,0.015)",
        position="relative",
        z_index="1"
    )


# ─── MAIN PAGE ───────────────────────────────────────────────────────────────
def index() -> rx.Component:
    return rx.box(
        # ── AMBIENT LIGHT BLOBS ──────────────────────────────────────────────
        rx.box(
            position="fixed",
            top="-10%", left="-5%",
            width="600px", height="600px",
            border_radius="50%",
            background="radial-gradient(circle, rgba(13,148,136,0.08) 0%, transparent 65%)",
            pointer_events="none",
            z_index="0"
        ),
        rx.box(
            position="fixed",
            bottom="-10%", right="-5%",
            width="500px", height="500px",
            border_radius="50%",
            background="radial-gradient(circle, rgba(0,240,255,0.08) 0%, transparent 65%)",
            pointer_events="none",
            z_index="0"
        ),

        # ── DASHBOARD CONTAINER ──────────────────────────────────────────────
        rx.vstack(

            # ── NAVBAR ──────────────────────────────────────────────────────
            rx.hstack(
                rx.hstack(
                    rx.box(
                        width="4px", height="24px",
                        background=f"linear-gradient(180deg, {PRIMARY_ACCENT} 0%, {SECONDARY_ACCENT} 100%)",
                        border_radius="2px",
                        box_shadow=f"0 0 12px {PRIMARY_ACCENT}"
                    ),
                    rx.vstack(
                        rx.text(
                            "F1 STRATEGY ENGINE",
                            font_weight="800",
                            font_size="16px",
                            letter_spacing="2px",
                            color="white",
                            font_family="monospace"
                        ),
                        rx.text(
                            "REAL-TIME TIRE DEGRADATION PREDICTOR",
                            size="1",
                            color="#888890",
                            letter_spacing="1px",
                            font_family="monospace"
                        ),
                        spacing="0",
                        align_items="start"
                    ),
                    spacing="3",
                    align_items="center"
                ),
                rx.hstack(
                    rx.box(
                        width="6px", height="6px",
                        border_radius="50%",
                        background="#00F0FF",
                        box_shadow="0 0 8px #00F0FF"
                    ),
                    rx.text(
                        "CORE PREDICTOR READY",
                        color="#00F0FF",
                        size="1",
                        letter_spacing="1px",
                        font_family="monospace",
                        font_weight="700"
                    ),
                    spacing="2",
                    align_items="center",
                    padding_x="12px",
                    padding_y="6px",
                    border="1px solid rgba(0,240,255,0.15)",
                    border_radius="6px",
                    background="rgba(0,240,255,0.06)"
                ),
                justify="between",
                width="100%",
                padding_bottom="20px",
                border_bottom="1px solid rgba(255,255,255,0.04)",
                margin_bottom="12px"
            ),

            # ── 3-COLUMN GRID ────────────────────────────────────────────────
            rx.grid(
                # COL 1
                glass_panel(
                    section_label("01", "COMPOUND MATRIX"),
                    rx.vstack(
                        compound_button("SOFT", PRIMARY_ACCENT, "rgba(0,240,255,0.08)", DashboardState.compound == "SOFT"),
                        compound_button("MEDIUM", SECONDARY_ACCENT, "rgba(13,148,136,0.06)", DashboardState.compound == "MEDIUM"),
                        compound_button("HARD", "#7DD3FC", "rgba(125,211,252,0.06)", DashboardState.compound == "HARD"),
                        width="100%",
                        spacing="3"
                    ),
                    rx.box(
                        rx.hstack(
                            rx.text("ACTIVE COMP //", size="1", color="#666668", letter_spacing="1px", font_family="monospace"),
                            rx.text(DashboardState.compound, size="1", color="white", letter_spacing="1px", font_family="monospace", font_weight="700"),
                            spacing="2"
                        ),
                        margin_top="24px",
                        padding_top="14px",
                        border_top="1px solid rgba(255,255,255,0.02)"
                    ),
                    padding="24px"
                ),

                # COL 2
                glass_panel(
                    section_label("02", "LIVE CONFIGURATION"),
                    telemetry_slider("Tire Stint Age", "LAPS", DashboardState.tyre_life_display, 1, 100, 1, DashboardState.set_tyre_life, "#00F0FF"),
                    telemetry_slider("Current Fuel Load", "KG", DashboardState.fuel_load_display, 5, 110, 100, DashboardState.set_fuel_load, "#00F0FF"),
                    
                    rx.divider(border_color="rgba(255,255,255,0.03)", margin_y="16px"),
                    
                    rx.box(
                        rx.text("DERIVED METRICS", size="1", color="#666668", letter_spacing="1px", font_family="monospace", font_weight="700", margin_bottom="6px"),
                        metric_row("Stint Phase", rx.cond(DashboardState.tyre_life <= 15, "PUSH PHASE", rx.cond(DashboardState.tyre_life <= 40, "NOMINAL", "LATE STINT"))),
                        metric_row("Fuel Phase", rx.cond(DashboardState.fuel_load >= 80, "HEAVY", rx.cond(DashboardState.fuel_load >= 40, "MID", "LIGHT"))),
                        width="100%"
                    ),
                    padding="24px"
                ),

                # COL 3
                glass_panel(
                    dot_grid_overlay(),
                    rx.box(
                        section_label("03", "INFERENCE ENGINE"),
                        delta_readout(),
                        rx.vstack(
                            metric_row("INTERACTION INDEX", DashboardState.interaction_index),
                            metric_row("COMPOUND SELECT", DashboardState.compound),
                            metric_row("CURRENT AGE", rx.hstack(rx.text(DashboardState.tyre_life_display, font_family="monospace", size="2", font_weight="700", color="white"), rx.text("LAP", size="1", color="#666668", font_family="monospace"), spacing="1")),
                            width="100%",
                            spacing="0"
                        ),
                        rx.box(position="absolute", top="16px", right="16px", width="16px", height="16px", border_top="1px solid rgba(255,255,255,0.04)", border_right="1px solid rgba(255,255,255,0.04)"),
                        rx.box(position="absolute", bottom="16px", left="16px", width="16px", height="16px", border_bottom="1px solid rgba(255,255,255,0.04)", border_left="1px solid rgba(255,255,255,0.04)"),
                        width="100%"
                    ),
                    padding="24px"
                ),
                columns="3",
                spacing="5",
                width="100%"
            ),

            # ── FOOTER ───────────────────────────────────────────────────────
            rx.hstack(
                rx.hstack(
                    rx.box(width="4px", height="4px", border_radius="50%", background="#00F0FF", box_shadow="0 0 6px #00F0FF"),
                    rx.text("INFERENCE LATENCY < 12ms  //  SYSTEM STATUS: NOMINAL", color="#666668", size="1", letter_spacing="1px", font_family="monospace"),
                    spacing="2",
                    align_items="center"
                ),
                rx.text("ENGINE V2.5.0 // 2026", color="#444448", size="1", letter_spacing="1px", font_family="monospace"),
                justify="between",
                width="100%",
                padding_top="16px",
                border_top="1px solid rgba(255,255,255,0.04)",
                margin_top="12px"
            ),

            on_mount=DashboardState.calculate_prediction,
            spacing="4",
            width="1040px",
            padding="40px",
            background="rgba(5, 6, 8, 0.96)",
            border_radius="24px",
            border="1px solid rgba(255,255,255,0.015)",
            box_shadow="0px 40px 100px rgba(0, 0, 0, 0.95)",
            position="relative",
            z_index="1"
        ),

        # ── ROOT ─────────────────────────────────────────────────────────────
        width="100vw",
        min_height="100vh",
        background=ROOT_BACKGROUND,
        display="flex",
        align_items="center",
        justify="center",
        color="white"
    )


app = rx.App(
    style={
        "body": {
            "margin": "0",
            "padding": "0",
            "background": "#010408"
        }
    }
)
app.add_page(index)