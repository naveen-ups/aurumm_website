import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#3E1122] py-10 md:py-12 px-4 sm:px-6 text-white">
      <div className="max-w-[1152px] mx-auto flex flex-col items-center">
        {/* Top footer row matching 19.png & figma.tsx lines 2834-2908 */}
        <div className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-10 w-full">
            {/* Brand column matching figma.tsx lines 2836-2848 */}
            <div className="flex flex-col items-start">
              <p className="font-cormorantGaramond text-white text-3xl leading-9 tracking-[0.2em] uppercase">
                AURUMM
              </p>
              <p className="font-inter text-[rgba(255,255,255,0.60)] text-sm leading-[22.75px] pt-3 max-w-[320px]">
                Bespoke jewellery crafted for your story. Every piece is designed with intention, made with mastery.
              </p>
            </div>

            {/* OUR STORY column matching figma.tsx lines 2849-2877 */}
            <div className="flex flex-col items-start">
              <p className="font-inter text-[#C5A882] text-xs leading-4 tracking-[0.1em] uppercase mb-4">
                OUR STORY
              </p>
              <div className="flex flex-col items-start gap-2">
                <a href="#about" className="font-inter text-[rgba(255,255,255,0.60)] text-sm leading-5 hover:text-[#C5A882] transition-colors">
                  About Aurumm
                </a>
                <a href="#founder" className="font-inter text-[rgba(255,255,255,0.60)] text-sm leading-5 hover:text-[#C5A882] transition-colors">
                  Meet the Founder
                </a>
                <a href="#process" className="font-inter text-[rgba(255,255,255,0.60)] text-sm leading-5 hover:text-[#C5A882] transition-colors">
                  Our Process
                </a>
                <a href="#gallery" className="font-inter text-[rgba(255,255,255,0.60)] text-sm leading-5 hover:text-[#C5A882] transition-colors">
                  Gallery
                </a>
              </div>
            </div>

            {/* SERVICES column matching figma.tsx lines 2878-2906 */}
            <div className="flex flex-col items-start">
              <p className="font-inter text-[#C5A882] text-xs leading-4 tracking-[0.1em] uppercase mb-4">
                Services
              </p>
              <div className="flex flex-col items-start gap-2">
                <a href="#custom" className="font-inter text-[rgba(255,255,255,0.60)] text-sm leading-5 hover:text-[#C5A882] transition-colors">
                  Custom Jewellery
                </a>
                <a href="#heritage" className="font-inter text-[rgba(255,255,255,0.60)] text-sm leading-5 hover:text-[#C5A882] transition-colors">
                  Heritage Redesign
                </a>
                <a href="#gemstone" className="font-inter text-[rgba(255,255,255,0.60)] text-sm leading-5 hover:text-[#C5A882] transition-colors">
                  Gemstone Consultation
                </a>
                <a href="#book" className="font-inter text-[rgba(255,255,255,0.60)] text-sm leading-5 hover:text-[#C5A882] transition-colors">
                  Book a Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
