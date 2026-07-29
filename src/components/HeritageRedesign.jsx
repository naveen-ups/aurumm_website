import React from 'react';

const FEATURES = [
  'Full assessment & valuation of your heirloom',
  'Hand-drawn redesign concepts for your approval',
  'Careful stone extraction and reuse',
  'Photographic documentation throughout',
  'Certificate of provenance with finished piece',
];

export default function HeritageRedesign() {
  return (
    <section id="heritage" className="py-24 px-6 flex flex-col items-center w-full bg-[rgba(251,239,171,0.30)]">
      <div className="max-w-[1152px] w-full flex gap-16 flex-wrap lg:flex-nowrap">
        {/* Left Side matching 10.png & figma.tsx lines 829-940 */}
        <div className="flex flex-col items-start w-full lg:w-[544px]">
          <p className="text-[#9C7C5E] font-inter text-xs leading-4 tracking-[0.35em] uppercase mb-2">
            Heritage Redesign
          </p>

          <h2 className="text-[#40312A] font-serif text-5xl leading-[60px] mb-4">
            <span className="font-androgyDemo text-6xl italic">H</span>ONOURING THE <span className="font-androgyDemo text-6xl italic">P</span>AST, <span className="font-androgyDemo text-6xl italic">R</span>EIMAGINING THE <span className="font-androgyDemo text-6xl italic">F</span>UTURE
          </h2>

          <div className="flex items-center gap-4 w-full my-4">
            <div className="bg-[rgba(197,168,130,0.40)] flex-1 h-px"></div>
            <span className="text-[#C5A882] text-sm">✦</span>
            <div className="bg-[rgba(197,168,130,0.40)] flex-1 h-px"></div>
          </div>

          <div className="flex flex-col gap-4 text-[#6B5348] font-inter text-[15px] leading-[24.38px] my-2">
            <p>
              Your grandmother's brooch. A mother's ring. A gift from someone no longer here. These pieces carry histories too precious to leave unworn in a drawer.
            </p>
            <p>
              We carefully disassemble heirloom jewellery, preserve every original gemstone, and craft entirely new settings that bring those stones into your present life — while honouring their past.
            </p>
            <p>
              The result is jewellery that bridges generations: a wearable legacy for you, and eventually, for those who come after.
            </p>
          </div>

          <div className="flex flex-col gap-3 my-6">
            {FEATURES.map((feat) => (
              <div key={feat} className="flex items-start gap-3">
                <span className="text-[#4A0612] font-inter text-base leading-6 mt-0.5">✦</span>
                <p className="text-[#6B5348] font-inter text-sm leading-5">{feat}</p>
              </div>
            ))}
          </div>

          <div className="pt-4">
            <a href="#book" className="inline-flex items-center gap-2 bg-[#4A0612] text-white font-inter text-sm px-6 py-3 rounded hover:bg-[#3E1122] transition-colors tracking-[0.1em] uppercase">
              Enquire Now →
            </a>
          </div>
        </div>

        {/* Right Side Cards matching 11.png & figma.tsx lines 1051-1068 */}
        <div className="hidden lg:flex flex-col justify-center items-start gap-5 flex-1 relative min-h-[550px]">
          <div className="flex gap-5 w-full">
            {/* Plain cement box bg-[#C4C4C4] matching figma.tsx line 1052 */}
            <div className="rounded-2xl bg-[#C4C4C4] flex-1 h-[352px] shadow-sm"></div>
            {/* Plain cement box bg-[#C4C4C4] matching figma.tsx line 1055 */}
            <div className="rounded-2xl bg-[#C4C4C4] flex-1 h-[352px] mt-8 shadow-sm"></div>
          </div>
          {/* Before & After badge box matching figma.tsx line 1057-1067 */}
          <div className="p-4 rounded-[14px] bg-[#40312A] w-full text-center text-white shadow-md">
            <p className="font-androgyDemo text-2xl text-white">Before &amp; After</p>
            <p className="font-inter text-xs text-[rgba(255,255,255,0.70)] mt-1">Transformations that honour your story</p>
          </div>
        </div>
      </div>
    </section>
  );
}
