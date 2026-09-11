import { Reveal } from '@/components/Reveal';
import { partnersData, type Partner } from '@/data/eventData';

function PartnerCard({
  partner,
  index,
}: {
  partner: Partner;
  index: number;
}) {
  return (
    <Reveal delay={index * 80}>
    <div className="group relative flex h-[150px] items-center justify-center overflow-hidden rounded-2xl border border-[#D9A441]/25 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#D9A441]/60 hover:shadow-lg sm:h-[220px] sm:p-6">    
    <img
          src={partner.logo}
          alt={partner.name}
          className="h-auto max-h-[120px] w-auto max-w-[200px] object-contain transition-transform duration-300 group-hover:scale-105 sm:max-h-[150px] sm:max-w-[280px]"
        />

        <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#D9A441]/0 to-transparent transition-all duration-500 group-hover:via-[#D9A441]/60" />
      </div>
    </Reveal>
  );
}

export function EventHighlights() {
  return (
    <section className="relative w-full overflow-hidden bg-[#F8F3E8] py-20 sm:py-28">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-[#D9A441]/[0.035] blur-[140px]" />
      </div>

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,60,50,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,60,50,0.5) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative mx-auto max-w-3xl px-6 sm:px-8">
        {/* Heading */}
        <Reveal className="mb-10 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8F1D1D]">
            With Gratitude To Our Valued Sponsors
          </span>

          <h2 className="mt-4 font-serif text-3xl font-bold text-[#D9A441] sm:text-4xl md:text-5xl">
            Thank you for your generous support and for being part of our 10th Anniversary Celebration!
          </h2>

          <div className="mx-auto mt-6 h-px w-16 bg-gradient-to-r from-transparent via-[#D9A441]/60 to-transparent" />
        </Reveal>

        {/* Logo Grid - 2 x 2 */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
          {partnersData.map((partner, index) => (
            <PartnerCard
              key={partner.name}
              partner={partner}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}