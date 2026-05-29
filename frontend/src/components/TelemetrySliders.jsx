"use client";

import { SectionLabel } from './CompoundSelector';
import { APP_CONFIG } from '../lib/config';

export const MetricRow = ({ label, value }) => (
  <div
    className="flex items-center justify-between gap-3 w-full py-2.5 text-[11px] font-mono tracking-[0.5px] border-b"
    style={{ borderColor: 'var(--pit-border)' }}
  >
    <span className="text-[var(--pit-text-muted)] uppercase">{label}</span>
    <span className="text-[var(--pit-text)] font-semibold text-right">{value}</span>
  </div>
);

export default function TelemetrySliders({
  tyreLife,
  fuelLoad,
  stintPhase,
  fuelPhase,
  onTyreLifeChange,
  onFuelLoadChange,
}) {
  const sliderStyles = { '--slider-accent': 'var(--pit-accent-cyan)' };

  return (
    <div className="flex flex-col h-full">
      <SectionLabel number="02" title="LIVE CONFIGURATION" />

      <div className="flex flex-col gap-6 flex-1">
        <SliderBlock
          label={APP_CONFIG.SLIDERS.TYRE_LIFE.label}
          value={tyreLife}
          unit={APP_CONFIG.SLIDERS.TYRE_LIFE.unit}
          min={APP_CONFIG.SLIDERS.TYRE_LIFE.min}
          max={APP_CONFIG.SLIDERS.TYRE_LIFE.max}
          onChange={onTyreLifeChange}
          sliderStyles={sliderStyles}
        />
        <SliderBlock
          label={APP_CONFIG.SLIDERS.FUEL_LOAD.label}
          value={fuelLoad}
          unit={APP_CONFIG.SLIDERS.FUEL_LOAD.unit}
          min={APP_CONFIG.SLIDERS.FUEL_LOAD.min}
          max={APP_CONFIG.SLIDERS.FUEL_LOAD.max}
          onChange={onFuelLoadChange}
          sliderStyles={sliderStyles}
        />
      </div>

      <div
        className="mt-6 pt-5 space-y-3"
        style={{ borderTop: '1px solid var(--pit-border)' }}
      >
        <DegradationGraph tyreLife={tyreLife} fuelLoad={fuelLoad} />
        <StatusPill label="Stint Phase" value={stintPhase} />
        <StatusPill label="Fuel Phase" value={fuelPhase} />
      </div>
    </div>
  );
}

function DegradationGraph({ tyreLife, fuelLoad }) {
  const agePct = Math.min(100, Math.max(0, tyreLife));
  const fuelPct = Math.min(100, Math.max(0, (fuelLoad / 110) * 100));

  return (
    <div className="rounded-md border border-[var(--pit-border)] bg-[rgba(8,12,18,0.42)] p-3">
      <div className="flex items-center justify-between mb-3">
        <span className="text-[9px] uppercase tracking-[1.2px] font-mono text-[var(--pit-text-muted)]">
          Tire Life Curve
        </span>
        <span className="text-[9px] font-bold font-mono text-[var(--pit-accent-cyan)]">
          {Math.round(agePct)}%
        </span>
      </div>
      <div className="relative h-20 overflow-hidden rounded bg-[rgba(255,255,255,0.035)] border border-[var(--pit-border)]">
        <div className="absolute inset-0 graph-grid" />
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 240 80" preserveAspectRatio="none" aria-hidden="true">
          <path
            d="M0 16 C42 18, 72 24, 104 34 C144 48, 182 54, 240 68"
            fill="none"
            stroke="rgba(56,189,248,0.36)"
            strokeWidth="2"
          />
          <path
            d="M0 16 C42 18, 72 24, 104 34 C144 48, 182 54, 240 68 L240 80 L0 80 Z"
            fill="url(#degradationFill)"
          />
          <defs>
            <linearGradient id="degradationFill" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="rgba(56,189,248,0.18)" />
              <stop offset="100%" stopColor="rgba(56,189,248,0)" />
            </linearGradient>
          </defs>
        </svg>
        <div
          className="absolute top-0 bottom-0 w-px bg-[var(--pit-accent-f1)]"
          style={{ left: `${agePct}%`, boxShadow: '0 0 12px var(--pit-accent-f1)' }}
        />
        <div
          className="absolute bottom-2 h-1 rounded-full bg-[var(--pit-accent-amber)]"
          style={{ left: '8%', width: `${Math.max(12, fuelPct * 0.72)}%`, opacity: 0.75 }}
        />
      </div>
    </div>
  );
}

function SliderBlock({ label, value, unit, min, max, onChange, sliderStyles }) {
  const pct = ((value - min) / (max - min)) * 100;

  return (
    <div className="flex flex-col gap-3 rounded-lg p-3 bg-[var(--pit-surface-soft)] border border-[var(--pit-border)]">
      <label className="flex items-center justify-between text-[10px] font-mono tracking-[1px] text-[var(--pit-text-muted)] uppercase">
        <span>{label}</span>
        <span className="text-[var(--pit-accent-cyan)] font-bold text-sm">
          {value} {unit}
        </span>
      </label>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="pitwall-slider"
        style={{ ...sliderStyles, '--slider-pct': `${pct}%` }}
      />
      <div className="flex justify-between text-[9px] font-mono text-[var(--pit-text-dim)]">
        <span>{min}</span>
        <span>{Math.round((min + max) / 2)}</span>
        <span>{max}</span>
      </div>
    </div>
  );
}

function StatusPill({ label, value }) {
  return (
    <div className="flex items-center justify-between text-[10px] uppercase tracking-[1px] font-mono">
      <span className="text-[var(--pit-text-muted)]">{label}</span>
      <span
        className="font-bold px-2 py-0.5 rounded"
        style={{
          color: 'var(--pit-accent-cyan)',
          background: 'color-mix(in srgb, var(--pit-accent-cyan) 18%, rgba(15,23,42,0.72))',
        }}
      >
        {value}
      </span>
    </div>
  );
}
