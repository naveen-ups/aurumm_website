import React from 'react';

const TAGS = ['GIA Certified Gemologist', 'Vedic Astrology', '3D CAD Design', 'Ethical Sourcing'];

export default function FounderSection() {
  return (
    <section id="founder" className="bg-[#3F101B] w-full overflow-hidden relative py-24 px-6">
      <div className="max-w-[1152px] mx-auto relative z-10">
        {/* Heading matching 5.png & figma.tsx line 128 */}
        <div className="text-center mb-16">
          <h2 className="section-title text-white text-center">
            <span className="swash">M</span>EET THE <span className="swash">F</span>OUNDER
          </h2>
        </div>

        {/* Content layout */}
        <div className="flex gap-16 items-start flex-wrap lg:flex-nowrap">
          {/* Left Container: Plain gray box without image matching figma.tsx line 135 & 5.png */}
          <div className="relative shrink-0 w-full lg:w-[457px] h-[548px]">
            <div className="rounded-2xl bg-[#BCBCBC] w-full lg:w-[457px] h-[548px] overflow-hidden shadow-lg">
            </div>
          </div>

          {/* Right Bio matching figma.tsx lines 149-220 */}
          <div className="flex flex-col items-start flex-1 min-w-[280px]">
            <h3 className="font-heading text-white text-3xl leading-9">Kashissh Garg</h3>
            <p className="font-body text-[#C5A882] text-xs leading-5 tracking-[0.1em] mt-1 uppercase">
              JEWELLERY DESIGNER &amp; GEMOLOGIST
            </p>

            <div className="flex items-center gap-4 w-full my-6">
              <div className="bg-[rgba(197,168,130,0.40)] flex-1 h-px"></div>
              <span className="text-[#C5A882] text-sm">✦</span>
              <div className="bg-[rgba(197,168,130,0.40)] flex-1 h-px"></div>
            </div>

            <div className="flex flex-col gap-4 font-body text-[rgba(255,255,255,0.80)] text-[15px] leading-[24.38px]">
              <p>
                Jewellery has always been more than a profession for me; it is an art form that preserves emotions, memories and identity.
              </p>
              <p>
                As a certified jewellery designer and gemologist, I combine technical expertise with creative vision to design pieces that transcend fleeting trends. Every gemstone is carefully selected, every detail thoughtfully considered, and every design created with the intention of becoming part of your personal story.
              </p>
              <p>
                Through Aurumm, my vision is to create jewellery that is timeless, meaningful and deeply personal.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 mt-8">
              {TAGS.map(tag => (
                <span key={tag} className="py-1.5 px-3 rounded-full bg-[rgba(255,255,255,0.10)] font-body text-[rgba(255,255,255,0.90)] text-xs tracking-[0.025em]">
                  {tag}
                </span>
              ))}
            </div>

            <div className="pt-8">
              <a href="#book" className="inline-flex items-center gap-2 bg-[#FBEFAB] font-body text-[#151414] text-xs font-semibold py-3.5 px-6 rounded hover:opacity-90 transition-opacity tracking-[0.1em] uppercase">
                BOOK A SESSION →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
