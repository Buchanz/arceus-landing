"use client";
import Image from "next/image";
import { useState } from "react";

export default function NavBar() {
  const [showSocials, setShowSocials] = useState(false);

  return (
    <>
      {/* Blur overlay for the rest of the page */}
      {showSocials && (
        <div className="fixed inset-0 z-40 bg-black/5 backdrop-blur-sm" />
      )}
            <nav 
        className="sticky top-0 z-50 bg-[#f5f5f7]/90 backdrop-blur border-b border-black/5"
        onMouseLeave={() => setShowSocials(false)}
      >
        <div className="mx-auto w-[min(1100px,92%)]">
          <div className="flex h-14 items-center justify-between">
            <a href="/" className="flex items-center gap-2">
              <Image
                src="/assets/arceus-logo-glass.png"   // ⬅️ renamed file
                alt="Arceus Logo"
                width={28}
                height={24}
                priority
              />
              <span className="text-[13px] font-medium text-[#1d1d1f]/80">
                Arceus
              </span>
            </a>

            <div className="flex items-center gap-6 text-[13px] font-medium text-[#1d1d1f]/80">
              <a 
                href="#socials" 
                className="hover:text-[#1d1d1f] cursor-pointer"
                onMouseEnter={() => setShowSocials(true)}
              >
                Socials
              </a>
            </div>
          </div>
        
        {/* Expanded social links row */}
        <div 
          className={`overflow-hidden transition-all duration-300 border-t border-black/5 ${
            showSocials ? 'h-12' : 'h-0'
          }`}
        >
          <div className="flex items-center justify-center h-12 text-[15px] font-medium text-[#1d1d1f]/80 gap-8">
            <a href="https://discord.com/channels/1379314631037816852/1379317472817319986" target="_blank" rel="noopener noreferrer" className="hover:text-[#1d1d1f]">Discord</a>
            <a href="https://www.instagram.com/arceusai/" target="_blank" rel="noopener noreferrer" className="hover:text-[#1d1d1f]">Instagram</a>
            <a href="https://www.linkedin.com/company/arceusai/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="hover:text-[#1d1d1f]">LinkedIn</a>
            <a href="https://www.youtube.com/@ArceusAI" target="_blank" rel="noopener noreferrer" className="hover:text-[#1d1d1f]">YouTube</a>
          </div>
        </div>
      </div>
    </nav>
    </>
  );
}