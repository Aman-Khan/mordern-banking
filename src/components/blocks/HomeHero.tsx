import React from 'react';
import { RecentActivityCard } from '../ui/RecentActivityCard';
import { TotalBalanceCard } from '../ui/TotalBalanceCard';

import heroImage from '../../assets/images/girl-scrolling.png';
import trustedByLogos from '../../assets/images/trusted-by.svg'; // Import your SVG

export const HomeHero: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen bg-[#000D12] overflow-hidden flex items-center pt-24 pb-16">
      {/* Background glow */}
      <div className="absolute right-0 top-1/3 w-[550px] h-[550px] bg-gradient-to-r from-[#00B4FD] to-[#003ACE] rounded-full mix-blend-screen opacity-20 blur-[120px]" />

      <div className="max-w-[1400px] mx-auto w-full px-8 xl:px-12 flex flex-col lg:flex-row gap-16 lg:gap-24 items-center justify-between relative z-10">

        {/* Left Text Content */}
        <div className="w-full lg:w-[45%] flex flex-col justify-center shrink-0">
          <h1 className="font-archivo font-medium text-5xl lg:text-[64px] leading-[1.1] tracking-tight text-[#E9F4F9] mb-6">
            The new foundation<br />of modern banking
          </h1>
          <p className="font-archivo text-base lg:text-[16px] text-[#E9F4F9]/80 max-w-[420px] leading-[1.4] mb-10">
            We drive innovation and growth, provide seamless customer experience and operational excellence
          </p>
          <div className="flex flex-wrap gap-4 mb-8">
            <button className="bg-gradient-to-r from-[#00B4FD] to-[#003ACE] text-white font-chivo text-[13px] uppercase px-10 py-3.5 rounded-[10px] hover:opacity-90 transition-opacity">
              Request Demo
            </button>
            <button className="w-full sm:w-auto border border-[#E9F4F9] text-[#E9F4F9] font-chivo text-[13px] tracking-widest uppercase px-10 py-4 rounded-[12px] hover:bg-[#E9F4F9] hover:text-blue-700 transition-colors duration-300">
              Contact Us
            </button>
          </div>

          {/* Trusted By Section - Using your SVG */}
          <div className="mt-12">
            <p className="text-[#E9F4F9]/60 text-base mb-4 font-archivo">Trusted By:</p>
              <img 
                src={trustedByLogos} 
                alt="Trusted By Brands" 
                className="h-8 w-auto object-contain"
              />
          </div>
        </div>

        {/* Right Image Composition */}
        <div className="w-full lg:w-[50%] relative flex justify-center mt-16 lg:mt-0">
          <div className="relative w-[240px] h-[180px] md:w-[360px] md:h-[260px] lg:w-[400px] lg:h-[280px] lg:-translate-y-8">

            {/* Base Main Image */}
            <div className="absolute inset-0 rounded-[24px] overflow-hidden shadow-2xl z-10">
              <img src={heroImage} alt="Banking" className="w-full h-full object-cover" />
            </div>

            {/* Cards - Positioned exactly as you defined */}
            <div className="absolute -top-[10%] -right-[8%] lg:-top-[15%] lg:-right-[15%] z-30">
              <TotalBalanceCard />
            </div>

            <div className="absolute -bottom-[10%] -left-[10%] lg:-bottom-[15%] lg:-left-[18%] z-30">
              <RecentActivityCard />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};