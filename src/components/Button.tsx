import type { ReactNode } from 'react';

type Props = {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'accent' | 'ghost' | 'outline' | 'outline-light';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  external?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit';
};

const base =
  'inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-300 active:scale-[0.97] focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2';

const variants: Record<string, string> = {
  primary:
    'bg-brand-600 text-white shadow-[0_10px_30px_-10px_rgba(47,114,245,0.7)] hover:bg-brand-700 hover:shadow-[0_18px_40px_-12px_rgba(47,114,245,0.8)] hover:-translate-y-0.5',
  accent:
    'bg-accent-500 text-white shadow-[0_10px_30px_-10px_rgba(16,185,129,0.7)] hover:bg-accent-600 hover:shadow-[0_18px_40px_-12px_rgba(16,185,129,0.8)] hover:-translate-y-0.5',
  ghost: 'bg-white/10 text-white backdrop-blur hover:bg-white/20 border border-white/15',
  outline: 'border-2 border-navy-200 text-navy-800 hover:border-brand-500 hover:text-brand-600 bg-white',
  'outline-light': 'border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/60',
};

const sizes: Record<string, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm md:text-base',
  lg: 'px-7 py-3.5 text-base md:text-lg',
};

export default function Button({
  href,
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  external,
  onClick,
  type = 'button',
}: Props) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;
  if (href) {
    return (
      <a
        href={href}
        className={classes}
        onClick={onClick}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {children}
      </a>
    );
  }
  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
