import React from 'react';
import { SolutionCard } from '../ui/SolutionCard';
import { Fingerprint, Command, Globe, Network, Cpu } from 'lucide-react';

export const SolutionsSection: React.FC = () => {
  // Data array directly matching your Figma screenshot
  const solutionsData = [
    {
      icon: <Fingerprint size={40} strokeWidth={1} />,
      title: "Core Banking CB7",
      description: "CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations for your employees, improve risk management, increase productivity, and ensure full regulatory compliance.",
    },
    {
      icon: <Command size={40} strokeWidth={1} />,
      title: "Digital Banking N7",
      description: "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients",
    },
    {
      icon: <Globe size={40} strokeWidth={1} />,
      title: "Open Banking",
      description: "Our API banking helps you to gain actionable insights, enable account aggregation, streamline customer onboarding, KYC, and payment initiation, offer predictive budgeting tools, and introduce enhanced credit scoring.",
    },
    {
      icon: <Network size={40} strokeWidth={1} />,
      title: "Loan Origination System",
      description: "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients",
      badge: "NBFC"
    },
    {
      icon: <Cpu size={40} strokeWidth={1} />,
      title: "Loan Management System",
      description: "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients",
      badge: "NBFC"
    }
  ];

  return (
    <section id="solutions" className="relative w-full bg-[#000D12] py-24 lg:py-32 overflow-hidden">
      
      {/* Container */}
      <div className="max-w-[1440px] mx-auto w-full px-6 lg:px-16 flex flex-col lg:flex-row gap-16 lg:gap-24 relative z-10">
        
        {/* =========================================
            LEFT COLUMN: Sticky Title & Button
            ========================================= */}
        <div className="w-full lg:w-1/3 shrink-0">
          {/* Using 'sticky' so it floats alongside the user as they scroll the right column */}
          <div className="lg:sticky flex flex-col items-start">
            <h2 className="font-archivo font-normal text-4xl lg:text-[44px] text-[#E9F4F9] leading-[1.2] tracking-tight mb-12">
              All of our solutions are<br />tailor-made to your needs
            </h2>

            <button className="border border-[#E9F4F9] text-[#E9F4F9] font-chivo text-[15px] uppercase tracking-wider px-14 py-4 rounded-[10px] hover:bg-[#E9F4F9] hover:text-blue-700  transition-colors duration-300">
              Request Demo
            </button>
          </div>
        </div>

        {/* =========================================
            RIGHT COLUMN: The Feature Grid
            ========================================= */}
        <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-20 pt-4 lg:pt-0">
          {solutionsData.map((solution, index) => (
            <SolutionCard 
              key={index}
              icon={solution.icon}
              title={solution.title}
              description={solution.description}
              badge={solution.badge}
            />
          ))}
        </div>

      </div>
    </section>
  );
};