import { MapPin, Navigation, Calendar } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { venueMapUrl } from '@/data/eventData';
import venueVideo from '@/assets/video.mp4';

export function Venue() {
  return (
    <section className="relative w-full overflow-hidden bg-[#F8F3E8] py-20 sm:py-28">
      {/* Decorative background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-[#D9A441]/[0.035] blur-[140px]" />
      </div>

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,60,50,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(0,60,50,0.10) 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }}
      />

      <div className="relative mx-auto max-w-4xl px-6 sm:px-8">

        {/* Section Heading */}
        <Reveal className="mb-12 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8F1D1D]">
            Location
          </span>

          <h2 className="mt-4 font-serif text-3xl font-bold text-[#D9A441] sm:text-4xl md:text-5xl">
            Venue
          </h2>

          <div className="mx-auto mt-6 h-px w-16 bg-gradient-to-r from-transparent via-[#D9A441] to-transparent" />
        </Reveal>

        {/* Main Venue Card */}
        <Reveal delay={100}>
          <div className="overflow-hidden rounded-3xl border border-[#D9A441]/25 bg-white shadow-[0_20px_60px_rgba(0,60,50,0.10)]">

            {/* Venue Video */}
            <div className="relative mx-auto aspect-[9/16] w-full max-w-[360px] overflow-hidden bg-[#E8E0CC] sm:max-w-[400px]">
              <video
                src={venueVideo}
                autoPlay
                muted
                loop
                playsInline
                className="h-full w-full object-cover"
              />

              {/* Soft overlay */}
              <div className="absolute inset-0 bg-black/10" />

              {/* Venue Name Overlay */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-white/30 bg-black/30 px-4 py-1.5 text-xs font-medium text-white backdrop-blur-sm sm:text-sm">
                Tropicana Golf &amp; Country Resort
              </div>
            </div>

            {/* Venue Details */}
            <div className="flex flex-col items-center gap-6 bg-white p-6 text-center sm:p-8 md:flex-row md:items-center md:text-left">

              {/* Information */}
              <div className="flex-1">

                {/* Date */}
                <div className="mb-3 flex items-center justify-center gap-2 md:justify-start">
                  <Calendar
                    className="h-4 w-4 text-[#A96D18]"
                    strokeWidth={1.5}
                  />

                  <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#000000]">
                    12 September 2026
                  </span>
                </div>

                {/* Venue Name */}
                <h3 className="font-serif text-2xl font-bold leading-tight text-[#000000]/80 sm:text-3xl">
                  Tropicana Golf &amp; Country Resort
                </h3>

                {/* Ballroom */}
                <p className="mt-2 text-sm font-medium text-[#8F1D1D]">
                  Tropicana Grand Ballroom &amp; Banquet
                </p>

                {/* Location */}
                <p className="mt-3 flex items-center justify-center gap-1.5 text-sm text-[#000000]/60 md:justify-start">
                  <MapPin
                    className="h-4 w-4 text-[#A96D18]"
                    strokeWidth={1.5}
                  />

                  Petaling Jaya, Selangor
                </p>

              </div>

              {/* Get Directions */}
              <a
                href={venueMapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex flex-shrink-0 items-center justify-center gap-2.5 rounded-full bg-[#8F1D1D] px-7 py-3.5 text-sm font-semibold text-[#F8F3E8] shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#A52A2A] hover:shadow-lg active:translate-y-0"
              >
                <Navigation
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                  strokeWidth={2}
                />

                Get Directions
              </a>

            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

