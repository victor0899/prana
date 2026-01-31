import React from 'react';

// Logo colors from code.html (--body-wave, --mind-wave, --spirit-wave)
const BODY_WAVE = '#ea580c';
const MIND_WAVE = '#fb923c';
const SPIRIT_WAVE = '#fcd34d';

interface LogoProps {
  className?: string;
  size?: number;
}

const Logo: React.FC<LogoProps> = ({ className = '', size = 40 }) => {
  return (
    <div
      className={className}
      style={{ width: size, height: size }}
      aria-hidden
    >
      <svg className="w-full h-full" viewBox="0 0 100 100">
        <path
          opacity={0.4}
          d="M30 20 C 50 20, 70 30, 70 50 C 70 70, 50 80, 30 80"
          fill="none"
          stroke={BODY_WAVE}
          strokeLinecap="round"
          strokeWidth="8"
        />
        <path
          opacity={0.7}
          d="M35 25 C 55 25, 75 35, 75 50 C 75 65, 55 75, 35 75"
          fill="none"
          stroke={MIND_WAVE}
          strokeLinecap="round"
          strokeWidth="8"
        />
        <path
          d="M40 30 C 60 30, 80 40, 80 50 C 80 60, 60 70, 40 70"
          fill="none"
          stroke={SPIRIT_WAVE}
          strokeLinecap="round"
          strokeWidth="8"
        />
        <rect fill={BODY_WAVE} height={60} rx={4} width={8} x={25} y={20} />
      </svg>
    </div>
  );
};

export default Logo;
