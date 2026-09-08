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
    <Reveal delay={index * 80}>
      <div className="group relative h-full overflow-hidden rounded-2xl border border-cream-50/8 bg-gradient-to-b from-emerald-850/55 to-emerald-950/55 p-6 transition-all duration-300 hover:border-gold-500/20 hover:from-emerald-850/75 hover:to-emerald-950/75 sm:p-7">
        {/* Number watermark */}
        <span className="absolute -right-2 -top-3 font-serif text-7xl font-bold text-cream-50/3 transition-all duration-300 group-hover:text-gold-500/8">
          0{index + 1}
        </span>

        <div className="relative">
          {/* Icon */}
          <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-gold-500/15 bg-gold-500/5 transition-all duration-300 group-hover:scale-110 group-hover:border-gold-500/30 group-hover:shadow-gold">
            <Icon className="h-5 w-5 text-gold-500" strokeWidth={1.5} />
          </div>

          {/* Title */}
          <h3 className="mb-2 font-serif text-xl font-medium text-cream-50 sm:text-2xl">
            {highlight.title}
          </h3>

          {/* Description */}
          <p className="text-sm leading-relaxed text-cream-50/55">
            {highlight.description}
          </p>
        </div>

        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-gold-500/0 to-transparent transition-all duration-500 group-hover:via-gold-500/30" />
      </div>
    </Reveal>
  );
}

export function EventHighlights() {
  return (
    <section className="relative w-full bg-emerald-600 py-20 sm:py-28">
      <div className="absolute right-1/3 top-1/2 h-[300px] w-[300px] rounded-full bg-gold-500/4 blur-[100px]" />

      <div className="relative mx-auto max-w-5xl px-6 sm:px-8">
        <Reveal className="mb-12 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-500/80">
            Key Moments
          </span>
          <h2 className="mt-4 font-serif text-3xl font-medium text-cream-50 sm:text-4xl md:text-5xl">
            Event Highlight
          </h2>
          <div className="mx-auto mt-6 h-px w-16 bg-gradient-to-r from-transparent via-gold-500/50 to-transparent" />
        </Reveal>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
          {highlightsData.map((highlight, index) => (
            <HighlightCard key={highlight.title} highlight={highlight} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
