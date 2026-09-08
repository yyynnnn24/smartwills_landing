import { MapPin, Navigation, Calendar } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { venueMapUrl } from '@/data/eventData';

export function Venue() {
  return (
    <section className="relative w-full bg-emerald-950 py-20 sm:py-28">
      <div className="relative mx-auto max-w-4xl px-6 sm:px-8">
        <Reveal className="mb-12 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-500/80">
            Location
          </span>
          <h2 className="mt-4 font-serif text-3xl font-medium text-cream-50 sm:text-4xl md:text-5xl">
            Venue
          </h2>
          <div className="mx-auto mt-6 h-px w-16 bg-gradient-to-r from-transparent via-gold-500/50 to-transparent" />
        </Reveal>

        <Reveal delay={100}>
          <div className="overflow-hidden rounded-3xl border border-gold-500/15 bg-gradient-to-b from-emerald-850/60 to-emerald-950/60 shadow-emerald">
            {/* Map-style visual */}
            <div className="relative h-48 overflow-hidden sm:h-56">
              {/* Abstract map texture */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-850 via-emerald-700 to-emerald-950" />
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage:
                    'linear-gradient(rgba(191,128,31,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(191,128,31,0.12) 1px, transparent 1px)',
                  backgroundSize: '30px 30px',
                }}
              />
              {/* Roads */}
              <div className="absolute left-0 top-1/3 h-0.5 w-full -rotate-12 bg-cream-50/10" />
              <div className="absolute left-1/4 top-0 h-full w-0.5 rotate-6 bg-cream-50/10" />
              <div className="absolute right-0 top-2/3 h-0.5 w-full rotate-3 bg-cream-50/5" />

              {/* Pin */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="relative flex flex-col items-center">
                  <div className="absolute -inset-4 animate-pulse-soft rounded-full bg-gold-500/20 blur-md" />
                  <div className="relative flex h-14 w-14 items-center justify-center rounded-full border-2 border-gold-500 bg-emerald-950 shadow-gold">
                    <MapPin className="h-6 w-6 text-gold-500" strokeWidth={1.5} />
                  </div>
                  <div className="mt-1 h-2 w-1 rounded-full bg-gold-500/50" />
                </div>
              </div>
            </div>

            {/* Venue details */}
            <div className="flex flex-col items-center gap-6 p-6 text-center sm:p-8 md:flex-row md:items-start md:text-left">
              <div className="flex-1">
                <div className="mb-3 flex items-center justify-center gap-2 md:justify-start">
                  <Calendar className="h-4 w-4 text-gold-500" strokeWidth={1.5} />
                  <span className="text-xs font-medium uppercase tracking-wider text-cream-50/50">
                    12 September 2026
                  </span>
                </div>
                <h3 className="font-serif text-2xl font-medium text-cream-50 sm:text-3xl">
                  Tropicana Golf &amp; Country Resort
                </h3>
                <p className="mt-2 flex items-center justify-center gap-1.5 text-sm text-cream-50/60 md:justify-start">
                  <MapPin className="h-4 w-4 text-gold-500/60" strokeWidth={1.5} />
                  Petaling Jaya, Selangor
                </p>
              </div>

              <a
                href={venueMapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex flex-shrink-0 items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-gold-500 to-gold-600 px-7 py-3.5 text-sm font-semibold text-cream-50 shadow-gold transition-all duration-300 hover:scale-[1.03] hover:shadow-lg hover:shadow-gold-500/25 active:scale-[0.98]"
              >
                <Navigation className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" strokeWidth={2} />
                Get Directions
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
