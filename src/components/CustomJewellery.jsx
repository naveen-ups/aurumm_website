import React from 'react';

const CATEGORIES = [
  { title: 'Engagement & Wedding', desc: "Rings, bands, and bridal sets crafted to mark life's most sacred promises." },
  { title: 'Statement Pieces', desc: "Bold necklaces, chandelier earrings, and cuffs designed to command attention." },
  { title: 'Everyday Luxury', desc: "Refined pieces for daily wear — elegant enough for any occasion." },
];

export default function CustomJewellery() {
  return (
    <section id="custom" className="py-24 px-6 flex flex-col items-center w-full bg-[#F8F3E9]">
      <div className="max-w-[1152px] flex flex-col items-center w-full">
        {/* Header matching 6.png & figma.tsx lines 269-284 */}
        <p className="section-label mb-2 text-center">CRAFTED FOR YOU ALONE</p>
        <h2 className="section-title text-[#40312A] text-center mb-4">
          <span className="swash">C</span>USTOM <span className="swash">J</span>EWELLERY
        </h2>
        <p className="font-body text-[#6B5348] text-[15px] leading-[24.38px] max-w-[672px] text-center mb-16">
          From a first sketch to the final polish, your bespoke piece is an entirely personal journey — shaped by your vision and perfected by our craft.
        </p>

        {/* 3 Category Cards with plain cement box matching 6.png & figma.tsx lines 287-320 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {CATEGORIES.map((cat) => (
            <div key={cat.title} className="flex flex-col items-start rounded-2xl bg-[#FEFEFE] shadow-sm overflow-hidden">
              {/* Plain light cement box bg-[#C4C4C4] matching figma.tsx lines 289-290 */}
              <div className="flex p-8 justify-center items-center bg-[#F8F2EC] w-full h-[363px] overflow-hidden">
                <div className="bg-[#C4C4C4] w-[299px] h-[299px] overflow-hidden rounded-md"></div>
              </div>
              <div className="flex p-6 flex-col items-start w-full">
                <h3 className="font-heading text-[#40312A] text-xl leading-7 mb-2">{cat.title}</h3>
                <p className="font-body text-[#6B5348] text-sm leading-[22.75px]">{cat.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Dark Burgundy CTA Banner matching 6.png */}
        <div className="mt-16 w-full">
          <div className="flex p-10 md:p-14 items-center justify-between gap-8 rounded-2xl bg-[#4A0612] text-white flex-wrap">
            <div className="flex flex-col items-start max-w-[650px]">
              <h3 className="font-heading text-2xl md:text-3xl leading-9">Ready to create something extraordinary?</h3>
              <p className="font-body text-[rgba(255,255,255,0.80)] text-sm leading-[22.75px] mt-2">
                Book a design consultation with Kashissh and take the first step toward a piece that is entirely, unmistakably yours.
              </p>
            </div>
            <a href="#book" className="shrink-0 py-3.5 px-8 rounded bg-white text-[#4A0612] font-body text-xs font-semibold tracking-[0.1em] hover:bg-[#F8F3E9] transition-colors uppercase">
              START DESIGNING
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
