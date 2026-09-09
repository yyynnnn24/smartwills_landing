import { MapPin, Navigation, Calendar } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { venueMapUrl } from '@/data/eventData';
import videoSrc from '@/assets/video.mp4';

const VIDEO_SRC = videoSrc;

function VideoContainer() {
  return (
    <div className="flex justify-center">
      <div className="relative overflow-hidden rounded-2xl border border-[#003C32]/10 bg-white p-2 shadow-[0_12px_40px_rgba(0,60,50,0.12)]">
        <video
          src={VIDEO_SRC}
          controls
          playsInline
          preload="metadata"
          className="block max-h-[680px] w-auto max-w-full rounded-xl object-contain"
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export function Venue() {
  return (
    <section className="relative w-full overflow-hidden bg-[#F8F3E8] py-20 sm:py-28">
      {/* Decorative radial glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-[#D9A441]/[0.035] blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6 sm:px-8">

        {/* Section Heading */}
        <Reveal className="mb-12 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#A96D18]">
            Location
          </span>

          <h2 className="mt-4 font-serif text-3xl font-bold text-[#003C32] sm:text-4xl md:text-5xl">
            Venue
          </h2>

          <div className="mx-auto mt-6 h-px w-16 bg-gradient-to-r from-transparent via-[#D9A441] to-transparent" />

        </Reveal>

        {/* Main Venue Card */}
        <Reveal delay={100}>
          <div className="overflow-hidden rounded-3xl border border-[#003C32]/10 bg-white shadow-[0_20px_60px_rgba(0,60,50,0.08)]">

            {/* Video Section */}
            <div className="bg-[#F8F3E8]/60 px-4 py-6 sm:px-8 sm:py-10">
              <VideoContainer />
            </div>

            {/* Gold Divider */}
            <div className="mx-6 h-px bg-gradient-to-r from-transparent via-[#D9A441]/50 to-transparent sm:mx-10" />

            {/* Venue Details */}
            <div className="px-6 py-8 sm:px-10 sm:py-10">
              <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

                {/* Information */}
                <div className="text-center md:text-left">

                  {/* Date */}
                  <div className="mb-3 flex items-center justify-center gap-2 md:justify-start">
                    <Calendar
                      className="h-4 w-4 text-[#A96D18]"
                      strokeWidth={1.5}
                    />

                    <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#A96D18]">
                      12 September 2026
                    </span>
                  </div>

                  {/* Venue Name */}
                  <h3 className="font-serif text-2xl font-bold leading-tight text-[#003C32] sm:text-3xl">
                    Tropicana Golf &amp; Country Resort
                  </h3>

                  {/* Location */}
                  <p className="mt-3 flex items-center justify-center gap-1.5 text-sm text-[#003C32]/60 md:justify-start">
                    <MapPin
                      className="h-4 w-4 text-[#A96D18]"
                      strokeWidth={1.5}
                    />
                    Petaling Jaya, Selangor
                  </p>
                </div>

                {/* Directions */}
                <a
                  href={venueMapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex flex-shrink-0 items-center justify-center gap-2.5 rounded-full bg-[#003C32] px-7 py-3.5 text-sm font-semibold text-[#F8F3E8] shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#104836] hover:shadow-lg active:translate-y-0"
                >
                  <Navigation
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                    strokeWidth={2}
                  />

                  Get Directions
                </a>

              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}