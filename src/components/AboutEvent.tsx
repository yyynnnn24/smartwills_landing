import { Sparkles, FileSignature, Monitor } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

export function AboutEvent() {
  const pillars = [
    {
      icon: Sparkles,
      title: 'Official Launch',
      text: 'Marking the official debut of SmartWills WasiatKu',
    },
    {
      icon: FileSignature,
      title: 'MoU Signing',
      text: 'Formal ceremonies with esteemed partners',
    },
    {
      icon: Monitor,
      title: 'Portal Showcase',
      text: 'Demonstration of the WasiatKu digital platform',
    },
  ];

  return (
    <section className="relative w-full bg-navy-950 py-20 sm:py-28">
      {/* Subtle top gradient */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-navy-600 to-transparent" />

      <div className="relative mx-auto max-w-4xl px-6 sm:px-8">
        <Reveal className="mb-12 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-500/80">
            The Occasion
          </span>
          <h2 className="mt-4 font-serif text-3xl font-medium text-cream-50 sm:text-4xl md:text-5xl">
            About the Event
          </h2>
          <div className="mx-auto mt-6 h-px w-16 bg-gradient-to-r from-transparent via-gold-500/50 to-transparent" />
        </Reveal>

        <Reveal delay={100} className="mb-14">
          <p className="mx-auto max-w-2xl text-center text-base leading-relaxed text-cream-50/70 sm:text-lg">
            This event marks the official launch of{' '}
            <span className="font-medium text-gold-300">SmartWills WasiatKu</span> — a significant
            milestone in digital estate planning. The occasion features Memorandum of Understanding
            signing ceremonies with valued partners and a demonstration of the SmartWills WasiatKu
            portal.
          </p>
        </Reveal>

        {/* Three pillars */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <Reveal key={pillar.title} delay={150 + index * 100}>
                <div className="glass-card group h-full rounded-2xl p-6 text-center transition-all duration-300 hover:border-gold-500/25 hover:bg-gold-500/5">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-gold-500/20 bg-gold-500/5 transition-all duration-300 group-hover:scale-110 group-hover:border-gold-500/40">
                    <Icon className="h-5 w-5 text-gold-500" strokeWidth={1.5} />
                  </div>
                  <h3 className="mb-2 text-sm font-semibold text-cream-50">{pillar.title}</h3>
                  <p className="text-xs leading-relaxed text-cream-50/50">{pillar.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
