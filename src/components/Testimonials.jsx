import React from 'react';

const TESTIMONIALS = [
  {
    bg: '#FCF2B1',
    title: 'Very happy with my purchase!',
    text: "The jewellery arrived beautifully packaged and exceeded every expectation. I've received so many compliments — I love them. Will absolutely be returning for future pieces.",
    name: 'Olivia N.',
    location: 'London',
    textColor: '#7B7056',
    nameColor: '#6E634D',
  },
  {
    bg: '#B1D3F7',
    title: 'Stunning, Simply Stunning!',
    text: "The jewellery is beautiful and of the highest quality. Kashissh was so attentive throughout the process. I am definitely buying here again in the future.",
    name: 'Alice M.',
    location: 'Edinburgh',
    textColor: '#575F70',
    nameColor: '#5E616B',
  },
  {
    bg: '#F0DFC4',
    title: 'My favourite jewellery brand',
    text: "Gorgeous quality and the gemstone recommendation was spot on. I already have many compliments and couldn't be happier with the astrological guidance provided.",
    name: 'Fria C.',
    location: 'Dubai',
    textColor: '#8A5818',
    nameColor: '#7C5115',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-12 md:py-20 px-4 sm:px-6 flex flex-col items-center w-full bg-[#3E1122] text-white relative overflow-hidden">
      <div className="max-w-[1152px] flex flex-col items-center w-full relative z-10">
        {/* Header matching 15.png & figma.tsx lines 1602-1610 */}
        <p className="text-white font-inter text-xs leading-4 tracking-[0.35em] uppercase text-center mb-2">
          Client Voices
        </p>
        <h2 className="text-white font-androgyDemo text-[clamp(32px,7vw,75px)] leading-tight md:leading-[81.95px] text-center mb-10 md:mb-16">
          What our Clients Say
        </h2>

        {/* 3 Review Cards matching 15.png & figma.tsx lines 1614-1750 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="flex p-6 sm:p-8 flex-col items-start gap-4 rounded-2xl shadow-md w-full" style={{ backgroundColor: t.bg }}>
              {/* 5 Stars */}
              <div className="flex items-center gap-1 text-[#39190D]">
                {[...Array(5)].map((_, j) => (
                  <span key={j} className="text-base">★</span>
                ))}
              </div>

              <h3 className="font-serif text-[#3B3A3A] text-xl leading-7">{t.title}</h3>

              <p className="font-inter text-sm leading-[22.75px] flex-1" style={{ color: t.textColor }}>
                {t.text}
              </p>

              <div className="pt-4 border-t border-[rgba(0,0,0,0.10)] w-full">
                <p className="font-inter text-sm font-semibold" style={{ color: t.nameColor }}>{t.name}</p>
                <p className="font-inter text-xs" style={{ color: t.nameColor }}>{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
