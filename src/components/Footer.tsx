import logo from '@/assets/logo.png';

export function Footer() {
  return (
    <footer className="relative w-full bg-[#003C32] border-t border-[#D9A441]/20 py-12">
      <div className="mx-auto max-w-4xl px-6 sm:px-8">
        <div className="flex flex-col items-center gap-6 text-center">

          {/* Logo mark */}
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#D9A441]/5">
              <img
                src={logo}
                alt="SmartWills WasiatKu Logo"
                className="h-25 w-auto rounded-md object-contain"
              />
            </div>

            <span className="font-serif text-xl font-medium text-[#F8F3E8]">
              SmartWills{' '}
              <span className="text-gradient-gold">
                WasiatKu
              </span>
            </span>
          </div>

          {/* Divider */}
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-[#D9A441]/40 to-transparent" />

          {/* Event tagline */}
          <p className="text-sm text-[#F8F3E8]/50">
            Official Launch &bull; 12 September 2026
          </p>

          {/* Copyright */}
          <p className="text-xs text-[#F8F3E8]/30">
            &copy; 2026 SmartWills WasiatKu. All rights reserved.
          </p>

        </div>
      </div>
    </footer>
  );
}
