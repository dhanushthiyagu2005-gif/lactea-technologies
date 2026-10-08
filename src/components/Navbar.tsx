import { useEffect, useState } from 'react';
import { Menu, X, MessageCircle, Phone, ShieldCheck } from 'lucide-react';
import { COMPANY, NAV_LINKS } from '@/lib/constants';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const Logo = (
    <a href="#home" className="flex items-center gap-2.5 shrink-0" aria-label="Lactea Technologies home">
      <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 shadow-glow">
        <ShieldCheck className="h-5 w-5 text-white" strokeWidth={2.5} />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-base font-extrabold tracking-tight transition-colors ${
            scrolled ? 'text-navy-900' : 'text-white'
          }`}
        >
          LACTEA
        </span>
        <span
  className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#6FCF97]"
>
  Technologies IT Solutions
</span>
      </span>
    </a>
  );

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass shadow-[0_8px_30px_-12px_rgba(15,29,51,0.18)]' : 'bg-transparent'
      }`}
    >
      <nav className="container flex h-16 items-center justify-between gap-4 md:h-20">
        {Logo}

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                  scrolled
                    ? 'text-navy-700 hover:bg-brand-50 hover:text-brand-600'
                    : 'text-white/80 hover:bg-white/10 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 lg:flex">
          <a
            href={COMPANY.tel}
            className={`inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-sm font-semibold transition-colors ${
              scrolled ? 'text-navy-700 hover:text-brand-600' : 'text-white/80 hover:text-white'
            }`}
          >
            <Phone className="h-4 w-4" />
            {COMPANY.phoneDisplay}
          </a>
          <a
            href={COMPANY.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-accent-500 px-4 py-2.5 text-sm font-semibold text-white shadow-[0_10px_30px_-10px_rgba(16,185,129,0.7)] transition-all hover:-translate-y-0.5 hover:bg-accent-600"
          >
            <MessageCircle className="h-4 w-4" strokeWidth={2.5} />
            WhatsApp Us
          </a>
        </div>

        <button
          className={`grid h-10 w-10 place-items-center rounded-xl transition-colors lg:hidden ${
            scrolled ? 'bg-navy-50 text-navy-800' : 'bg-white/10 text-white'
          }`}
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen(true)}
        >
          <Menu className="h-5 w-5" />
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-50 lg:hidden ${open ? 'pointer-events-auto' : 'pointer-events-none'}`}
        aria-hidden={!open}
      >
        <div
          className={`absolute inset-0 bg-navy-950/60 backdrop-blur-sm transition-opacity duration-300 ${
            open ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setOpen(false)}
        />
        <aside
          className={`absolute right-0 top-0 h-full w-[82%] max-w-sm bg-white shadow-2xl transition-transform duration-400 ease-out ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex h-16 items-center justify-between border-b border-navy-100 px-5">
            <span className="font-display text-lg font-extrabold text-navy-900">Menu</span>
            <button
              className="grid h-9 w-9 place-items-center rounded-lg bg-navy-50 text-navy-800"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <ul className="flex flex-col gap-1 p-4">
            {NAV_LINKS.map((link, i) => (
              <li
                key={link.href}
                style={{ transitionDelay: `${open ? i * 40 : 0}ms` }}
                className={`transform transition-all duration-300 ${open ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'}`}
              >
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-3 text-base font-semibold text-navy-800 transition-colors hover:bg-brand-50 hover:text-brand-600"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-2 flex flex-col gap-3 px-4">
            <a
              href={COMPANY.tel}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-navy-900 px-5 py-3 text-sm font-semibold text-white"
            >
              <Phone className="h-4 w-4" /> Call {COMPANY.phoneDisplay}
            </a>
            <a
              href={COMPANY.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent-500 px-5 py-3 text-sm font-semibold text-white"
            >
              <MessageCircle className="h-4 w-4" strokeWidth={2.5} /> WhatsApp Us
            </a>
          </div>
        </aside>
      </div>
    </header>
  );
}
