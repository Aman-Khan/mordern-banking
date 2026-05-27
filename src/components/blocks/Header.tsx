import React, { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="fixed top-8 left-0 w-full flex justify-center z-50 px-4">
      
      {/* The Glass Pill
        Switched to flex-col to allow the mobile menu to expand downwards naturally 
        within the same glass container. 
      */}
      <header className="flex flex-col w-full max-w-[716.46px] bg-[#2F2F2F]/30 backdrop-blur-[12px] rounded-xl shadow-lg border border-white/5 overflow-hidden transition-all duration-300">
        
        {/* TOP BAR: Always visible */}
        <div className="flex items-center justify-between px-4 py-2.5">
          {/* Logo */}
          <div className="font-archivo text-2xl font-medium text-[#E9F4F9] select-none cursor-pointer">
            N7
          </div>

          {/* DESKTOP RIGHT SIDE: Hidden on mobile (md:hidden) */}
          <div className="hidden md:flex items-center gap-[40px] md:gap-[60px]">
            
            {/* Desktop Links */}
            <nav className="flex items-center gap-5">
              <a href="#solutions" className="group flex items-center gap-1 font-chivo text-xs text-[#E9F4F9] uppercase tracking-wide hover:text-[#00B4FD] transition-colors">
                Solutions
                <ChevronDown size={14} strokeWidth={2.5} className="text-[#E9F4F9] group-hover:text-[#00B4FD] transition-colors" />
              </a>
              
              <a href="#resources" className="group flex items-center gap-1 font-chivo text-xs text-[#E9F4F9] uppercase tracking-wide hover:text-[#00B4FD] transition-colors">
                Resources
                <ChevronDown size={14} strokeWidth={2.5} className="text-[#E9F4F9] group-hover:text-[#00B4FD] transition-colors" />
              </a>
              
              <a href="#about" className="font-chivo text-xs text-[#E9F4F9] uppercase tracking-wide hover:text-[#00B4FD] transition-colors">
                About Us
              </a>
            </nav>

            {/* Desktop Button */}
            <button className="border border-[#E9F4F9] rounded-md px-[37px] py-[5px] font-chivo text-xs text-[#E9F4F9] uppercase tracking-wide hover:bg-[#E9F4F9] hover:text-blue-700 transition-all duration-300">
              Request Demo
            </button>
            
          </div>

          {/* MOBILE TOGGLE BUTTON: Hidden on desktop */}
          <button 
            className="md:hidden text-[#E9F4F9] p-1 focus:outline-none hover:text-[#00B4FD] transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* MOBILE MENU DROPDOWN: Shows only when state is true */}
        {isMobileMenuOpen && (
          <div className="md:hidden flex flex-col items-center gap-6 px-4 pt-4 pb-6 border-t border-white/10 bg-black/20">
            <nav className="flex flex-col items-center gap-6 w-full">
              <a 
                href="#solutions" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-chivo text-sm text-[#E9F4F9] uppercase tracking-widest hover:text-[#00B4FD] transition-colors"
              >
                Solutions
              </a>
              <a 
                href="#resources" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-chivo text-sm text-[#E9F4F9] uppercase tracking-widest hover:text-[#00B4FD] transition-colors"
              >
                Resources
              </a>
              <a 
                href="#about" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-chivo text-sm text-[#E9F4F9] uppercase tracking-widest hover:text-[#00B4FD] transition-colors"
              >
                About Us
              </a>
            </nav>

            {/* Mobile Full-Width CTA */}
            <button className="w-full border border-[#E9F4F9] rounded-md py-3 font-chivo text-xs text-[#E9F4F9] uppercase tracking-widest hover:bg-[#E9F4F9] hover:text-[#000D12] transition-all duration-300">
              Request Demo
            </button>
          </div>
        )}

      </header>
    </div>
  );
};
