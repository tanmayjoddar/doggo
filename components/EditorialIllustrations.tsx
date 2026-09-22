import React from 'react';

export const BottleLineArt: React.FC<{ className?: string }> = ({ className = 'w-16 h-24' }) => (
  <svg
    viewBox="0 0 100 160"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`stroke-current ${className}`}
    strokeWidth="1.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Bottle Neck & Cork */}
    <rect x="42" y="10" width="16" height="14" rx="1" />
    <line x1="38" y1="24" x2="62" y2="24" />
    <path d="M42 24 V 40 C 42 55, 20 62, 20 80 V 144 C 20 148, 24 152, 28 152 H 72 C 76 152, 80 148, 80 144 V 80 C 80 62, 58 55, 58 40 V 24" />
    {/* Inner Label */}
    <rect x="30" y="86" width="40" height="48" rx="2" strokeDasharray="2 2" strokeWidth="0.8" />
    <line x1="36" y1="98" x2="64" y2="98" strokeWidth="0.8" />
    <line x1="40" y1="106" x2="60" y2="106" strokeWidth="0.8" />
    <line x1="44" y1="114" x2="56" y2="114" strokeWidth="0.8" />
    {/* Dropper pipette indicator */}
    <line x1="50" y1="28" x2="50" y2="68" strokeWidth="0.8" />
    <circle cx="50" cy="72" r="1.5" />
  </svg>
);

export const BotanicalBranch: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`stroke-current ${className}`}
    strokeWidth="1"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M8 34 C 14 26, 24 16, 32 6" />
    <path d="M16 24 C 14 18, 18 14, 22 18 C 22 22, 18 24, 16 24 Z" />
    <path d="M24 16 C 28 12, 34 14, 32 20 C 28 22, 24 18, 24 16 Z" />
    <path d="M12 28 C 8 26, 8 20, 14 22 Z" />
    <circle cx="32" cy="6" r="1" fill="currentColor" />
  </svg>
);

export const CeramicBowlLineArt: React.FC<{ className?: string }> = ({ className = 'w-20 h-16' }) => (
  <svg
    viewBox="0 0 120 90"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`stroke-current ${className}`}
    strokeWidth="1.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Ceramic Bowl */}
    <path d="M15 32 Q 60 22 105 32 Q 100 78 60 78 Q 20 78 15 32 Z" />
    <ellipse cx="60" cy="32" rx="45" ry="8" strokeWidth="1" />
    {/* Footring base */}
    <path d="M42 78 L 44 84 H 76 L 78 78" />
    {/* Steam / Aroma Lines */}
    <path d="M50 18 Q 46 12 50 6" strokeWidth="0.8" />
    <path d="M60 20 Q 64 12 60 4" strokeWidth="0.8" />
    <path d="M70 18 Q 66 12 70 6" strokeWidth="0.8" />
  </svg>
);

export const GlasswareTrio: React.FC<{ className?: string }> = ({ className = 'w-32 h-20' }) => (
  <svg
    viewBox="0 0 160 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`stroke-current ${className}`}
    strokeWidth="1.1"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Bottle 1 */}
    <path d="M20 90 V 45 C 20 38, 28 32, 32 30 V 15 H 38 V 30 C 42 32, 50 38, 50 45 V 90 H 20 Z" />
    {/* Decanter */}
    <path d="M65 90 L 80 50 C 80 42, 85 36, 88 32 V 18 H 92 V 32 C 95 36, 100 42, 100 50 L 115 90 H 65 Z" />
    {/* Goblet Glass */}
    <path d="M125 35 Q 125 60 140 60 Q 155 60 155 35 Z" />
    <line x1="140" y1="60" x2="140" y2="88" />
    <line x1="130" y1="88" x2="150" y2="88" />
  </svg>
);

export const SealStamp: React.FC<{ text?: string; className?: string }> = ({
  text = 'AYURVEDIC • HIMALAYAN',
  className = 'w-24 h-24',
}) => (
  <div className={`relative flex items-center justify-center ${className} select-none`}>
    <svg viewBox="0 0 100 100" className="w-full h-full animate-spin-slow">
      <path
        id="circlePath"
        d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
        fill="transparent"
      />
      <text className="font-mono text-[8px] uppercase tracking-[0.28em] fill-current">
        <textPath href="#circlePath" startOffset="0%">
          {text} ✦ EST. 2026 ✦
        </textPath>
      </text>
    </svg>
    <div className="absolute inset-0 flex items-center justify-center font-editorial text-xl italic font-normal">
      Au
    </div>
  </div>
);
