import React from 'react';
import { Check } from 'lucide-react';

// Import your second dashboard screenshot
import dashboardImage from '../../assets/images/dashboard-2.png';

export const EfficiencySection: React.FC = () => {
  // Data arrays split exactly as they appear in your Figma design
  const leftColumnFeatures = [
    "Customer-On Boarding",
    "Managing deposits and withdrawals",
    "Transaction management",
    "Interest Calculation",
    "Payments processing (cash, cheques, mandates, NEFT, RTGS etc)"
  ];

  const rightColumnFeatures = [
    "CRM Activities",
    "Configuring New Banking Products",
    "Loan disbursal and Loan management",
    "Establishing criteria for minimum balances, interest rates, number of withdrawals allowed and so on."
  ];

  const FeatureItem = ({ text }: { text: string }) => (
    <div className="flex items-start gap-4">
      <div className="w-6 h-6 rounded-full bg-[#0052FF] flex items-center justify-center shrink-0 mt-0.5">
        <Check size={14} strokeWidth={3} className="text-white" />
      </div>
      <p className="font-archivo text-[15px] lg:text-[16px] text-[#E9F4F9]/80 leading-[1.4]">
        {text}
      </p>
    </div>
  );

  return (
    <section className="relative w-full min-h-[800px] bg-[#000D12] flex items-center py-24 overflow-hidden">

      <div className="max-w-[1440px] mx-auto w-full px-6 lg:px-16 flex flex-col lg:flex-row items-center gap-16 lg:gap-20">

        {/* =========================================
            LEFT COLUMN: Laptop Mockup
            ========================================= */}
        {/* Added lg:-translate-x-[20%] to the parent div */}
        <div className="flex-1 w-full lg:w-1/2 lg:-translate-x-[75%] relative flex flex-col items-center lg:items-start mt-16 lg:mt-0">

          {/* Laptop Screen */}
          <div className="relative w-full max-w-[700px] aspect-[16/10] border-[2px] border-[#003ACE] rounded-t-[20px] rounded-b-sm bg-[#000D12] p-2 lg:p-3 pb-0 z-10 shadow-[0_0_50px_rgba(0,58,206,0.15)]">
            {/* Screen Content */}
            <div className="w-full h-full bg-white rounded-t-[12px] overflow-hidden">
              <img
                src={dashboardImage}
                alt="KYC Dashboard"
                className="w-full h-full object-cover object-right-top"
              />
            </div>
          </div>

          {/* Laptop Base */}
          <div className="relative w-full max-w-[760px] lg:w-[110%] h-4 lg:h-6 border-[2px] border-[#003ACE] rounded-b-[16px] rounded-t-sm bg-[#000D12] z-20 lg:-ml-4" />

        </div>

        {/* =========================================
            RIGHT COLUMN: Copy & Feature List
            ========================================= */}
        <div className="flex-1 w-full lg:w-1/2 flex flex-col pt-8 lg:pt-0">

          <h2 className="font-archivo font-medium text-4xl lg:text-[42px] text-[#E9F4F9] leading-[1.2] tracking-tight mb-8">
            Run a more efficient, flexible,and digitally connected corebanking system
          </h2>

          <p className="font-archivo text-lg lg:text-[20px] font-medium text-[#E9F4F9] mb-8">
            What you will get:
          </p>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8">
            {/* Left Column Features */}
            <div className="flex flex-col gap-6">
              {leftColumnFeatures.map((feature, index) => (
                <FeatureItem key={`left-${index}`} text={feature} />
              ))}
            </div>

            {/* Right Column Features */}
            <div className="flex flex-col gap-6">
              {rightColumnFeatures.map((feature, index) => (
                <FeatureItem key={`right-${index}`} text={feature} />
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};