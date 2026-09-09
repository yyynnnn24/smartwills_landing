import { Clock } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { programmeData, type ProgrammeItem } from '@/data/eventData';

function ProgrammeEntry({
  item,
  index,
}: {
  item: ProgrammeItem;
  index: number;
}) {
  return (
    <Reveal delay={index * 60}>
      <div className="group relative flex gap-4 sm:gap-6">
        {/* Time */}
        <div className="flex w-20 flex-shrink-0 flex-col items-end sm:w-28">
          <div
            className={`rounded-lg px-2.5 py-1 text-right transition-colors duration-300 ${
              item.isMilestone
                ? 'bg-[#BF801F]/10 text-[#A96D18]'
                : 'text-[#003C32]/60 group-hover:text-[#003C32]/90'
            }`}
          >
            <span className="font-sans text-xs font-semibold tabular-nums sm:text-sm">
              {item.time}
            </span>
          </div>
        </div>

        {/* Timeline line */}
        <div className="relative flex flex-col items-center">
          <div
            className={`z-10 mt-1 h-3 w-3 rounded-full border-2 transition-all duration-300 ${
              item.isMilestone
                ? 'border-[#BF801F] bg-[#BF801F] shadow-[0_0_14px_rgba(191,128,31,0.35)] group-hover:scale-125'
                : 'border-[#BF801F]/50 bg-[#F8F3E8] group-hover:border-[#BF801F]/80'
            }`}
          />

          {index < programmeData.length - 1 && (
            <div className="mt-1 w-px flex-1 bg-gradient-to-b from-[#BF801F]/30 via-[#BF801F]/15 to-[#BF801F]/5" />
          )}
        </div>

        {/* Programme card */}
        <div className="flex-1 pb-8">
          <div
            className={`rounded-xl p-4 transition-all duration-300 sm:p-5 ${
              item.isMilestone
                ? 'border border-[#BF801F]/30 bg-[#003C32] shadow-sm hover:border-[#BF801F]/50 hover:bg-[#104836]'
                : 'border border-[#003C32]/10 bg-[#003C32]/[0.06] hover:border-[#003C32]/20 hover:bg-[#003C32]/[0.10]'
            }`}
          >
            <p
              className={`text-sm leading-relaxed sm:text-base ${
                item.isMilestone
                  ? 'font-semibold text-[#F8F3E8]'
                  : 'font-medium text-[#003C32]/80'
              }`}
            >
              {item.title}
            </p>

            {item.isMilestone && (
              <span className="mt-2 inline-block rounded-full bg-[#BF801F]/15 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[#D9A441]">
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
    <section
      id="programme"
      className="relative w-full overflow-hidden bg-[#F8F3E8] py-20 sm:py-28"
    >
      {/* Decorative radial glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-[#D9A441]/[0.035] blur-[140px]" />

        <div className="absolute bottom-0 left-0 h-[350px] w-[350px] rounded-full bg-[#003C32]/[0.025] blur-[120px]" />
      </div>

      {/* Subtle grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,60,50,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,60,50,0.5) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />

      {/* Content */}
      <div className="relative mx-auto max-w-3xl px-6 sm:px-8">
        {/* Section heading */}
        <Reveal className="mb-12 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#A96D18]">
            Schedule of Events
          </span>

          <h2 className="mt-4 font-serif text-3xl font-bold text-[#003C32] sm:text-4xl md:text-5xl">
            Event Programme
          </h2>

          <div className="mx-auto mt-6 h-px w-16 bg-gradient-to-r from-transparent via-[#D9A441]/70 to-transparent" />

          <p className="mt-4 inline-flex items-center gap-2 text-sm text-[#003C32]/60">
            <Clock
              className="h-4 w-4 text-[#A96D18]"
              strokeWidth={1.5}
            />
            Saturday, 12 September 2026
          </p>
        </Reveal>

        {/* Timeline */}
        <div className="relative">
          {programmeData.map((item, index) => (
            <ProgrammeEntry
              key={index}
              item={item}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}