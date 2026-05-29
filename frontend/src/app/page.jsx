"use client";

import { usePrediction } from '../hooks/usePrediction';
import GlassPanel from '../components/GlassPanel';
import CompoundSelector from '../components/CompoundSelector';
import TelemetrySliders from '../components/TelemetrySliders';
import DeltaReadout from '../components/DeltaReadout';
import StatusBar from '../components/StatusBar';

export default function PitWallPage() {
  const {
    tyreLife,
    fuelLoad,
    compound,
    predictedDelta,
    isLoading,
    isError,
    latencyMs,
    handleTyreLifeChange,
    handleFuelLoadChange,
    handleCompoundChange,
    severity,
    severityColor,
    stintPhase,
    fuelPhase,
    interactionIndex,
  } = usePrediction();

  const riskLabel = severity === 'CRITICAL' ? 'Box soon' : severity === 'DEGRADING' ? 'Watch pace' : 'Extend stint';

  return (
    <main className="min-h-screen w-full flex items-center justify-center py-5 px-3 sm:px-5 lg:px-8">
      <div
        className="relative w-full max-w-[1120px] rounded-lg p-4 sm:p-5 md:p-6 animate-fadeup pit-shell"
        style={{
          background: 'var(--pit-surface)',
          border: '1px solid var(--pit-border-strong)',
          boxShadow: 'var(--pit-shadow-lg), inset 0 1px 0 rgba(255,255,255,0.08)',
          backdropFilter: 'blur(1.5px)',
          WebkitBackdropFilter: 'blur(1.5px)',
        }}
      >
        <RaceStrip
          compound={compound}
          tyreLife={tyreLife}
          fuelLoad={fuelLoad}
          severity={severity}
          isError={isError}
        />

        <header
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-5 py-5 mb-2"
          style={{ borderBottom: '1px solid var(--pit-border)' }}
        >
          <div className="flex items-start gap-4">
            <div
              className="w-1 h-14 rounded-full flex-shrink-0"
              style={{
                background: 'linear-gradient(180deg, var(--pit-accent-f1) 0%, #991b1b 100%)',
                boxShadow: '0 0 16px var(--pit-glow-red)',
              }}
            />
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-mono font-bold tracking-[1.5px] text-[var(--pit-accent-f1)]">
                PIT WALL LIVE MODEL
              </span>
              <h1 className="text-2xl md:text-4xl font-extrabold tracking-normal text-[var(--pit-text)] leading-tight">
                F1 CAR STRATEGY
              </h1>
              <p className="text-sm md:text-base text-[var(--pit-text-secondary)] max-w-2xl">
                Race-car tire degradation model with live compound, fuel, and stint controls.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 sm:gap-3 min-w-0 lg:min-w-[390px]">
            <HeaderStat label="Signal" value={isError ? 'Offline' : 'Ready'} accent={isError ? 'var(--pit-accent-red)' : 'var(--pit-accent-mint)'} />
            <HeaderStat label="Delta" value={isError ? 'No data' : `+${predictedDelta.toFixed(2)}s`} accent={severityColor} />
            <HeaderStat label="Call" value={riskLabel} accent="var(--pit-accent-cyan)" />
          </div>
        </header>

        <div
          className="grid grid-cols-1 lg:grid-cols-[0.95fr_1fr_1.12fr] gap-4 mt-4 animate-fadeup delay-100"
          style={{ minHeight: '410px' }}
        >
          <GlassPanel>
            <CompoundSelector activeCompound={compound} onSelect={handleCompoundChange} />
          </GlassPanel>

          <GlassPanel>
            <TelemetrySliders
              tyreLife={tyreLife}
              fuelLoad={fuelLoad}
              stintPhase={stintPhase}
              fuelPhase={fuelPhase}
              onTyreLifeChange={handleTyreLifeChange}
              onFuelLoadChange={handleFuelLoadChange}
            />
          </GlassPanel>

          <GlassPanel dotMatrix>
            <DeltaReadout
              predictedDelta={predictedDelta}
              severity={severity}
              severityColor={severityColor}
              compound={compound}
              tyreLife={tyreLife}
              interactionIndex={interactionIndex}
              isLoading={isLoading}
              isError={isError}
            />
          </GlassPanel>
        </div>

        <StatusBar isLoading={isLoading} isError={isError} latencyMs={latencyMs} />
      </div>
    </main>
  );
}

function RaceStrip({ compound, tyreLife, fuelLoad, severity, isError }) {
  const stintWindow = tyreLife > 62 ? 'PIT OPEN' : tyreLife > 38 ? 'WATCH' : 'EXTEND';

  return (
    <div className="race-strip grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-px overflow-hidden rounded-md border border-[var(--pit-border)] bg-[var(--pit-border)]">
      <RaceCell label="Session" value="Race Sim" />
      <RaceCell label="Lap" value={`${Math.max(1, Math.round(tyreLife))} / 57`} />
      <RaceCell label="Compound" value={compound} />
      <RaceCell label="Fuel" value={`${Math.round(fuelLoad)} KG`} />
      <RaceCell label="Window" value={stintWindow} />
      <RaceCell label="Model" value={isError ? 'Offline' : severity} tone={isError ? 'var(--pit-accent-red)' : 'var(--pit-accent-mint)'} />
    </div>
  );
}

function RaceCell({ label, value, tone = 'var(--pit-accent-cyan)' }) {
  return (
    <div className="min-w-0 px-3 py-2 bg-[rgba(8,12,18,0.54)]">
      <div className="text-[8px] uppercase tracking-[1.4px] font-mono text-[var(--pit-text-dim)]">
        {label}
      </div>
      <div className="mt-0.5 flex items-center gap-2">
        <span className="h-1.5 w-1.5 rounded-full" style={{ background: tone, boxShadow: `0 0 8px ${tone}` }} />
        <span className="text-xs font-bold text-[var(--pit-text)] truncate">{value}</span>
      </div>
    </div>
  );
}

function HeaderStat({ label, value, accent }) {
  return (
    <div
      className="rounded-md px-3 py-2.5 min-w-0"
      style={{
        background: 'var(--pit-card-inner)',
        border: '1px solid var(--pit-border)',
        boxShadow: 'var(--pit-shadow-sm)',
      }}
    >
      <div className="flex items-center gap-2">
        <span
          className="w-1.5 h-1.5 rounded-full flex-shrink-0"
          style={{ background: accent, boxShadow: `0 0 8px ${accent}` }}
        />
        <span className="text-[9px] uppercase font-mono tracking-[1px] text-[var(--pit-text-muted)] truncate">
          {label}
        </span>
      </div>
      <div className="mt-1 text-sm font-bold text-[var(--pit-text)] truncate">{value}</div>
    </div>
  );
}
