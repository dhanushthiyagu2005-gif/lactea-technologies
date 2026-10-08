import { ShieldCheck, Phone, MessageCircle, MapPin, ArrowUp, Cctv, Laptop, Network, Server, Printer, Database, Headphones } from 'lucide-react';
import { COMPANY, NAV_LINKS } from '@/lib/constants';

const serviceLinks = [
  { icon: Cctv, label: 'CCTV' },
  { icon: Laptop, label: 'Laptop & Desktop' },
  { icon: Network, label: 'Networking' },
  { icon: Server, label: 'Servers' },
  { icon: Printer, label: 'Printers' },
  { icon: Database, label: 'Data Recovery' },
  { icon: Headphones, label: 'IT Support' },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy-950 text-white">
      <div className="absolute inset-0 grid-pattern opacity-40" aria-hidden />
      <div className="pointer-events-none absolute -top-20 left-1/2 h-60 w-[60%] -translate-x-1/2 rounded-full bg-brand-500/15 blur-[120px]" aria-hidden />

      <div className="container relative">
        {/* CTA strip */}
        <div className="flex flex-col items-center justify-between gap-4 border-b border-white/10 py-10 text-center md:flex-row md:text-left">
          <div>
            <h3 className="font-display text-2xl font-extrabold text-white sm:text-3xl">
              Need IT help today?
            </h3>
            <p className="mt-1 text-navy-100/70">
              Call or WhatsApp {COMPANY.name} for fast, reliable service in Bengaluru.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={COMPANY.tel}
              className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-brand-700"
            >
              <Phone className="h-4 w-4" /> Call Now
            </a>
            <a
              href={COMPANY.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-accent-500 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-accent-600"
            >
              <MessageCircle className="h-4 w-4" strokeWidth={2.5} /> WhatsApp Us
            </a>
          </div>
        </div>

        {/* Main */}
        <div className="grid gap-10 py-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 shadow-glow">
                <ShieldCheck className="h-6 w-6 text-white" strokeWidth={2.5} />
              </span>
              <div className="leading-none">
                <p className="font-display text-lg font-extrabold tracking-tight text-white">LACTEA</p>
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#6FCF97]">
                  Technologies IT Solutions
                </p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-navy-100/70">
              Complete IT solutions for homes, offices and industries in Bengaluru. CCTV, computers,
              networking, servers, printers and more.
            </p>
            <div className="mt-4 flex items-start gap-2 text-sm text-navy-100/70">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent-400" />
              <span>
                {COMPANY.address.line1}
                <br />
                {COMPANY.address.line2}
              </span>
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">Services</h4>
            <ul className="mt-4 grid grid-cols-1 gap-2.5">
              {serviceLinks.map((s) => (
                <li key={s.label}>
                  <a
                    href="#services"
                    className="group inline-flex items-center gap-2 text-sm text-navy-100/70 transition-colors hover:text-white"
                  >
                    <s.icon className="h-4 w-4 text-brand-400 transition-colors group-hover:text-accent-400" />
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">Quick Links</h4>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-navy-100/70 transition-colors hover:text-white"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">Contact</h4>
            <ul className="mt-4 space-y-3">
              <li>
                <p className="text-xs font-semibold uppercase tracking-wider text-navy-100/50">Phone</p>
                <a href={COMPANY.tel} className="text-sm font-bold text-white hover:text-accent-300">
                  {COMPANY.phoneDisplay}
                </a>
              </li>
              <li>
                <p className="text-xs font-semibold uppercase tracking-wider text-navy-100/50">WhatsApp</p>
                <a
                  href={COMPANY.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold text-white hover:text-accent-300"
                >
                  {COMPANY.phoneDisplay}
                </a>
              </li>
              <li className="pt-1">
                <a
                  href={COMPANY.mapsQuery}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-white/10"
                >
                  <MapPin className="h-4 w-4 text-accent-400" /> Get Directions
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/10 py-6 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-navy-100/60">
            &copy; 2026 {COMPANY.name}. All Rights Reserved.
          </p>
          <a
            href="#home"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-navy-100/70 transition-colors hover:text-white"
          >
            Back to top <ArrowUp className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
