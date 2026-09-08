import { Rocket, PenTool, Monitor, Camera } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { highlightsData, type Highlight } from '@/data/eventData';

const iconMap = {
  launch: Rocket,
  signing: PenTool,
  portal: Monitor,
  photo: Camera,
};

function HighlightCard({ highlight }: { highlight: Highlight }) {
  const Icon = iconMap[highlight.icon];

  return (
    <Reveal>
      <div className="group relative h-full overflow-hidden rounded-2xl border border-[#D9A441]/20 bg-gradient-to-br from-[#185A47] via-[#104836] to-[#0B453B] p-6 transition-all duration-300 hover:border-[#D9A441]/40 hover:from-[#216650] hover:via-[#185A47] hover:to-[#104836] sm:p-7">
        <div className="relative flex min-h-[180px] flex-col items-center justify-center text-center">
          {/* Icon */}
          <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl border border-[#D9A441]/25 bg-[#D9A441]/10 transition-all duration-300 group-hover:scale-110 group-hover:border-[#D9A441]/50 group-hover:bg-[#D9A441]/15 group-hover:shadow-[0_0_25px_rgba(217,164,65,0.18)]">
            <Icon
              className="h-6 w-6 text-[#D9A441]"
              strokeWidth={1.5}
            />
          </div>

          {/* Title */}
          <h3 className="font-serif text-2xl font-bold leading-tight text-[#E5E7EB] transition-colors duration-300 group-hover:text-[#D9A441] sm:text-3xl">
            {highlight.title}
          </h3>
        </div>

        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[#D9A441]/0 to-transparent transition-all duration-500 group-hover:via-[#D9A441]/50" />
      </div>
    </Reveal>
  );
}

export function EventHighlights() {
  return (
    <section
      className="relative w-full overflow-hidden bg-[#023936] py-20 sm:py-28"
    >
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        {/* Green glow */}
        <div className="absolute left-1/2 top-[-100px] h-[450px] w-[700px] -translate-x-1/2 rounded-full bg-[#104836]/45 blur-[130px]" />

        {/* Gold glow */}
        <div className="absolute right-[-120px] top-1/2 h-[350px] w-[350px] rounded-full bg-[#D9A441]/[0.06] blur-[120px]" />

        {/* Left green glow */}
        <div className="absolute bottom-[-100px] left-[-150px] h-[350px] w-[350px] rounded-full bg-[#104836]/40 blur-[120px]" />

        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(248,243,232,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(248,243,232,0.5) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="relative mx-auto max-w-3xl px-6 sm:px-8">

        {/* Section heading */}
        <Reveal className="mb-12 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D9A441]">
            Key Moments
          </span>

          <h2 className="mt-4 font-serif text-3xl font-bold text-[#E5E7EB] sm:text-4xl md:text-5xl">
            Event Highlights
          </h2>

          <div className="mx-auto mt-6 h-px w-16 bg-gradient-to-r from-transparent via-[#D9A441]/60 to-transparent" />
        </Reveal>

        {/* Highlight Cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
          {highlightsData.map((highlight) => (
            <HighlightCard
              key={highlight.title}
              highlight={highlight}
            />
          ))}
        </div>
      </div>
    </section>
  );
}