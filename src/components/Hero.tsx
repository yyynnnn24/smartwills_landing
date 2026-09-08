import { Calendar, MapPin, ArrowDown, Navigation } from 'lucide-react';
import { venueMapUrl } from '@/data/eventData';

export function Hero() {
  const scrollToProgramme = () => {
    document.getElementById('programme')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden bg-navy-950">
      {/* Background gradient layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950" />

      {/* Decorative radial glow */}
      <div className="absolute inset-0 opacity-60">
        <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-gold-500/10 blur-[120px]" />
        <div className="absolute left-1/4 top-1/3 h-[400px] w-[400px] rounded-full bg-navy-500/20 blur-[100px]" />
        <div className="absolute right-1/4 bottom-1/4 h-[300px] w-[300px] rounded-full bg-gold-400/5 blur-[80px]" />
      </div>

      {/* Grid texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Gold corner accents */}
      <div className="pointer-events-none absolute left-6 top-6 h-16 w-16 border-l border-t border-gold-400/30 sm:left-10 sm:top-10 sm:h-20 sm:w-20" />
      <div className="pointer-events-none absolute right-6 top-6 h-16 w-16 border-r border-t border-gold-400/30 sm:right-10 sm:top-10 sm:h-20 sm:w-20" />
      <div className="pointer-events-none absolute bottom-6 left-6 h-16 w-16 border-b border-l border-gold-400/30 sm:bottom-10 sm:left-10 sm:h-20 sm:w-20" />
      <div className="pointer-events-none absolute bottom-6 right-6 h-16 w-16 border-b border-r border-gold-400/30 sm:bottom-10 sm:right-10 sm:h-20 sm:w-20" />

      {/* Content */}
      <div className="relative z-10 flex min-h-[100svh] flex-col items-center justify-center px-6 py-20 text-center sm:px-8">
        {/* Official Launch label */}
        <div
          className="mb-8 animate-fade-in opacity-0"
          style={{ animationDelay: '0.2s' }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-gold-400/30 bg-gold-400/5 px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-gold-300 sm:text-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-gold-400 animate-pulse-soft" />
            Official Launch
          </span>
        </div>

        {/* Main heading */}
        <h1
          className="mb-2 animate-fade-up font-serif text-5xl font-semibold leading-[1.05] text-cream-50 opacity-0 sm:text-6xl md:text-7xl lg:text-8xl"
          style={{ animationDelay: '0.4s' }}
        >
          SmartWills
          <br />
          <span className="text-gradient-gold">WasiatKu</span>
        </h1>

        {/* Divider */}
        <div
          className="my-6 h-px w-24 animate-fade-in bg-gradient-to-r from-transparent via-gold-400/60 to-transparent opacity-0 sm:w-32"
          style={{ animationDelay: '0.7s' }}
        />

        {/* Subheading */}
        <p
          className="mb-10 max-w-2xl animate-fade-up text-base font-light leading-relaxed text-cream-50/80 opacity-0 sm:text-lg md:text-xl"
          style={{ animationDelay: '0.8s' }}
        >
          Memorandum of Understanding (MoU)
          <br />
          Signing Ceremony
        </p>

        {/* Event info pills */}
        <div
          className="mb-10 flex flex-col items-center gap-3 animate-fade-up opacity-0 sm:flex-row sm:gap-4"
          style={{ animationDelay: '1.0s' }}
        >
          <div className="inline-flex items-center gap-2.5 rounded-full border border-gold-400/15 bg-navy-800/50 px-5 py-2.5 backdrop-blur-sm">
            <Calendar className="h-4 w-4 text-gold-400" strokeWidth={1.5} />
            <span className="text-sm font-medium text-cream-50/90">12 September 2026</span>
          </div>
          <div className="inline-flex items-center gap-2.5 rounded-full border border-gold-400/15 bg-navy-800/50 px-5 py-2.5 backdrop-blur-sm">
            <MapPin className="h-4 w-4 text-gold-400" strokeWidth={1.5} />
            <span className="text-sm font-medium text-cream-50/90">Tropicana Golf &amp; Country Resort, PJ</span>
          </div>
        </div>

        {/* CTA buttons */}
        <div
          className="flex flex-col items-center gap-3 animate-fade-up opacity-0 sm:flex-row sm:gap-4"
          style={{ animationDelay: '1.2s' }}
        >
          <button
            onClick={scrollToProgramme}
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold-300 to-gold-500 px-7 py-3.5 text-sm font-semibold text-navy-950 shadow-gold transition-all duration-300 hover:scale-[1.03] hover:shadow-lg hover:shadow-gold-500/30 active:scale-[0.98]"
          >
            View Programme
            <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" strokeWidth={2} />
          </button>
          <a
            href={venueMapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-cream-50/20 bg-cream-50/5 px-7 py-3.5 text-sm font-semibold text-cream-50 backdrop-blur-sm transition-all duration-300 hover:border-gold-400/40 hover:bg-gold-400/5 hover:text-gold-200 active:scale-[0.98]"
          >
            <Navigation className="h-4 w-4" strokeWidth={2} />
            Get Directions
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-fade-in opacity-0" style={{ animationDelay: '1.8s' }}>
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-[0.3em] text-cream-50/40">Scroll</span>
          <div className="flex h-9 w-5 justify-center rounded-full border border-cream-50/20 pt-1.5">
            <div className="h-1.5 w-0.5 rounded-full bg-gold-400/60 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
