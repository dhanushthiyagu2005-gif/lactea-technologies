import {
  Laptop,
  Monitor,
  MemoryStick,
  HardDrive,
  AppWindow,
  HardDriveDownload,
  Cpu,
  Database,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import Reveal from '@/components/Reveal';
import Button from '@/components/Button';
import SectionHeading from '@/components/SectionHeading';
import { enquireService } from '@/lib/whatsapp';

const IMG =
  'https://images.pexels.com/photos/7639374/pexels-photo-7639374.jpeg?auto=compress&cs=tinysrgb&w=1100';
const IMG_2 =
  'https://images.pexels.com/photos/9242898/pexels-photo-9242898.jpeg?auto=compress&cs=tinysrgb&w=800';

const items: { icon: LucideIcon; label: string }[] = [
  { icon: Laptop, label: 'Laptop repair' },
  { icon: Monitor, label: 'Desktop repair' },
  { icon: MemoryStick, label: 'Hardware upgrades' },
  { icon: HardDrive, label: 'SSD / RAM upgrades' },
  { icon: AppWindow, label: 'Software installation' },
  { icon: HardDriveDownload, label: 'Windows installation' },
  { icon: Cpu, label: 'Chip-level servicing' },
  { icon: Database, label: 'Data recovery' },
];

export default function ComputerSection() {
  return (
    <section id="computers" className="relative overflow-hidden bg-white py-20 lg:py-28">
      <div className="absolute inset-0 grid-pattern-light opacity-70" aria-hidden />
      <div className="container relative">
        <SectionHeading
          eyebrow="Computer & Laptop"
          title={
            <>
              Expert Computer &amp; Laptop <span className="gradient-text">Repair &amp; Upgrades</span>
            </>
          }
          description="From cracked screens to chip-level repair and performance upgrades, we keep your computers running like new."
        />

        <div className="mt-14 grid items-stretch gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Visual */}
          <Reveal direction="right" className="order-2 lg:order-1">
            <div className="relative h-full min-h-[320px]">
              <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-brand-500/15 to-accent-500/15 blur-2xl" aria-hidden />
              <div className="relative h-full overflow-hidden rounded-[1.75rem] border border-navy-100 shadow-card">
                <img
                  src={IMG}
                  alt="Laptop motherboard chip-level repair by Lactea Technologies technicians in Bengaluru"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-5 -right-3 w-40 overflow-hidden rounded-2xl border-4 border-white shadow-xl sm:right-6">
                <img
                  src={IMG_2}
                  alt="Soldering components on a computer motherboard during chip-level servicing"
                  className="aspect-square w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute left-4 top-4 rounded-2xl glass px-4 py-2.5 shadow-lg">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand-600">Chip-Level</p>
                <p className="font-display text-sm font-bold text-navy-900">Hardware Experts</p>
              </div>
            </div>
          </Reveal>

          {/* List + CTA */}
          <div className="order-1 lg:order-2">
            <Reveal direction="left">
              <ul className="grid gap-3 sm:grid-cols-2">
                {items.map((item, i) => (
                  <Reveal as="li" key={item.label} direction="up" delay={i * 0.05} className="list-none">
                    <div className="group flex h-full items-center gap-3 rounded-2xl border border-navy-100 bg-white px-4 py-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-card">
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-500 group-hover:text-white">
                        <item.icon className="h-5 w-5" />
                      </span>
                      <span className="text-sm font-semibold text-navy-800">{item.label}</span>
                      <CheckCircle2 className="ml-auto h-4 w-4 text-accent-500 opacity-0 transition-opacity group-hover:opacity-100" />
                    </div>
                  </Reveal>
                ))}
              </ul>
            </Reveal>
            <Reveal direction="up" delay={0.15}>
              <div className="mt-7">
                <Button href={enquireService('Laptop / Computer')} external variant="primary" size="lg">
                  Book Laptop / Computer Service <ArrowRight className="h-5 w-5" />
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
