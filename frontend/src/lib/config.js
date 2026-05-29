/**
 * F1 Pit-Wall Strategy Engine - Central Configuration
 * Override with NEXT_PUBLIC_BACKEND_URL in .env.local for production.
 */

export const BACKEND_URL ="https://f1-strategy-backend-dhanvith.onrender.com/predict";
  process.env.NEXT_PUBLIC_BACKEND_URL ?? 'http://localhost:8000/predict';

export const APP_CONFIG = {
  DEBOUNCE_MS: 80,
  THRESHOLDS: {
    OPTIMAL_MAX: 1.8,
    DEGRADING_MAX: 2.5,
  },
  SLIDERS: {
    TYRE_LIFE: { min: 1, max: 100, default: 1, unit: 'LAPS', label: 'TIRE STINT AGE' },
    FUEL_LOAD: { min: 5, max: 110, default: 100, unit: 'KG', label: 'CURRENT FUEL LOAD' },
  },
  COMPOUNDS: [
    {
      name: 'SOFT',
      color: '#FF0055',
      glow: 'rgba(255, 0, 85, 0.20)',
      shadow: '0 0 24px rgba(255, 0, 85, 0.35)',
      border: 'rgba(255, 0, 85, 0.60)',
      label: 'C5 COMPOUND',
      pace: 'Fastest',
      durability: 'Low',
    },
    {
      name: 'MEDIUM',
      color: '#FFCC00',
      glow: 'rgba(255, 204, 0, 0.15)',
      shadow: '0 0 24px rgba(255, 204, 0, 0.30)',
      border: 'rgba(255, 204, 0, 0.60)',
      label: 'C3 COMPOUND',
      pace: 'Balanced',
      durability: 'Medium',
    },
    {
      name: 'HARD',
      color: '#E5E5E5',
      glow: 'rgba(255, 255, 255, 0.08)',
      shadow: '0 0 24px rgba(255, 255, 255, 0.15)',
      border: 'rgba(229, 229, 229, 0.50)',
      label: 'C1 COMPOUND',
      pace: 'Stable',
      durability: 'High',
    },
  ],
};
