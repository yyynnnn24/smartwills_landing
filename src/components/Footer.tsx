import logo from '@/assets/logo.png';

export function Footer() {
  return (
    <footer className="relative w-full bg-[#003C32] border-t border-[#D9A441]/20 py-12">
      <div className="mx-auto max-w-4xl px-6 sm:px-8">
        <div className="flex flex-col items-center gap-6 text-center">
          {/* Copyright */}
          <p className="text-xs text-[#F8F3E8]/30">
            &copy; 2026 SmartWills WasiatKu. All rights reserved.
          </p>

        </div>
      </div>
    </footer>
  );
}
