"use client";

import NavBar from "../../components/NavBar";
import BottomCTA from "../../components/BottomCTA";
import Link from "next/link";
import Image from "next/image";

export default function ConfirmationPage() {
  // Get the Aiva app URL from environment variable, fallback to homepage if not set
  const aivaAppUrl = process.env.NEXT_PUBLIC_AIVA_APP_URL || "/";

  return (
    <main className="min-h-screen relative antialiased bg-black flex flex-col">
      {/* Background - subtle gradient or pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black"></div>
      </div>

      <NavBar />

      {/* Main Content */}
      <section className="relative z-10 flex-1 flex items-center justify-center min-h-[calc(100vh-200px)] px-4 py-20">
        <div className="max-w-2xl mx-auto w-full text-center">
          {/* Success Icon/Checkmark */}
          <div className="mb-8 flex justify-center">
            <div className="w-20 h-20 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center backdrop-blur-sm">
              <svg
                className="w-12 h-12 text-green-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </div>

          {/* Success Message */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium text-white mb-8 leading-tight">
            You&apos;ve successfully signed up
          </h1>

          {/* Return to Aiva Button */}
          <div className="mt-12">
            {aivaAppUrl.startsWith("http") ? (
              <a
                href={aivaAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full border border-white/30 bg-white/10 backdrop-blur-md px-8 py-4 text-lg font-semibold text-white hover:bg-white/20 transition-all duration-200"
              >
                <Image
                  src="/assets/arceus-logo-glass.png"
                  alt="Arceus Logo"
                  width={24}
                  height={20}
                  className="w-6 h-5"
                />
                <span>Return to Aiva</span>
              </a>
            ) : (
              <Link
                href={aivaAppUrl}
                className="inline-flex items-center gap-3 rounded-full border border-white/30 bg-white/10 backdrop-blur-md px-8 py-4 text-lg font-semibold text-white hover:bg-white/20 transition-all duration-200"
              >
                <Image
                  src="/assets/arceus-logo-glass.png"
                  alt="Arceus Logo"
                  width={24}
                  height={20}
                  className="w-6 h-5"
                />
                <span>Return to Aiva</span>
              </Link>
            )}
          </div>
        </div>
      </section>

      <BottomCTA />
    </main>
  );
}


