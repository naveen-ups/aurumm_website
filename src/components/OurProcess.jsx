import React from 'react';

const STEPS_ROW1 = [
  { num: '01', color: '#C5A882', icon: '✦', title: 'Initial Consultation', desc: 'We meet to understand your vision, lifestyle, occasion, and the story you want this piece to carry.', tag: 'IN-PERSON OR VIRTUAL · 60 MIN' },
  { num: '02', color: '#AFD3F5', icon: '◈', title: 'Design & Sketching', desc: 'Kashissh creates bespoke hand-drawn sketches followed by detailed 3D renders for your approval.', tag: 'UP TO 3 REVISION ROUNDS INCLUDED' },
  { num: '03', color: '#FBEFAB', icon: '⟡', title: 'Gemstone Selection', desc: 'We present a curated edit of ethically sourced stones, with astrological guidance where desired.', tag: 'CERTIFIED & CONFLICT-FREE' },
];

const STEPS_ROW2 = [
  { num: '06', color: '#AFD3F5', icon: '❋', title: 'Delivery & Aftercare', desc: 'Your piece arrives in bespoke packaging with a certificate of creation and a lifetime care guide.', tag: 'LIFETIME AFTERCARE INCLUDED' },
  { num: '05', color: '#C5A882', icon: '✧', title: 'Quality Review', desc: 'Every piece is personally inspected by Kashissh against the approved design before it leaves the studio.', tag: '100% QUALITY GUARANTEE' },
  { num: '04', color: '#FDC2C7', icon: '◇', title: 'Master Crafting', desc: 'Your design is brought to life by master goldsmiths using traditional hand-finishing techniques.', tag: '4 – 8 WEEKS CRAFTING TIME' },
];

const TIMELINE = [
  { dot: '#C5A882', label: 'DAY 1', sub: 'Consultation' },
  { dot: '#AFD3F5', label: 'WEEK 1–2', sub: 'Design Approved' },
  { dot: '#C5A882', label: 'WEEK 2–3', sub: 'Stones Sourced' },
  { dot: '#FDC2C7', label: 'WEEK 3–7', sub: 'Crafting' },
  { dot: '#C5A882', label: 'WEEK 8', sub: 'Delivery' },
];

