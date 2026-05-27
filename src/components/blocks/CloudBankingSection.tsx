import React from 'react';
import { ArrowRight } from 'lucide-react';

// Import your actual dashboard screenshot
import dashboardImage from '../../assets/images/dashboard-1.png';

export const CloudBankingSection: React.FC = () => {
  return (
    <section className="relative w-full min-h-[800px] bg-[#000D12] flex items-center py-24 lg:py-32 overflow-hidden">
      
      {/* =========================================
          BACKGROUND GIANT TEXT ("CB7")
          ========================================= */}
      <div className="absolute left-[-5%] top-1/2 -translate-y-1/2 select-none pointer-events-none z-0">
        <span 
          className="text-[300px] lg:text-[550px] font-archivo font-medium text-transparent opacity-40" 
          style={{ WebkitTextStroke: '2px #003ACE' }} // Creates the hollow dark blue outline
        >
          CB7
        </span>
      </div>

      {/* =========================================
          MAIN CONTENT CONTAINER
          ========================================= */}
      <div className="max-w-[1440px] mx-auto w-full px-6 lg:px-16 flex flex-col lg:flex-row items-center gap-16 lg:gap-8 relative z-10">
        
        {/* LEFT COLUMN: Typography & Actions */}
        <div className="flex-1 flex flex-col items-start pt-10 lg:pt-0">
          
          <h2 className="font-archivo font-medium text-5xl lg:text-[64px] text-[#E9F4F9] leading-[1.1] tracking-tight mb-6">
            A complete cloud-based<br />core banking.
          </h2>
          
          <p className="font-archivo text-[16px] lg:text-[18px] text-[#E9F4F9]/70 max-w-[400px] mb-10 leading-[1.4]">
            Faster time to market with our cloud-based core banking services
          </p>
          
          <button className="bg-gradient-to-r from-[#00B4FD] to-[#003ACE] text-white font-chivo text-[13px] uppercase tracking-wider px-10 py-4 rounded-[10px] mb-8 hover:opacity-90 transition-opacity shadow-[0_0_20px_rgba(0,180,253,0.15)]">
            Request Demo
          </button>
          
          <button className="group flex items-center gap-2 font-chivo text-[14px] text-[#00B4FD] uppercase tracking-wider hover:text-white transition-colors">
            Learn More
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </button>
          
        </div>

        {/* =========================================
            RIGHT COLUMN: Pure CSS Laptop Mockup
            ========================================= */}
        <div className="flex-1 w-full max-w-[800px] relative mt-16 lg:mt-0 flex flex-col items-center">
          
          {/* Laptop Screen (Top Half) */}
          <div className="relative w-full aspect-[16/10] border-[1.5px] border-[#00B4FD]/70 rounded-t-[24px] rounded-b-sm bg-[#000D12] p-2 lg:p-4 pb-0 z-10 shadow-[0_0_50px_rgba(0,180,253,0.1)]">
            
            {/* Inner Screen Display (where the image goes) */}
            <div className="w-full h-full bg-white rounded-t-[14px] overflow-hidden">
              <img 
                src={dashboardImage} 
                alt="AML Dashboard" 
                className="w-full h-full object-cover object-left-top" 
              />
            </div>
            
          </div>
          
          {/* Laptop Base/Keyboard Deck (Bottom Half) */}
          <div className="relative w-[110%] h-3 lg:h-4 border-[1.5px] border-[#00B4FD]/70 border-t-0 rounded-b-[12px] rounded-t-sm bg-[#000D12] z-20" />
          
        </div>

      </div>
    </section>
  );
};