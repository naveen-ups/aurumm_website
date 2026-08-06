import React from "react";
import "./OurProcess.css";

const processSteps = [
  {
    stepNum: "01",
    symbol: "✦",
    title: "Initial Consultation",
    description:
      "We meet to understand your vision, lifestyle, occasion, and the story you want this piece to carry.",
    badge: "In-person or virtual · 60 min",
  },
  {
    stepNum: "02",
    symbol: "◈",
    title: "Design & Sketching",
    description:
      "Kashissh creates bespoke hand-drawn sketches followed by detailed 3D renders for your approval.",
    badge: "Up to 3 revision rounds included",
  },
  {
    stepNum: "03",
    symbol: "⟡",
    title: "Gemstone Selection",
    description:
      "We present a curated edit of ethically sourced stones, with astrological guidance where desired.",
    badge: "Certified & conflict-free",
  },
  {
    stepNum: "04",
    symbol: "◇",
    title: "Master Crafting",
    description:
      "Your design is brought to life by master goldsmiths using traditional hand-finishing techniques.",
    badge: "4 – 8 weeks crafting time",
  },
  {
    stepNum: "05",
    symbol: "✧",
    title: "Quality Review",
    description:
      "Every piece is personally inspected by Kashissh against the approved design before it leaves the studio.",
    badge: "100% quality guarantee",
  },
  {
    stepNum: "06",
    symbol: "❋",
    title: "Delivery & Aftercare",
    description:
      "Your piece arrives in bespoke packaging with a certificate of creation and a lifetime care guide.",
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
      className="op-page-bg border-t-[1.31px] border-[#c8a431] w-full overflow-hidden"
      style={{
        borderImage:
          "linear-gradient(90deg, #c8a431, #62501880, #c8a431, #62501880, #c8a431, #62501890, #c8a431, #62501880, #c8a431) 1",
      }}
    >
      {/* ── Inner container — max-w-[1509.445px], px-[31px], py-[126px] ── */}
      <div
        className="mx-auto w-full flex flex-col items-center"
        style={{
          maxWidth: "1509.445px",
          padding:
            "clamp(60px,8vw,126px) clamp(20px,2vw,31px) clamp(60px,6vw,100px)",
        }}
      >
        {/* Eyebrow */}
        <div className="flex flex-col items-center w-full">
          <p
            className="text-[#E7D3A4] font-montserrat text-base font-medium leading-[20.96px] w-fit"
            style={{ letterSpacing: "0.3333em" }}
          >
            The Journey
          </p>
        </div>

        {/* Heading — Gold Gradient */}
        <div className="flex pt-[21px] flex-col items-center w-full">
          <h2
            className="op-heading-gradient font-cinzel w-fit"
            style={{
              fontSize: "clamp(32px,4.5vw,63px)",
              lineHeight: "62.89px",
              letterSpacing: "0.05em",
            }}
          >
            Our Process
          </h2>
        </div>

        {/* Gold Divider */}
        <div className="flex pt-[21px] items-center gap-[21px] w-full py-4 max-w-4xl">
          <div
            className="flex-1 h-px shrink-0"
            style={{
              background:
                "linear-gradient(90deg, rgba(212,175,55,0.00) 0%, rgba(212,175,55,0.25) 100%)",
            }}
          />
          <p className="text-[#D4AF37] font-montserrat text-base leading-[23.59px] w-fit">
            ✦
          </p>
          <div
            className="flex-1 h-px shrink-0"
            style={{
              background:
                "linear-gradient(270deg, rgba(212,175,55,0.00) 0%, rgba(212,175,55,0.25) 100%)",
            }}
          />
        </div>

        {/* Subtitle */}
        <div className="flex pt-[21px] flex-col items-center w-full">
          <p
            className="text-[rgba(250,247,240,0.70)] font-montserrat text-lg leading-[26.21px] text-center"
            style={{ maxWidth: "671px" }}
          >
            A considered, unhurried journey — from your first idea to a finished
            piece held in your hands.
          </p>
        </div>

        {/* ── 6 Process Cards Grid ── */}
        <div className="flex pt-[84px] flex-col items-start w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 rounded-[21px] border-[1.31px] border-[rgba(212,175,55,0.18)] op-grid-bg w-full overflow-hidden">
            {processSteps.map((step, index) => (
              <div
                key={step.stepNum}
                className="flex p-[42px] flex-col items-start op-card-bg w-full h-full justify-between border-b md:border-b-0 border-[#d4af37]/[0.18] lg:border-r"
                style={{
                  borderRight:
                    (index + 1) % 3 === 0 ? "none" : "1.31px solid rgba(212,175,55,0.18)",
                  borderBottom:
                    index < 3 ? "1.31px solid rgba(212,175,55,0.18)" : "none",
                }}
              >
                <div className="w-full">
                  {/* Top row: step number + symbol */}
                  <div className="flex pb-[31px] justify-between items-start w-full">
                    <p className="text-[#D4AF37] font-cinzel text-[79px] font-light leading-[78.62px] opacity-30">
                      {step.stepNum}
                    </p>
                    <p className="text-[#D4AF37] font-montserrat text-[31px] leading-[41.93px]">
                      {step.symbol}
                    </p>
                  </div>

                  {/* Title */}
                  <div className="flex pb-4 flex-col items-start w-full">
                    <p
                      className="text-[#FAF7F0] font-cinzel text-2xl leading-[36.69px] w-fit"
                      style={{ letterSpacing: "0.025em" }}
                    >
                      {step.title}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-[rgba(250,247,240,0.70)] font-montserrat text-base leading-[25.55px] w-full">
                    {step.description}
                  </p>
                </div>

                {/* Badge Row */}
                <div className="flex pt-[21px] flex-col items-start w-full mt-4">
                  <div className="flex pt-[26px] items-center border-t-[1.31px] border-t-[rgba(212,175,55,0.18)] w-full">
                    <div className="flex py-1.5 px-4 items-center rounded-full bg-[rgba(212,175,55,0.07)] max-w-full">
                      <p
                        className="text-[#F4E6C1] font-montserrat text-[13px] leading-[19.65px] tracking-[0.1em] uppercase whitespace-nowrap overflow-hidden text-ellipsis"
                      >
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
          <div className="flex p-[31px] flex-col md:flex-row items-center justify-between rounded-[21px] border-[1.31px] border-[rgba(212,175,55,0.14)] op-timeline-bg w-full gap-6 md:gap-0">
            {timelineSteps.map((step, idx) => (
              <React.Fragment key={idx}>
                <div className="flex items-center w-full md:w-auto flex-1">
                  <div className="flex flex-col items-center gap-[5px] w-full">
                    <div
                      className="rounded-full w-[13px] h-[13px]"
                      style={{ backgroundColor: step.color }}
                    />
                    <p
                      className="font-montserrat text-[13px] leading-[19.65px] tracking-[0.1em] uppercase"
                      style={{ color: step.color }}
                    >
                      {step.label}
                    </p>
                    <p className="text-[rgba(250,247,240,0.70)] font-montserrat text-[13px] leading-[19.65px]">
                      {step.sublabel}
                    </p>
                  </div>
                </div>
                {idx < timelineSteps.length - 1 && (
                  <div className="hidden md:flex px-2.5 items-center flex-1">
                    <div className="bg-[rgba(255,255,255,0.10)] h-px w-full" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* ── Closing Section (Quote + CTA) ── */}
        <div className="flex pt-[84px] flex-col items-center w-full text-center">
          <p className="text-[rgba(250,247,240,0.70)] font-cinzel text-[26px] leading-[36.69px] max-w-2xl">
            &ldquo;The most beautiful piece is the one that tells your story.&rdquo;
          </p>

          <div className="pt-[42px] flex justify-center items-center w-full">
            <a
              href="#book"
              className="cursor-pointer inline-flex py-[21px] px-[42px] justify-center items-center rounded-[15.7px] bg-gradient-to-r from-[#B8952A] via-[#D4AF37] to-[#F0D060] shadow-[0_0_18.344px_0_rgba(212,175,55,0.14),0_2.621px_10.482px_0_rgba(0,0,0,0.30)] hover:brightness-110 transition-all duration-300"
            >
              <span className="text-[#0A0800] font-montserrat text-lg font-medium leading-[26.21px] tracking-[0.1429em] uppercase whitespace-nowrap">
                Begin Your Journey
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
