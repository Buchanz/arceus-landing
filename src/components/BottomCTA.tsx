export default function BottomCTA() {
  return (
    <section className="relative sm:fixed bottom-0 left-0 right-0 z-20 py-8 sm:py-10 mt-8 sm:mt-0">
      <div className="absolute inset-0 bg-black/20 backdrop-blur-md"></div>
      <div className="relative z-10 mx-auto w-[min(1200px,95%)] text-center text-white px-4 sm:px-0">

        {/* Mobile layout - stacked vertically */}
        <div className="flex flex-col sm:hidden items-center gap-4 text-[17px] leading-6 text-white/80">
          {/* Top - Social Links */}
          <div className="inline-flex items-center gap-4">
            <a href="https://www.instagram.com/arceusai/" target="_blank" rel="noopener noreferrer" className="text-[17px] text-white/70 hover:text-white transition-colors">Instagram</a>
            <a href="https://www.linkedin.com/company/arceusai/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="text-[17px] text-white/70 hover:text-white transition-colors">LinkedIn</a>
            <a href="https://www.youtube.com/@ArceusAI" target="_blank" rel="noopener noreferrer" className="text-[17px] text-white/70 hover:text-white transition-colors">YouTube</a>
            <a href="https://discord.com/channels/1379314631037816852/1379317472817319986" target="_blank" rel="noopener noreferrer" className="text-[17px] text-white/70 hover:text-white transition-colors">Discord</a>
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

        {/* Desktop layout - all on same line */}
        <div className="hidden sm:block mt-4 sm:mt-6 text-[17px] sm:text-[18px] leading-6 text-white/80">
          <div className="flex flex-row justify-between items-center gap-2">
            {/* Left side - Copyright */}
            <div className="text-[16px] sm:text-[17px] text-white/70 ml-0 sm:-ml-32">© 2025 Arceus Inc. All rights reserved.</div>
            
            {/* Center - Links */}
            <div className="inline-flex flex-wrap items-baseline justify-center gap-x-4 gap-y-2">
              <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
              <span className="opacity-40">|</span>
              <a href="/contact" className="hover:text-white transition-colors">Contact</a>
              <span className="opacity-40">|</span>
              <a href="/terms" className="hover:text-white transition-colors">Terms of Use</a>
            </div>
            
            {/* Right side - Social Links */}
            <div className="inline-flex items-center gap-4 mr-0 sm:-mr-32">
              <a href="https://www.instagram.com/arceusai/" target="_blank" rel="noopener noreferrer" className="text-[17px] sm:text-[18px] text-white/70 hover:text-white transition-colors">Instagram</a>
              <a href="https://www.linkedin.com/company/arceusai/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="text-[17px] sm:text-[18px] text-white/70 hover:text-white transition-colors">LinkedIn</a>
              <a href="https://www.youtube.com/@ArceusAI" target="_blank" rel="noopener noreferrer" className="text-[17px] sm:text-[18px] text-white/70 hover:text-white transition-colors">YouTube</a>
              <a href="https://discord.com/channels/1379314631037816852/1379317472817319986" target="_blank" rel="noopener noreferrer" className="text-[17px] sm:text-[18px] text-white/70 hover:text-white transition-colors">Discord</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}