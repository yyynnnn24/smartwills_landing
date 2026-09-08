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
                ? 'bg-[#BF801F]/10 text-[#C9953B]'
                : 'text-[#E5E7EB]/100 group-hover:text-[#E5E7EB]/90'
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
                : 'border-[#BF801F]/60 bg-[#023936] group-hover:border-[#BF801F]/70'
            }`}
          />

          {index < programmeData.length - 1 && (
            <div className="mt-1 w-px flex-1 bg-gradient-to-b from-[#BF801F]/25 via-[#BF801F]/10 to-[#BF801F]/5" />
          )}
        </div>

        {/* Programme card */}
        <div className="flex-1 pb-8">
          <div
            className={`rounded-xl p-4 transition-all duration-300 sm:p-5 ${
              item.isMilestone
                ? 'border border-[#BF801F]/20 bg-[#104836]/45 hover:border-[#BF801F]/35 hover:bg-[#104836]/60'
                : 'border border-white/[0.06] bg-[#104836]/25 hover:border-white/[0.10] hover:bg-[#104836]/45'
            }`}
          >
            <p
              className={`text-sm leading-relaxed sm:text-base ${
                item.isMilestone
                  ? 'font-semibold text-[#E5E7EB]'
                  : 'font-medium text-[#E5E7EB]/100'
              }`}
            >
              {item.title}
            </p>

            {item.isMilestone && (
              <span className="mt-2 inline-block rounded-full bg-[#BF801F]/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[#BF801F]">
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
      className="relative w-full overflow-hidden bg-[#023936] py-20 sm:py-28"
    >
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        {/* Main soft green glow */}
        <div className="absolute left-1/2 top-[-100px] h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-[#104836]/50 blur-[140px]" />

        {/* Gold glow on right */}
        <div className="absolute right-[-150px] top-[20%] h-[400px] w-[400px] rounded-full bg-[#BF801F]/[0.06] blur-[130px]" />

        {/* Green glow on left */}
        <div className="absolute left-[-180px] bottom-[10%] h-[400px] w-[400px] rounded-full bg-[#104836]/40 blur-[130px]" />

        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#012b2a]/80 to-transparent" />

        {/* Very subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(248,243,232,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(248,243,232,0.5) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-3xl px-6 sm:px-8">
        {/* Section heading */}
        <Reveal className="mb-12 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#BF801F]/80">
            Schedule of Events
          </span>

          <h2 className="mt-4 font-serif text-3xl font-bold text-[#E5E7EB] sm:text-4xl md:text-5xl">
            Event Programme
          </h2>

          <div className="mx-auto mt-6 h-px w-16 bg-gradient-to-r from-transparent via-[#BF801F]/50 to-transparent" />

          <p className="mt-4 inline-flex items-center gap-2 text-sm text-[#E5E7EB]/100">
            <Clock
              className="h-4 w-4 text-[#BF801F]/100"
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