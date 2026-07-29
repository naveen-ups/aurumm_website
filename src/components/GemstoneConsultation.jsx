import React from 'react';

const GEMSTONES_LARGE = [
  { name: 'Ruby', planet: 'SUN', color: '#E74C3C' },
  { name: 'Blue Sapphire', planet: 'SATURN', color: '#3498DB' },
];

const GEMSTONES_SMALL1 = [
  { name: 'Yellow Sapphire', planet: 'JUPITER', color: '#F1C40F' },
  { name: 'Amethyst', planet: 'SATURN', color: '#9B59B6' },
  { name: 'Amethyst', planet: 'SATURN', color: '#9B59B6' },
];

const GEMSTONES_SMALL2 = [
  { name: 'Emerald', planet: 'MERCURY', color: '#2ECC71' },
  { name: 'Aquamarine', planet: 'MOON', color: '#1ABC9C' },
  { name: 'Aquamarine', planet: 'MOON', color: '#1ABC9C' },
];

export default function GemstoneConsultation() {
  return (
    <section id="gemstone" className="py-24 px-6 flex flex-col items-center w-full bg-[#4A0612] text-white">
      <div className="max-w-[1152px] flex flex-col items-center w-full">
        {/* Header matching 12.png & figma.tsx lines 1127-1142 */}
        <div className="flex flex-col items-center w-full mb-16 text-center">
          <p className="text-[#9C7C5E] font-inter text-xs leading-4 tracking-[0.35em] uppercase mb-2">
            Guided by the Stars
          </p>
          <h2 className="text-white font-serif text-5xl leading-[48px] text-center mb-4">
            <span className="font-androgyDemo text-6xl italic">G</span>EMSTONE <span className="font-androgyDemo text-6xl italic">C</span>ONSULTATION
          </h2>
          <p className="text-[#FFFAF8] font-inter text-[15px] leading-[24.38px] max-w-[672px] text-center">
            Kashissh combines her gemological expertise with deep knowledge of Vedic astrology to recommend stones that resonate with your unique cosmic blueprint.
          </p>
        </div>

        {/* Content Grid matching 12.png & figma.tsx lines 1144-1250 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full items-start">
          {/* Left: Gemstone cards with Pinyon Script / androgyDemo font */}
          <div className="flex flex-col gap-4">
            {/* Large row matching figma.tsx lines 1146-1163 */}
            <div className="grid grid-cols-2 gap-4">
              {GEMSTONES_LARGE.map((gem) => (
                <div key={gem.name} className="flex p-6 flex-col items-center gap-3 rounded-[21.3px] bg-[#F8F3E9] text-center shadow-md">
                  <div className="rounded-full w-[73px] h-[73px]" style={{ background: `radial-gradient(91.92% 91.92% at 35% 35%, #FFF 0%, ${gem.color} 60%)` }}></div>
                  <p className="text-[#000] font-androgyDemo text-[32px] leading-[26.64px]">
                    {gem.name}
                  </p>
                  <p className="text-[#9C7C5E] font-inter text-[15px] leading-[22.83px] tracking-[0.1em]">
                    {gem.planet}
                  </p>
                </div>
              ))}
            </div>

            {/* Small row 1 matching figma.tsx lines 1174-1199 */}
            <div className="grid grid-cols-3 gap-3">
              {GEMSTONES_SMALL1.map((gem, i) => (
                <div key={gem.name + i} className="flex p-4 flex-col items-center gap-2 rounded-[14px] bg-[#F8F3E9] text-center shadow-sm">
                  <div className="rounded-full w-12 h-12" style={{ background: `radial-gradient(91.92% 91.92% at 35% 35%, #FFF 0%, ${gem.color} 60%)` }}></div>
                  <p className="text-[#000] font-androgyDemo text-[21px] leading-[17.5px]">
                    {gem.name}
                  </p>
                  <p className="text-[#9C7C5E] font-inter text-[10px] leading-[15px] tracking-[0.1em]">
                    {gem.planet}
                  </p>
                </div>
              ))}
            </div>

            {/* Small row 2 matching figma.tsx lines 1164-1173 & 1200-1217 */}
            <div className="grid grid-cols-3 gap-3">
              {GEMSTONES_SMALL2.map((gem, i) => (
                <div key={gem.name + 'b' + i} className="flex p-4 flex-col items-center gap-2 rounded-[14px] bg-[#F8F3E9] text-center shadow-sm">
                  <div className="rounded-full w-12 h-12" style={{ background: `radial-gradient(91.92% 91.92% at 35% 35%, #FFF 0%, ${gem.color} 60%)` }}></div>
                  <p className="text-[#000] font-androgyDemo text-[21px] leading-[17.5px]">
                    {gem.name}
                  </p>
                  <p className="text-[#9C7C5E] font-inter text-[10px] leading-[15px] tracking-[0.1em]">
                    {gem.planet}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Vedic info matching figma.tsx lines 1218-1250 */}
          <div className="flex flex-col items-start">
            <h3 className="text-white font-serif text-3xl leading-9 mb-6">
              Where Vedic Wisdom Meets Gemology
            </h3>

            <div className="flex flex-col gap-5 text-[#FFFAF8] font-inter text-[15px] leading-[24.38px]">
              <p>
                In Vedic tradition, gemstones are considered powerful conduits of planetary energy. The right stone, worn in the right metal at the right time, can amplify strengths and harmonise challenges in your life path.
              </p>
              <p>
                Kashissh reviews your birth chart and current planetary transits before recommending any stone. She then selects specimens of the highest quality — certified, untreated, and energetically potent.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Button matching 12.png */}
        <div className="pt-14 flex justify-center w-full">
          <a href="#book" className="inline-flex items-center gap-2 bg-[#FBEFAB] text-[#4A0612] font-inter text-xs font-semibold py-3.5 px-8 rounded hover:opacity-90 transition-opacity tracking-[0.15em] uppercase">
            BOOK A GEMSTONE CONSULTATION →
          </a>
        </div>
      </div>
    </section>
  );
}
