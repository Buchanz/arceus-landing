"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSocialsHovered, setIsSocialsHovered] = useState(false);
  const [isAivaHovered, setIsAivaHovered] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);

  return (
    <>
      <nav className="bg-white border-b border-gray-200 group relative z-50">
        <div className="max-w-6xl mx-auto p-4">
          <div className="flex justify-between items-center">
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

            {/* Desktop navigation links */}
            <div className="hidden md:flex items-center gap-8">
              <div 
                className="relative"
                onMouseEnter={() => {
                  setIsAivaHovered(true);
                  setIsSocialsHovered(false);
                }}
                onMouseLeave={() => setIsAivaHovered(false)}
              >
                <Link href="/aiva" className="text-[13px] font-medium text-[#1d1d1f]/80 cursor-pointer">
                  Aiva
                </Link>
              </div>
              <div 
                className="relative"
                onMouseEnter={() => {
                  setIsSocialsHovered(true);
                  setIsAivaHovered(false);
                }}
                onMouseLeave={() => setIsSocialsHovered(false)}
              >
                <span className="text-[13px] font-medium text-[#1d1d1f]/80 cursor-pointer">
                  Socials
                </span>
              </div>
            </div>

            {/* Search icon - Desktop */}
            <div className="hidden md:flex items-center">
              <button 
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 text-[#1d1d1f]/80 hover:text-[#1d1d1f] transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>

            {/* Mobile navigation - Search and Menu */}
            <div className="md:hidden flex items-center gap-2">
              {/* Search icon */}
              <button 
                onClick={() => {
                  setIsMobileSearchOpen(!isMobileSearchOpen);
                  setIsMobileMenuOpen(false);
                }}
                className="p-2 text-[#1d1d1f]/80 hover:text-[#1d1d1f] transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              
              {/* Mobile menu button with animated icon */}
              <button
                onClick={() => {
                  setIsMobileMenuOpen(!isMobileMenuOpen);
                  setIsMobileSearchOpen(false);
                }}
                className="p-2 text-[#1d1d1f]/80 hover:text-[#1d1d1f] transition-colors"
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
          </div>

          {/* Desktop expanding menu content - Inside the nav section */}
          <div className="hidden md:block">
            {/* Aiva dropdown */}
            <div 
              className={`transition-all duration-500 ease-in-out ${isAivaHovered ? 'h-12 opacity-100' : 'h-0 opacity-0'} overflow-hidden bg-white border-b border-gray-200`}
              onMouseEnter={() => {
                setIsAivaHovered(true);
                setIsSocialsHovered(false);
              }}
              onMouseLeave={() => setIsAivaHovered(false)}
            >
                   <div className="max-w-6xl mx-auto flex justify-center items-center gap-8 h-12">
                     <a href="/aiva#apps" className="text-[15px] text-[#1d1d1f]/80 hover:text-[#1d1d1f] transition-colors">Apps</a>
                     <a href="/aiva#projects" className="text-[15px] text-[#1d1d1f]/80 hover:text-[#1d1d1f] transition-colors">Projects</a>
                     <a href="/aiva#actions" className="text-[15px] text-[#1d1d1f]/80 hover:text-[#1d1d1f] transition-colors">Actions</a>
                   </div>
            </div>
            
            {/* Socials dropdown */}
            <div 
              className={`transition-all duration-500 ease-in-out ${isSocialsHovered ? 'h-12 opacity-100' : 'h-0 opacity-0'} overflow-hidden bg-white border-b border-gray-200`}
              onMouseEnter={() => {
                setIsSocialsHovered(true);
                setIsAivaHovered(false);
              }}
              onMouseLeave={() => setIsSocialsHovered(false)}
            >
              <div className="max-w-6xl mx-auto flex justify-center items-center gap-8 h-12">
                <a href="https://www.instagram.com/arceusai/" target="_blank" rel="noopener noreferrer" className="text-[15px] text-[#1d1d1f]/80 hover:text-[#1d1d1f] transition-colors">Instagram</a>
                <a href="https://www.linkedin.com/company/arceusai/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="text-[15px] text-[#1d1d1f]/80 hover:text-[#1d1d1f] transition-colors">LinkedIn</a>
                <a href="https://www.youtube.com/@ArceusAI" target="_blank" rel="noopener noreferrer" className="text-[15px] text-[#1d1d1f]/80 hover:text-[#1d1d1f] transition-colors">YouTube</a>
                <a href="https://discord.com/channels/1379314631037816852/1379317472817319986" target="_blank" rel="noopener noreferrer" className="text-[15px] text-[#1d1d1f]/80 hover:text-[#1d1d1f] transition-colors">Discord</a>
              </div>
            </div>

            {/* Desktop Search Dropdown */}
            {isSearchOpen && (
              <div 
                className="bg-white p-6 transition-all duration-500 ease-in-out"
                onMouseLeave={() => setIsSearchOpen(false)}
              >
                <div className="relative">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <input
                      type="text"
                      placeholder="Search Arceus"
                      className="flex-1 text-lg border-none outline-none bg-transparent"
                      autoFocus
                    />
                  </div>
                  
                  {/* Quick Links */}
                  <div className="mt-6">
                    <h3 className="text-sm font-medium text-gray-500 mb-3">Quick Links</h3>
                    <div className="space-y-2">
                      <a href="/aiva" className="flex items-center text-gray-700 hover:text-gray-900 transition-colors">
                        <svg className="w-4 h-4 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        Aiva
                      </a>
                      <a href="https://www.instagram.com/arceusai/" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-700 hover:text-gray-900 transition-colors">
                        <svg className="w-4 h-4 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        Instagram
                      </a>
                      <a href="https://www.youtube.com/@ArceusAI" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-700 hover:text-gray-900 transition-colors">
                        <svg className="w-4 h-4 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        YouTube
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Mobile Search Dropdown */}
          {isMobileSearchOpen && (
            <div 
              className="md:hidden bg-white p-4 transition-all duration-500 ease-in-out"
            >
              <div className="flex items-center">
                <svg className="w-5 h-5 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="Search Arceus"
                  className="flex-1 text-base border-none outline-none bg-transparent"
                  autoFocus
                />
              </div>
              
              {/* Quick Links */}
              <div className="mt-4">
                <h3 className="text-sm font-medium text-gray-500 mb-2">Quick Links</h3>
                <div className="space-y-1">
                  <a href="/aiva" className="flex items-center text-gray-700 hover:text-gray-900 transition-colors py-1">
                    <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Aiva
                  </a>
                  <a href="https://www.instagram.com/arceusai/" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-700 hover:text-gray-900 transition-colors py-1">
                    <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Instagram
                  </a>
                  <a href="https://www.youtube.com/@ArceusAI" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-700 hover:text-gray-900 transition-colors py-1">
                    <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    YouTube
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* Mobile navigation menu */}
          <div className={`md:hidden transition-all duration-500 ease-in-out overflow-hidden ${isMobileMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'} bg-white border-b border-gray-200`}>
            <div className="py-6 px-4">
              {/* Aiva and Socials side by side */}
              <div className="grid grid-cols-2 gap-6">
                     {/* Aiva section */}
                     <div>
                       <Link href="/aiva" className="block text-[19px] font-bold text-[#1d1d1f] mb-3 hover:text-[#1d1d1f] transition-colors">Aiva</Link>
                       <a href="/aiva#apps" className="block text-[15px] text-[#1d1d1f]/80 hover:text-[#1d1d1f] transition-colors py-2">Apps</a>
                       <a href="/aiva#projects" className="block text-[15px] text-[#1d1d1f]/80 hover:text-[#1d1d1f] transition-colors py-2">Projects</a>
                       <a href="/aiva#actions" className="block text-[15px] text-[#1d1d1f]/80 hover:text-[#1d1d1f] transition-colors py-2">Actions</a>
                     </div>
                
                {/* Socials section */}
                <div>
                  <h3 className="text-[19px] font-bold text-[#1d1d1f] mb-3">Socials</h3>
                  <a href="https://www.instagram.com/arceusai/" target="_blank" rel="noopener noreferrer" className="block text-[15px] text-[#1d1d1f]/80 hover:text-[#1d1d1f] transition-colors py-2">Instagram</a>
                  <a href="https://www.linkedin.com/company/arceusai/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="block text-[15px] text-[#1d1d1f]/80 hover:text-[#1d1d1f] transition-colors py-2">LinkedIn</a>
                  <a href="https://www.youtube.com/@ArceusAI" target="_blank" rel="noopener noreferrer" className="block text-[15px] text-[#1d1d1f]/80 hover:text-[#1d1d1f] transition-colors py-2">YouTube</a>
                  <a href="https://discord.com/channels/1379314631037816852/1379317472817319986" target="_blank" rel="noopener noreferrer" className="block text-[15px] text-[#1d1d1f]/80 hover:text-[#1d1d1f] transition-colors py-2">Discord</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Dimming overlay for all dropdowns - only show when menus are actually open */}
      {(isMobileMenuOpen || isMobileSearchOpen || isSearchOpen || isAivaHovered || isSocialsHovered) && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30 transition-all duration-500 ease-in-out"
          onClick={() => {
            setIsMobileMenuOpen(false);
            setIsMobileSearchOpen(false);
            setIsSearchOpen(false);
            setIsAivaHovered(false);
            setIsSocialsHovered(false);
          }}
        />
      )}
    </>
  );
}