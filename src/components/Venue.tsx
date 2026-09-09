import { MapPin, Navigation, Calendar, Play } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { venueMapUrl } from '@/data/eventData';

// To use a real video, set VIDEO_SRC to either:
//   - a local file path like "/assets/venue-video.mp4"
//   - or a YouTube/Vimeo embed URL like "https://www.youtube.com/embed/VIDEO_ID"
// Leave as empty string to show the elegant placeholder state.
const VIDEO_SRC = '';

function VideoContainer() {
  const isYouTube = VIDEO_SRC.includes('youtube.com/embed') || VIDEO_SRC.includes('player.vimeo.com');

  if (VIDEO_SRC && isYouTube) {
    return (
      <div className="relative w-full overflow-hidden rounded-2xl border border-[#D9A441]/20 shadow-emerald">
        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
          <iframe
            src={VIDEO_SRC}
            title="Venue Video"
            className="absolute inset-0 h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    );
  }

  if (VIDEO_SRC) {
    return (
      <div className="relative w-full overflow-hidden rounded-2xl border border-[#D9A441]/20 shadow-emerald">
        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
          <video
            src={VIDEO_SRC}
            controls
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </div>
    );
  }

  // Elegant placeholder state
  return (
    <div className="relative w-full overflow-hidden rounded-2xl border border-[#D9A441]/20 bg-gradient-to-br from-[#104836] via-[#023936] to-[#003C32] shadow-emerald">
      <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
        {/* Subtle grid texture */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(248,243,232,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(248,243,232,0.5) 1px, transparent 1px)',
            backgroundSize: '30px 30px',
          }}
        />

        {/* Gold radial glow */}
        <div className="absolute left-1/2 top-1/2 h-[200px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#BF801F]/[0.08] blur-[80px]" />

        {/* Play button overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="group mb-3 flex h-16 w-16 items-center justify-center rounded-full border-2 border-[#D9A441]/50 bg-[#003C32]/80 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:border-[#D9A441] hover:shadow-[0_0_30px_rgba(217,164,65,0.3)] cursor-pointer sm:h-20 sm:w-20">
            <Play className="h-6 w-6 text-[#D9A441] transition-transform duration-300 group-hover:scale-110 sm:h-7 sm:w-7" strokeWidth={1.5} fill="currentColor" />
          </div>
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#F8F3E8]/50 sm:text-sm">
            Venue Walkthrough
          </span>
        </div>
      </div>
    </div>
  );
}

export function Venue() {
  return (
    <section className="relative w-full bg-[#003C32] py-20 sm:py-28">
      <div className="relative mx-auto max-w-4xl px-6 sm:px-8">
        <Reveal className="mb-10 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D9A441]">
            Location
          </span>
          <h2 className="mt-4 font-serif text-3xl font-bold text-[#F8F3E8] sm:text-4xl md:text-5xl">
            Venue
          </h2>
          <div className="mx-auto mt-6 h-px w-16 bg-gradient-to-r from-transparent via-[#D9A441]/60 to-transparent" />
        </Reveal>

        <Reveal delay={100}>
          <div className="overflow-hidden rounded-3xl border border-[#D9A441]/15 bg-gradient-to-b from-[#104836]/40 to-[#003C32]/60 shadow-emerald">
            {/* Video area */}
            <div className="p-4 sm:p-6">
              <VideoContainer />
            </div>

            {/* Venue details */}
            <div className="flex flex-col items-center gap-6 border-t border-[#D9A441]/15 p-6 text-center sm:p-8 md:flex-row md:items-start md:text-left">
              <div className="flex-1">
                <div className="mb-3 flex items-center justify-center gap-2 md:justify-start">
                  <Calendar className="h-4 w-4 text-[#D9A441]" strokeWidth={1.5} />
                  <span className="text-xs font-medium uppercase tracking-wider text-[#D9A441]">
                    12 September 2026
                  </span>
                </div>
                <h3 className="font-serif text-2xl font-medium text-[#F8F3E8] sm:text-3xl">
                  Tropicana Golf &amp; Country Resort
                </h3>
                <p className="mt-2 flex items-center justify-center gap-1.5 text-sm text-[#F8F3E8]/60 md:justify-start">
                  <MapPin className="h-4 w-4 text-[#D9A441]/70" strokeWidth={1.5} />
                  Petaling Jaya, Selangor
                </p>
              </div>

              <a
                href={venueMapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex flex-shrink-0 items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-[#BF801F] to-[#A96D18] px-7 py-3.5 text-sm font-semibold text-[#F8F3E8] shadow-gold transition-all duration-300 hover:scale-[1.03] hover:shadow-lg hover:shadow-[#BF801F]/25 active:scale-[0.98]"
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
