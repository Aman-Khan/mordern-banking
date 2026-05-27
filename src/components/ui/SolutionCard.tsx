import React from 'react';
import { ArrowRight } from 'lucide-react';

interface SolutionCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  badge?: string;
}

export const SolutionCard: React.FC<SolutionCardProps> = ({ icon, title, description, badge }) => {
  return (
    <div className="flex flex-col items-start gap-6">
      {/* Icon & Optional Badge Row */}
      <div className="flex justify-between items-start w-full">
        {/* Placeholder for your custom abstract SVGs */}
        <div className="text-white/60">
          {icon}
        </div>

        {badge && (
          <span className="font-chivo text-[14px] text-[#E9F4F9]/60 uppercase tracking-widest mt-2">
            {badge}
          </span>
        )}
      </div>

      {/* Typography */}
      <div className="flex flex-col gap-4">
        <h3 className="font-archivo text-[22px] text-[#E9F4F9] leading-[1.2]">
          {title}
        </h3>
        <p className="font-archivo text-[16px] text-[#E9F4F9]/70 leading-[1.3]">
          {description}
        </p>
      </div>

      {/* Interactive Link */}
      <button className="relative group flex items-center gap-2 font-chivo text-[13px] text-[#00B4FD] uppercase tracking-wider transition-colors pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-6 after:h-[1.5px] after:bg-[#00B4FD] after:transition-all after:duration-300 hover:after:w-full">
        Learn More
        <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
      </button>
    </div>
  );
};