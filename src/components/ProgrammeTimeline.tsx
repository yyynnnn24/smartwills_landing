import { Clock } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { programmeData, type ProgrammeItem } from '@/data/eventData';

function ProgrammeEntry({ item, index }: { item: ProgrammeItem; index: number }) {
  return (
    <Reveal delay={index * 60}>
      <div className="group relative flex gap-4 sm:gap-6">
        {/* Time column */}
        <div className="flex w-20 flex-shrink-0 flex-col items-end sm:w-28">
          <div
            className={`rounded-lg px-2.5 py-1 text-right transition-colors duration-300 ${
              item.isMilestone
                ? 'bg-gold-400/10 text-gold-300'
                : 'text-cream-50/60 group-hover:text-cream-50/90'
            }`}
          >
            <span className="font-sans text-xs font-semibold tabular-nums sm:text-sm">
              {item.time}
            </span>
          </div>
        </div>

        {/* Timeline dot + line */}
        <div className="relative flex flex-col items-center">
          <div
            className={`z-10 mt-1 h-3 w-3 rounded-full border-2 transition-all duration-300 ${
              item.isMilestone
                ? 'border-gold-400 bg-gold-400 shadow-gold group-hover:scale-125'
                : 'border-gold-400/40 bg-navy-950 group-hover:border-gold-400/70'
            }`}
          />
          {index < programmeData.length - 1 && (
            <div className="mt-1 w-px flex-1 bg-gradient-to-b from-gold-400/20 to-gold-400/5" />
          )}
        </div>

        {/* Content */}
        <div className="flex-1 pb-8">
          <div
            className={`rounded-xl p-4 transition-all duration-300 sm:p-5 ${
              item.isMilestone
                ? 'glass-card border-gold-400/20 hover:border-gold-400/35 hover:bg-gold-400/8'
                : 'border border-cream-50/5 bg-navy-800/30 hover:border-cream-50/10 hover:bg-navy-800/50'
            }`}
          >
            <p
              className={`text-sm leading-relaxed sm:text-base ${
                item.isMilestone
                  ? 'font-semibold text-cream-50'
                  : 'font-medium text-cream-50/80'
              }`}
            >
              {item.title}
            </p>
            {item.isMilestone && (
              <span className="mt-2 inline-block rounded-full bg-gold-400/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-gold-300">
                Key Ceremony
              </span>
            )}
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export function ProgrammeTimeline() {
  return (
    <section id="programme" className="relative w-full bg-navy-900 py-20 sm:py-28">
      {/* Subtle background glow */}
      <div className="absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-gold-500/5 blur-[120px]" />

      <div className="relative mx-auto max-w-3xl px-6 sm:px-8">
        <Reveal className="mb-12 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-400/80">
            Schedule of Events
          </span>
          <h2 className="mt-4 font-serif text-3xl font-medium text-cream-50 sm:text-4xl md:text-5xl">
            Event Programme
          </h2>
          <div className="mx-auto mt-6 h-px w-16 bg-gradient-to-r from-transparent via-gold-400/50 to-transparent" />
          <p className="mt-4 inline-flex items-center gap-2 text-sm text-cream-50/50">
            <Clock className="h-4 w-4 text-gold-400/60" strokeWidth={1.5} />
            Saturday, 12 September 2026
          </p>
        </Reveal>

        {/* Timeline */}
        <div className="relative">
          {programmeData.map((item, index) => (
            <ProgrammeEntry key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
