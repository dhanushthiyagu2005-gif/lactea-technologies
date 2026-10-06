import { Printer, Wrench, ShoppingCart, Droplet, Disc, ArrowRight, CheckCircle2 } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import Reveal from '@/components/Reveal';
import Button from '@/components/Button';
import SectionHeading from '@/components/SectionHeading';
import { enquireService } from '@/lib/whatsapp';

const IMG =
  'https://images.pexels.com/photos/17235421/pexels-photo-17235421.jpeg?auto=compress&cs=tinysrgb&w=1100';

const items: { icon: LucideIcon; label: string; desc: string }[] = [
  { icon: Wrench, label: 'Printer Repair', desc: 'Fast fixes for all printer brands.' },
  { icon: ShoppingCart, label: 'Printer Sales', desc: 'New printers for home and office.' },
  { icon: Printer, label: 'Printer Maintenance', desc: 'Keep printers running smoothly.' },
  { icon: Droplet, label: 'Toner Refilling', desc: 'Affordable toner refills.' },
  { icon: Disc, label: 'Cartridge Refilling', desc: 'Quality cartridge refilling service.' },
];

export default function PrinterSection() {
  return (
    <section id="printers" className="relative overflow-hidden bg-white py-20 lg:py-28">
      <div className="container relative">
        <SectionHeading
          eyebrow="Printer Services"
          title={
            <>
              Printer Sales, Repair &amp; <span className="gradient-text">Toner Refilling</span>
            </>
          }
          description="Keep your printers working with expert repair, maintenance and affordable toner and cartridge refilling."
        />

        <div className="mt-14 grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal direction="right">
            <div className="grid gap-3 sm:grid-cols-2">
              {items.map((item, i) => (
                <Reveal as="div" key={item.label} direction="up" delay={i * 0.06}>
                  <div className="group flex h-full flex-col gap-2 rounded-2xl border border-navy-100 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-card">
                    <div className="flex items-center gap-3">
                      <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-500 group-hover:text-white">
                        <item.icon className="h-5 w-5" />
                      </span>
                      <h3 className="text-sm font-bold text-navy-900">{item.label}</h3>
                    </div>
                    <p className="text-xs leading-relaxed text-navy-600">{item.desc}</p>
                    <CheckCircle2 className="mt-1 h-4 w-4 text-accent-500 opacity-0 transition-opacity group-hover:opacity-100" />
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>

          <Reveal direction="left" className="relative">
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-accent-500/15 to-brand-500/15 blur-2xl" aria-hidden />
            <div className="relative overflow-hidden rounded-[1.75rem] border border-navy-100 shadow-card">
              <img
                src={IMG}
                alt="Modern office printer sales and repair service by Lactea Technologies in Bengaluru"
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/55 to-transparent" />
              <div className="absolute bottom-4 left-4 rounded-2xl glass px-4 py-2.5 shadow-lg">
                <p className="text-xs font-semibold uppercase tracking-wider text-accent-600">Refills</p>
                <p className="font-display text-sm font-bold text-navy-900">Toner &amp; Cartridge</p>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal direction="up" delay={0.1} className="mt-10 text-center">
          <Button href={enquireService('Printer')} external variant="accent" size="lg">
            Get Printer Service <ArrowRight className="h-5 w-5" />
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
