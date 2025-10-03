export default function BottomCTA() {
  return (
    <section className="relative bg-[#f5f5f7] py-8 sm:py-12 mt-auto">
      <div className="mx-auto w-[min(1200px,95%)] text-center text-[#1d1d1f] px-4 sm:px-0">

        {/* Footer legal row - all on same line */}
        <div className="mt-4 sm:mt-6 text-[11px] leading-5 text-[#1d1d1f]/60">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
            {/* Left side - Copyright */}
            <div className="text-[10px] sm:text-[11px] text-[#1d1d1f]/60">© 2025 Arceus Inc. All rights reserved.</div>
            
            {/* Center - Links */}
            <div className="inline-flex flex-wrap items-baseline justify-center gap-x-4 gap-y-2">
              <a href="/privacy" className="hover:text-[#1d1d1f]">Privacy Policy</a>
              <span className="opacity-40">|</span>
              <a href="mailto:info@arceus.ca" className="hover:text-[#1d1d1f]">Contact</a>
              <span className="opacity-40">|</span>
              <a href="/terms" className="hover:text-[#1d1d1f]">Terms of Use</a>
            </div>
            
            {/* Right side - Developed by */}
            <div className="text-[10px] sm:text-[11px] text-[#1d1d1f]/60">Developed by Arceus</div>
          </div>
        </div>
      </div>
    </section>
  );
}