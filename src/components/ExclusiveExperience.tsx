import { Gift, Camera, User, Users } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

export function ExclusiveExperience() {
  return (
    <section className="relative w-full overflow-hidden bg-[#F8F3E8] py-20 sm:py-28">

      {/* Decorative background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-[#D9A441]/[0.035] blur-[140px]" />
      </div>

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,60,50,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,60,50,0.5) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative mx-auto max-w-5xl px-6 sm:px-8">

        {/* ==================== */}
        {/* Exclusive Experience */}
        {/* ==================== */}

        <Reveal className="mb-12 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8F1D1D]">
            Exclusive Experience
          </span>

          <h2 className="mt-4 font-serif text-3xl font-bold text-[#D9A441] sm:text-4xl md:text-5xl">
            Experience Highlights
          </h2>

          <div className="mx-auto mt-6 h-px w-16 bg-gradient-to-r from-transparent via-[#D9A441] to-transparent" />
        </Reveal>

        {/* Experience Cards */}
        <div className="grid gap-5 md:grid-cols-2">

          {/* Gift Set */}
          <Reveal delay={100}>
            <div className="group relative h-full overflow-hidden rounded-3xl border border-[#D9A441]/25 bg-white p-7 shadow-[0_15px_45px_rgba(0,60,50,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#D9A441]/60 hover:shadow-[0_20px_55px_rgba(0,60,50,0.10)] sm:p-9">

              {/* Number */}
              <div className="absolute right-6 top-5 font-serif text-6xl font-bold text-[#D9A441]/10">
                01
              </div>

              {/* Icon */}
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#D9A441]/30 bg-[#F8F3E8]">
                <Gift
                  className="h-6 w-6 text-[#A96D18]"
                  strokeWidth={1.5}
                />
              </div>

              <h3 className="font-serif text-2xl font-bold leading-tight text-[#A52A2A] sm:text-3xl">
                Limited Edition
                <br />
                10th Anniversary Gift Set
              </h3>

              <p className="mt-4 max-w-md text-sm leading-relaxed text-[#A52A2A]/60 sm:text-base">
                Exclusively curated to celebrate this special milestone.
              </p>

              {/* Bottom line */}
              <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#D9A441]/0 to-transparent transition-all duration-500 group-hover:via-[#D9A441]/60" />
            </div>
          </Reveal>

          {/* Professional Image Shooting */}
          <Reveal delay={160}>
            <div className="group relative h-full overflow-hidden rounded-3xl border border-[#D9A441]/25 bg-white p-7 shadow-[0_15px_45px_rgba(0,60,50,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#D9A441]/60 hover:shadow-[0_20px_55px_rgba(0,60,50,0.10)] sm:p-9">

              {/* Number */}
              <div className="absolute right-6 top-5 font-serif text-6xl font-bold text-[#D9A441]/10">
                02
              </div>

              {/* Icon */}
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#D9A441]/30 bg-[#F8F3E8]">
                <Camera
                  className="h-6 w-6 text-[#A96D18]"
                  strokeWidth={1.5}
                />
              </div>

              <h3 className="font-serif text-2xl font-bold leading-tight text-[#A52A2A] sm:text-3xl">
                Personal Professional
                <br />
                Image Shooting
              </h3>

              <p className="mt-4 max-w-md text-sm leading-relaxed text-[#A52A2A]/60 sm:text-base">
                Capture your best professional image on this memorable evening.
              </p>

              {/* Bottom line */}
              <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#D9A441]/0 to-transparent transition-all duration-500 group-hover:via-[#D9A441]/60" />
            </div>
          </Reveal>

        </div>

        {/* ==================== */}
        {/* Reservation */}
        {/* ==================== */}

        <Reveal className="mb-10 mt-20 text-center sm:mt-24">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8F1D1D]">
            Dinner Reservation
          </span>

          <h2 className="mt-4 font-serif text-3xl font-bold text-[#D9A441] sm:text-4xl md:text-5xl">
            Reserve Your Seat
          </h2>

          <div className="mx-auto mt-6 h-px w-16 bg-gradient-to-r from-transparent via-[#D9A441] to-transparent" />
        </Reveal>

        {/* Reservation Cards */}
        <div className="grid gap-5 md:grid-cols-2">

          {/* Individual Seat */}
          <Reveal delay={100}>
            <div className="rounded-3xl border border-[#D9A441]/25 bg-white p-7 text-center shadow-[0_15px_45px_rgba(0,60,50,0.06)] sm:p-9">

              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#F8F3E8]">
                <User
                  className="h-6 w-6 text-[#A96D18]"
                  strokeWidth={1.5}
                />
              </div>

              <h3 className="font-serif text-2xl font-bold text-[#000000]">
                Individual Seat
              </h3>

              <div className="mt-4">
                <span className="font-serif text-4xl font-bold text-[#8F1D1D]">
                  RM 180
                </span>

                <span className="ml-2 text-sm text-[#000000]/50">
                  per person
                </span>
              </div>

            </div>
          </Reveal>

          {/* Corporate Table */}
          <Reveal delay={160}>
            <div className="rounded-3xl border border-[#D9A441]/50 bg-[#8F1D1D] p-7 text-center shadow-[0_15px_45px_rgba(0,60,50,0.12)] sm:p-9">

              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#D9A441]/10">
                <Users
                  className="h-6 w-6 text-[#D9A441]"
                  strokeWidth={1.5}
                />
              </div>

              <h3 className="font-serif text-2xl font-bold text-[#F8F3E8]">
                Corporate Table
              </h3>

              <div className="mt-4">
                <span className="font-serif text-4xl font-bold text-[#D9A441]">
                  RM 1,500
                </span>
              </div>

              <p className="mt-2 text-sm text-[#F8F3E8]/60">
                Table of 10
              </p>

            </div>
          </Reveal>

        </div>

        {/* Reservation Notice */}
        <Reveal delay={200}>
          <div className="mt-8 flex items-center justify-center gap-2 text-center">
            <span className="h-1.5 w-1.5 rounded-full bg-[#8F1D1D]" />

            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#8F1D1D] sm:text-sm">
              Limited seats available. Advance reservation is required.
            </p>

            <span className="h-1.5 w-1.5 rounded-full bg-[#8F1D1D]" />
          </div>
        </Reveal>

      </div>
    </section>
  );
}