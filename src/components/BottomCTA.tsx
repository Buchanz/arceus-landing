import DownloadButton from "./DownloadButton";

export default function BottomCTA() {
  return (
    <section className="bg-[#f5f5f7] py-12">
      <div className="mx-auto w-[min(800px,92%)] text-center text-[#1d1d1f]">
        <div className="mt-2 flex justify-center">
          <DownloadButton />
        </div>

        <div className="mt-8 text-[11px] leading-5 text-[#1d1d1f]/50">
          <div>Designed by Arceus</div>
          <div>Developed in Vancouver in 2025</div>
        </div>
      </div>
    </section>
  );
}