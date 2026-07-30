import React from 'react';

const CARDS = [
  { bg: '#FBEFAB', text: "Sec What's Going On", textColor: '#5E5440' },
  { bg: '#FDC2C7', text: 'Shop With Us', textColor: '#654144' },
  { bg: '#F9B002', text: "Sec What's Going On", textColor: '#5E5440' },
  { bg: '#AFD3F5', text: "See What's in Store", textColor: '#494E5A' },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-12 md:py-20 px-4 sm:px-6 flex flex-col items-center w-full bg-[#FEFEFE]">
      <div className="max-w-[1152px] flex flex-col items-center w-full">
        {/* Header matching 13.png & figma.tsx lines 1509-1517 */}
        <p className="text-[#9C7C5E] font-inter text-xs leading-4 tracking-[0.35em] uppercase text-center mb-2">
          Our Work
        </p>
        <h2 className="text-[#40312A] font-cormorant font-light text-[clamp(22px,5vw,48px)] leading-[48px] tracking-normal text-center mb-10 md:mb-14">
          PORTFOLIO &amp; GALLERY
        </h2>

        {/* 4 Polaroid Cards with plain cement box matching 13.png, 14.png & figma.tsx lines 1520-1548 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 w-full">
          {CARDS.map((item, i) => (
            <div
              key={i}
              className="rounded-[15.6px] p-5 sm:p-7 flex flex-col justify-between overflow-hidden shadow-sm transition-transform hover:-translate-y-1 min-h-[360px] sm:min-h-[480px] md:h-[577px] w-full"
              style={{ backgroundColor: item.bg }}
            >
              {/* Plain light cement box */}
              <div className="bg-[#C4C4C4] rounded-lg w-full h-[260px] sm:h-[340px] md:h-[443px] overflow-hidden"></div>

              {/* Calligraphic script title */}
              <p
                className="font-androgyDemo text-3xl sm:text-4xl md:text-[47px] pt-3 text-center leading-tight select-none"
                style={{ color: item.textColor }}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* Commission a Piece button matching 15.png & figma.tsx lines 1551-1589 */}
        <div className="pt-10 md:pt-12 flex justify-center w-full">
          <a
            href="#book"
            className="inline-flex justify-center items-center gap-2 py-3.5 px-8 rounded-md border border-[#4A0612] text-[#4A0612] font-inter text-sm tracking-[0.1em] hover:bg-[#4A0612] hover:text-white transition-colors uppercase w-full sm:w-auto text-center"
          >
            Commission a Piece →
          </a>
        </div>
      </div>
    </section>
  );
}
