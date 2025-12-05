"use client";

import { usePathname } from "next/navigation";

export default function BottomCTA() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const isHowItWorksPage = pathname === "/how-it-works";
  const isAppsPage = pathname === "/apps";
  const isContactPage = pathname === "/contact";
  // Pages that need relative positioning so images fit entirely in view
  const needsRelativePosition = isHowItWorksPage || isAppsPage || isContactPage;
  const bgClass = isHomePage ? "bg-black" : "bg-black/20";

  return (
    <>
      {/* Mobile - positioned right after image */}
      <section className={`md:hidden z-20 ${isHomePage ? 'relative pt-0 pb-8 left-0 right-0' : needsRelativePosition ? 'relative py-0 mt-8' : 'relative py-8 mt-8'}`}>
        <div className={`absolute inset-0 ${bgClass} backdrop-blur-md`}></div>
        <div className="relative z-10 mx-auto w-[min(1200px,95%)] text-center text-white px-4">
          <div className={`flex flex-col items-center ${needsRelativePosition ? 'gap-0.5' : 'gap-4'} ${needsRelativePosition ? 'text-xs' : 'text-[17px]'} ${needsRelativePosition ? 'leading-none' : 'leading-6'} text-white/80`}>
            {/* Top - Social Links */}
            <div className="flex items-center justify-center gap-2.5 flex-nowrap overflow-x-auto">
              <a href="https://www.instagram.com/arceusai/" target="_blank" rel="noopener noreferrer" className="text-[14px] text-white/70 hover:text-white transition-colors whitespace-nowrap flex-shrink-0">Instagram</a>
              <a href="https://www.linkedin.com/company/arceusai/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="text-[14px] text-white/70 hover:text-white transition-colors whitespace-nowrap flex-shrink-0">LinkedIn</a>
              <a href="https://www.youtube.com/@ArceusAI" target="_blank" rel="noopener noreferrer" className="text-[14px] text-white/70 hover:text-white transition-colors whitespace-nowrap flex-shrink-0">YouTube</a>
              <a href="https://discord.com/channels/1379314631037816852/1379317472817319986" target="_blank" rel="noopener noreferrer" className="text-[14px] text-white/70 hover:text-white transition-colors whitespace-nowrap flex-shrink-0">Discord</a>
            </div>
            
            {/* Middle - Links */}
            <div className="inline-flex flex-wrap items-baseline justify-center gap-x-4 gap-y-2">
              <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
              <span className="opacity-40">|</span>
              <a href="/contact" className="hover:text-white transition-colors">Contact</a>
              <span className="opacity-40">|</span>
              <a href="/terms" className="hover:text-white transition-colors">Terms of Use</a>
            </div>
            
            {/* Bottom - Copyright */}
            <div className="text-[16px] text-white/70">© 2025 Arceus Inc. All rights reserved.</div>
          </div>
        </div>
      </section>

      {/* Desktop */}
      <section 
        className={`hidden md:block ${needsRelativePosition ? 'relative' : 'relative sm:fixed sm:bottom-0'} left-0 right-0 z-20 ${needsRelativePosition ? 'py-0' : 'py-8 sm:py-10'} ${needsRelativePosition ? 'mt-0' : 'mt-8 sm:mt-0'} ${needsRelativePosition ? 'overflow-hidden' : ''}`}
        style={needsRelativePosition ? { height: '20px', position: 'relative' } : undefined}
      >
      <div className={`absolute inset-0 ${bgClass} backdrop-blur-md`}></div>
      <div className={`relative z-10 mx-auto w-[min(1200px,95%)] text-center text-white px-4 sm:px-0 ${needsRelativePosition ? 'h-full py-0 flex items-center' : ''}`}>


        {/* Desktop layout - all on same line */}
        <div className={`hidden sm:block ${needsRelativePosition ? 'mt-0 py-0 h-full flex items-center w-full' : 'mt-4 sm:mt-6'} ${needsRelativePosition ? 'text-[9px] sm:text-[10px]' : 'text-[16px] sm:text-[17px]'} ${needsRelativePosition ? 'leading-none' : 'leading-6'} text-white/80`}>
          <div className={`flex flex-row justify-between items-center ${needsRelativePosition ? 'gap-1' : 'gap-2'}`}>
            {/* Left side - Copyright */}
            <div className={`${needsRelativePosition ? 'text-[9px] sm:text-[10px]' : 'text-[16px] sm:text-[17px]'} text-white/70 ml-0 sm:-ml-32 whitespace-nowrap`}>© 2025 Arceus Inc. All rights reserved.</div>
            
            {/* Center - Links */}
            <div className={`inline-flex flex-wrap items-center justify-center ${needsRelativePosition ? 'gap-x-1 gap-y-0' : 'gap-x-4 gap-y-2'}`}>
              <a href="/privacy" className={`${needsRelativePosition ? 'text-[9px] sm:text-[10px]' : ''} hover:text-white transition-colors whitespace-nowrap`}>Privacy Policy</a>
              <span className="opacity-40">|</span>
              <a href="/contact" className={`${needsRelativePosition ? 'text-[9px] sm:text-[10px]' : ''} hover:text-white transition-colors whitespace-nowrap`}>Contact</a>
              <span className="opacity-40">|</span>
              <a href="/terms" className={`${needsRelativePosition ? 'text-[9px] sm:text-[10px]' : ''} hover:text-white transition-colors whitespace-nowrap`}>Terms of Use</a>
            </div>
            
            {/* Right side - Social Links */}
            <div className={`inline-flex items-center ${needsRelativePosition ? 'gap-1' : 'gap-4'} mr-0 sm:-mr-32`}>
              <a href="https://www.instagram.com/arceusai/" target="_blank" rel="noopener noreferrer" className={`${needsRelativePosition ? 'text-[9px] sm:text-[10px]' : 'text-[17px] sm:text-[18px]'} text-white/70 hover:text-white transition-colors whitespace-nowrap`}>Instagram</a>
              <a href="https://www.linkedin.com/company/arceusai/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className={`${needsRelativePosition ? 'text-[9px] sm:text-[10px]' : 'text-[17px] sm:text-[18px]'} text-white/70 hover:text-white transition-colors whitespace-nowrap`}>LinkedIn</a>
              <a href="https://www.youtube.com/@ArceusAI" target="_blank" rel="noopener noreferrer" className={`${needsRelativePosition ? 'text-[9px] sm:text-[10px]' : 'text-[17px] sm:text-[18px]'} text-white/70 hover:text-white transition-colors whitespace-nowrap`}>YouTube</a>
              <a href="https://discord.com/channels/1379314631037816852/1379317472817319986" target="_blank" rel="noopener noreferrer" className={`${needsRelativePosition ? 'text-[9px] sm:text-[10px]' : 'text-[17px] sm:text-[18px]'} text-white/70 hover:text-white transition-colors whitespace-nowrap`}>Discord</a>
            </div>
          </div>
        </div>
      </div>
      </section>
    </>
  );
}