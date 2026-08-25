import React from "react";
import "./OurProcess.css";

const processSteps = [
  {
    stepNum: "01",
    symbol: "✦",
    title: "Initial Consultation",
    description: (
      <>
        We meet to understand your vision, lifestyle,<br className="hidden xl:block" />
        occasion, and the story you want this piece to<br className="hidden xl:block" />
        carry.
      </>
    ),
    badge: "In-person or virtual · 60 min",
  },
  {
    stepNum: "02",
    symbol: "◈",
    title: "Design & Sketching",
    description: (
      <>
        Kashissh creates bespoke hand-drawn<br className="hidden xl:block" />
        sketches followed by detailed 3D renders for<br className="hidden xl:block" />
        your approval.
      </>
    ),
    badge: "Up to 3 revision rounds included",
  },
  {
    stepNum: "03",
    symbol: "⟡",
    title: "Gemstone Selection",
    description: (
      <>
        We present a curated edit of ethically sourced<br className="hidden xl:block" />
        stones, with astrological guidance where<br className="hidden xl:block" />
        desired.
      </>
    ),
    badge: "Certified & conflict-free",
  },
  {
    stepNum: "04",
    symbol: "◇",
    title: "Master Crafting",
    description: (
      <>
        Your design is brought to life by master<br className="hidden xl:block" />
        goldsmiths using traditional hand-finishing<br className="hidden xl:block" />
        techniques.
      </>
    ),
    badge: "4 – 8 weeks crafting time",
  },
  {
    stepNum: "05",
    symbol: "✧",
    title: "Quality Review",
    description: (
      <>
        Every piece is personally inspected by Kashissh<br className="hidden xl:block" />
        against the approved design before it leaves<br className="hidden xl:block" />
        the studio.
      </>
    ),
    badge: "100% quality guarantee",
  },
  {
    stepNum: "06",
    symbol: "❋",
    title: "Delivery & Aftercare",
    description: (
      <>
        Your piece arrives in bespoke packaging with a<br className="hidden xl:block" />
        certificate of creation and a lifetime care guide.
      </>
    ),
    badge: "Lifetime aftercare included",
  },
];

const timelineSteps = [
  { color: "#D4AF37", label: "Day 1", sublabel: "Consultation" },
  { color: "#AFD3F5", label: "Week 1–2", sublabel: "Design Approved" },
  { color: "#F4E6C1", label: "Week 2–3", sublabel: "Stones Sourced" },
  { color: "#FDC2C7", label: "Week 3–7", sublabel: "Crafting" },
  { color: "#D4AF37", label: "Week 8", sublabel: "Delivery" },
];

