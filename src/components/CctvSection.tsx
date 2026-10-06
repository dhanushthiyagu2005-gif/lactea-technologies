import { Cctv, Video, VideoOff, HardDrive, Wrench, Smartphone, CalendarCheck, ArrowRight, CheckCircle2 } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import Reveal from '@/components/Reveal';
import Button from '@/components/Button';
import { enquireService } from '@/lib/whatsapp';

const CCTV_IMG =
  'https://images.pexels.com/photos/96612/pexels-photo-96612.jpeg?auto=compress&cs=tinysrgb&w=1100';

const features: { icon: LucideIcon; label: string }[] = [
  { icon: Cctv, label: 'CCTV installation' },
  { icon: VideoOff, label: 'Camera replacement' },
  { icon: HardDrive, label: 'DVR / NVR setup' },
  { icon: Wrench, label: 'CCTV troubleshooting' },
  { icon: Smartphone, label: 'Remote viewing / mobile setup' },
  { icon: CalendarCheck, label: 'CCTV maintenance' },
];

export default function CctvSection() {
  return (
    <section id="cctv" className="relative overflow-hidden gradient-navy py-20 text-white lg:py-28">
      <div className="absolute inset-0 grid-pattern opacity-50" aria-hidden />
      <div className="pointer-events-none absolute right-0 top-10 h-72 w-72 rounded-full bg-accent-500/20 blur-[120px]" aria-hidden />
      <div className="pointer-events-none absolute left-0 bottom-10 h-72 w-72 rounded-full bg-brand-500/25 blur-[120px]" aria-hidden />

      <div className="container relative">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Image */}
          <Reveal direction="right" className="order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-tr from-accent-500/30 to-brand-500/30 blur-2xl" aria-hidden />
              <div className="relative overflow-hidden rounded-[1.75rem] border border-white/15 shadow-2xl">
                <img
                  src={CCTV_IMG}
                  alt="CCTV security cameras installed by Lactea Technologies for home and business surveillance in Bengaluru"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 to-transparent" />
                {/* live badge */}
                <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-black/40 px-3 py-1.5 backdrop-blur">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-red-500" />
                  <span className="text-xs font-bold uppercase tracking-wider text-white">Surveillance</span>
                </div>
              </div>
              {/* floating stat */}
              <div className="absolute -bottom-5 -right-3 rounded-2xl glass px-5 py-3 text-navy-900 shadow-xl sm:right-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-navy-500">Secure</p>
                <p className="font-display text-xl font-extrabold">24×7 Monitoring</p>
              </div>
            </div>
          </Reveal>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <Reveal direction="left">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-accent-300">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-400" /> CCTV Services
              </span>
            </Reveal>
            <Reveal direction="left" delay={0.08}>
              <h2 className="mt-4 font-display text-3xl font-extrabold leading-[1.15] tracking-tight text-white sm:text-4xl text-balance">
                Secure Your Home &amp; Business with Reliable CCTV Solutions
              </h2>
            </Reveal>
            <Reveal direction="left" delay={0.16}>
              <p className="mt-4 max-w-xl text-navy-100/80 text-pretty">
                Professional CCTV camera installation, configuration and maintenance for homes, shops,
                offices and industrial sites across Bengaluru.
              </p>
            </Reveal>

            <Reveal direction="left" delay={0.24}>
              <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                {features.map((f) => (
                  <li
                    key={f.label}
                    className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 transition-colors hover:border-accent-400/40 hover:bg-white/10"
                  >
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-accent-500/20 text-accent-300">
                      <f.icon className="h-5 w-5" />
                    </span>
                    <span className="text-sm font-semibold text-white">{f.label}</span>
                    <CheckCircle2 className="ml-auto h-4 w-4 text-accent-400 opacity-0 transition-opacity group-hover:opacity-100" />
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal direction="left" delay={0.32}>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href={enquireService('CCTV')} external variant="accent" size="lg">
                  Get CCTV Service <ArrowRight className="h-5 w-5" />
                </Button>
                <Button href="#contact" variant="outline-light" size="lg">
                  Book a Site Visit
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
