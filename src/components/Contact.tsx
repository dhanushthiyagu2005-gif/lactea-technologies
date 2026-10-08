import { useState } from 'react';
import type { FormEvent } from 'react';
import { Phone, MessageCircle, MapPin, Navigation, User, Calendar, Wrench, MapPinned, ClipboardList, Send } from 'lucide-react';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import { COMPANY } from '@/lib/constants';
import { buildBookingLink } from '@/lib/whatsapp';

const SERVICE_OPTIONS = [
  'CCTV Installation & Service',
  'Laptop / Desktop Repair',
  'Networking Solutions',
  'Server Solutions',
  'Printer Sales & Service',
  'Toner / Cartridge Refilling',
  'Data Recovery',
  'Chip-Level Servicing',
  'IT Infrastructure Setup',
  'Other',
];

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
    location: '',
    problem: '',
  });

  const update = (key: keyof typeof form, value: string) =>
    setForm((f) => ({ ...f, [key]: value }));

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const link = buildBookingLink(form);
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  const inputCls =
    'w-full rounded-xl border border-navy-200 bg-white px-4 py-3 text-sm text-navy-900 placeholder:text-navy-400 transition-colors focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200';

  return (
    <section id="contact" className="relative overflow-hidden bg-white py-20 lg:py-28">
      <div className="absolute inset-0 grid-pattern-light opacity-60" aria-hidden />
      <div className="container relative">
        <SectionHeading
          eyebrow="Contact & Book"
          title={
            <>
              Get in Touch or <span className="gradient-text">Book a Service</span>
            </>
          }
          description="Fill in the form and we'll open a WhatsApp chat with your details ready to send. Or call us directly."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_0.8fr]">
          {/* Form */}
          <Reveal direction="right">
            <form
              onSubmit={onSubmit}
              className="rounded-3xl border border-navy-100 bg-white p-6 shadow-card sm:p-8"
              aria-label="Book a service form"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-navy-600">
                    <User className="h-3.5 w-3.5" /> Name
                  </span>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => update('name', e.target.value)}
                    placeholder="Your name"
                    className={inputCls}
                  />
                </label>
                <label className="block">
                  <span className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-navy-600">
                    <Phone className="h-3.5 w-3.5" /> Phone Number
                  </span>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => update('phone', e.target.value)}
                    placeholder="Your phone number"
                    className={inputCls}
                  />
                </label>
                <label className="block">
                  <span className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-navy-600">
                    <Wrench className="h-3.5 w-3.5" /> Service Required
                  </span>
                  <select
                    required
                    value={form.service}
                    onChange={(e) => update('service', e.target.value)}
                    className={inputCls}
                  >
                    <option value="">Select a service</option>
                    {SERVICE_OPTIONS.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="block">
                  <span className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-navy-600">
                    <Calendar className="h-3.5 w-3.5" /> Preferred Date
                  </span>
                  <input
                    type="date"
                    value={form.date}
                    onChange={(e) => update('date', e.target.value)}
                    className={inputCls}
                  />
                </label>
                <label className="block sm:col-span-2">
                  <span className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-navy-600">
                    <MapPinned className="h-3.5 w-3.5" /> Location
                  </span>
                  <input
                    type="text"
                    value={form.location}
                    onChange={(e) => update('location', e.target.value)}
                    placeholder="Area / address in Bengaluru"
                    className={inputCls}
                  />
                </label>
                <label className="block sm:col-span-2">
                  <span className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-navy-600">
                    <ClipboardList className="h-3.5 w-3.5" /> Problem / Requirement
                  </span>
                  <textarea
                    rows={4}
                    value={form.problem}
                    onChange={(e) => update('problem', e.target.value)}
                    placeholder="Describe the issue or what you need..."
                    className={`${inputCls} resize-none`}
                  />
                </label>
              </div>

              <button
                type="submit"
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent-500 px-6 py-3.5 text-base font-bold text-white shadow-glow-accent transition-all hover:-translate-y-0.5 hover:bg-accent-600"
              >
                <Send className="h-5 w-5" /> Request Service
              </button>
              <p className="mt-3 text-center text-xs text-navy-500">
                Opens WhatsApp with your details filled in, ready to send to {COMPANY.name}.
              </p>
            </form>
          </Reveal>

          {/* Location / contact info */}
          <Reveal direction="left" className="flex flex-col gap-5">
            <div className="rounded-3xl bg-navy-900 p-6 text-white shadow-card sm:p-7">
              <h3 className="font-display text-xl font-bold">Lactea Technologies</h3>
              <p className="text-sm text-brand-200">IT Solutions</p>

              <div className="mt-5 space-y-4">
                <div className="flex items-start gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/10 text-accent-300">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-navy-100/60">Address</p>
                    <p className="text-sm font-medium leading-relaxed text-white">
                      {COMPANY.address.line1}
                      <br />
                      {COMPANY.address.line2}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/10 text-accent-300">
                    <Phone className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-navy-100/60">Phone</p>
                    <a href={COMPANY.tel} className="text-sm font-bold text-white hover:text-accent-300">
                      {COMPANY.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/10 text-accent-300">
                    <MessageCircle className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-navy-100/60">WhatsApp</p>
                    <a
                      href={COMPANY.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-bold text-white hover:text-accent-300"
                    >
                      {COMPANY.phoneDisplay}
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-2.5">
                <a
                  href={COMPANY.tel}
                  className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
                >
                  <Phone className="h-4 w-4" /> Call Now
                </a>
                <a
                  href={COMPANY.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-accent-500 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-600"
                >
                  <MessageCircle className="h-4 w-4" strokeWidth={2.5} /> WhatsApp Us
                </a>
                <a
                  href={COMPANY.mapsQuery}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                  <Navigation className="h-4 w-4" /> Get Directions
                </a>
              </div>
            </div>

            {/* Map */}
            <div className="overflow-hidden rounded-3xl border border-navy-100 shadow-card">
              <iframe
                title="Lactea Technologies location map"
                src="https://www.google.com/maps?q=No.03%2C%20Sri%20Maruti%20Electricals%20%26%20Hardware%2C%2023rd%20Main%20Rd%2C%20opposite%20Kadala%20Swada%2C%20R.K.%20Colony%2C%20Marenahalli%2C%202nd%20Phase%2C%20J.P.%20Nagar%2C%20Bengaluru%2C%20Karnataka%20560041&output=embed"
                width="100%"
                height="260"
                loading="lazy"
                style={{ border: 0 }}
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