export default function OurProcess() {
  return (
    <section
      id="process"
      className="op-page-bg border-t-[1.31px] border-[#c8a431] w-full overflow-hidden relative"
      style={{
        borderImage:
          "linear-gradient(90deg, #c8a431, #62501880, #c8a431, #62501880, #c8a431, #62501890, #c8a431, #62501880, #c8a431) 1",
      }}
    >
      {/* ── Inner container — max-w-[1509.445px], px-[31px], py-[126px] ── */}
      <div
        className="relative z-10 mx-auto w-full flex flex-col items-center"
        style={{
          maxWidth: "1509.445px",
          padding:
            "clamp(60px,8vw,126px) clamp(20px,2vw,31px) clamp(60px,6vw,100px)",
        }}
      >
        {/* Eyebrow */}
        <div className="flex flex-col items-center w-full">
          <p className="text-[#D4AF37] font-montserrat text-base font-medium leading-[20.96px] w-fit tracking-[0.3333em] uppercase">
            The Journey
          </p>
        </div>

        {/* Heading — Gold Gradient */}
        <div className="flex pt-[21px] flex-col items-center w-full">
          <h2
            className="op-heading-gradient font-cinzel font-normal uppercase w-fit text-center"
            style={{
              fontSize: "clamp(32px,4.5vw,63px)",
              lineHeight: "1.2",
              letterSpacing: "0.05em",
            }}
          >
            Our Process
          </h2>
        </div>

        {/* Gold Divider */}
        <div className="flex pt-[21px] items-center gap-[21px] w-full">
          <div
            className="flex-1 h-px shrink-0"
            style={{
              background:
                "linear-gradient(90deg, rgba(212,175,55,0.00) 0%, rgba(212,175,55,0.25) 100%)",
            }}
          />
          <div className="flex flex-col items-start w-fit">
            <p className="text-[#D4AF37] font-montserrat text-base leading-[23.59px] w-fit">
              ✦
            </p>
          </div>
          <div
            className="flex-1 h-px shrink-0"
            style={{
              background:
                "linear-gradient(270deg, rgba(212,175,55,0.00) 0%, rgba(212,175,55,0.25) 100%)",
            }}
          />
        </div>

        {/* Subtitle */}
        <div className="flex pt-[31px] flex-col items-center w-full">
          <p
            className="text-[rgba(250,247,240,0.70)] font-montserrat text-lg leading-[26.21px] text-center"
            style={{ maxWidth: "671px" }}
          >
            A considered, unhurried journey — from your first idea to a finished piece<br className="hidden sm:block" />
            held in your hands.
          </p>
        </div>

        {/* ── 6 Process Cards Grid ── */}
        <div className="flex pt-[84px] flex-col items-start w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[1.31px] rounded-[21px] border-[1.31px] border-[rgba(212,175,55,0.18)] op-grid-bg w-full overflow-hidden">
            {processSteps.map((step, index) => (
              <div
                key={step.stepNum}
                className="flex p-6 sm:p-[42px] flex-col items-start op-card-bg w-full h-full justify-between"
              >
                <div className="w-full">
                  {/* Top row: step number + symbol */}
                  <div className="flex pb-[31px] justify-between items-start w-full">
                    <div className="flex flex-col items-start opacity-30 w-fit">
                      <p className="text-[#D4AF37] font-cinzel text-[79px] font-light leading-[78.62px] w-fit">
                        {step.stepNum}
                      </p>
                    </div>
                    <div className="flex flex-col items-start w-fit">
                      <p className="text-[#D4AF37] font-montserrat text-[31px] leading-[41.93px] w-fit">
                        {step.symbol}
                      </p>
                    </div>
                  </div>

                  {/* Title */}
                  <div className="flex pb-4 flex-col items-start w-full">
                    <p className="text-[#FAF7F0] font-cinzel text-2xl leading-[36.69px] w-fit tracking-[0.025em] uppercase">
                      {step.title}
                    </p>
                  </div>

                  {/* Description */}
                  <div className="flex flex-col items-start w-full h-full">
                    <p className="text-[rgba(250,247,240,0.70)] font-montserrat text-base leading-[25.55px] w-full text-left">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Badge Row */}
                <div className="flex pt-[21px] flex-col items-start w-full mt-auto">
                  <div className="flex pt-[26px] items-center border-t-[1.31px] border-t-[rgba(212,175,55,0.18)] w-full">
                    <div className="flex py-1.5 px-4 items-center rounded-full bg-[rgba(212,175,55,0.07)]">
                      <p className="text-[#F4E6C1] font-montserrat text-[13px] leading-[19.65px] tracking-[0.1em] uppercase">
                        {step.badge}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Timeline Bar ── */}
        <div className="flex pt-[84px] flex-col items-center w-full">
          <div className="flex py-6 px-4 md:p-[31px] flex-col md:flex-row items-center justify-between rounded-[21px] border-[1.31px] border-[rgba(212,175,55,0.14)] op-timeline-bg w-full">
            {timelineSteps.map((step, idx) => (
              <React.Fragment key={idx}>
                {/* Desktop: Step + Divider in one row (except last) */}
                {idx < timelineSteps.length - 1 ? (
                  <div className="hidden md:flex items-center w-full">
                    <div className="flex flex-col items-center gap-[5px] w-full">
                      <div className="rounded-full w-[13px] h-[13px]" style={{ backgroundColor: step.color }}></div>
                      <p className="font-montserrat text-[13px] leading-[19.65px] w-fit tracking-[0.1em] uppercase" style={{ color: step.color }}>
                        {step.label}
                      </p>
                      <p className="text-[rgba(250,247,240,0.70)] font-montserrat text-[13px] leading-[19.65px] w-fit">
                        {step.sublabel}
                      </p>
                    </div>
                    <div className="flex py-0 px-2.5 items-start w-full">
                      <div className="shrink-0 bg-[rgba(255,255,255,0.10)] w-[121px] h-px"></div>
                    </div>
                  </div>
                ) : (
                  <div className="hidden md:flex flex-col items-center gap-[5px] w-full">
                    <div className="rounded-full w-[13px] h-[13px]" style={{ backgroundColor: step.color }}></div>
                    <p className="font-montserrat text-[13px] leading-[19.65px] w-fit tracking-[0.1em] uppercase" style={{ color: step.color }}>
                      {step.label}
                    </p>
                    <p className="text-[rgba(250,247,240,0.70)] font-montserrat text-[13px] leading-[19.65px] w-fit">
                      {step.sublabel}
                    </p>
                  </div>
                )}

                {/* Mobile: Step + Vertical Divider */}
                <div className="flex md:hidden flex-col items-center w-full">
                  <div className="flex flex-row items-center justify-center gap-1.5 text-center w-full">
                    <p className="font-montserrat text-[13px] leading-[19.65px] tracking-[0.1em] uppercase" style={{ color: step.color }}>
                      {step.label}
                    </p>
                    <span className="text-[rgba(250,247,240,0.40)] font-montserrat text-[13px] leading-[19.65px]">-</span>
                    <p className="text-[rgba(250,247,240,0.70)] font-montserrat text-[13px] leading-[19.65px]">
                      {step.sublabel}
                    </p>
                  </div>
                  {idx < timelineSteps.length - 1 && (
                    <div className="flex justify-center items-center py-3 w-full">
                      <div className="bg-[rgba(255,255,255,0.10)] w-px h-[24px]" />
                    </div>
                  )}
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* ── Closing Section (Quote + CTA) ── */}
        <div className="flex pt-[84px] flex-col items-center w-full">
          <p className="text-[rgba(250,247,240,0.70)] font-cinzel text-[26px] font-normal leading-[36.69px] text-center">
            &quot;The most beautiful piece is the one that tells your story.&quot;
          </p>

          <div className="flex pt-[42px] justify-center items-center shrink-0 w-full">
            <a
              href="#book"
              className="cursor-pointer text-nowrap flex py-[21px] px-[42px] flex-col justify-center items-center rounded-[15.7px] shadow-[0_0_18.344px_0_rgba(212,175,55,0.14),0_2.621px_10.482px_0_rgba(0,0,0,0.30)] hover:brightness-110 transition-all duration-300 w-fit"
              style={{
                background: "linear-gradient(135deg, #B8952A 0%, #D4AF37 40%, #F0D060 70%, #C9A227 100%)",
              }}
            >
              <span className="text-[#0A0800] font-montserrat text-lg font-medium leading-[26.21px] tracking-[0.1429em] text-center uppercase w-fit">
                Begin Your Journey
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
