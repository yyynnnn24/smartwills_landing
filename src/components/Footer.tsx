import { Shield } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative w-full bg-navy-950 border-t border-gold-500/10 py-12">
      <div className="mx-auto max-w-4xl px-6 sm:px-8">
        <div className="flex flex-col items-center gap-6 text-center">
          {/* Logo mark */}
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-gold-500/20 bg-gold-500/5">
              <Shield className="h-5 w-5 text-gold-500" strokeWidth={1.5} />
            </div>
            <span className="font-serif text-lg font-medium text-cream-50">
              SmartWills <span className="text-gradient-gold">WasiatKu</span>
            </span>
          </div>

          {/* Divider */}
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />

          {/* Event tagline */}
          <p className="text-sm text-cream-50/50">
            Official Launch &bull; 12 September 2026
          </p>

          {/* Copyright */}
          <p className="text-xs text-cream-50/30">
            &copy; 2026 SmartWills WasiatKu. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
