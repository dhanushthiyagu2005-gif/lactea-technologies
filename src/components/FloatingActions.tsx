import { useEffect, useState } from 'react';
import { MessageCircle, Phone, CalendarCheck } from 'lucide-react';
import { COMPANY } from '@/lib/constants';

export default function FloatingActions() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* WhatsApp floating button (desktop + mobile) */}
      <a
        href={COMPANY.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className={`group fixed bottom-20 right-4 z-40 grid h-14 w-14 place-items-center rounded-full bg-accent-500 text-white shadow-glow-accent transition-all duration-500 hover:bg-accent-600 md:bottom-6 md:right-6 ${
          show ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
        }`}
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-accent-500/40" aria-hidden />
        <MessageCircle className="relative h-7 w-7" strokeWidth={2.5} />
        <span className="pointer-events-none absolute right-16 hidden whitespace-nowrap rounded-full bg-navy-900 px-3 py-1.5 text-xs font-semibold text-white opacity-0 shadow-lg transition-opacity duration-300 group-hover:opacity-100 md:block">
          Chat with us
        </span>
      </a>

      {/* Mobile sticky CTA bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 lg:hidden">
        <div className="glass border-t border-white/40 px-2 py-2 shadow-[0_-8px_30px_-12px_rgba(15,29,51,0.18)]">
          <div className="grid grid-cols-3 gap-2">
            <a
              href={COMPANY.tel}
              className="flex flex-col items-center justify-center gap-0.5 rounded-xl bg-navy-900 py-2 text-white transition-colors active:scale-95"
            >
              <Phone className="h-5 w-5" />
              <span className="text-[11px] font-bold">Call</span>
            </a>
            <a
              href={COMPANY.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center gap-0.5 rounded-xl bg-accent-500 py-2 text-white transition-colors active:scale-95"
            >
              <MessageCircle className="h-5 w-5" strokeWidth={2.5} />
              <span className="text-[11px] font-bold">WhatsApp</span>
            </a>
            <a
              href="#contact"
              className="flex flex-col items-center justify-center gap-0.5 rounded-xl bg-brand-600 py-2 text-white transition-colors active:scale-95"
            >
              <CalendarCheck className="h-5 w-5" />
              <span className="text-[11px] font-bold">Book</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
