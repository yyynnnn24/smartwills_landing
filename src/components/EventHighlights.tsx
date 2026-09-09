import { Rocket, PenTool, Monitor, Camera } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { highlightsData, type Highlight } from '@/data/eventData';

const iconMap = {
  launch: Rocket,
  signing: PenTool,
  portal: Monitor,
  photo: Camera,
};

function HighlightCard({ highlight, index }: { highlight: Highlight; index: number }) {
  const Icon = iconMap[highlight.icon];

  return (
    <Reveal delay={index * 60}>
      <div className="group relative h-full overflow-hidden rounded-2xl border border-[#D9A441]/20 bg-gradient-to-br from-[#104836] via-[#023936] to-[#003C32] p-5 transition-all duration-300 hover:border-[#D9A441]/40 hover:from-[#185A47] hover:via-[#104836] hover:to-[#023936] sm:p-6">
        <div className="relative flex flex-col items-center justify-center text-center">
          {/* Icon */}
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-[#F8F3E8]/25 bg-[#F8F3E8] transition-all duration-300 group-hover:scale-110 group-hover:border-[#D9A441]/50 group-hover:bg-[#D9A441]/15 group-hover:shadow-[0_0_20px_rgba(217,164,65,0.18)]">
            <Icon
              className="h-5 w-5 text-[#104836]"
              strokeWidth={1.5}
            />
          </div>

          {/* Title */}
          <h3 className="font-serif text-xl font-bold leading-tight text-[#F8F3E8] transition-colors duration-300 group-hover:text-[#D9A441] sm:text-2xl">
            {highlight.title}
          </h3>
        </div>

        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-5 right-5 h-px bg-gradient-to-r from-transparent via-[#D9A441]/0 to-transparent transition-all duration-500 group-hover:via-[#D9A441]/50" />
      </div>
    </Reveal>
  );
}

export function EventHighlights() {
  return (
    <section
      className="relative w-full overflow-hidden bg-[#F8F3E8] py-20 sm:py-28"
    >
      {/* Decorative radial glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-[#D9A441]/[0.035] blur-[140px]" />
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


      <div className="relative mx-auto max-w-3xl px-6 sm:px-8">

        {/* Section heading */}
        <Reveal className="mb-10 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D9A441]">
            Key Moments
          </span>

          <h2 className="mt-4 font-serif text-3xl font-bold text-[#003C32] sm:text-4xl md:text-5xl">
            Event Highlights
          </h2>

          <div className="mx-auto mt-6 h-px w-16 bg-gradient-to-r from-transparent via-[#D9A441]/60 to-transparent" />
        </Reveal>

        {/* Highlight Cards - compact grid */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {highlightsData.map((highlight, index) => (
            <HighlightCard
              key={highlight.title}
              highlight={highlight}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
