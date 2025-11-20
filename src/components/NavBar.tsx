"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

export default function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Use scrollIntoView for smoother, more reliable scrolling
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'nearest'
      });
    }
  };

  const handleSectionClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    
    // Close mobile menu if open
    setIsMobileMenuOpen(false);
    
    // If we're not on the how-it-works page, navigate there first
    if (pathname !== '/how-it-works') {
      router.push(`/how-it-works#${sectionId}`);
      // Wait for navigation and page to fully render, then scroll
      setTimeout(() => {
        // Use requestAnimationFrame to ensure DOM is ready
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            scrollToSection(sectionId);
          });
        });
      }, 100);
    } else {
      // If already on the page, scroll immediately but use requestAnimationFrame for smoothness
      requestAnimationFrame(() => {
        scrollToSection(sectionId);
      });
    }
  };

  // Handle hash links on page load
  useEffect(() => {
    if (pathname === '/how-it-works' && window.location.hash) {
      const sectionId = window.location.hash.substring(1);
      // Wait for page to fully render, then scroll
      setTimeout(() => {
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            scrollToSection(sectionId);
          });
        });
      }, 150);
    }
  }, [pathname]);

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-md px-4">
      <div className="relative">
        {/* Main nav bar - expands on mobile */}
        <div className={`bg-white/10 backdrop-blur-md border border-white/20 transition-all duration-300 ease-in-out overflow-hidden ${
          isMobileMenuOpen ? 'rounded-[30px] md:rounded-full' : 'rounded-full'
        }`}>
          <div className="flex items-center justify-between px-4 sm:px-6 w-full py-2">
            {/* Logo - Left */}
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/assets/arceus-logo-glass.png"
                alt="Arceus Logo"
                width={28}
                height={24}
                className="sm:w-[28px] sm:h-[24px]"
                priority
              />
            </Link>

            {/* Desktop navigation links - Center, evenly spaced */}
            <div className="hidden md:flex items-center flex-1 justify-center gap-8 lg:gap-10">
              <a 
                href="/how-it-works#apps" 
                onClick={(e) => handleSectionClick(e, 'apps')}
                className="text-[13px] font-medium text-white/90 cursor-pointer hover:text-white transition-colors"
              >
                Apps
              </a>
              
              <a 
                href="/how-it-works#contacts" 
                onClick={(e) => handleSectionClick(e, 'contacts')}
                className="text-[13px] font-medium text-white/90 cursor-pointer hover:text-white transition-colors"
              >
                Contacts
              </a>
              
              <a 
                href="/how-it-works#projects" 
                onClick={(e) => handleSectionClick(e, 'projects')}
                className="text-[13px] font-medium text-white/90 cursor-pointer hover:text-white transition-colors"
              >
                Projects
              </a>
            </div>

            {/* Actions - Right */}
            <div className="hidden md:flex">
              <a 
                href="/how-it-works#actions" 
                onClick={(e) => handleSectionClick(e, 'actions')}
                className="text-[13px] font-medium text-white/90 cursor-pointer hover:text-white transition-colors"
              >
                Actions
              </a>
            </div>

            {/* Mobile navigation - Menu button */}
            <div className="md:hidden flex items-center gap-2">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(!isMobileMenuOpen);
                }}
                className="p-2 text-white/90 hover:text-white transition-colors"
                aria-label="Toggle mobile menu"
              >
                <div className="relative w-5 h-5">
                  <span 
                    className={`absolute top-0 left-0 w-5 h-0.5 bg-current transition-all duration-300 ${
                      isMobileMenuOpen 
                        ? 'rotate-45 translate-y-2' 
                        : 'rotate-0 translate-y-0'
                    }`}
                  />
                  <span 
                    className={`absolute top-2 left-0 w-5 h-0.5 bg-current transition-all duration-300 ${
                      isMobileMenuOpen 
                        ? 'opacity-0' 
                        : 'opacity-100'
                    }`}
                  />
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
          </div>

          {/* Mobile menu items - inside the expanding nav bar */}
          <div className={`md:hidden overflow-hidden transition-[max-height] duration-300 ease-out ${
            isMobileMenuOpen ? 'max-h-96' : 'max-h-0'
          }`}>
            <div className="border-t border-white/10 px-4 pb-4 pt-3">
              <div className="flex flex-col gap-3">
                <a 
                  href="/how-it-works#apps" 
                  onClick={(e) => handleSectionClick(e, 'apps')}
                  className="block text-[15px] text-white/90 hover:text-white transition-colors py-2"
                >
                  Apps
                </a>
                <a 
                  href="/how-it-works#contacts" 
                  onClick={(e) => handleSectionClick(e, 'contacts')}
                  className="block text-[15px] text-white/90 hover:text-white transition-colors py-2"
                >
                  Contacts
                </a>
                <a 
                  href="/how-it-works#projects" 
                  onClick={(e) => handleSectionClick(e, 'projects')}
                  className="block text-[15px] text-white/90 hover:text-white transition-colors py-2"
                >
                  Projects
                </a>
                <a 
                  href="/how-it-works#actions" 
                  onClick={(e) => handleSectionClick(e, 'actions')}
                  className="block text-[15px] text-white/90 hover:text-white transition-colors py-2"
                >
                  Actions
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
