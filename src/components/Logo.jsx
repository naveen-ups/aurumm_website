import React from 'react';

export default function Logo({ className = '', height = 36, color = '#5C0A20' }) {
  return (
    <div className={`aurumm-logo ${className}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', color }}>
      <svg
        width={height * 1.1}
        height={height * 1.1}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ flexShrink: 0 }}
      >
        {/* Central Diamond */}
        <polygon points="50,42 58,50 50,58 42,50" fill={color} />

        {/* Top Diamond Tip */}
        <polygon points="50,4 56,12 50,20 44,12" fill={color} />
        {/* Bottom Diamond Tip */}
        <polygon points="50,80 56,88 50,96 44,88" fill={color} />
        {/* Left Diamond Tip */}
        <polygon points="4,50 12,44 20,50 12,56" fill={color} />
        {/* Right Diamond Tip */}
        <polygon points="80,50 88,44 96,50 88,56" fill={color} />

        {/* Top Petal Pair */}
        <path
          d="M50 20 C42 28, 38 38, 50 44 C62 38, 58 28, 50 20 Z"
          fill="none"
          stroke={color}
          strokeWidth="3"
        />
        <path
          d="M50 24 C45 30, 42 37, 50 42 C58 37, 55 30, 50 24 Z"
          fill="none"
          stroke={color}
          strokeWidth="1.5"
        />

        {/* Bottom Petal Pair */}
        <path
          d="M50 80 C42 72, 38 62, 50 56 C62 62, 58 72, 50 80 Z"
          fill="none"
          stroke={color}
          strokeWidth="3"
        />
        <path
          d="M50 76 C45 70, 42 63, 50 58 C58 63, 55 70, 50 76 Z"
          fill="none"
          stroke={color}
          strokeWidth="1.5"
        />

        {/* Left Petal Pair */}
        <path
          d="M20 50 C28 42, 38 38, 44 50 C38 62, 28 58, 20 50 Z"
          fill="none"
          stroke={color}
          strokeWidth="3"
        />
        <path
          d="M24 50 C30 45, 37 42, 42 50 C37 58, 30 55, 24 50 Z"
          fill="none"
          stroke={color}
          strokeWidth="1.5"
        />

        {/* Right Petal Pair */}
        <path
          d="M80 50 C72 42, 62 38, 56 50 C62 62, 72 58, 80 50 Z"
          fill="none"
          stroke={color}
          strokeWidth="3"
        />
        <path
          d="M76 50 C70 45, 63 42, 58 50 C63 58, 70 55, 76 50 Z"
          fill="none"
          stroke={color}
          strokeWidth="1.5"
        />

        {/* Diagonal Petals - Top Left */}
        <path
          d="M30 30 C30 40, 40 45, 45 45 C45 40, 40 30, 30 30 Z"
          fill="none"
          stroke={color}
          strokeWidth="2.5"
        />
        <polygon points="26,26 31,23 34,28 29,31" fill={color} />

        {/* Diagonal Petals - Top Right */}
        <path
          d="M70 30 C70 40, 60 45, 55 45 C55 40, 60 30, 70 30 Z"
          fill="none"
          stroke={color}
          strokeWidth="2.5"
        />
        <polygon points="74,26 69,23 66,28 71,31" fill={color} />

        {/* Diagonal Petals - Bottom Left */}
        <path
          d="M30 70 C30 60, 40 55, 45 55 C45 60, 40 70, 30 70 Z"
          fill="none"
          stroke={color}
          strokeWidth="2.5"
        />
        <polygon points="26,74 31,77 34,72 29,69" fill={color} />

        {/* Diagonal Petals - Bottom Right */}
        <path
          d="M70 70 C70 60, 60 55, 55 55 C55 60, 60 70, 70 70 Z"
          fill="none"
          stroke={color}
          strokeWidth="2.5"
        />
        <polygon points="74,74 69,77 66,72 71,69" fill={color} />
      </svg>

      <span
        style={{
          fontFamily: "'Cinzel', 'Playfair Display', serif",
          fontSize: `${height * 0.65}px`,
          fontWeight: 600,
          letterSpacing: '0.18em',
          lineHeight: 1,
          color: color,
          textTransform: 'uppercase',
        }}
      >
        AURUMM
      </span>
    </div>
  );
}