export default function OurProcess() {
  return (
    <section id="process" className="bg-[#4A0612] w-full overflow-hidden relative py-12 md:py-20 px-4 sm:px-6 text-white">
      <div className="max-w-[1152px] mx-auto relative z-10">
        {/* Header matching 7.png */}
        <div className="flex flex-col items-center w-full">
          <p className="section-label text-[#C5A882] mb-2 text-center">THE JOURNEY</p>
          <h2 className="text-white font-serif text-[clamp(22px,5vw,48px)] leading-tight text-center mb-4">
            <span className="swash">O</span>UR <span className="swash">P</span>ROCESS
          </h2>
          <div className="flex items-center gap-4 w-full max-w-[300px] my-4">
            <div className="bg-[rgba(197,168,130,0.40)] flex-1 h-px"></div>
            <span className="text-[#C5A882] text-sm">✦</span>
            <div className="bg-[rgba(197,168,130,0.40)] flex-1 h-px"></div>
          </div>
          <p className="font-body text-[rgba(255,255,255,0.60)] text-[15px] leading-[24.38px] max-w-[576px] text-center">
            A considered, unhurried journey — from your first idea to a finished piece held in your hands.
          </p>
        </div>

        {/* Row 1 matching 7.png */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full pt-12 md:pt-16">
          {STEPS_ROW1.map((step) => (
            <div key={step.num} className="flex p-6 sm:p-8 flex-col items-start rounded-2xl border border-[rgba(255,255,255,0.10)] bg-[rgba(255,255,255,0.04)] min-h-[300px] sm:min-h-[340px] w-full">
              <div className="flex justify-between items-start w-full mb-4">
                <p className="font-serif font-light text-5xl sm:text-6xl leading-none opacity-40" style={{ color: step.color }}>{step.num}</p>
                <span className="text-2xl pt-2" style={{ color: step.color }}>{step.icon}</span>
              </div>
              <h3 className="font-heading text-white text-xl leading-7 mb-2">{step.title}</h3>
              <p className="font-body text-[rgba(255,255,255,0.60)] text-sm leading-[22.75px] flex-1">{step.desc}</p>
              <div className="mt-6 pt-4 border-t border-[rgba(255,255,255,0.10)] w-full">
                <span className="inline-flex py-1 px-3 rounded-full font-body text-[11px] tracking-[0.1em]" style={{ background: `${step.color}20`, color: step.color }}>
                  {step.tag}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Divider matching 8.png with background AURUMM watermark centered right behind it */}
        <div className="flex py-8 justify-center items-center gap-4 w-full relative z-0 my-4 md:my-8">
          <p className="select-none pointer-events-none absolute top-[35%] -translate-y-1/2 left-1/2 -translate-x-1/2 text-center font-cormorantGaramond text-[clamp(65px,16vw,260px)] text-[rgba(255,255,255,0.06)] font-light leading-none whitespace-nowrap z-0">
            AURUMM
          </p>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[rgba(197,168,130,0.30)] relative z-10"></div>
          <div className="flex flex-col items-center gap-1 text-[#C5A882] text-xs tracking-[0.3em] relative z-10">
            <span>↓</span>
            <span>CONTINUES</span>
            <span>↓</span>
          </div>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[rgba(197,168,130,0.30)] relative z-10"></div>
        </div>

        {/* Row 2 matching 8.png */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full">
          {STEPS_ROW2.map((step) => (
            <div key={step.num} className="flex p-6 sm:p-8 flex-col items-start rounded-2xl border border-[rgba(255,255,255,0.10)] bg-[rgba(255,255,255,0.04)] min-h-[300px] sm:min-h-[340px] w-full">
              <div className="flex justify-between items-start w-full mb-4">
                <p className="font-serif font-light text-5xl sm:text-6xl leading-none opacity-40" style={{ color: step.color }}>{step.num}</p>
                <span className="text-2xl pt-2" style={{ color: step.color }}>{step.icon}</span>
              </div>
              <h3 className="font-heading text-white text-xl leading-7 mb-2">{step.title}</h3>
              <p className="font-body text-[rgba(255,255,255,0.60)] text-sm leading-[22.75px] flex-1">{step.desc}</p>
              <div className="mt-6 pt-4 border-t border-[rgba(255,255,255,0.10)] w-full">
                <span className="inline-flex py-1 px-3 rounded-full font-body text-[11px] tracking-[0.1em]" style={{ background: `${step.color}20`, color: step.color }}>
                  {step.tag}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline matching 9.png */}
        <div className="pt-12 md:pt-16 flex justify-center w-full">
          <div className="flex flex-col sm:flex-row p-6 items-center rounded-2xl border border-[rgba(255,255,255,0.10)] bg-[rgba(255,255,255,0.03)] gap-4 sm:gap-4 lg:gap-6 justify-center w-full max-w-[1100px]">
            {TIMELINE.map((t, i) => (
              <React.Fragment key={t.label}>
                <div className="flex flex-col items-center px-1 sm:px-2 text-center whitespace-nowrap shrink-0">
                  <div className="rounded-full w-2.5 h-2.5 mb-2" style={{ backgroundColor: t.dot }}></div>
                  <p className="font-body text-[10px] tracking-[0.1em]" style={{ color: t.dot }}>{t.label}</p>
                  <p className="font-body text-[rgba(255,255,255,0.50)] text-xs mt-0.5">{t.sub}</p>
                </div>
                {i < TIMELINE.length - 1 && (
                  <>
                    {/* Horizontal line for desktop */}
                    <div className="hidden sm:block bg-[rgba(255,255,255,0.10)] h-px flex-1 min-w-[20px] max-w-[64px]"></div>
                    {/* Vertical line for mobile */}
                    <div className="block sm:hidden bg-[rgba(255,255,255,0.10)] w-px h-6 my-1"></div>
                  </>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Quote & CTA matching 9.png */}
        <div className="pt-10 md:pt-14 flex flex-col items-center w-full gap-6 text-center">
          <p className="font-serif text-[rgba(255,255,255,0.70)] text-lg sm:text-xl italic">
            &ldquo;The most beautiful piece is the one that tells your story.&rdquo;
          </p>
          <a href="#book" className="inline-flex items-center justify-center gap-2 bg-[#FBEFAB] text-[#4A0612] font-body text-xs font-semibold py-3.5 px-8 rounded hover:opacity-90 transition-opacity tracking-[0.1em] uppercase w-full sm:w-auto text-center">
            BEGIN YOUR JOURNEY →
          </a>
        </div>
      </div>
    </section>
  );
}
