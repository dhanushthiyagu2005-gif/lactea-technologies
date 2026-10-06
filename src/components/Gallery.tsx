import { useEffect, useMemo, useState } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';

type Item = { src: string; alt: string; category: string };

const RAW: { src: string; alt: string; category: string }[] = [
  {
    src: 'https://images.pexels.com/photos/5966513/pexels-photo-5966513.jpeg?auto=compress&cs=tinysrgb&w=900',
    alt: 'CCTV security camera installed indoors by Lactea Technologies',
    category: 'CCTV Work',
  },
  {
    src: 'https://images.pexels.com/photos/96612/pexels-photo-96612.jpeg?auto=compress&cs=tinysrgb&w=900',
    alt: 'Outdoor CCTV cameras mounted on a pole for surveillance',
    category: 'CCTV Work',
  },
  {
    src: 'https://images.pexels.com/photos/5650141/pexels-photo-5650141.jpeg?auto=compress&cs=tinysrgb&w=900',
    alt: 'Security camera on a post against blue sky',
    category: 'CCTV Work',
  },
  {
    src: 'https://images.pexels.com/photos/5589597/pexels-photo-5589597.jpeg?auto=compress&cs=tinysrgb&w=900',
    alt: 'Indoor ceiling-mounted CCTV camera installation',
    category: 'CCTV Work',
  },
  {
    src: 'https://images.pexels.com/photos/34514242/pexels-photo-34514242.jpeg?auto=compress&cs=tinysrgb&w=900',
    alt: 'Laptop being repaired with components and tools',
    category: 'Laptop & Desktop',
  },
  {
    src: 'https://images.pexels.com/photos/7639374/pexels-photo-7639374.jpeg?auto=compress&cs=tinysrgb&w=900',
    alt: 'Hands repairing a laptop circuit board at chip level',
    category: 'Laptop & Desktop',
  },
  {
    src: 'https://images.pexels.com/photos/10558599/pexels-photo-10558599.jpeg?auto=compress&cs=tinysrgb&w=900',
    alt: 'Technician repairing a desktop computer',
    category: 'Laptop & Desktop',
  },
  {
    src: 'https://images.pexels.com/photos/9242898/pexels-photo-9242898.jpeg?auto=compress&cs=tinysrgb&w=900',
    alt: 'Engineer soldering components on a motherboard',
    category: 'IT Services',
  },
  {
    src: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=900',
    alt: 'IT professional configuring network cables in a server rack',
    category: 'Networking',
  },
  {
    src: 'https://images.pexels.com/photos/5480781/pexels-photo-5480781.jpeg?auto=compress&cs=tinysrgb&w=900',
    alt: 'Network cabling and centralized server system',
    category: 'Networking',
  },
  {
    src: 'https://images.pexels.com/photos/17489151/pexels-photo-17489151.jpeg?auto=compress&cs=tinysrgb&w=900',
    alt: 'Tower servers in a data center with blue lighting',
    category: 'Servers',
  },
  {
    src: 'https://images.pexels.com/photos/37730212/pexels-photo-37730212.jpeg?auto=compress&cs=tinysrgb&w=900',
    alt: 'Server racks in a modern data center',
    category: 'Servers',
  },
  {
    src: 'https://images.pexels.com/photos/17235421/pexels-photo-17235421.jpeg?auto=compress&cs=tinysrgb&w=900',
    alt: 'Modern office printer with touchscreen interface',
    category: 'Printers',
  },
  {
    src: 'https://images.pexels.com/photos/9301887/pexels-photo-9301887.jpeg?auto=compress&cs=tinysrgb&w=900',
    alt: 'Person operating a photocopier printer in an office',
    category: 'Printers',
  },
  {
    src: 'https://images.pexels.com/photos/12741856/pexels-photo-12741856.jpeg?auto=compress&cs=tinysrgb&w=900',
    alt: 'Technician working on a computer motherboard in a lab',
    category: 'IT Services',
  },
];

const CATEGORIES = ['All', 'CCTV Work', 'Laptop & Desktop', 'Networking', 'Servers', 'Printers', 'IT Services'];

export default function Gallery() {
  const [active, setActive] = useState<string>('All');
  const [lightbox, setLightbox] = useState<number | null>(null);

  const items = useMemo<Item[]>(
    () => (active === 'All' ? RAW : RAW.filter((i) => i.category === active)),
    [active]
  );

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightbox(null);
      if (e.key === 'ArrowRight') setLightbox((p) => (p === null ? p : (p + 1) % items.length));
      if (e.key === 'ArrowLeft') setLightbox((p) => (p === null ? p : (p - 1 + items.length) % items.length));
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [lightbox, items.length]);

  return (
    <section id="gallery" className="relative overflow-hidden bg-navy-50 py-20 lg:py-28">
      <div className="absolute inset-0 grid-pattern-light opacity-60" aria-hidden />
      <div className="container relative">
        <SectionHeading
          eyebrow="Gallery"
          title={
            <>
              Our Work in <span className="gradient-text">Action</span>
            </>
          }
          description="A look at the CCTV, computer, networking, server and printer work we do for customers across Bengaluru."
        />

        {/* Filters */}
        <Reveal direction="up" delay={0.1} className="mt-10">
          <div className="flex flex-wrap justify-center gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-all ${
                  active === cat
                    ? 'bg-brand-600 text-white shadow-[0_8px_24px_-10px_rgba(47,114,245,0.7)]'
                    : 'bg-white text-navy-700 hover:bg-brand-50 hover:text-brand-600'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Grid */}
        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
          {items.map((item, i) => (
            <Reveal
              key={item.src}
              direction="up"
              delay={(i % 8) * 0.05}
              className={i % 5 === 0 ? 'col-span-2 row-span-1 md:col-span-1' : ''}
            >
              <button
                onClick={() => setLightbox(i)}
                className="group relative block w-full overflow-hidden rounded-2xl border border-navy-100 bg-navy-100 shadow-card focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
                aria-label={`Open image: ${item.alt}`}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-navy-950/10 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-90" />
                <div className="absolute inset-0 flex flex-col items-start justify-end p-3 text-left">
                  <span className="rounded-full bg-white/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur">
                    {item.category}
                  </span>
                  <span className="mt-1.5 flex translate-y-2 items-center gap-1 text-xs font-semibold text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <ZoomIn className="h-3.5 w-3.5" /> View
                  </span>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-navy-950/90 p-4 backdrop-blur animate-fade-in"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
        >
          <button
            className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            onClick={() => setLightbox(null)}
            aria-label="Close"
          >
            <X className="h-6 w-6" />
          </button>
          <button
            className="absolute left-3 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 md:left-6"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((p) => (p === null ? p : (p - 1 + items.length) % items.length));
            }}
            aria-label="Previous"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <figure className="max-h-[85vh] max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <img
              src={items[lightbox].src}
              alt={items[lightbox].alt}
              className="max-h-[78vh] w-full rounded-2xl object-contain shadow-2xl"
            />
            <figcaption className="mt-3 text-center text-sm text-white/80">{items[lightbox].alt}</figcaption>
          </figure>
          <button
            className="absolute right-3 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 md:right-6"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((p) => (p === null ? p : (p + 1) % items.length));
            }}
            aria-label="Next"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      )}
    </section>
  );
}
