"use client";

import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import BottomCTA from "../components/BottomCTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#1d1d1f] antialiased overflow-x-hidden flex flex-col">
      <NavBar />
      <div className="transition-all duration-300 flex-1">
        <Hero />
      </div>
      <BottomCTA />
    </main>
  );
}