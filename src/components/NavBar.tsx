"use client";
import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="bg-white border-b border-gray-200 p-4 group relative z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/assets/arceus-logo-glass.png"
            alt="Arceus Logo"
            width={28}
            height={24}
            priority
          />
          <span className="text-[13px] font-medium text-[#1d1d1f]/80">Arceus</span>
        </Link>

        <div className="relative">
          <span className="text-[13px] font-medium text-[#1d1d1f]/80 cursor-pointer">
            Socials
          </span>
        </div>
      </div>

      {/* Expanding social links section */}
      <div className="max-w-6xl mx-auto h-0 overflow-hidden group-hover:h-12 transition-all duration-300">
        <div className="flex justify-center items-center gap-8 h-12">
          <a href="https://discord.com/channels/1379314631037816852/1379317472817319986" target="_blank" rel="noopener noreferrer" className="text-[15px] text-[#1d1d1f]/80 hover:text-[#1d1d1f] transition-colors">Discord</a>
          <a href="https://www.instagram.com/arceusai/" target="_blank" rel="noopener noreferrer" className="text-[15px] text-[#1d1d1f]/80 hover:text-[#1d1d1f] transition-colors">Instagram</a>
          <a href="https://www.linkedin.com/company/arceusai/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="text-[15px] text-[#1d1d1f]/80 hover:text-[#1d1d1f] transition-colors">LinkedIn</a>
          <a href="https://www.youtube.com/@ArceusAI" target="_blank" rel="noopener noreferrer" className="text-[15px] text-[#1d1d1f]/80 hover:text-[#1d1d1f] transition-colors">YouTube</a>
        </div>
      </div>
    </nav>
  );
}