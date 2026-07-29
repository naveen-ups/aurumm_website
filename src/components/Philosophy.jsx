import React from 'react';

export default function Philosophy() {
  return (
    <section id="about" className="flex py-24 px-6 flex-col items-center w-full bg-[#F8F3E9]">
      <div className="flex max-w-[1152px] justify-center items-center gap-16 w-full flex-wrap lg:flex-nowrap">
        {/* Left Container: Plain light cement box without image matching figma.tsx & 4.png */}
        <div className="flex flex-col items-start shrink-0 w-full lg:w-[544px] h-[680px]">
          <div className="flex flex-col items-start shrink-0 rounded-2xl w-full h-[680px] overflow-hidden bg-[#C4C4C4] shadow-xs">
          </div>
        </div>

        {/* Right Content Column matching figma.tsx & 4.png */}
        <div className="flex flex-col items-start shrink-0 w-full lg:w-[544px]">
          <p className="text-[#9C7C5E] font-inter text-xs leading-4 tracking-[0.35em] uppercase">
            Our Philosophy
          </p>

          <div className="pt-4 w-full">
            <h2 className="text-[#40312A] font-serif text-5xl leading-[60px]">
              WHERE <span className="font-androgyDemo text-6xl italic">A</span>RTISTRY MEETS <span className="font-androgyDemo text-6xl italic">M</span>EANING
            </h2>
          </div>

          {/* Star Divider matching figma.tsx lines 29-37 */}
          <div className="flex pt-6 items-center gap-4 shrink-0 w-full h-11">
            <div className="bg-[rgba(197,168,130,0.40)] flex-1 h-px"></div>
            <p className="text-[#C5A882] font-inter text-sm leading-5">
              ✦
            </p>
            <div className="bg-[rgba(197,168,130,0.40)] flex-1 h-px"></div>
          </div>

          {/* Paragraphs matching figma.tsx lines 38-60 */}
          <div className="flex pt-6 flex-col items-start w-full gap-5">
            <p className="text-[#6B5348] font-inter text-[15px] leading-[24.38px]">
              Jewellery is more than precious metal and gemstones. It is an expression of identity, love, heritage and legacy.
            </p>
            <p className="text-[#6B5348] font-inter text-[15px] leading-[24.38px]">
              At Aurumm, we believe every piece should be as unique as the person wearing it. Our design philosophy blends timeless elegance with contemporary aesthetics, creating jewellery that is deeply personal and beautifully enduring.
            </p>
            <p className="text-[#6B5348] font-inter text-[15px] leading-[24.38px]">
              Jewellery is more than precious metal and gemstones. It is an expression of identity, love, heritage and legacy.
            </p>
          </div>

          {/* 2x2 Stats Grid matching figma.tsx lines 61-112 */}
          <div className="pt-10 w-full">
            <div className="grid grid-cols-2 gap-x-12 gap-y-6 w-full">
              <div className="flex pl-4 flex-col items-start border-l-[1.48px] border-l-[#4A0612]">
                <p className="text-[#40312A] font-appleGaramond text-3xl font-bold leading-9">
                  500+
                </p>
                <p className="text-[#6B5348] font-inter text-xs leading-4 tracking-[0.025em]">
                  Bespoke Pieces Created
                </p>
              </div>

              <div className="flex pl-4 flex-col items-start border-l-[1.48px] border-l-[#4A0612]">
                <p className="text-[#40312A] font-appleGaramond text-3xl font-bold leading-9">
                  100%
                </p>
                <p className="text-[#6B5348] font-inter text-xs leading-4 tracking-[0.025em]">
                  Ethically Sourced Gems
                </p>
              </div>

              <div className="flex pl-4 flex-col items-start border-l-[1.48px] border-l-[#4A0612]">
                <p className="text-[#40312A] font-appleGaramond text-3xl font-bold leading-9">
                  15+
                </p>
                <p className="text-[#6B5348] font-inter text-xs leading-4 tracking-[0.025em]">
                  Countries Served
                </p>
              </div>

              <div className="flex pl-4 flex-col items-start border-l-[1.48px] border-l-[#4A0612]">
                <p className="text-[#40312A] font-appleGaramond text-3xl font-bold leading-9">
                  5★
                </p>
                <p className="text-[#6B5348] font-inter text-xs leading-4 tracking-[0.025em]">
                  Client Satisfaction
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
