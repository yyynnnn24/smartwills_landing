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
        <div className="flex w-24 flex-shrink-0 flex-col items-end sm:w-28">
          <div className="rounded-lg px-2.5 py-1 text-right transition-colors duration-300">
            <span className="whitespace-nowrap font-sans text-xs font-semibold tabular-nums text-[#8F1D1D]/75 sm:text-sm">
              {item.time}
            </span>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative flex flex-col items-center">
          {/* Timeline dot */}
          <div className="mt-2 h-2.5 w-2.5 flex-shrink-0 rounded-full border-2 border-[#BF801F] bg-[#F8F3E8] transition-all duration-300 group-hover:bg-[#8F1D1D]" />

          {/* Timeline line */}
          {index < programmeData.length - 1 && (
            <div className="mt-1 w-px flex-1 bg-gradient-to-b from-[#BF801F]/40 via-[#BF801F]/20 to-[#BF801F]/5" />
          )}
        </div>

        {/* Programme */}
        <div className="flex-1 pb-8">
          {index === 1 ? (
          <div className="text-sm font-medium leading-relaxed text-[#000000]/80 transition-colors duration-300 group-hover:text-[#8F1D1D] sm:text-base">
            <div>Play Video</div>

            <div className="mt-1 flex flex-wrap items-center gap-2 text-xs sm:text-sm">
              <span>Greeting Videos from Our Lawyers & Core Team</span>

              <span className="flex items-center gap-1.5">
                <img src="https://flagcdn.com/w40/sg.png" alt="Singapore" className="h-4 w-6 object-cover" />
                <img src="https://flagcdn.com/w40/hk.png" alt="Hong Kong" className="h-4 w-6 object-cover" />
                <img src="https://flagcdn.com/w40/th.png" alt="Thailand" className="h-4 w-6 object-cover" />
                <img src="https://flagcdn.com/w40/ph.png" alt="Philippines" className="h-4 w-6 object-cover" />
                <img src="https://flagcdn.com/w40/cn.png" alt="China" className="h-4 w-6 object-cover" />
              </span>
            </div>
          </div>
        ) : (
          <p className="whitespace-pre-line text-sm font-medium leading-relaxed text-[#000000]/80 transition-colors duration-300 group-hover:text-[#8F1D1D] sm:text-base">
            {item.title}
          </p>
        )}
          
          {item.description && (
          <p className="mt-1.5 flex items-center gap-1.5 text-xs text-[#003C32]/70 sm:text-sm">
            <span className="text-[#BF801F]">•</span>
            {item.description}
          </p>
        )}
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

        <div className="absolute bottom-0 left-0 h-[350px] w-[350px] rounded-full bg-[#8F1D1D]/[0.025] blur-[120px]" />
      </div>

      {/* Subtle grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(143,29,29,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(143,29,29,0.4) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />

      {/* Content */}
      <div className="relative mx-auto max-w-3xl px-6 sm:px-8">

        {/* Section heading */}
        <Reveal className="mb-12 text-center">

          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8F1D1D]">
            Schedule of Events
          </span>

          <h2 className="mt-4 font-serif text-3xl font-bold text-[#D9A441] sm:text-4xl md:text-5xl">
            Event Programme
          </h2>

          {/* Divider */}
          <div className="mx-auto mt-5 h-px w-16 bg-gradient-to-r from-transparent via-[#BF801F]/70 to-transparent" />

          {/* Date */}
          <p className="mt-4 inline-flex items-center gap-2 text-sm text-[#000000]/60">
            <Clock
              className="h-4 w-4 text-[#8F1D1D]"
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