import { ShieldCheck, MapPin, Wrench, Cctv, ArrowRight } from 'lucide-react';
import Reveal from '@/components/Reveal';
import Button from '@/components/Button';
import Counter from '@/components/Counter';
import { COMPANY } from '@/lib/constants';

const IMG =
  'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=1100';

const highlights = [
  { icon: Cctv, label: 'CCTV & Security' },
  { icon: Wrench, label: 'Computer & Laptop Repair' },
  { icon: ShieldCheck, label: 'Networking & Servers' },
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-white py-20 lg:py-28">
      <div className="container relative">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal direction="right" className="relative">
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-brand-500/15 to-accent-500/15 blur-2xl" aria-hidden />
            <div className="relative overflow-hidden rounded-[1.75rem] border border-navy-100 shadow-card">
              <img
                src={IMG}
                alt="IT professional configuring network cables and server equipment at Lactea Technologies in Bengaluru"
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/55 to-transparent" />
            </div>
            {/* experience card */}
            <div className="absolute -bottom-5 left-4 rounded-2xl glass px-5 py-4 shadow-xl sm:left-8">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white">
                  <ShieldCheck className="h-6 w-6" />
                </span>
                <div>
                  <p className="font-display text-2xl font-extrabold text-navy-900">
                    <Counter end={13} suffix="+'" />
                  </p>
                  <p className="text-xs font-semibold text-navy-500">Service Categories</p>
                </div>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal direction="up">
              <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-600">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-500" /> About Us
              </span>
            </Reveal>
            <Reveal direction="up" delay={0.08}>
              <h2 className="mt-4 font-display text-3xl font-extrabold leading-[1.15] tracking-tight text-navy-900 sm:text-4xl text-balance">
                About <span className="gradient-text">Lactea Technologies</span>
              </h2>
            </Reveal>
            <Reveal direction="up" delay={0.16}>
              <p className="mt-4 text-navy-600 text-pretty">
                {COMPANY.name} is an IT solutions provider based in Hongandra, Bengaluru, offering a
                complete range of technology services for homes, offices and industries. We specialise in
                CCTV camera installation and service, laptop and desktop repair, networking and server
                solutions, printer sales and service, toner and cartridge refilling, chip-level servicing,
                data recovery and complete IT infrastructure setup.
              </p>
            </Reveal>
            <Reveal direction="up" delay={0.24}>
              <p className="mt-3 text-navy-600 text-pretty">
                Our focus is on reliable, professional service that helps customers keep their technology
                running smoothly, with straightforward support and quick turnaround on repairs and
                installations across Bengaluru.
              </p>
            </Reveal>

            <Reveal direction="up" delay={0.3}>
              <ul className="mt-6 flex flex-wrap gap-3">
                {highlights.map((h) => (
                  <li
                    key={h.label}
                    className="inline-flex items-center gap-2 rounded-full border border-navy-100 bg-white px-4 py-2 text-sm font-semibold text-navy-800"
                  >
                    <h.icon className="h-4 w-4 text-brand-600" />
                    {h.label}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal direction="up" delay={0.36}>
              <div className="mt-7 flex flex-wrap items-center gap-4 rounded-2xl border border-navy-100 bg-navy-50/60 p-4">
                <div className="flex items-center gap-2 text-sm font-semibold text-navy-800">
                  <MapPin className="h-5 w-5 text-brand-600" />
                  Bengaluru
                </div>
                <span className="h-4 w-px bg-navy-200" />
                <p className="text-sm text-navy-600">Serving homes, offices &amp; industries</p>
                <a
                  href="#contact"
                  className="ml-auto inline-flex items-center gap-1 text-sm font-semibold text-brand-600 hover:text-brand-700"
                >
                  Get in touch <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </Reveal>

            <Reveal direction="up" delay={0.42}>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button href={COMPANY.tel} variant="primary" size="md">
                  Call Now
                </Button>
                <Button href={COMPANY.whatsapp} external variant="accent" size="md">
                  WhatsApp Us
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
