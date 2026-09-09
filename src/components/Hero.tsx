import { Calendar, MapPin, ArrowDown, Navigation } from 'lucide-react';
import { venueMapUrl } from '@/data/eventData';
import logo from '@/assets/logo.png';

export function Hero() {
  const scrollToProgramme = () => {
    document.getElementById('programme')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden bg-[#003C32]">
      {/* Background gradient layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#003C32] via-[#023936] to-[#003C32]" />

      {/* Decorative radial glow */}
      <div className="absolute inset-0 opacity-70">
        <div className="absolute left-1/2 top-[10%] h-[640px] w-[640px] -translate-x-1/2 rounded-full bg-[#BF801F]/[0.06] blur-[130px]" />
        <div className="absolute left-1/4 top-1/3 h-[420px] w-[420px] rounded-full bg-[#104836]/[0.35] blur-[110px]" />
        <div className="absolute right-1/4 bottom-1/4 h-[320px] w-[320px] rounded-full bg-[#D9A441]/[0.03] blur-[90px]" />
      </div>

      {/* Grid texture */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(248,243,232,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(248,243,232,0.5) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Gold corner accents */}
      <div className="pointer-events-none absolute left-6 top-6 h-16 w-16 border-l border-t border-[#D9A441]/30 sm:left-10 sm:top-10 sm:h-20 sm:w-20" />
      <div className="pointer-events-none absolute right-6 top-6 h-16 w-16 border-r border-t border-[#D9A441]/30 sm:right-10 sm:top-10 sm:h-20 sm:w-20" />
      <div className="pointer-events-none absolute bottom-6 left-6 h-16 w-16 border-b border-l border-[#D9A441]/30 sm:bottom-10 sm:left-10 sm:h-20 sm:w-20" />
      <div className="pointer-events-none absolute bottom-6 right-6 h-16 w-16 border-b border-r border-[#D9A441]/30 sm:bottom-10 sm:right-10 sm:h-20 sm:w-20" />

      {/* Content */}
      <div className="relative z-10 flex min-h-[100svh] flex-col items-center justify-center px-6 py-20 text-center sm:px-8">
        {/* Logo */}
        <img
          src={logo}
          alt="SmartWills WasiatKu Logo"
          className="mb-6 h-[120px] w-auto rounded-xl object-contain p-2 sm:h-[80px] animate-fade-in opacity-0"
          style={{ animationDelay: '0.15s' }}
        />

        {/* Official Launch label */}
        <div
          className="mb-6 animate-fade-in opacity-0"
          style={{ animationDelay: '0.25s' }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-[#D9A441]/40 bg-[#D9A441]/[0.06] px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#D9A441] sm:text-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-[#D9A441] animate-pulse-soft" />
            Official Launch
          </span>
        </div>

        {/* Main heading */}
        <h1
          className="mb-2 animate-fade-up font-serif text-5xl font-semibold leading-[1.05] text-[#F8F3E8] opacity-0 sm:text-6xl md:text-7xl lg:text-8xl"
          style={{ animationDelay: '0.4s' }}
        >
          SMARTWILLS
          <br />
          <span className="text-gradient-gold">WASIATKU</span>
        </h1>

        {/* Divider */}
        <div
          className="my-5 h-px w-24 animate-fade-in bg-gradient-to-r from-transparent via-[#D9A441]/60 to-transparent opacity-0 sm:w-32"
          style={{ animationDelay: '0.7s' }}
        />

        {/* Subheading */}
        <p
          className="mb-8 max-w-2xl animate-fade-up text-base font-light leading-relaxed text-[#F8F3E8]/80 opacity-0 sm:text-lg md:text-xl"
          style={{ animationDelay: '0.8s' }}
        >
          Memorandum of Understanding (MoU)
          <br />
          Signing Ceremony
        </p>

        {/* Event info pills */}
        <div
          className="mb-8 flex flex-col items-center gap-3 animate-fade-up opacity-0 sm:flex-row sm:gap-4"
          style={{ animationDelay: '1.0s' }}
        >
          <div className="inline-flex items-center gap-2.5 rounded-full border border-[#D9A441]/20 bg-[#104836]/60 px-5 py-2.5 backdrop-blur-sm">
            <Calendar className="h-4 w-4 text-[#D9A441]" strokeWidth={1.5} />
            <span className="text-sm font-medium text-[#F8F3E8]/90">12 September 2026</span>
          </div>
          <div className="inline-flex items-center gap-2.5 rounded-full border border-[#D9A441]/20 bg-[#104836]/60 px-5 py-2.5 backdrop-blur-sm">
            <MapPin className="h-4 w-4 text-[#D9A441]" strokeWidth={1.5} />
            <span className="text-sm font-medium text-[#F8F3E8]/90">
              Tropicana Golf &amp; Country Resort, PJ</span>
          </div>
        </div>

        {/* CTA buttons */}
        <div
          className="flex flex-col items-center gap-3 animate-fade-up opacity-0 sm:flex-row sm:gap-4"
          style={{ animationDelay: '1.2s' }}
        >
          <button
            onClick={scrollToProgramme}
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#BF801F] to-[#A96D18] px-7 py-3.5 text-sm font-semibold text-[#F8F3E8] shadow-gold transition-all duration-300 hover:scale-[1.03] hover:shadow-lg hover:shadow-[#BF801F]/30 active:scale-[0.98]"
          >
            View Programme
            <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" strokeWidth={2} />
          </button>
          <a
            href={venueMapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-[#D9A441]/30 bg-[#D9A441]/[0.04] px-7 py-3.5 text-sm font-semibold text-[#F8F3E8] backdrop-blur-sm transition-all duration-300 hover:border-[#D9A441]/60 hover:bg-[#D9A441]/10 hover:text-[#E0B55A] active:scale-[0.98]"
          >
            <Navigation className="h-4 w-4" strokeWidth={2} />
            Get Directions
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-fade-in opacity-0" style={{ animationDelay: '1.8s' }}>
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#F8F3E8]/40">Scroll</span>
          <div className="flex h-9 w-5 justify-center rounded-full border border-[#F8F3E8]/20 pt-1.5">
            <div className="h-1.5 w-0.5 rounded-full bg-[#D9A441]/60 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
