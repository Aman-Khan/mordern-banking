import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const RecentActivityCard: React.FC<{ className?: string, style?: React.CSSProperties }> = ({ className, style }) => {
    return (
        <div
            className={`w-[254px] h-[117px] bg-white/40 backdrop-blur-[8px] rounded-[12px] p-[4px] shadow-sm relative font-sans ${className}`}
            style={style}
        >
            {/* Inner Frame */}
            <div className="w-[246px] h-[109px] bg-white/70 rounded-[11px] pt-[10px] px-[6.5px] relative flex flex-col">

                {/* Title */}
                <h4 className="text-[#0F0F0F] text-[12.6px] leading-[18px] font-bold mb-[12px] tracking-tight" style={{ fontFamily: 'Gilroy-Bold, sans-serif' }}>
                    Recent activity
                </h4>

                {/* Tabs */}
                <div className="flex flex-row items-center gap-[6.31px] mb-[12px]">
                    {['This Day', 'This Week', 'This Month', '6 Month'].map((label, i) => {
                        const isActive = i === 1;
                        return (
                            <button
                                key={label}
                                className={`flex items-center justify-center px-[7.57px] py-[1.26px] rounded-[10.1px] h-[15.53px] ${isActive ? 'bg-[#081E69] text-white' : 'bg-[#F8F8F8] text-[#0D0D0C]'
                                    }`}
                            >
                                <span
                                    className="text-[7.57px] leading-[13px] whitespace-nowrap"
                                    style={{ fontFamily: 'Gilroy-Medium, sans-serif' }}
                                >
                                    {label}
                                </span>
                            </button>
                        );
                    })}
                </div>

                {/* Transaction Item */}
                <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-[13px]">

                        {/* Icon */}
                        <div className="w-[30.3px] h-[30.3px] bg-[#9280FD] rounded-[10.1px] flex items-center justify-center shrink-0 shadow-sm">
                            <ArrowUpRight size={15.15} color="white" strokeWidth={2.5} />
                        </div>

                        {/* Details */}
                        <div className="flex flex-col justify-center gap-[2.5px]">
                            <div className="flex items-center gap-[4.4px]">
                                <span className="text-[10.1px] text-[#0B0B0B] leading-[15px]" style={{ fontFamily: 'Gilroy-Bold, sans-serif' }}>
                                    To Jin
                                </span>
                                <div className="w-[1.89px] h-[1.89px] bg-[#0D0D0C] opacity-60 rounded-full"></div>
                                <span className="text-[10.1px] text-[#0B0B0B] opacity-60 leading-[15px]" style={{ fontFamily: 'Gilroy-Medium, sans-serif' }}>
                                    Work
                                </span>
                            </div>
                            <span className="text-[7.57px] text-[#0B0B0B] opacity-80 leading-[13px]" style={{ fontFamily: 'Gilroy-Regular, sans-serif' }}>
                                12 jun 2022
                            </span>
                        </div>

                    </div>

                    {/* Amount */}
                    <span className="text-[10.1px] text-[#0B0B0B] leading-[15px]" style={{ fontFamily: 'Gilroy-Bold, sans-serif' }}>
                        -$59
                    </span>
                </div>

                {/* Faint Divider (Line 2 from Figma) */}
                <div className="absolute bottom-[1px] left-[17px] w-[215.9px] border-b-[0.63px] border-[rgb(3, 3, 3)] opacity-24"></div>
            </div>
        </div>
    );
};