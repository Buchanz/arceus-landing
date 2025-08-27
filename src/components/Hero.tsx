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
        className="pointer-events-none absolute left-1/2 top-48 -z-10 -translate-x-1/2 select-none text-[9rem] font-semibold leading-none text-[#1d1d1f]/10 drop-shadow-[0_4px_8px_rgba(0,0,0,0.1)]"
        aria-hidden
      >
        Aiva
      </span>

      {/* Intuition in your pocket text in normal document flow */}
      <div className="mt-40 text-center text-[#1d1d1f]">
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
          Intuition in your pocket
        </h2>
        <p className="mx-auto mt-4 max-w-[46ch] text-[15px] leading-6 text-[#1d1d1f]/70">
          Get things done effortlessly with all your applications in one centralized interface.
        </p>
        
        {/* Waitlist signup section */}
        <div className="mx-auto mt-8 max-w-md">
          <div className="flex gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-full border-0 px-4 py-2 text-sm focus:outline-none shadow-[0_4px_8px_rgba(0,0,0,0.15)] bg-white"
            />
            <button className="rounded-full bg-gradient-to-b from-blue-500 to-blue-600 px-6 py-2 text-sm font-semibold text-white hover:from-blue-600 hover:to-blue-700 transition-all duration-200 shadow-[0_4px_12px_rgba(59,130,246,0.4),0_2px_4px_rgba(0,0,0,0.1)] border border-blue-400/30 backdrop-blur-sm">
              Join Waitlist
            </button>
          </div>
        </div>
      </div>

      <div className="h-[8vh]" />
    </section>
  );
}