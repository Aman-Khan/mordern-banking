import React from 'react';
import { ArrowLeft, ArrowRight, Zap } from 'lucide-react';
// Update this path to where your pattern.svg is actually located
import patternSvg from '../../assets/images/pattern.svg';

export const CaseStudyCarousel: React.FC = () => {
    return (
        <section className="w-full bg-[#020B11] py-16 px-4 md:px-8 font-sans overflow-hidden">
            <div className="max-w-[1200px] mx-auto relative">

                <div className="text-center mb-10 md:mb-12">
                    <h2 className="font-archivo text-3xl md:text-4xl lg:text-[48px] text-[#E9F4F9] leading-[1.1]">
                        Our Case Studies
                    </h2>
                </div>

                {/* CAROUSEL SLIDES CONTAINER - Reduced height */}
                <div className="relative w-full flex justify-center items-center md:min-h-[400px]">

                    {/* INACTIVE BACKGROUND SLIDE */}
                    <div className="hidden md:flex absolute top-1/2 left-0 right-0 -translate-y-1/2 w-full h-[85%] bg-[#01141B] opacity-30 rounded-[16px] p-4 z-0">
                        {/* Background Slide: Left Pattern Box */}
                        <div className="w-[45%] h-full bg-[#07193C] rounded-[10px] flex items-center justify-center overflow-hidden">
                            {/* Removed fixed 400px width/height, made it fluid */}
                            <img src={patternSvg} alt="Pattern" className="w-full h-full object-cover opacity-100" />
                        </div>

                        {/* Background Slide: Right Content */}
                        <div className="w-[55%] h-full pl-12 pr-8 flex flex-col justify-center">
                            <span className="font-chivo font-medium text-[9px] text-[#2490BB] opacity-50 uppercase tracking-[0.2em] mb-3">
                                Getting Started
                            </span>
                            <h3 className="font-archivo font-normal text-[#E9F4F9] text-2xl lg:text-[28px] leading-[1.2] mb-4">
                                How we help brand reach <br className="hidden lg:block" />out to more people
                            </h3>
                            <p className="font-archivo font-normal text-[14px] leading-[1.3] mb-6 max-w-[480px] bg-gradient-to-b from-[#E9F4F9]/[0.56] to-transparent bg-clip-text text-transparent opacity-70">
                                Our API banking helps you to gain actionable insights, enable account aggregation, streamline customer onboarding, KYC, and payment initiation.
                            </p>
                            <a href="#" className="flex items-center gap-2 text-[#00B4FD] text-[12px] uppercase tracking-widest font-chivo font-medium hover:opacity-80 transition-opacity w-fit">
                                Read More <ArrowRight size={16} />
                            </a>
                        </div>
                    </div>

                    {/* ACTIVE FOREGROUND SLIDE - Reduced height */}
                    <div className="relative w-full md:w-[90%] lg:w-[85%] h-auto md:h-[360px] rounded-[24px] shadow-[0_20px_50px_rgba(0,0,0,0.3)] bg-[#01141B] flex flex-col md:flex-row p-4 md:p-5 z-10">

                        {/* Active Slide: Left Pattern Box */}
                        <div className="w-full md:w-[42%] h-[250px] md:h-full flex flex-col justify-center mb-6 md:mb-0">
                            {/* Removed lg:w-[500px] & lg:h-[500px] which caused the aggressive crop */}
                            {/* Note: If you want strictly NO cropping at all, change 'object-cover' to 'object-contain' below */}
                            <img src={patternSvg} alt="Pattern" className="w-full h-full rounded-[12px] object-cover filter brightness-110" />
                        </div>

                        {/* Active Slide: Right Content - Adjusted padding and margins for compact height */}
                        <div className="w-full md:w-[55%] h-full px-2 md:px-8 lg:px-12 flex flex-col justify-center">
                            <span className="text-[#00B4FD] text-[10px] tracking-[0.2em] uppercase font-bold mb-3 md:mb-4">
                                Getting Started
                            </span>
                            <h3 className="text-[#E9F4F9] text-3xl lg:text-[38px] leading-[1.15] font-medium mb-6 md:mb-8">
                                How we help brand <br className="hidden lg:block" />reach out to more <br className="hidden lg:block" />people
                            </h3>

                            {/* Partner Logo placeholder */}
                            <div className="flex items-center gap-2 text-[#7A858F] mb-6 md:mb-8">
                                <div className="w-7 h-7 rounded-full bg-[#7A858F] flex items-center justify-center text-[#020B11]">
                                    <Zap size={16} fill="currentColor" />
                                </div>
                                <span className="text-[16px] md:text-[18px] font-bold tracking-wide">Zoomerr</span>
                            </div>

                            {/* ActionButton */}
                            <button className="w-full border border-white/20 rounded-xl py-3.5 text-[11px] text-[#A0AAB5] uppercase tracking-[0.15em] hover:bg-white/5 transition-colors">
                                Read More
                            </button>
                        </div>
                    </div>

                </div>

                {/* NAVIGATION CONTROLS */}
                <div className="w-full flex flex-col md:flex-row items-center justify-between mt-10 md:mt-12 relative gap-8 md:gap-0">

                    {/* Invisible spacer to perfectly center the pagination on desktop */}
                    <div className="w-[100px] hidden md:block"></div>

                    {/* Centered Arrows and Dots */}
                    <div className="flex items-center gap-6 md:gap-8 mx-auto order-1 md:order-none">
                        {/* Left Arrow */}
                        <button className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-[#00B4FD] flex items-center justify-center text-[#00B4FD] hover:bg-[#00B4FD]/10 transition-colors">
                            <ArrowLeft size={18} strokeWidth={1.5} className="md:w-5 md:h-5" />
                        </button>

                        {/* Dots */}
                        <div className="flex items-center gap-2 md:gap-3">
                            <button className="w-[8px] h-[8px] md:w-[10px] md:h-[10px] rounded-full border border-[#6B7A85] hover:border-[#00B4FD] transition-colors"></button>
                            <button className="w-[24px] h-[8px] md:w-[32px] md:h-[10px] rounded-full bg-[#1A4259]"></button>
                            <button className="w-[8px] h-[8px] md:w-[10px] md:h-[10px] rounded-full border border-[#6B7A85] hover:border-[#00B4FD] transition-colors"></button>
                            <button className="w-[8px] h-[8px] md:w-[10px] md:h-[10px] rounded-full border border-[#6B7A85] hover:border-[#00B4FD] transition-colors"></button>
                        </div>

                        {/* Right Arrow */}
                        <button className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-[#00B4FD] flex items-center justify-center text-[#00B4FD] hover:bg-[#00B4FD]/10 transition-colors">
                            <ArrowRight size={18} strokeWidth={1.5} className="md:w-5 md:h-5" />
                        </button>
                    </div>

                    <a
                        href="#view-all"
                        className="md:absolute right-0 flex items-center gap-2 text-[#00B4FD] text-[12px] uppercase tracking-widest font-bold transition-all pb-1 order-2 md:order-none relative hover:opacity-80 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-6 after:h-[1.5px] after:bg-[#00B4FD] after:transition-all after:duration-300 hover:after:w-full"
                    >
                        View All <ArrowRight size={14} strokeWidth={2} />
                    </a>

                </div>

            </div>
        </section>
    );
};