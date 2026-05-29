"use client";

import clsx from 'clsx';

export default function GlassPanel({ children, className, dotMatrix = false, style = {} }) {
  return (
    <div
      className={clsx(
        'relative rounded-lg overflow-hidden h-full',
        dotMatrix && 'dot-matrix',
        className
      )}
      style={{
        background: 'var(--pit-card)',
        border: '1px solid var(--pit-border)',
        boxShadow: 'var(--pit-shadow-sm), inset 0 1px 0 rgba(255,255,255,0.08)',
        backdropFilter: 'blur(1.5px)',
        WebkitBackdropFilter: 'blur(1.5px)',
        ...style,
      }}
    >
      <div className="relative z-10 p-5 sm:p-6 h-full flex flex-col">{children}</div>
    </div>
  );
}
