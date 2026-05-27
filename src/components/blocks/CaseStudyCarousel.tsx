import React from 'react';
import { ArrowLeft, ArrowRight, Zap } from 'lucide-react';
// Update this path to where your pattern.svg is actually located
import patternSvg from '../../assets/images/pattern.svg'; 

export const CaseStudyCarousel: React.FC = () => {
  return (
    <section className="w-full bg-[#020B11] py-24 px-4 md:px-8 font-sans overflow-hidden">
      <div className="max-w-[1200px] mx-auto relative">
       
        <div className="text-center mb-16">
          <h2 className="font-archivo text-4xl lg:text-[48px] text-[#E9F4F9] leading-[1.1]">
            Our Case Studies
          </h2>
        </div>

        {/* CAROUSEL SLIDES CONTAINER */}
        <div className="relative w-full flex justify-center items-center min-h-[500px]">
          
          {/* INACTIVE BACKGROUND SLIDE (Frame 51) - UPDATED */}
          <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 w-full h-[85%] bg-[#01141B] opacity-30 rounded-[16px] flex p-4 z-0">
            {/* Background Slide: Left Pattern Box */}
            <div className="w-[45%] h-full bg-[#07193C] rounded-[10px] flex items-center justify-center overflow-hidden">
              <img src={patternSvg} alt="Pattern" className="w-[400px] h-[400px] object-cover opacity-100" />
            </div>
            
            {/* Background Slide: Right Content */}
            <div className="w-[55%] h-full pl-12 pr-8 py-8 flex flex-col justify-center">
              <span className="font-chivo font-medium text-[9px] text-[#2490BB] opacity-50 uppercase tracking-[0.2em] mb-4">
                Getting Started
              </span>
              <h3 className="font-archivo font-normal text-[#E9F4F9] text-[32px] leading-[1.2] mb-6">
                How we help brand reach <br/>out to more people
              </h3>
              <p className="font-archivo font-normal text-[14px] leading-[1.3] mb-8 max-w-[480px] bg-gradient-to-b from-[#E9F4F9]/[0.56] to-transparent bg-clip-text text-transparent opacity-70">
                Our API banking helps you to gain actionable insights, enable account aggregation, streamline customer onboarding, KYC, and payment initiation, offer predictive budgeting tools, and introduce enhanced credit scoring.
              </p>
              <a href="#" className="flex items-center gap-2 text-[#00B4FD] text-[12px] uppercase tracking-widest font-chivo font-medium hover:opacity-80 transition-opacity w-fit">
                Read More <ArrowRight size={16} />
              </a>
            </div>
          </div>

          {/* ACTIVE FOREGROUND SLIDE (Frame 110) */}
          <div className="relative w-[85%] h-[450px] bg-[#020B11] rounded-[24px] shadow-[0_20px_50px_rgba(0,0,0,0.3)] bg-[#01141B] flex p-4 z-10">
            <div className="w-[45%] h-full  pl-16 pr-12 py-12 flex flex-col justify-center">
            {/* Active Slide: Left Pattern Box */}
              <img src={patternSvg} alt="Pattern" className="w-[500px] h-[500px] rounded-[12px] object-cover filter brightness-110 justify" />
            </div>
            {/* Active Slide: Right Content */}
            <div className="w-[55%] h-full pl-16 pr-12 py-12 flex flex-col justify-center">
              <span className="text-[#00B4FD] text-[10px] tracking-[0.2em] uppercase font-bold mb-5">
                Getting Started
              </span>
              <h3 className="text-[#E9F4F9] text-[44px] leading-[1.15] font-medium mb-10">
                How we help brand <br/>reach out to more <br/>people
              </h3>
              
              {/* Partner Logo placeholder */}
              <div className="flex items-center gap-2 text-[#7A858F] mb-12">
                <div className="w-7 h-7 rounded-full bg-[#7A858F] flex items-center justify-center text-[#020B11]">
                  <Zap size={16} fill="currentColor" />
                </div>
                <span className="text-[18px] font-bold tracking-wide">Zoomerr</span>
              </div>

              {/* ActionButton */}
              <button className="w-full border border-white/20 rounded-xl py-4 text-[11px] text-[#A0AAB5] uppercase tracking-[0.15em] hover:bg-white/5 transition-colors">
                Read More
              </button>
            </div>
          </div>

        </div>

        {/* NAVIGATION CONTROLS */}
        <div className="w-full flex items-center justify-between mt-12 relative">
          
          {/* Invisible spacer to perfectly center the pagination */}
          <div className="w-[100px] hidden md:block"></div>

          {/* Centered Arrows and Dots */}
          <div className="flex items-center gap-8 mx-auto">
            {/* Left Arrow */}
            <button className="w-12 h-12 rounded-full border border-[#00B4FD] flex items-center justify-center text-[#00B4FD] hover:bg-[#00B4FD]/10 transition-colors">
              <ArrowLeft size={20} strokeWidth={1.5} />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-3">
              <button className="w-[10px] h-[10px] rounded-full border border-[#6B7A85] hover:border-[#00B4FD] transition-colors"></button>
              <button className="w-[32px] h-[10px] rounded-full bg-[#1A4259]"></button>
              <button className="w-[10px] h-[10px] rounded-full border border-[#6B7A85] hover:border-[#00B4FD] transition-colors"></button>
              <button className="w-[10px] h-[10px] rounded-full border border-[#6B7A85] hover:border-[#00B4FD] transition-colors"></button>
            </div>

            {/* Right Arrow */}
            <button className="w-12 h-12 rounded-full border border-[#00B4FD] flex items-center justify-center text-[#00B4FD] hover:bg-[#00B4FD]/10 transition-colors">
              <ArrowRight size={20} strokeWidth={1.5} />
            </button>
          </div>

          {/* Right Aligned "View All" */}
          <a href="#view-all" className="absolute right-0 flex items-center gap-2 text-[#00B4FD] text-[12px] uppercase tracking-widest font-bold hover:opacity-80 transition-opacity border-b border-[#00B4FD] pb-1">
            View All <ArrowRight size={14} strokeWidth={2} />
          </a>

        </div>

      </div>
    </section>
  );
};