import DownloadButton from "./DownloadButton";

export default function BottomCTA() {
  return (
    <section className="relative bg-[#f5f5f7] py-12">
      <div className="mx-auto w-[min(800px,92%)] text-center text-[#1d1d1f]">
        <div className="mt-2 flex justify-center">
          <DownloadButton />
        </div>

        {/* Footer legal row - centered with download button */}
        <div className="mt-6 text-[11px] leading-5 text-[#1d1d1f]/60">
          {/* Centered links */}
          <div className="mx-auto w-[min(800px,92%)] text-center">
            <div className="inline-flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
              <a href="#" className="hover:text-[#1d1d1f]">Privacy Policy</a>
              <span className="opacity-40">|</span>
              <a href="#" className="hover:text-[#1d1d1f]">Use of Cookies</a>
              <span className="opacity-40">|</span>
              <a href="#" className="hover:text-[#1d1d1f]">Terms of Use</a>
              <span className="opacity-40">|</span>
              <a href="#" className="hover:text-[#1d1d1f]">Sales and Refunds</a>
              <span className="opacity-40">|</span>
              <a href="#" className="hover:text-[#1d1d1f]">Legal</a>
            </div>
          </div>
        </div>

      {/* Absolute pinned copyright and developed by */}
      <div className="pointer-events-none absolute bottom-3 left-[4%] text-[11px] leading-5 text-[#1d1d1f]/60">© 2025 Arceus Inc. All rights reserved.</div>
      <div className="pointer-events-none absolute bottom-3 right-[4%] text-[11px] leading-5 text-[#1d1d1f]/60">Developed by Arceus</div>
      </div>
    </section>
  );
}