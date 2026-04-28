interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  variant?: 'default' | 'white';
}

const Logo = ({ size = 'md', showText = true, variant = 'default' }: LogoProps) => {
  const sizes = {
    sm: { icon: 32, text: 'text-lg' },
    md: { icon: 40, text: 'text-xl' },
    lg: { icon: 56, text: 'text-3xl' }
  };

  const { icon, text } = sizes[size];
  const textColor = variant === 'white' ? 'text-white' : 'text-gray-900';
  const subTextColor = variant === 'white' ? 'text-white/80' : 'text-gray-500';

  return (
    <div className="flex items-center gap-3">
      <svg
        width={icon}
        height={icon}
        viewBox="0 0 80 80"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="40" cy="40" r="32" fill="#2563EB" opacity={variant === 'white' ? '0.2' : '0.1'} />
        <path
          d="M40 18 C28 18 18 28 18 40 C18 48 22 54 28 58 L28 62 C28 64 30 66 32 66 L48 66 C50 66 52 64 52 62 L52 58 C58 54 62 48 62 40 C62 28 52 18 40 18 Z"
          fill={variant === 'white' ? 'white' : '#2563EB'}
          stroke={variant === 'white' ? 'white' : '#2563EB'}
          strokeWidth="1.5"
        />
        <path
          d="M32 38 Q35 32 40 32 Q45 32 48 38 M34 42 Q37 46 40 46 Q43 46 46 42"
          fill="none"
          stroke={variant === 'white' ? '#2563EB' : 'white'}
          strokeWidth="1.2"
          opacity="0.6"
        />
        <path
          d="M40 48 Q42 52 40 56"
          stroke="#F97316"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <circle cx="40" cy="58" r="2" fill="#F97316" />
      </svg>
      {showText && (
        <div className="flex flex-col leading-tight">
          <span className={`font-bold ${text} ${textColor}`}>Curious Minds</span>
          <span className={`text-xs ${subTextColor}`}>Educational Institute</span>
        </div>
      )}
    </div>
  );
};

export default Logo;
