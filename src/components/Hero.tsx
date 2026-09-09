import { Calendar, MapPin, ArrowDown, Navigation } from 'lucide-react';
import { venueMapUrl } from '@/data/eventData';
import logo from '@/assets/logo.png';
import logo2 from '@/assets/logo2.png';

export function Hero() {
  const scrollToProgramme = () => {
    document.getElementById('programme')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden bg-[#F8F3E8]">
      {/* Background gradient layers */}
      <div className="absolute inset-0 bg-[#F8F3E8]" />

      {/* Decorative radial glow */}
      <div className="absolute inset-0 opacity-90">
        <div className="absolute left-1/2 top-[10%] h-[640px] w-[640px] -translate-x-1/2 rounded-full bg-[#BF801F]/[0.08] blur-[130px]" />
        <div className="absolute left-1/4 top-1/3 h-[420px] w-[420px] rounded-full bg-[#003C32]/[0.10] blur-[110px]" />
        <div className="absolute right-1/4 bottom-1/4 h-[320px] w-[320px] rounded-full bg-[#D9A441]/[0.08] blur-[90px]" />
      </div>

      {/* Grid texture */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,60,50,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(0,60,50,0.4) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />

      {/* Gold corner accents */}
      <div className="pointer-events-none absolute left-6 top-6 h-16 w-16 border-l border-t border-[#BF801F]/35 sm:left-10 sm:top-10 sm:h-20 sm:w-20" />
      <div className="pointer-events-none absolute right-6 top-6 h-16 w-16 border-r border-t border-[#BF801F]/35 sm:right-10 sm:top-10 sm:h-20 sm:w-20" />
      <div className="pointer-events-none absolute bottom-6 left-6 h-16 w-16 border-b border-l border-[#BF801F]/35 sm:bottom-10 sm:left-10 sm:h-20 sm:w-20" />
      <div className="pointer-events-none absolute bottom-6 right-6 h-16 w-16 border-b border-r border-[#BF801F]/35 sm:bottom-10 sm:right-10 sm:h-20 sm:w-20" />

            {/* Content */}
      <div className="relative z-10 flex min-h-[100svh] flex-col items-center justify-center px-6 py-20 text-center sm:px-8">

        {/* Logo + Main Title */}
        <div
          className="mb-7 flex items-center justify-center animate-fade-up opacity-0 "
          style={{ animationDelay: '0.4s' }}
        >
          <div className="flex items-center justify-center">
          {/* Logo */}
          <img
            src={logo}
            alt="SmartWills WasiatKu Logo"
            className="h-[100px] w-[100px] shrink-0 translate-y-2 object-contain sm:h-[115px] sm:w-[115px]"
          />

          {/* Title */}
          <h1 className="ml-[-8px] shrink-0 text-left font-serif text-4xl font-semibold leading-[1.05] text-[#003C32] sm:ml-[10px] sm:text-5xl md:text-6xl lg:text-7xl">
            SMARTWILLS
            <br />
            <span className="text-gradient-gold">WASIATKU</span>
          </h1>
        </div>
        </div>

        {/* Official Launch */}
        <div
          className="mb-6 animate-fade-in opacity-0"
          style={{ animationDelay: '0.55s' }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-[#BF801F]/40 bg-[#BF801F]/[0.06] px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#9A6417] sm:text-xs">
            <span className="h-1.5 w-1.5 animate-pulse-soft rounded-full bg-[#BF801F]" />
            Official Launch
          </span>
        </div>

        {/* Divider */}
        <div
          className="my-5 h-px w-24 animate-fade-in bg-gradient-to-r from-transparent via-[#BF801F]/70 to-transparent opacity-0 sm:w-32"
          style={{ animationDelay: '0.7s' }}
        />

        {/* Subheading */}
        <p
          className="mb-8 max-w-2xl animate-fade-up text-base font-light leading-relaxed text-[#003C32]/80 opacity-0 sm:text-lg md:text-xl"
          style={{ animationDelay: '0.8s' }}
        >
          Memorandum of Understanding (MoU)
          <br />
          Signing Ceremony
          <br />
          With
          <br />
          <span className="font-medium text-[#003C32]">
            Palladium Trustee Berhad
          </span>
        </p>

        <img 
          src={logo2}
          alt="Palladium Trustee Berhad Logo"
          className=" mb-12 h-[50px] w-auto object-contain sm:h-[100px]"
        />


        {/* Event info pills */}
        <div
          className="mb-8 flex flex-col items-center gap-3 animate-fade-up opacity-0 sm:flex-row sm:gap-4"
          style={{ animationDelay: '1.0s' }}
        >
          <div className="inline-flex items-center gap-2.5 rounded-full border border-[#003C32]/15 bg-[#FFFFFF]/70 px-5 py-2.5 backdrop-blur-sm">
            <Calendar
              className="h-4 w-4 text-[#003C32]"
              strokeWidth={1.5}
            />
            <span className="text-sm font-medium text-[#003C32]/90">
              12 September 2026
            </span>
          </div>

          <div className="inline-flex items-center gap-2.5 rounded-full border border-[#003C32]/15 bg-[#FFFFFF]/70 px-5 py-2.5 backdrop-blur-sm">
            <MapPin
              className="h-4 w-4 text-[#003C32]"
              strokeWidth={1.5}
            />
            <span className="text-sm font-medium text-[#003C32]/90">
              Tropicana Golf &amp; Country Resort, PJ
            </span>
          </div>
        </div>

        {/* CTA buttons */}
        <div
          className="flex flex-col items-center gap-3 animate-fade-up opacity-0 sm:flex-row sm:gap-4"
          style={{ animationDelay: '1.2s' }}
        >
          <button
            onClick={scrollToProgramme}
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#BF801F] to-[#A96D18] px-7 py-3.5 text-sm font-semibold text-[#FFFFFF] shadow-gold transition-all duration-300 hover:scale-[1.03] hover:shadow-lg hover:shadow-[#BF801F]/30 active:scale-[0.98]"
          >
            View Programme
            <ArrowDown
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5"
              strokeWidth={2}
            />
          </button>

          <a
            href={venueMapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-[#003C32]/30 bg-transparent px-7 py-3.5 text-sm font-semibold text-[#003C32] backdrop-blur-sm transition-all duration-300 hover:border-[#BF801F]/70 hover:bg-[#BF801F]/10 hover:text-[#9A6417] active:scale-[0.98]"
          >
            <Navigation className="h-4 w-4" strokeWidth={2} />
            Get Directions
          </a>
        </div>
      </div>

    </section>
  );
}
