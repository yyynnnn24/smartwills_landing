import {
  Calendar,
  MapPin,
  ArrowDown,
  Navigation,
  Clock,
} from 'lucide-react';
import { venueMapUrl } from '@/data/eventData';
import logo from '@/assets/logo.png';

export function Hero() {
  const scrollToProgramme = () => {
    document.getElementById('programme')?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden bg-[#F8F3E8]">
      {/* Background */}
      <div className="absolute inset-0 bg-[#F8F3E8]" />

      {/* Decorative glow */}
      <div className="absolute inset-0 opacity-90">
        {/* Gold glow */}
        <div className="absolute left-1/2 top-[10%] h-[640px] w-[640px] -translate-x-1/2 rounded-full bg-[#D9A441]/[0.10] blur-[130px]" />

        {/* Red glow */}
        <div className="absolute left-1/4 top-1/3 h-[420px] w-[420px] rounded-full bg-[#A52A2A]/[0.07] blur-[110px]" />

        {/* Gold glow */}
        <div className="absolute bottom-1/4 right-1/4 h-[320px] w-[320px] rounded-full bg-[#BF801F]/[0.08] blur-[90px]" />
      </div>

      {/* Grid texture */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(165,42,42,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(165,42,42,0.4) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />

      {/* Gold corner accents */}
      <div className="pointer-events-none absolute left-6 top-6 h-16 w-16 border-l border-t border-[#BF801F]/45 sm:left-10 sm:top-10 sm:h-20 sm:w-20" />

      <div className="pointer-events-none absolute right-6 top-6 h-16 w-16 border-r border-t border-[#BF801F]/45 sm:right-10 sm:top-10 sm:h-20 sm:w-20" />

      <div className="pointer-events-none absolute bottom-6 left-6 h-16 w-16 border-b border-l border-[#BF801F]/45 sm:bottom-10 sm:left-10 sm:h-20 sm:w-20" />

      <div className="pointer-events-none absolute bottom-6 right-6 h-16 w-16 border-b border-r border-[#BF801F]/45 sm:bottom-10 sm:right-10 sm:h-20 sm:w-20" />

      {/* Content */}
      <div className="relative z-10 flex min-h-[100svh] flex-col items-center justify-center px-6 py-20 text-center sm:px-8">
        {/* Logo + Main Title */}
        <div
          className="mb-7 flex flex-col items-center justify-center animate-fade-up opacity-0"
          style={{ animationDelay: '0.4s' }}
        >
          {/* Logo */}
          <img
            src={logo}
            alt="SmartWills Logo"
           className="h-[180px] w-[260px] object-contain sm:h-[190px] sm:w-[300px]"
          />

        {/* Title */}
        <h1
          className="flex flex-col items-center text-center font-bold leading-none text-[#D9A441]"
          style={{ fontFamily: "'Brush Script MT', cursive" }}
        >
          {/* 10th */}
          <span className="relative text-8xl sm:text-9xl">
            10
            <sup className="absolute -top-2 left-full ml-1 text-3xl leading-none sm:-top-3 sm:text-4xl">
              th
            </sup>
          </span>

          {/* Anniversary */}
          <span className="-translate-y-2 text-7xl sm:-mt-3 sm:text-8xl md:text-9xl">
            Anniversary
          </span>

          {/* DINNER */}
          <span className="mt-1 text-6xl sm:text-7xl md:text-8xl">
            DINNER
          </span>
        </h1>
        </div>

        {/* Divider */}
        <div
          className="my-5 h-px w-24 animate-fade-in bg-gradient-to-r from-transparent via-[#BF801F]/80 to-transparent opacity-0 sm:w-32"
          style={{ animationDelay: '0.7s' }}
        />

        {/* Subheading */}
        <div
          className="mb-12 flex flex-col items-center animate-fade-up opacity-0"
          style={{ animationDelay: '0.8s' }}
        >
          <p className="max-w-2xl text-base font-bold leading-relaxed text-[#000000]/80 sm:text-lg md:text-xl">
            Celebrating a decade of
            <br />
            <span className="font-bold text-[#000000]/80">
              Trust, Legacy &amp; Impact
            </span>
          </p>
        </div>

        {/* Event info */}
        <div
          className="mb-8 flex flex-col items-center gap-3 animate-fade-up opacity-0 sm:flex-row sm:gap-4"
          style={{ animationDelay: '1.0s' }}
        >
          {/* Date */}
          <div className="inline-flex items-center gap-2.5 rounded-full border border-[#BF801F]/30 bg-[#FFFFFF]/70 px-5 py-2.5 backdrop-blur-sm">
            <Calendar
              className="h-4 w-4 text-[#A52A2A]"
              strokeWidth={1.5}
            />

            <span className="text-sm font-medium text-[#000000]/90">
              12 September 2026
            </span>
          </div>

          {/* Time */}
          <div className="inline-flex items-center gap-2.5 rounded-full border border-[#BF801F]/30 bg-[#FFFFFF]/70 px-5 py-2.5 backdrop-blur-sm">
            <Clock
              className="h-4 w-4 text-[#A52A2A]"
              strokeWidth={1.5}
            />

            <span className="text-sm font-medium text-[#000000]/90">
              6:00 PM - 10:00 PM
            </span>
          </div>

          {/* Location */}
          <div className="inline-flex items-center gap-2.5 rounded-full border border-[#BF801F]/30 bg-[#FFFFFF]/70 px-5 py-2.5 backdrop-blur-sm">
            <MapPin
              className="h-4 w-4 text-[#A52A2A]"
              strokeWidth={1.5}
            />

            <span className="text-sm font-medium text-[#000000]/90">
              Tropicana Grand Ballroom &amp; Banquet, PJ
            </span>
          </div>
        </div>

        {/* CTA buttons */}
        <div
          className="flex flex-col items-center gap-3 animate-fade-up opacity-0 sm:flex-row sm:gap-4"
          style={{ animationDelay: '1.2s' }}
        >
          {/* View Programme */}
          <button
            onClick={scrollToProgramme}
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#A52A2A] to-[#8B1E1E] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#A52A2A]/20 transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:shadow-[#A52A2A]/30 active:scale-[0.98]"
          >
            View Programme

            <ArrowDown
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5"
              strokeWidth={2}
            />
          </button>

          {/* Get Directions */}
          <a
            href={venueMapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-[#A52A2A]/35 bg-transparent px-7 py-3.5 text-sm font-semibold text-[#A52A2A] backdrop-blur-sm transition-all duration-300 hover:border-[#BF801F]/70 hover:bg-[#BF801F]/10 hover:text-[#8B1E1E] active:scale-[0.98]"
          >
            <Navigation
              className="h-4 w-4"
              strokeWidth={2}
            />

            Get Directions
          </a>
        </div>
      </div>
    </section>
  );
}