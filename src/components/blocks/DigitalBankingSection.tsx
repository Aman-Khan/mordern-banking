import React from 'react';
import { ArrowRight, Check } from 'lucide-react';

// Import your phone SVGs
import phone1 from '../../assets/images/iPhone13Pro-1.svg';
import phone2 from '../../assets/images/iPhone13Pro-2.svg';
import phone3 from '../../assets/images/iPhone13Pro-3.svg';

// Import your background pattern SVGs
import n7Bg from '../../assets/images/N7.svg';
import sevenBg from '../../assets/images/7.svg';
import vectorBg from '../../assets/images/vector.svg';

import { CTASection } from './CTASection';

// Reusable component for the feature lists
const FeatureList = ({ items }: { items: string[] }) => (
  <div className="flex flex-col gap-4 mt-8">
    {items.map((item, index) => (
      <div key={index} className="flex items-start gap-4">
        <div className="w-5 h-5 rounded-full bg-[#0052FF] flex items-center justify-center shrink-0 mt-0.5">
          <Check size={12} strokeWidth={3} className="text-white" />
        </div>
        <span className="font-archivo text-[15px] text-[#000D12]/80 leading-snug">
          {item}
        </span>
      </div>
    ))}
  </div>
);

export const DigitalBankingSection: React.FC = () => {
  return (
    <section className="relative w-full bg-[#E9F4F9] py-24 lg:py-16 overflow-hidden">

      {/* =========================================
          BACKGROUND SVG PATTERNS
          ========================================= */}

      {/* 1. Curved Vector Shape (Left side) */}
      <img
        src={vectorBg}
        alt=""
        className="absolute top-[10%] -left-[10%] w-[50%] max-w-[800px] pointer-events-none z-0 object-contain opacity-80"
      />

      {/* 2. Giant 'N7' (Top/Center) */}
      <img
        src={n7Bg}
        alt=""
        className="absolute top-[2%] left-[15%] w-[75%] max-w-[1200px] pointer-events-none z-0 object-contain opacity-80"
      />

      {/* 3. Giant '7' (Bottom Right, positioned around CTA area) */}
      <img
        src={sevenBg}
        alt=""
        className="absolute bottom-[2%] -right-[5%] w-[50%] max-w-[800px] pointer-events-none z-0 object-contain opacity-80"
      />

      {/* =========================================
          MAIN CONTENT CONTAINER
          ========================================= */}
      <div className="max-w-[1440px] mx-auto w-full px-6 lg:px-16 relative z-10 flex flex-col gap-32">

        {/* --- ROW 1: HEADER & FIRST PHONE --- */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-16">

          {/* Intro Text */}
          <div className="w-full lg:w-1/3 flex flex-col pt-10">
            <h2 className="font-archivo font-medium text-5xl lg:text-[56px] text-[#000D12] leading-[1.1] tracking-tight mb-6">
              Digital banking out-of-the-box
            </h2>
            <p className="font-archivo text-[16px] text-[#000D12]/70 leading-relaxed mb-10">
              N7 helps your financial institution improve the client experience, automate and optimize procedures
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <button className="bg-gradient-to-r from-[#00B4FD] to-[#003ACE] text-white font-chivo text-[13px] uppercase tracking-wider px-8 py-3.5 rounded-[8px] shadow-lg hover:opacity-90 transition-opacity">
                Request Demo
              </button>
              <button className="relative group flex items-center gap-2 font-chivo text-[13px] text-[#00B4FD] uppercase tracking-wider transition-colors pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-6 after:h-[1.5px] after:bg-[#00B4FD] after:transition-all after:duration-300 hover:after:w-full">
                Learn More
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Phone 1 (Center) */}
          <div className="w-full lg:w-1/3 flex justify-center">
            <img src={phone1} alt="Mobile Banking Dashboard" className="w-full max-w-[280px] drop-shadow-2xl" />
          </div>

          {/* Feature Text 1 */}
          <div className="w-full lg:w-1/3 flex flex-col justify-center pt-10">
            <h3 className="font-archivo font-medium text-[20px] text-[#000D12] mb-4">
              Fully compliant with regulatory requirement
            </h3>
            <p className="font-archivo text-[15px] text-[#000D12]/70 leading-relaxed">
              The governance of risk management with regulations is achieved by our risk management framework that is fully integrated to work with digital bank's operational-risk protocols and procedures.
            </p>
            <FeatureList items={[
              "Pre-integrated Security System",
              "Fully Compliant With Regulatory Requirement",
              "Digitally Connected Core"
            ]} />
          </div>
        </div>

        {/* --- ROW 2: ZIG-ZAG --- */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-32">

          {/* Feature Text 2 */}
          <div className="w-full lg:w-[400px] flex flex-col">
            <h3 className="font-archivo font-medium text-[20px] text-[#000D12] mb-4">
              No legacy IT systems
            </h3>
            <p className="font-archivo text-[15px] text-[#000D12]/70 leading-relaxed">
              Our Digital Banking solution and multilayered approach help financial institutions take advantage of digital transformation by ensuring customer trust and regulatory compliance.
            </p>
            <FeatureList items={[
              "Adaptive & Intelligent API monetization",
              "Ambient User Experience",
              "Cloud-native With lower TCO"
            ]} />
          </div>

          {/* Phone 2 */}
          <div className="w-full lg:w-[400px] flex justify-center lg:justify-end">
            <img src={phone2} alt="Banking Analytics" className="w-full max-w-[280px] drop-shadow-2xl" />
          </div>
        </div>

        {/* --- ROW 3: ZIG-ZAG --- */}
        <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-16 lg:gap-32">

          {/* Phone 3 */}
          <div className="w-full lg:w-[400px] flex justify-center lg:justify-start">
            <img src={phone3} alt="Profile Settings" className="w-full max-w-[280px] drop-shadow-2xl" />
          </div>

          {/* Feature Text 3 */}
          <div className="w-full lg:w-[400px] flex flex-col">
            <h3 className="font-archivo font-medium text-[20px] text-[#000D12] mb-4">
              No traditional branches
            </h3>
            <p className="font-archivo text-[15px] text-[#000D12]/70 leading-relaxed">
              Our Digital Banking out-of-the-box helps you to accelerate innovation while reducing risks and optimising operational costs for a seamless branchless experience.
            </p>
            <FeatureList items={[
              "Branchless & Paperless Banking",
              "Digital Transformation Capability",
              "Optimized, Adoptable and Scalable"
            ]} />
          </div>

        </div>

      </div>

      {/* CTA SECTION - Relative z-10 ensures it sits above the background SVGs */}
      <div className="relative z-10 mt-32">
        <CTASection bgColor="transparent" />
      </div>

    </section>
  );
};