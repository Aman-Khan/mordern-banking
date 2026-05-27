import React from 'react';
import { Bell, MoreHorizontal } from 'lucide-react';
import toniAvatar from '../../assets/images/toni-avatar.svg'; // Update path as needed

export const TotalBalanceCard: React.FC<{ className?: string, style?: React.CSSProperties }> = ({ className = '', style }) => {
  return (
    <div 
      className={`w-[208px] bg-white/40 backdrop-blur-[6px] shadow-[0_0_27px_9px_rgba(0,0,0,0.25)] rounded-[12px] p-[4px] font-sans ${className}`}
      style={style}
    >
      {/* Inner Frame */}
      <div className="w-[199px] bg-white/70 rounded-[11px] px-[7.4px] py-[21px] relative flex flex-col">
        
        {/* Top Header - User & Bell */}
        <div className="flex items-start justify-between mb-[16px]">
          <div className="flex items-center gap-[6.4px]">
            <img 
              src={toniAvatar} 
              alt="Toni Kross" 
              className="w-[25.83px] h-[25.83px] rounded-[8.6px] object-cover bg-[#D9D9D9]" 
            />
            <div className="flex flex-col gap-[2px]">
              <span className="text-[#0D0D0C] font-bold text-[8.6px] leading-[10px]" style={{ fontFamily: 'Inter, sans-serif' }}>
                Toni Kross
              </span>
              <span className="text-[#0D0D0C]/60 text-[6.4px] leading-[8px]" style={{ fontFamily: 'Inter, sans-serif' }}>
                Good Morning
              </span>
            </div>
          </div>
          
          <button className="w-[17.22px] h-[17.22px] bg-[#FFFAFA]/20 backdrop-blur-[27px] rounded-[4px] flex items-center justify-center shrink-0">
            <Bell size={10} color="#0D0D0C" strokeWidth={2.5} />
          </button>
        </div>

        {/* Balance Area */}
        <div className="flex flex-col mb-[16px]">
          <span className="text-[#1D1D1D]/60 text-[7.5px] leading-[12px] mb-[4px]" style={{ fontFamily: 'Gilroy-Regular, sans-serif' }}>
            Total balance
          </span>
          <span className="text-[#081E69] text-[15px] font-bold leading-[19px]" style={{ fontFamily: 'Gilroy-Bold, sans-serif' }}>
            $42,295.00 USD
          </span>
        </div>

        {/* Faint Divider line */}
        <div className="w-[184px] border-b-[0.54px] border-white/24 mb-[16px]"></div>

        {/* Action Buttons Row */}
        <div className="flex items-start justify-between px-[5px]">
          
          {/* Fund Transfer */}
          <div className="flex flex-col items-center gap-[4px] cursor-pointer group">
            <div className="w-[32px] h-[32px] bg-[#FFFAFA]/20 backdrop-blur-[27px] rounded-[9px] flex items-center justify-center group-hover:bg-white/40 transition-colors">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0D0D0C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="6" width="20" height="12" rx="2" />
                <circle cx="12" cy="12" r="2" />
                <path d="M12 2v4" />
                <path d="M9 5l3-3 3 3" />
              </svg>
            </div>
            <span className="text-[#0D0D0C] text-[7.5px] font-bold" style={{ fontFamily: 'Gilroy-Bold, sans-serif' }}>
              Fund Transfer
            </span>
          </div>

          {/* Add Money */}
          <div className="flex flex-col items-center gap-[4px] cursor-pointer group">
            <div className="w-[32px] h-[32px] bg-[#FFFAFA]/20 backdrop-blur-[27px] rounded-[9px] flex items-center justify-center group-hover:bg-white/40 transition-colors">
               <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0D0D0C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="8" />
                <path d="M12 8v8" />
                <path d="M10 10h4" />
                <path d="M10 14h4" />
                <path d="M16 4l2 2-2 2" />
                <path d="M18 6h-4" />
              </svg>
            </div>
            <span className="text-[#0D0D0C] text-[7.5px] font-bold" style={{ fontFamily: 'Gilroy-Bold, sans-serif' }}>
              Add Money
            </span>
          </div>

          {/* More */}
          <div className="flex flex-col items-center gap-[4px] cursor-pointer group">
            <div className="w-[32px] h-[32px] bg-[#FFFAFA]/20 backdrop-blur-[27px] rounded-[9px] flex items-center justify-center group-hover:bg-white/40 transition-colors">
              <MoreHorizontal size={14} color="#0D0D0C" strokeWidth={2.5} />
            </div>
            <span className="text-[#0D0D0C] text-[7.5px] font-bold" style={{ fontFamily: 'Gilroy-Bold, sans-serif' }}>
              More
            </span>
          </div>

        </div>

      </div>
    </div>
  );
};