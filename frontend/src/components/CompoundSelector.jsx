"use client";

import { APP_CONFIG } from '../lib/config';

export default function CompoundSelector({ activeCompound, onSelect }) {
  return (
    <div className="flex flex-col h-full">
      <SectionLabel number="01" title="COMPOUND MATRIX" />

      <div className="flex flex-col gap-3 flex-1">
        {APP_CONFIG.COMPOUNDS.map((compound) => (
          <CompoundCard
            key={compound.name}
            compound={compound}
            isActive={activeCompound === compound.name}
            onSelect={onSelect}
          />
        ))}
      </div>

      <div
        className="mt-5 pt-4 flex items-center gap-2"
        style={{ borderTop: '1px solid var(--pit-border)' }}
      >
        <span className="text-[10px] tracking-[1px] font-mono text-[var(--pit-text-muted)]">
          ACTIVE COMP //
        </span>
        <span className="text-[10px] tracking-[1px] font-mono font-bold text-[var(--pit-text)]">
          {activeCompound}
        </span>
      </div>
    </div>
  );
}

function CompoundCard({ compound, isActive, onSelect }) {
  const { name, color, label, pace, durability } = compound;
  const code = label.split(' ')[0];

  return (
    <button
      type="button"
      onClick={() => onSelect(name)}
      className="compound-card w-full text-left relative overflow-hidden rounded-md px-4 py-3.5 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--pit-accent-cyan)]"
      style={{
        background: isActive
          ? `linear-gradient(135deg, rgba(255,255,255,0.08) 0%, color-mix(in srgb, ${color} 14%, rgba(13,18,27,0.90)) 100%)`
          : 'var(--pit-card-inner)',
        border: `2px solid ${isActive ? color : 'var(--pit-border)'}`,
        transform: isActive ? 'translateY(-1px)' : 'translateY(0)',
        boxShadow: isActive
          ? `0 8px 24px color-mix(in srgb, ${color} 25%, transparent), inset 0 1px 0 rgba(255,255,255,0.14)`
          : 'var(--pit-shadow-sm)',
      }}
    >
      <div className="absolute inset-y-0 left-0 w-1.5" style={{ background: color }} />
      <div className="relative flex items-center gap-3 z-10">
        <div
          className="tire-badge grid place-items-center flex-shrink-0"
          style={{
            '--compound-color': color,
            boxShadow: isActive ? `0 0 18px color-mix(in srgb, ${color} 65%, transparent)` : 'none',
          }}
        >
          <span
            className="text-[9px] font-black font-mono"
            style={{ color: name === 'MEDIUM' || name === 'HARD' ? '#111827' : '#fff' }}
          >
            {code}
          </span>
        </div>

        <div className="flex flex-col gap-0.5 min-w-0">
          <span
            className="text-sm font-black tracking-[1px] font-mono"
            style={{ color: 'var(--pit-text)' }}
          >
            {name}
          </span>
          <span
            className="text-[10px] tracking-[0.5px] font-mono truncate"
            style={{ color: isActive ? color : 'var(--pit-text-muted)' }}
          >
            {isActive ? 'SELECTED' : 'STANDBY'} / {label}
          </span>
        </div>

        {isActive && (
          <span
            className="ml-auto text-[9px] font-bold font-mono px-2 py-0.5 rounded"
            style={{
              background: color,
              color: name === 'MEDIUM' || name === 'HARD' ? '#111827' : '#fff',
            }}
          >
            LIVE
          </span>
        )}
      </div>

      <div className="relative z-10 mt-3 grid grid-cols-2 gap-2">
        <CompoundMetric label="Pace" value={pace} />
        <CompoundMetric label="Life" value={durability} />
      </div>
    </button>
  );
}

function CompoundMetric({ label, value }) {
  return (
    <div className="rounded-md px-2 py-1.5 border border-[var(--pit-border)] bg-[var(--pit-surface-soft)]">
      <span className="block text-[8px] uppercase tracking-[1px] font-mono text-[var(--pit-text-dim)]">
        {label}
      </span>
      <span className="block text-[11px] font-bold text-[var(--pit-text)] truncate">{value}</span>
    </div>
  );
}

export function SectionLabel({ number, title }) {
  return (
    <div className="flex flex-col gap-1.5 mb-5">
      <div className="flex items-center gap-2">
        <span className="section-badge text-[10px] font-bold tracking-[1px] font-mono px-1.5 py-0.5 rounded">
          {number}
        </span>
        <span className="text-[10px] font-mono text-[var(--pit-text-dim)]">//</span>
      </div>
      <span className="text-sm font-bold tracking-normal text-[var(--pit-text)]">{title}</span>
    </div>
  );
}
