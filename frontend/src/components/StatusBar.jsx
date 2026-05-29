"use client";

export default function StatusBar({ isLoading, isError, latencyMs }) {
  const statusText = isError ? 'OFFLINE' : 'ONLINE';
  const statusColor = isError ? 'var(--pit-accent-red)' : 'var(--pit-accent-mint)';

  return (
    <div
      className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-[10px] font-mono tracking-[1px] text-[var(--pit-text-muted)] pt-5"
      style={{ borderTop: '1px solid var(--pit-border)' }}
    >
      <div className="flex items-center gap-3">
        <div
          className="pulse-dot rounded-full w-2.5 h-2.5"
          style={{ background: statusColor, boxShadow: `0 0 10px ${statusColor}` }}
        />
        <span className="uppercase tracking-[1.5px] font-bold" style={{ color: statusColor }}>
          {statusText}
        </span>
        <span className="text-[var(--pit-text-secondary)] truncate">
          {isLoading ? 'FETCHING...' : `LATENCY ${latencyMs}ms`}
        </span>
      </div>
      <span className="text-[var(--pit-text-dim)]">ENGINE V2.5.0 // 2026</span>
    </div>
  );
}
