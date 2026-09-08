import { Reveal } from '@/components/Reveal';
import { speakersData, type Speaker } from '@/data/eventData';

function SpeakerCard({ speaker, index }: { speaker: Speaker; index: number }) {
  return (
    <Reveal delay={index * 80}>
      <div className="group relative overflow-hidden rounded-2xl border border-cream-50/8 bg-emerald-850/50 p-6 text-center transition-all duration-300 hover:border-gold-500/25 hover:bg-emerald-850/70">
        {/* Gradient ring on hover */}
        <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b from-gold-500/0 to-gold-500/0 transition-all duration-500 group-hover:from-gold-500/5 group-hover:to-transparent" />

        {/* Avatar */}
        <div className="relative mx-auto mb-5 flex h-20 w-20 items-center justify-center sm:h-24 sm:w-24">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gold-500/20 via-emerald-500/10 to-gold-500/5 transition-all duration-500 group-hover:from-gold-500/30 group-hover:to-gold-500/10" />
          <div className="absolute inset-[2px] rounded-full bg-emerald-900" />
          <span className="relative font-serif text-2xl font-medium text-gradient-gold sm:text-3xl">
            {speaker.initials}
          </span>
        </div>

        {/* Name */}
        <h3 className="text-sm font-semibold leading-snug text-cream-50 sm:text-base">
          {speaker.name}
        </h3>

        {/* Decorative underline */}
        <div className="mx-auto mt-3 h-px w-8 bg-gradient-to-r from-transparent via-gold-500/40 to-transparent transition-all duration-300 group-hover:w-12" />
      </div>
    </Reveal>
  );
}

export function Speakers() {
  return (
    <section className="relative w-full bg-emerald-950 py-20 sm:py-28">
      <div className="relative mx-auto max-w-4xl px-6 sm:px-8">
        <Reveal className="mb-12 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-500/80">
            Distinguished Guests
          </span>
          <h2 className="mt-4 font-serif text-3xl font-medium text-cream-50 sm:text-4xl md:text-5xl">
            Featured Speakers
          </h2>
          <div className="mx-auto mt-6 h-px w-16 bg-gradient-to-r from-transparent via-gold-500/50 to-transparent" />
        </Reveal>

        <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
          {speakersData.map((speaker, index) => (
            <SpeakerCard key={speaker.name} speaker={speaker} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
