"use client";

import { SectionLabel } from './CompoundSelector';
import { MetricRow } from './TelemetrySliders';

const SEVERITY_MAP = {
  OPTIMAL: {
    badgeBg: 'color-mix(in srgb, #22c55e 18%, rgba(15,23,42,0.80))',
    badgeBorder: 'rgba(5, 150, 105, 0.35)',
    innerBg: 'linear-gradient(135deg, rgba(34,197,94,0.16), rgba(15,23,42,0.84))',
    call: 'Push window',
  },
  DEGRADING: {
    badgeBg: 'color-mix(in srgb, #f59e0b 20%, rgba(15,23,42,0.80))',
    badgeBorder: 'rgba(217, 119, 6, 0.4)',
    innerBg: 'linear-gradient(135deg, rgba(245,158,11,0.18), rgba(15,23,42,0.84))',
    call: 'Protect tires',
  },
  CRITICAL: {
    badgeBg: 'color-mix(in srgb, #dc2626 20%, rgba(15,23,42,0.80))',
    badgeBorder: 'rgba(220, 38, 38, 0.4)',
    innerBg: 'linear-gradient(135deg, rgba(220,38,38,0.20), rgba(15,23,42,0.84))',
    call: 'Pit window',
  },
};

export default function DeltaReadout({
  predictedDelta,
  severity,
  severityColor,
  compound,
  tyreLife,
  interactionIndex,
  isLoading,
  isError,
}) {
  const meta = SEVERITY_MAP[severity] || SEVERITY_MAP.OPTIMAL;
  const deltaFormatted = isError ? '--' : predictedDelta.toFixed(3);
  const riskPct = Math.min(100, Math.max(4, ((predictedDelta - 1.2) / 1.8) * 100));

  return (
    <div className="flex flex-col h-full relative">
      <SectionLabel number="03" title="INFERENCE ENGINE" />

      <div
        className="relative rounded-md overflow-hidden flex flex-col items-center justify-center py-7 mb-4 dot-matrix min-h-[248px]"
        style={{
          background: meta.innerBg,
          border: '2px solid var(--pit-border)',
          boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.09), var(--pit-shadow-sm)',
        }}
      >
        <div className="scan-line absolute left-0 right-0 top-0 h-px bg-[var(--pit-accent-cyan)] opacity-35" />

        <div
          className="relative z-10 px-3 py-1.5 rounded mb-4 flex items-center gap-2"
          style={{
            background: meta.badgeBg,
            border: `1px solid ${meta.badgeBorder}`,
          }}
        >
          <div
            className="w-2 h-2 rounded-full"
            style={{
              background: severityColor,
              boxShadow: `0 0 8px ${severityColor}`,
              animation: severity === 'CRITICAL' ? 'pulse-glow 1.2s ease-in-out infinite' : 'none',
            }}
          />
          <span
            className="text-[10px] font-bold tracking-[1.5px] font-mono"
            style={{ color: severityColor }}
          >
            {isError ? 'NO SIGNAL' : severity}
          </span>
        </div>

        <div className="relative z-10 flex items-baseline gap-0.5">
          {isLoading ? (
            <span className="text-5xl font-bold font-mono text-[var(--pit-text-dim)]">
              --.---
            </span>
          ) : (
            <>
              <span
                className="text-6xl sm:text-7xl font-black font-mono leading-none delta-glow"
                style={{ color: severityColor }}
              >
                +{deltaFormatted}
              </span>
              <span className="text-2xl font-mono ml-1 text-[var(--pit-text-muted)]">s</span>
            </>
          )}
        </div>

        <span className="relative z-10 text-[10px] tracking-[1px] font-mono mt-3 text-[var(--pit-text-muted)]">
          PREDICTED DEG COST / LAP
        </span>

        <div className="relative z-10 mt-5 w-full max-w-[270px] px-4">
          <div className="flex justify-between text-[8px] uppercase tracking-[1px] font-mono text-[var(--pit-text-dim)] mb-1.5">
            <span>Optimal</span>
            <span>Critical</span>
          </div>
          <div className="relative h-2 overflow-hidden rounded-full bg-[rgba(255,255,255,0.12)]">
            <div className="absolute inset-0 risk-band" />
            <div
              className="absolute top-1/2 h-4 w-1 -translate-y-1/2 rounded-full bg-white"
              style={{ left: `${riskPct}%`, boxShadow: `0 0 12px ${severityColor}` }}
            />
          </div>
        </div>

        <div className="relative z-10 mt-5 grid grid-cols-2 gap-2 w-full max-w-[270px] px-4">
          <ReadoutChip label="Strategy" value={isError ? 'Recover' : meta.call} />
          <ReadoutChip label="Age" value={`${Math.round(tyreLife)} lap`} />
        </div>
      </div>

      <div className="flex flex-col mt-auto">
        <MetricRow label="INTERACTION IDX" value={interactionIndex} />
        <MetricRow label="COMPOUND SELECT" value={compound} />
        <MetricRow label="CURRENT STINT AGE" value={`${Math.round(tyreLife)} LAP`} />
      </div>
    </div>
  );
}

function ReadoutChip({ label, value }) {
  return (
    <div className="rounded-md border border-[var(--pit-border)] bg-[var(--pit-surface-soft)] px-2 py-1.5 text-center min-w-0">
      <span className="block text-[8px] uppercase tracking-[1px] font-mono text-[var(--pit-text-dim)]">
        {label}
      </span>
      <span className="block text-[11px] font-bold text-[var(--pit-text)] truncate">{value}</span>
    </div>
  );
}
