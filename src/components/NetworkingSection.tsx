import {
  Home,
  Building2,
  Factory,
  Server,
  Network,
  Cable,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import Reveal from '@/components/Reveal';
import Button from '@/components/Button';
import { enquireService } from '@/lib/whatsapp';

const IMG =
  'https://images.pexels.com/photos/4508751/pexels-photo-4508751.jpeg?auto=compress&cs=tinysrgb&w=1100';

const cards: { icon: LucideIcon; title: string; desc: string }[] = [
  { icon: Home, title: 'Home Networking', desc: 'Wi-Fi, routers and full home connectivity setup.' },
  { icon: Building2, title: 'Office Networking', desc: 'Structured cabling and reliable office networks.' },
  { icon: Factory, title: 'Industrial Networking', desc: 'Robust networks built for industrial sites.' },
  { icon: Server, title: 'Server Setup', desc: 'Server installation, configuration and support.' },
  { icon: Network, title: 'Network Troubleshooting', desc: 'Diagnose and fix connectivity and speed issues.' },
  { icon: Cable, title: 'IT Infrastructure', desc: 'End-to-end IT setup design and implementation.' },
];

export default function NetworkingSection() {
  return (
    <section id="networking" className="relative overflow-hidden bg-navy-50 py-20 lg:py-28">
      <div className="absolute inset-0 grid-pattern-light opacity-60" aria-hidden />
      <div className="container relative">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Reveal direction="up">
              <span className="inline-flex items-center gap-2 rounded-full bg-brand-100 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-700">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-500" /> Networking &amp; Servers
              </span>
            </Reveal>
            <Reveal direction="up" delay={0.08}>
              <h2 className="mt-4 font-display text-3xl font-extrabold leading-[1.15] tracking-tight text-navy-900 sm:text-4xl text-balance">
                Networking &amp; Server Solutions Built to Scale
              </h2>
            </Reveal>
            <Reveal direction="up" delay={0.16}>
              <p className="mt-4 max-w-xl text-navy-600 text-pretty">
                From a single home router to a full industrial server room, Lactea Technologies designs,
                installs and maintains networks that stay fast and reliable.
              </p>
            </Reveal>

            <Reveal direction="up" delay={0.24}>
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {cards.map((c, i) => (
                  <Reveal as="div" key={c.title} direction="up" delay={i * 0.06}>
                    <div className="group h-full rounded-2xl border border-navy-100 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-card">
                      <div className="flex items-center gap-3">
                        <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-navy-800 text-white">
                          <c.icon className="h-5 w-5" />
                        </span>
                        <h3 className="text-sm font-bold text-navy-900">{c.title}</h3>
                        <CheckCircle2 className="ml-auto h-4 w-4 text-accent-500 opacity-0 transition-opacity group-hover:opacity-100" />
                      </div>
                      <p className="mt-2 text-xs leading-relaxed text-navy-600">{c.desc}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </Reveal>

            <Reveal direction="up" delay={0.3}>
              <div className="mt-7">
                <Button href={enquireService('Networking & Server')} external variant="primary" size="lg">
                  Get Networking Support <ArrowRight className="h-5 w-5" />
                </Button>
              </div>
            </Reveal>
          </div>

          <Reveal direction="left" className="relative">
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-tr from-brand-500/20 to-navy-800/20 blur-2xl" aria-hidden />
            <div className="relative overflow-hidden rounded-[1.75rem] border border-navy-100 shadow-card">
              <img
                src={IMG}
                alt="Server racks and networking equipment installed by Lactea Technologies for IT infrastructure in Bengaluru"
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-2xl glass px-4 py-3">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-accent-600" />
                  <p className="text-sm font-bold text-navy-900">Reliable Infrastructure</p>
                </div>
                <span className="text-xs font-semibold text-brand-600">Bengaluru</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
