import React from 'react';

const CARDS = [
  { bg: '#FBEFAB', text: "Sec What's Going On", textColor: '#5E5440' },
  { bg: '#FDC2C7', text: 'Shop With Us', textColor: '#654144' },
  { bg: '#F9B002', text: "Sec What's Going On", textColor: '#5E5440' },
  { bg: '#AFD3F5', text: "See What's in Store", textColor: '#494E5A' },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 px-6 flex flex-col items-center w-full bg-[#FEFEFE]">
      <div className="max-w-[1152px] flex flex-col items-center w-full">
        {/* Header matching 13.png & figma.tsx lines 1509-1517 */}
        <p className="text-[#9C7C5E] font-inter text-xs leading-4 tracking-[0.35em] uppercase text-center mb-2">
          Our Work
        </p>
        <h2 className="text-[#40312A] font-cormorantGaramond text-5xl font-light text-center mb-14">
          <span className="swash">P</span>ORTFOLIO &amp; <span className="swash">G</span>ALLERY
        </h2>

        {/* 4 Polaroid Cards with plain cement box matching 13.png, 14.png & figma.tsx lines 1520-1548 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {CARDS.map((item, i) => (
            <div
              key={i}
              className="rounded-[15.6px] p-7 flex flex-col justify-between overflow-hidden shadow-sm transition-transform hover:-translate-y-1"
              style={{ backgroundColor: item.bg, height: '577px' }}
            >
              {/* Plain light cement box bg-[#C4C4C4] matching figma.tsx lines 1522, 1529, 1536, 1543 */}
              <div className="bg-[#C4C4C4] rounded-lg w-full h-[443px] overflow-hidden"></div>

              {/* Calligraphic script title font-androgyDemo text-[47px] matching figma.tsx lines 1523, 1530, 1537, 1544 */}
              <p
                className="font-androgyDemo text-[47px] pt-3 text-center leading-tight select-none"
                style={{ color: item.textColor }}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* Commission a Piece button matching 15.png & figma.tsx lines 1551-1589 */}
        <div className="pt-12 flex justify-center w-full">
          <a
            href="#book"
            className="inline-flex items-center gap-2 py-3 px-8 rounded-md border border-[#4A0612] text-[#4A0612] font-inter text-sm tracking-[0.1em] hover:bg-[#4A0612] hover:text-white transition-colors uppercase"
          >
            Commission a Piece →
          </a>
        </div>
      </div>
    </section>
  );
}
