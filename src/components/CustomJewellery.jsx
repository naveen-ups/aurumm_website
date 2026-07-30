import React from 'react';

const CATEGORIES = [
  { title: 'Engagement & Wedding', desc: "Rings, bands, and bridal sets crafted to mark life's most sacred promises." },
  { title: 'Statement Pieces', desc: "Bold necklaces, chandelier earrings, and cuffs designed to command attention." },
  { title: 'Everyday Luxury', desc: "Refined pieces for daily wear — elegant enough for any occasion." },
];

export default function CustomJewellery() {
  return (
    <section id="custom" className="py-12 md:py-20 px-4 sm:px-6 flex flex-col items-center w-full bg-[#F8F3E9]">
      <div className="max-w-[1152px] flex flex-col items-center w-full">
        {/* Header matching 6.png & figma.tsx lines 269-284 */}
        <p className="section-label mb-2 text-center">CRAFTED FOR YOU ALONE</p>
        <h2 className="text-[#40312A] font-serif text-[clamp(22px,5vw,48px)] leading-tight text-center mb-4">
          <span className="swash">C</span>USTOM <span className="swash" style={{ fontFamily: "'Great Vibes', cursive" }}>J</span>EWELLERY
        </h2>
        <p className="font-inter text-[#6B5348] text-[15px] leading-[24.38px] max-w-[672px] text-center mb-10 md:mb-14">
          From a first sketch to the final polish, your bespoke piece is an entirely personal journey — shaped by your vision and perfected by our craft.
        </p>

        {/* 3 Category Cards matching 6.png & figma.tsx lines 287-320 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.title}
              className="flex flex-col items-center rounded-[20px] bg-[#F8F2EC] p-5 sm:p-6 md:p-7 shadow-xs w-full"
            >
              {/* Square Image Placeholder matching 6.png */}
              <div className="bg-[#C4C4C4] w-full aspect-square rounded-md overflow-hidden shadow-xs"></div>

              {/* White Text Card Box matching 6.png — width matches image width exactly */}
              <div className="bg-white w-full rounded-xl p-4 sm:p-5 mt-4 sm:mt-5 flex flex-col items-start gap-1.5 shadow-xs">
                <h3 className="font-timesNewNormal text-[#40312A] text-base sm:text-lg md:text-xl leading-6 font-medium">
                  {cat.title}
                </h3>
                <p className="font-inter text-[#6B5348] text-xs sm:text-sm leading-relaxed">
                  {cat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Dark Burgundy CTA Banner matching 6.png */}
        <div className="mt-12 md:mt-16 w-full">
          <div className="flex p-6 sm:p-10 md:p-14 items-center justify-between gap-6 md:gap-8 rounded-2xl bg-[#4A0612] text-white flex-col sm:flex-row text-center sm:text-left shadow-md">
            <div className="flex flex-col items-center sm:items-start flex-1">
              <h3 className="font-timesNewNormal text-white text-xl sm:text-2xl md:text-3xl leading-snug sm:leading-9">
                Ready to create something extraordinary?
              </h3>
              <p className="font-inter text-[rgba(255,255,255,0.80)] text-sm leading-[22.75px] mt-2 xl:whitespace-nowrap">
                Book a design consultation with Kashissh and take the first step toward a piece that is entirely, unmistakably yours.
              </p>
            </div>
            <a href="#book" className="shrink-0 py-3.5 px-8 rounded bg-white text-[#4A0612] font-inter text-xs font-semibold tracking-[0.1em] hover:bg-[#F8F3E9] transition-colors uppercase w-full sm:w-auto text-center">
              START DESIGNING
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
