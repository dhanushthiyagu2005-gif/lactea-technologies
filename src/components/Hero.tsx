import { Phone, MessageCircle, CalendarCheck, ShieldCheck, Cctv, Laptop, Server, ArrowRight, Star } from 'lucide-react';
import Button from '@/components/Button';
import { COMPANY } from '@/lib/constants';

const HERO_IMG =
  'https://images.pexels.com/photos/5966513/pexels-photo-5966513.jpeg?auto=compress&cs=tinysrgb&w=1200';

const floatingChips = [
  { icon: Cctv, label: 'CCTV', className: 'left-[6%] top-[22%]', delay: '0s' },
  { icon: Laptop, label: 'Laptop & Desktop', className: 'right-[8%] top-[14%]', delay: '1.2s' },
  { icon: Server, label: 'Networking', className: 'left-[10%] bottom-[14%]', delay: '0.6s' },
  { icon: ShieldCheck, label: 'IT Support', className: 'right-[6%] bottom-[20%]', delay: '1.8s' },
];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden gradient-hero-radial pt-28 md:pt-36 lg:pt-40">
      {/* decorative grid + glow */}
      <div className="absolute inset-0 grid-pattern opacity-60" aria-hidden />
      <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-brand-500/30 blur-[120px]" aria-hidden />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-accent-500/20 blur-[120px]" aria-hidden />

      <div className="container relative pb-20 lg:pb-28">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Left */}
          <div className="text-center lg:text-left">
            <div
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold text-white backdrop-blur animate-fade-in"
              style={{ animationDelay: '0.1s' }}
            >
              <span className="flex h-2 w-2 rounded-full bg-accent-400">
                <span className="h-2 w-2 animate-ping rounded-full bg-accent-400" />
              </span>
              Trusted IT Solutions Partner in Bengaluru
            </div>

            <h1
              className="mt-6 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-white text-balance animate-fade-up sm:text-5xl lg:text-[3.4rem]"
              style={{ animationDelay: '0.2s' }}
            >
              Complete IT Solutions for Your{' '}
              <span className="gradient-text">Home &amp; Business</span>
            </h1>

            <p
              className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-navy-100/80 text-pretty sm:text-lg lg:mx-0 animate-fade-up"
              style={{ animationDelay: '0.35s' }}
            >
              Reliable CCTV, Computer, Laptop, Networking, Printer and IT Support Services from{' '}
              <span className="font-semibold text-white">{COMPANY.name}</span>.
            </p>

            <div
              className="mt-8 flex flex-wrap items-center justify-center gap-3 animate-fade-up lg:justify-start"
              style={{ animationDelay: '0.5s' }}
            >
              <Button href={COMPANY.tel} variant="primary" size="lg">
                <Phone className="h-5 w-5" /> Call Now
              </Button>
              <Button href={COMPANY.whatsapp} external variant="accent" size="lg">
                <MessageCircle className="h-5 w-5" strokeWidth={2.5} /> WhatsApp Us
              </Button>
              <Button href="#contact" variant="ghost" size="lg">
                <CalendarCheck className="h-5 w-5" /> Book a Service
              </Button>
            </div>

            <div
              className="mt-7 flex items-center justify-center gap-2 text-xs font-medium text-navy-100/70 lg:justify-start animate-fade-in"
              style={{ animationDelay: '0.7s' }}
            >
              <Star className="h-4 w-4 fill-accent-400 text-accent-400" />
              <Star className="h-4 w-4 fill-accent-400 text-accent-400" />
              <Star className="h-4 w-4 fill-accent-400 text-accent-400" />
              <Star className="h-4 w-4 fill-accent-400 text-accent-400" />
              <Star className="h-4 w-4 fill-accent-400 text-accent-400" />
              <span className="ml-1">Professional Service • Reliable Support • Complete IT Solutions</span>
            </div>
          </div>

          {/* Right - visual */}
          <div className="relative mx-auto w-full max-w-lg lg:max-w-none" style={{ animationDelay: '0.4s' }}>
            <div className="relative animate-fade-up">
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-brand-500/40 to-accent-500/30 blur-2xl" aria-hidden />
              <div className="relative overflow-hidden rounded-[1.75rem] border border-white/15 glass-dark shadow-2xl">
                <img
                  src={HERO_IMG}
                  alt="Professional CCTV security camera installation by Lactea Technologies in Bengaluru"
                  className="aspect-[4/3] w-full object-cover"
                  loading="eager"
                  fetchPriority="high"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-2xl glass-dark px-4 py-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-brand-200">CCTV Installation</p>
                    <p className="text-sm font-bold text-white">Bengaluru &amp; nearby areas</p>
                  </div>
                  <a
                    href="#cctv"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-accent-300 hover:text-accent-200"
                  >
                    View <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>

              {/* Floating chips */}
              {floatingChips.map((chip) => (
                <div
                  key={chip.label}
                  className={`absolute ${chip.className} hidden animate-float rounded-2xl glass px-3.5 py-2.5 shadow-xl sm:flex md:items-center md:gap-2`}
                  style={{ animationDelay: chip.delay }}
                >
                  <chip.icon className="h-4 w-4 text-brand-500" />
                  <span className="text-xs font-bold text-navy-900">{chip.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="relative -mb-1" aria-hidden>
        <svg viewBox="0 0 1440 80" fill="none" preserveAspectRatio="none" className="h-12 w-full md:h-16">
          <path d="M0 80V40C240 0 480 0 720 30C960 60 1200 60 1440 30V80H0Z" fill="#ffffff" />
        </svg>
      </div>
    </section>
  );
}
