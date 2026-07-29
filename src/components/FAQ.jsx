import React, { useState } from 'react';

const FAQS = [
  { q: 'How does the custom jewellery process work?', a: 'Our process begins with an initial consultation to understand your vision, then moves through design sketching, gemstone selection, master crafting, quality review, and finally delivery — all personalized for you.' },
  { q: "Can you redesign my grandmother's old jewellery?", a: 'Absolutely. We specialize in heritage redesign. We carefully assess your heirloom, preserve the original gemstones, and create entirely new settings that honor the past while becoming wearable for today.' },
  { q: 'What gemstones do you work with?', a: 'We work with all precious and semi-precious stones including diamonds, rubies, sapphires, emeralds, pearls, and astrological stones recommended based on your Vedic birth chart.' },
  { q: 'How long does a bespoke piece take?', a: 'Most bespoke pieces take 4 to 8 weeks from approved design to delivery. Heritage redesigns may take slightly longer depending on complexity.' },
  { q: 'What is your pricing structure?', a: 'Pricing depends on materials, gemstones chosen, and complexity of design. We provide a full quote after the initial consultation so you can make an informed decision before committing.' },
  { q: 'How do I book a consultation?', a: 'Simply fill out the booking form below or reach us via email or phone. We will respond within 24 hours to confirm your appointment.' },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section id="faq" className="py-24 px-6 flex flex-col items-center w-full bg-[#F8F3E9]">
      <div className="max-w-[768px] flex flex-col items-center w-full">
        {/* Header matching 16.png & figma.tsx lines 2128-2136 */}
        <p className="text-[#9C7C5E] font-inter text-xs leading-4 tracking-[0.35em] uppercase text-center mb-2">
          Common Questions
        </p>
        <h2 className="text-[#40312A] font-androgyDemo text-5xl leading-[48px] text-center mb-16">
          <span className="swash">F</span>requently <span className="swash">A</span>sked <span className="swash">Q</span>uestions
        </h2>

        {/* 6 Accordion Cards matching 16.png & figma.tsx lines 2139-2150 */}
        <div className="flex flex-col gap-3 w-full">
          {FAQS.map((faq, i) => (
            <div key={i} className="rounded-[14px] border border-[rgba(197,168,130,0.20)] bg-[#FEFEFE] w-full overflow-hidden shadow-xs">
              <button
                className="flex py-5 px-6 justify-between items-center w-full text-left font-timesNewNormal text-[#40312A] text-lg leading-7 cursor-pointer"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span>{faq.q}</span>
                <span className={`transition-transform duration-300 ${open === i ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>
              {open === i && (
                <div className="px-6 pb-5 font-inter text-[#6B5348] text-sm leading-[22.75px]">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer note matching 16.png */}
        <div className="pt-12 text-center flex flex-col items-center gap-3">
          <p className="font-inter text-[#6B5348] text-sm">Still have questions? We would love to help.</p>
          <a href="#contact" className="inline-flex items-center gap-1 font-inter text-[#4A0612] text-xs font-semibold tracking-[0.15em] border-b border-[#4A0612] pb-0.5 hover:opacity-80 uppercase">
            Get In Touch →
          </a>
        </div>
      </div>
    </section>
  );
}
