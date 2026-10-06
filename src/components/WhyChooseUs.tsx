import { Award, Layers, ShieldCheck, Home, Headphones, BadgeCheck } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';

const features: { icon: LucideIcon; title: string; desc: string }[] = [
  {
    icon: Award,
    title: 'Experienced IT Support',
    desc: 'Skilled technicians who understand computers, networks and security systems.',
  },
  {
    icon: Layers,
    title: 'Complete IT Solutions',
    desc: 'CCTV, computers, networking, printers and servers all in one place.',
  },
  {
    icon: ShieldCheck,
    title: 'CCTV & Security Solutions',
    desc: 'Reliable surveillance setup for homes, offices and industries.',
  },
  {
    icon: Home,
    title: 'Home & Business Services',
    desc: 'Tailored IT support for both residential and commercial customers.',
  },
  {
    icon: Headphones,
    title: 'Reliable Technical Support',
    desc: 'Responsive help whenever your technology needs attention.',
  },
  {
    icon: BadgeCheck,
    title: 'Professional Service',
    desc: 'Quality workmanship and dependable service on every job.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-navy-50 py-20 lg:py-28">
      <div className="absolute inset-0 grid-pattern-light opacity-60" aria-hidden />
      <div className="container relative">
        <SectionHeading
          eyebrow="Why Lactea"
          title={
            <>
              Why Choose <span className="gradient-text">Lactea Technologies</span>
            </>
          }
          description="One trusted partner for all your IT, security and computer service needs in Bengaluru."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <Reveal key={f.title} direction="up" delay={i * 0.07} className="h-full">
              <div className="group relative h-full overflow-hidden rounded-3xl border border-navy-100 bg-white p-6 shadow-card transition-all duration-500 hover:-translate-y-1.5 hover:shadow-card-hover">
                <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-brand-50 blur-2xl transition-colors duration-500 group-hover:bg-brand-100" aria-hidden />
                <div className="relative grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-lg">
                  <f.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-navy-900">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-600">{f.desc}</p>
                <div className="mt-4 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-accent-600">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent-500" /> Lactea Promise
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
