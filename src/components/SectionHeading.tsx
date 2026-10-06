import type { ReactNode } from 'react';
import Reveal from '@/components/Reveal';

type Props = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: 'left' | 'center';
  light?: boolean;
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  light = false,
  className = '',
}: Props) {
  const alignClass = align === 'center' ? 'mx-auto text-center items-center' : 'text-left items-start';
  return (
    <div className={`flex flex-col ${alignClass} max-w-2xl ${className}`}>
      {eyebrow && (
        <Reveal direction="up">
          <span
            className={`mb-3 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider ${
              light ? 'bg-white/10 text-brand-200' : 'bg-brand-50 text-brand-600'
            }`}
          >
            <span className={`h-1.5 w-1.5 rounded-full ${light ? 'bg-accent-400' : 'bg-brand-500'}`} />
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal direction="up" delay={0.08}>
        <h2
          className={`font-display text-3xl font-extrabold leading-[1.15] tracking-tight sm:text-4xl md:text-[2.6rem] text-balance ${
            light ? 'text-white' : 'text-navy-900'
          }`}
        >
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal direction="up" delay={0.16}>
          <p
            className={`mt-4 text-base leading-relaxed text-pretty sm:text-lg ${
              light ? 'text-navy-100/80' : 'text-navy-600'
            }`}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
