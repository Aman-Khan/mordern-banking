import React from 'react';

export const CTASection: React.FC = () => {
  return (
    <section className="relative w-full bg-[#000D12] py-24 px-6 lg:px-16 flex justify-center">
      
      {/* The main CTA Card */}
      <div className="relative w-full max-w-[1440px] bg-[#05131A] rounded-[32px] overflow-hidden flex flex-col lg:flex-row items-center justify-between p-10 lg:p-24 gap-12 lg:gap-8 shadow-2xl">
        
        {/* =========================================
            BACKGROUND GIANT TEXT ("CB7")
            ========================================= */}
        {/* We absolutely position this inside the card and let it bleed off the right edge */}
        <div className="absolute right-[-5%] top-1/2 -translate-y-1/2 select-none pointer-events-none z-0">
          <span 
            className="text-[250px] lg:text-[450px] font-archivo font-medium text-transparent opacity-30" 
            style={{ WebkitTextStroke: '1.5px #003ACE' }}
          >
            CB7
          </span>
        </div>

        {/* =========================================
            LEFT COLUMN: Copy
            ========================================= */}
        <div className="relative z-10 w-full max-w-[650px]">
          <h2 className="font-archivo font-medium text-4xl lg:text-[56px] text-[#E9F4F9] leading-[1.15] tracking-tight mb-6">
            Take the full advantage of going paper-less now.
          </h2>
          
          <p className="font-archivo text-[15px] lg:text-[16px] text-[#E9F4F9]/70 leading-[1.5] max-w-[500px]">
            CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations
          </p>
        </div>

        {/* =========================================
            RIGHT COLUMN: Buttons
            ========================================= */}
        <div className="relative z-10 flex flex-col sm:flex-row items-center gap-4 lg:gap-6 w-full lg:w-auto shrink-0">
          
          <button className="w-full sm:w-auto border border-[#E9F4F9] text-[#E9F4F9] font-chivo text-[13px] tracking-widest uppercase px-10 py-4 rounded-[12px] hover:bg-[#E9F4F9] hover:text-blue-700 transition-colors duration-300">
            Contact Us
          </button>
          
          <button className="w-full sm:w-auto bg-gradient-to-r from-[#00B4FD] to-[#003ACE] text-white font-chivo text-[13px] tracking-widest uppercase px-10 py-4 rounded-[12px] shadow-[0_0_20px_rgba(0,180,253,0.15)] hover:opacity-90 transition-opacity duration-300">
            Request Demo
          </button>
          
        </div>

      </div>
    </section>
  );
};