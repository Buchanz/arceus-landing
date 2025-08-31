export default function BottomCTA() {
  return (
    <section className="relative bg-[#f5f5f7] py-8 sm:py-12 mt-auto">
      <div className="mx-auto w-[min(800px,92%)] text-center text-[#1d1d1f] px-4 sm:px-0">

        {/* Footer legal row - centered with download button */}
        <div className="mt-4 sm:mt-6 text-[11px] leading-5 text-[#1d1d1f]/60">
          {/* Centered links */}
          <div className="mx-auto w-[min(800px,92%)] text-center">
            <div className="inline-flex flex-wrap items-baseline justify-center gap-x-4 gap-y-2">
              <a href="#" className="hover:text-[#1d1d1f]">Privacy Policy</a>
              <span className="opacity-40">|</span>
              <a href="mailto:info@arceus.ca" className="hover:text-[#1d1d1f]">Contact</a>
              <span className="opacity-40">|</span>
              <a href="#" className="hover:text-[#1d1d1f]">Terms of Use</a>
            </div>
          </div>
        </div>

      {/* Absolute pinned copyright and developed by */}
      <div className="pointer-events-none absolute bottom-3 left-[4%] text-[10px] sm:text-[11px] leading-5 text-[#1d1d1f]/60">© 2025 Arceus Inc. All rights reserved.</div>
      <div className="pointer-events-none absolute bottom-3 right-[4%] text-[10px] sm:text-[11px] leading-5 text-[#1d1d1f]/60">Developed by Arceus</div>
      </div>
    </section>
  );
}