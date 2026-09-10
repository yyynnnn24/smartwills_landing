import { ArrowUpRight } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

export function SmartWillsCTA() {
  return (
    <section className="relative w-full overflow-hidden bg-[#F8F3E8] py-16 sm:py-20">
      {/* Decorative Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D9A441]/[0.08] blur-[120px]" />
      </div>

      {/* Decorative Lines */}
      <div className="pointer-events-none absolute left-6 top-6 h-12 w-12 border-l border-t border-[#D9A441]/40 sm:left-10 sm:top-10 sm:h-16 sm:w-16" />
      <div className="pointer-events-none absolute bottom-6 right-6 h-12 w-12 border-b border-r border-[#D9A441]/40 sm:bottom-10 sm:right-10 sm:h-16 sm:w-16" />

      <div className="relative mx-auto max-w-3xl px-6 text-center sm:px-8">
        <Reveal>
          {/* Small Label */}
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D9A441]">
            Discover SmartWills
          </span>

          {/* Heading */}
          <h2 className="mt-4 font-serif text-3xl font-bold text-[#D9A441] sm:text-4xl md:text-5xl">
            Learn More About SmartWills
          </h2>

          {/* Divider */}
          <div className="mx-auto mt-6 h-px w-16 bg-gradient-to-r from-transparent via-[#D9A441] to-transparent" />

          {/* Website Button */}
          <div className="mt-8">
            <a
              href="https://smartwills.com.my/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 rounded-full bg-[#D9A441] px-7 py-3.5 text-sm font-semibold text-[#00000] shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#BF801F] hover:shadow-xl"
            >
              Visit Our Website

              <ArrowUpRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                strokeWidth={2}
              />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}