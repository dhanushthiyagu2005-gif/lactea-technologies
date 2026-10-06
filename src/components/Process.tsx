import { Phone, MessageSquare, Wrench, CheckCircle2 } from 'lucide-react';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';

const steps = [
  {
    no: '01',
    icon: Phone,
    title: 'Contact Us',
    desc: 'Call or message us on WhatsApp to get started.',
  },
  {
    no: '02',
    icon: MessageSquare,
    title: 'Explain Your Requirement',
    desc: 'Tell us about your CCTV, computer or networking need.',
  },
  {
    no: '03',
    icon: Wrench,
    title: 'Technician Assistance',
    desc: 'Our technician diagnoses and works on your issue.',
  },
  {
    no: '04',
    icon: CheckCircle2,
    title: 'Complete the Service',
    desc: 'We finish the job and make sure everything works.',
  },
];

export default function Process() {
  return (
    <section className="relative overflow-hidden gradient-navy py-20 text-white lg:py-28">
      <div className="absolute inset-0 grid-pattern opacity-50" aria-hidden />
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-brand-500/20 blur-[120px]" aria-hidden />

      <div className="container relative">
        <SectionHeading
          light
          eyebrow="How It Works"
          title={
            <>
              Simple <span className="gradient-text">4-Step</span> Service Process
            </>
          }
          description="Getting your IT, CCTV or computer issue sorted is quick and hassle-free."
        />

        <div className="relative mt-14">
          {/* connecting line */}
          <div className="absolute left-0 right-0 top-9 hidden h-px bg-gradient-to-r from-transparent via-white/15 to-transparent lg:block" aria-hidden />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal key={s.no} direction="up" delay={i * 0.1} className="relative">
                <div className="group relative rounded-3xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur transition-all duration-500 hover:-translate-y-1.5 hover:border-accent-400/40 hover:bg-white/10">
                  <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-glow">
                    <s.icon className="h-7 w-7" />
                  </div>
                  <span className="mt-4 block font-display text-3xl font-extrabold text-white/15 transition-colors group-hover:text-accent-400/40">
                    {s.no}
                  </span>
                  <h3 className="mt-1 font-display text-lg font-bold text-white">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-100/70">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
