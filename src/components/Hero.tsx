import DownloadButton from "./DownloadButton";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative isolate mx-auto w-[min(1100px,92%)] bg-white">
      <div className="mx-auto mt-10 w-fit flex flex-col items-center">
        {/* Aiva app icon with drop shadow only */}
        <div className="w-[175px] h-[175px] rounded-[45px] shadow-[0_20px_40px_rgba(0,0,0,0.25)] overflow-hidden">
          <Image
            src="/assets/aiva-app-icon.png"
            alt="Aiva App Icon"
            width={500}   // much larger to crop more edges
            height={500}
            className="object-cover object-center"
            priority
          />
        </div>
      </div>

      <span
        className="pointer-events-none absolute left-1/2 top-48 -z-10 -translate-x-1/2 select-none text-[9rem] font-semibold leading-none text-[#1d1d1f]/5 drop-shadow-[0_4px_8px_rgba(0,0,0,0.1)]"
        aria-hidden
      >
        Aiva
      </span>

      {/* Intuition in your pocket text in normal document flow */}
      <div className="mt-48 text-center text-[#1d1d1f]">
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
          Intuition in your pocket
        </h2>
        <p className="mx-auto mt-4 max-w-[46ch] text-[15px] leading-6 text-[#1d1d1f]/70">
          Get things done effortlessly with all your applications in one centralized interface.
        </p>
      </div>

      <div className="h-[8vh]" />
    </section>
  );
}