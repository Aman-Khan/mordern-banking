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
      <button className="group flex items-center gap-2 font-chivo text-[14px] text-[#00B4FD] uppercase tracking-wider mt-2">
        Learn More
        <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
      </button>
    </div>
  );
};