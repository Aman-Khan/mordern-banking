import React from 'react';
import { ArrowRight } from 'lucide-react';
import pattern from '../../assets/images/pattern.svg';

const InsightCard = ({ featured = false }: { featured?: boolean }) => (
    <div className={`bg-[#05131A] rounded-[24px] p-8 flex flex-col ${featured ? 'lg:col-span-2' : ''}`}>
        {featured ? (
            <div className="flex flex-col lg:flex-row gap-8">
                <img src={pattern} alt="Pattern" className="w-50 h-50" />
                <div className="flex-1 flex flex-col justify-center max-w-[300px]">
                    <span className="text-[#00B4FD] text-[12px] font-chivo uppercase tracking-widest mb-3">Getting Started</span>
                    <h3 className="text-[28px] font-archivo text-[#E9F4F9] leading-tight mb-4">How to transition from a traditional to a digital bank</h3>
                    <p className="text-[#E9F4F9]/60 font-archivo text-sm mb-6">David Grohl • 17/08/24</p>
                    <button className="w-full border border-[#E9F4F9]/50 text-[#E9F4F9]/50 font-chivo text-[12px] uppercase px-10 py-2.5 rounded-[10px] hover:bg-[#E9F4F9] hover:text-blue-700 transition-colors">Read More</button>
                </div>
            </div>
        ) : (
            <div className="flex-1 flex flex-col justify-center max-w-[300px]">
                <span className="text-[#00B4FD] text-[12px] font-chivo uppercase tracking-widest mb-3">Getting Started</span>
                <h3 className="text-[22px] font-archivo text-[#E9F4F9] leading-tight mb-4 flex-grow">How to transition from a traditional to a digital bank</h3>
                <p className="text-[#E9F4F9]/60 font-archivo text-sm mb-6">David Grohl • 17/08/24</p>
                <button className="w-full border border-[#E9F4F9]/50 text-[#E9F4F9]/50 font-chivo text-[12px] uppercase px-10 py-2.5 rounded-[10px] hover:bg-[#E9F4F9] hover:text-blue-700 transition-colors">Read More</button>
            </div>
        )}
    </div>
);

export const InsightsSection: React.FC = () => {
    return (
        <section className="w-full bg-[#000D12] py-24 px-6 lg:px-16">
            <div className="max-w-[1440px] mx-auto">
                <div className="flex flex-col lg:flex-row gap-12">

                    {/* Left Content */}
                    <div className="lg:w-1/3">
                        <h2 className="font-archivo text-4xl lg:text-[48px] text-[#E9F4F9] leading-[1.1] mb-8">
                            Get yourself up-to-speed on all the things happening in fintech
                        </h2>

                        <button className="border border-[#E9F4F9] text-[#E9F4F9] font-chivo text-[13px] uppercase px-10 py-3.5 rounded-[10px] hover:bg-[#E9F4F9] hover:text-blue-700 transition-colors">
                            Insights
                        </button>
                    </div>

                    {/* Right Content */}
                    <div className="lg:w-3/3">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <InsightCard featured />
                            <InsightCard />
                            <InsightCard />
                        </div>
                        <div className="mt-8">
                            <button className="flex items-center gap-2 text-[#00B4FD] font-chivo text-[14px] uppercase tracking-wider group">
                                Read all insights <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};