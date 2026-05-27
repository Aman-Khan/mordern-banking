import React from 'react';

export const MarqueeSection: React.FC = () => {
  // Custom 8-point asterisk SVG matching your design
  const Asterisk = () => (
    <svg 
      width="48" height="48" viewBox="0 0 24 24" fill="none" 
      stroke="#CBD5E1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" 
      className="shrink-0 mx-6 lg:mx-10"
    >
      <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07L19.07 4.93"/>
    </svg>
  );

  // The repeating block of content
  const MarqueeContent = () => (
    <div className="flex items-center shrink-0">
      <Asterisk />
      <span className="font-archivo font-bold text-4xl md:text-5xl lg:text-[56px] text-[#00B4FD] tracking-tight">
        N7
      </span>
      
      <Asterisk />
      <span className="font-archivo font-bold text-4xl md:text-5xl lg:text-[56px] text-[#000D12] tracking-tight">
        Say 👋 to the new way of banking
      </span>
      
      <Asterisk />
      <span className="font-archivo font-bold text-4xl md:text-5xl lg:text-[56px] text-[#00B4FD] tracking-tight">
        CB7
      </span>
      
      <Asterisk />
      <span className="font-archivo font-bold text-4xl md:text-5xl lg:text-[56px] text-[#000D12] tracking-tight">
        Say 👋 to the new way of banking
      </span>
    </div>
  );

  return (
    <section className="w-full bg-white py-12 lg:py-16 overflow-hidden flex relative">
      {/* Injecting the keyframe animation directly here so you don't 
        have to mess with tailwind.config.js plugins for a simple marquee.
      */}
      <style>{`
        @keyframes scrollMarquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-track {
          animation: scrollMarquee 25s linear infinite;
        }
      `}</style>

      {/* The track holds two identical sets of content and translates -50%.
        When it hits -50%, it seamlessly snaps back to 0 without the user noticing. 
      */}
      <div className="flex w-max animate-marquee-track hover:[animation-play-state:paused] cursor-default">
        <MarqueeContent />
        {/* Render a second time to ensure the infinite loop doesn't have a blank gap */}
        <MarqueeContent />
      </div>
    </section>
  );
};