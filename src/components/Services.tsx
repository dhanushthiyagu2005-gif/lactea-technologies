import {
  Laptop as LaptopIcon,
  Cctv,
  Network,
  Server,
  Printer,
  Database,
  Cpu,
  Building2,
  ArrowRight,
  MessageCircle,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import { enquireService } from '@/lib/whatsapp';

type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
};

const services: Service[] = [
  {
    icon: LaptopIcon,
    title: 'Laptop & Desktop Services',
    description: 'Repair, upgrades, software installation and complete computer support.',
    color: 'from-brand-500 to-brand-700',
  },
  {
    icon: Cctv,
    title: 'CCTV Installation & Service',
    description: 'CCTV installation, configuration, troubleshooting and maintenance.',
    color: 'from-accent-500 to-accent-700',
  },
  {
    icon: Network,
    title: 'Networking Solutions',
    description: 'Home, office and industrial networking setup and support.',
    color: 'from-brand-500 to-accent-500',
  },
  {
    icon: Server,
    title: 'Server Solutions',
    description: 'Server setup, configuration, maintenance and troubleshooting.',
    color: 'from-navy-700 to-navy-900',
  },
  {
    icon: Printer,
    title: 'Printer Services',
    description: 'Printer sales, repair, maintenance, toner and cartridge refilling.',
    color: 'from-brand-600 to-navy-800',
  },
  {
    icon: Database,
    title: 'Data Recovery',
    description: 'Professional data recovery and storage-related support.',
    color: 'from-accent-500 to-brand-600',
  },
  {
    icon: Cpu,
    title: 'Chip-Level Servicing',
    description: 'Advanced hardware-level troubleshooting and repair.',
    color: 'from-brand-500 to-brand-800',
  },
  {
    icon: Building2,
    title: 'IT Infrastructure',
    description: 'Complete IT setup and implementation for businesses and industries.',
    color: 'from-accent-600 to-navy-800',
  },
];

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const { icon: Icon } = service;
  return (
    <Reveal direction="up" delay={index * 0.06} className="h-full">
      <article className="group relative h-full overflow-hidden rounded-3xl border border-navy-100 bg-white p-6 shadow-card transition-all duration-500 hover:-translate-y-1.5 hover:border-brand-200 hover:shadow-card-hover sm:p-7">
        {/* glow on hover */}
        <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-brand-100/0 blur-2xl transition-all duration-500 group-hover:bg-brand-100/70" aria-hidden />
        <div className={`relative grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br ${service.color} shadow-lg`}>
          <Icon className="h-7 w-7 text-white" strokeWidth={2} />
        </div>
        <h3 className="mt-5 font-display text-lg font-bold text-navy-900">{service.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-navy-600">{service.description}</p>
        <a
          href={enquireService(service.title)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 transition-colors hover:text-brand-700"
        >
          Enquire Now
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </a>
        <div className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-brand-500 to-accent-500 transition-transform duration-500 group-hover:scale-x-100" aria-hidden />
      </article>
    </Reveal>
  );
}

export default function Services() {
  return (
    <section id="services" className="relative bg-white py-20 lg:py-28">
      <div className="container">
        <SectionHeading
          eyebrow="What We Do"
          title={
            <>
              Complete IT Services <span className="gradient-text">Under One Roof</span>
            </>
          }
          description="From CCTV cameras to servers and printers, Lactea Technologies delivers dependable technology services for homes, offices and industries across Bengaluru."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <ServiceCard key={s.title} service={s} index={i} />
          ))}
        </div>

        <Reveal direction="up" delay={0.1} className="mt-12">
          <div className="flex flex-col items-center justify-between gap-4 rounded-3xl bg-navy-900 px-6 py-6 text-center sm:flex-row sm:text-left">
            <div className="flex items-center gap-3">
              <MessageCircle className="h-7 w-7 text-accent-400" />
              <p className="text-base font-semibold text-white sm:text-lg">
                Not sure which service you need? Talk to our technician now.
              </p>
            </div>
            <a
              href="https://wa.me/919698992017"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-accent-500 px-6 py-3 text-sm font-bold text-white shadow-glow-accent transition-all hover:-translate-y-0.5 hover:bg-accent-600"
            >
              <MessageCircle className="h-5 w-5" strokeWidth={2.5} /> Chat on WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
