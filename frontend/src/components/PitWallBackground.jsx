const HERO_SRC = '/f1-hero.png';

export default function PitWallBackground({ children }) {
  return (
    <div className="min-h-screen w-full relative isolate">
      <div className="fixed inset-0 z-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute inset-0 bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url(${HERO_SRC})`,
            backgroundPosition: '76% 50%',
            filter: 'brightness(1.08) saturate(1.42) contrast(1.16)',
          }}
        />

        <div
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(90deg, rgba(3, 6, 12, 0.18) 0%, rgba(3, 6, 12, 0.10) 38%, rgba(3, 6, 12, 0.02) 72%, rgba(3, 6, 12, 0.00) 100%),
              linear-gradient(180deg, rgba(3, 6, 12, 0.04) 0%, rgba(3, 6, 12, 0.12) 100%)
            `,
          }}
        />
      </div>

      <div className="relative z-10">{children}</div>
    </div>
  );
}
