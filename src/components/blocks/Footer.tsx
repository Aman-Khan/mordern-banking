import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Footer: React.FC = () => {
  const addresses = [
    {
      title: 'London',
      content: 'Linktia Infosystems Ltd – CB7,\n26 Main Road Sundridge,TN14 6EP,\nEngland, United Kingdom.',
    },
    {
      title: 'Dubai',
      content: 'Linktia Infosystems Ltd –\nCB7,Jumeirah Business, Center 5\nCluster W, Jumeirah Lakes Towers,\nDubai, United Arab Emirates',
    },
    {
      title: 'London',
      content: 'Linktia Infosystems Ltd –\nCB7,Nirmal, Anand Nagar,\nSuncity Road, Pune,\nMaharashtra, 411041, India',
    },
  ];

  const solutionsLinks = [
    'Core Banking CB7',
    'Digital Banking N7',
    'Open Banking',
    'Loan Origination System',
    'Loan Management System',
    'Digital Transformation',
  ];

  const n7BankingLinks = [
    'About Us',
    'Solutions',
    'Contact',
    'Company',
    'Careers',
    'Insights',
    'Core Team',
    'Brand Center',
  ];

  const socialLinks = ['LinkedIn', 'X'];

  const LinkItem = ({ text }: { text: string }) => (
    <a
      href={`#${text.toLowerCase().replace(/\s+/g, '-')}`}
      className="group flex items-start sm:items-center justify-between w-full max-w-[240px] py-[6px] transition-colors"
    >
      <span className="text-[#A0AAB5] text-[14px] leading-[1.4] group-hover:text-white transition-colors">
        {text}
      </span>
      <ArrowRight
        size={16}
        className="text-[#00B4FD] ml-4 mt-[2px] sm:mt-0 flex-shrink-0 group-hover:translate-x-1 transition-transform"
        strokeWidth={2}
      />
    </a>
  );

  return (
    <footer className="w-full bg-[#030B10] pt-24 pb-12 px-8 md:px-16 font-sans">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex flex-col xl:flex-row gap-16 xl:gap-8">
          
          {/* Left Side: Giant Logo */}
          <div className="w-full xl:w-[35%] flex-shrink-0">
            <h1 className="text-[200px] md:text-[280px] xl:text-[320px] font-bold leading-none tracking-tighter bg-clip-text text-transparent bg-gradient-to-br from-[#00E5FF] via-[#0077FF] to-[#1A36AA] select-none -mt-8 md:-mt-16">
              N7
            </h1>
          </div>

          {/* Right Side: Content Area */}
          <div className="w-full xl:w-[65%] flex flex-col">
            
            {/* Top Section: Addresses */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 xl:gap-8 mb-20">
              {addresses.map((address, index) => (
                <div key={index} className="flex flex-col">
                  <h4 className="text-white text-[16px] mb-4 font-medium tracking-wide">
                    {address.title}
                  </h4>
                  <p className="text-[#A0AAB5] text-[14px] leading-[1.6] whitespace-pre-line max-w-[280px]">
                    {address.content}
                  </p>
                </div>
              ))}
            </div>

            {/* Bottom Section: Links */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 xl:gap-8">
              
              {/* Solutions Column */}
              <div>
                <h4 className="text-white text-[16px] mb-5 font-medium tracking-wide">
                  Solutions
                </h4>
                <div className="flex flex-col gap-[2px]">
                  {solutionsLinks.map((link, index) => (
                    <LinkItem key={index} text={link} />
                  ))}
                </div>
              </div>

              {/* N7 Banking Column */}
              <div>
                <h4 className="text-white text-[16px] mb-5 font-medium tracking-wide">
                  N7 Banking
                </h4>
                <div className="flex flex-col gap-[2px]">
                  {n7BankingLinks.map((link, index) => (
                    <LinkItem key={index} text={link} />
                  ))}
                </div>
              </div>

              {/* Our Socials Column */}
              <div>
                <h4 className="text-white text-[16px] mb-5 font-medium tracking-wide">
                  Our Socials
                </h4>
                <div className="flex flex-col gap-[2px]">
                  {socialLinks.map((link, index) => (
                    <LinkItem key={index} text={link} />
                  ))}
                </div>
              </div>

            </div>
            <p className="text-[#566270] text-[12px] leading-[1.6] xl:max-w-[75%] py-12">
            Copyright © 2022 by Linktia Infosystems Limited — [CB7 and N7 as Commercial Brand] — [Registered under the Companies Act 2006 in England and Wales | Number of Incorporation 13100992]
          </p>
          </div>
          
        </div>
      </div>
    </footer>
  );
};