"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="bg-white border-b border-gray-200 p-4 group relative z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/assets/arceus-logo-glass.png"
              alt="Arceus Logo"
              width={36}
              height={30}
              className="sm:w-[28px] sm:h-[24px]"
              priority
            />
            <span className="text-[13px] font-medium text-[#1d1d1f]/80 hidden sm:block">Arceus</span>
          </Link>

          {/* Desktop socials trigger */}
          <div className="relative hidden md:block">
            <span className="text-[13px] font-medium text-[#1d1d1f]/80 cursor-pointer">
              Socials
            </span>
          </div>

          {/* Mobile menu button with animated icon */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-[#1d1d1f]/80 hover:text-[#1d1d1f] transition-colors"
            aria-label="Toggle mobile menu"
          >
            <div className="relative w-5 h-5">
              {/* Top line */}
              <span 
                className={`absolute top-0 left-0 w-5 h-0.5 bg-current transition-all duration-300 ${
                  isMobileMenuOpen 
                    ? 'rotate-45 translate-y-2' 
                    : 'rotate-0 translate-y-0'
                }`}
              />
              {/* Middle line */}
              <span 
                className={`absolute top-2 left-0 w-5 h-0.5 bg-current transition-all duration-300 ${
                  isMobileMenuOpen 
                    ? 'opacity-0' 
                    : 'opacity-100'
                }`}
              />
              {/* Bottom line */}
              <span 
                className={`absolute top-4 left-0 w-5 h-0.5 bg-current transition-all duration-300 ${
                  isMobileMenuOpen 
                    ? '-rotate-45 -translate-y-2' 
                    : 'rotate-0 translate-y-0'
                }`}
              />
            </div>
          </button>
        </div>

        {/* Desktop expanding social links section */}
        <div className="max-w-6xl mx-auto h-0 overflow-hidden group-hover:h-12 transition-all duration-300 hidden md:block">
          <div className="flex justify-center items-center gap-8 h-12">
            <a href="https://www.instagram.com/arceusai/" target="_blank" rel="noopener noreferrer" className="text-[15px] text-[#1d1d1f]/80 hover:text-[#1d1d1f] transition-colors">Instagram</a>
            <a href="https://www.linkedin.com/company/arceusai/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="text-[15px] text-[#1d1d1f]/80 hover:text-[#1d1d1f] transition-colors">LinkedIn</a>
            <a href="https://www.youtube.com/@ArceusAI" target="_blank" rel="noopener noreferrer" className="text-[15px] text-[#1d1d1f]/80 hover:text-[#1d1d1f] transition-colors">YouTube</a>
            <a href="https://discord.com/channels/1379314631037816852/1379317472817319986" target="_blank" rel="noopener noreferrer" className="text-[15px] text-[#1d1d1f]/80 hover:text-[#1d1d1f] transition-colors">Discord</a>
          </div>
        </div>

        {/* Mobile social links menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="flex flex-col items-start gap-5 py-6 border-t border-gray-200 mt-4 px-4">
            <h3 className="text-[19px] font-bold text-[#1d1d1f] mb-3">Socials</h3>
            <a href="https://www.instagram.com/arceusai/" target="_blank" rel="noopener noreferrer" className="text-[15px] text-[#1d1d1f]/80 hover:text-[#1d1d1f] transition-colors w-full text-left py-2">Instagram</a>
            <a href="https://www.linkedin.com/company/arceusai/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="text-[15px] text-[#1d1d1f]/80 hover:text-[#1d1d1f] transition-colors w-full text-left py-2">LinkedIn</a>
            <a href="https://www.youtube.com/@ArceusAI" target="_blank" rel="noopener noreferrer" className="text-[15px] text-[#1d1d1f]/80 hover:text-[#1d1d1f] transition-colors w-full text-left py-2">YouTube</a>
            <a href="https://discord.com/channels/1379314631037816852/1379317472817319986" target="_blank" rel="noopener noreferrer" className="text-[15px] text-[#1d1d1f]/80 hover:text-[#1d1d1f] transition-colors w-full text-left py-2">Discord</a>
          </div>
        </div>
      </nav>

      {/* Blur overlay for mobile menu */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden transition-all duration-300"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
}