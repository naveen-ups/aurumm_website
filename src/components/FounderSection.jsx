import React from "react";
import "./FounderSection.css";

const expertise = [
  "GIA Certified Gemologist",
  "Vedic Astrology",
  "3D CAD Design",
  "Ethical Sourcing",
];

export default function FounderSection() {
  return (
    <section
      id="founder"
      className="fs-page-bg border-t-[1.31px] border-[#c8a431] relative w-full overflow-hidden"
      style={{
        borderImage:
          "linear-gradient(90deg, #c8a431, #62501880, #c8a431, #62501880, #c8a431, #62501890, #c8a431, #62501880, #c8a431) 1",
      }}
    >
      {/* ── Background Watermark Text "AURUMM" ── */}
      <span
        className="absolute top-1/2 left-1/2 -translate-x-1/2 lg:left-[15%] lg:translate-x-0 -translate-y-1/2 font-cinzel text-[clamp(44px,14vw,250px)] font-normal text-[#faf7f0]/[0.025] uppercase whitespace-nowrap pointer-events-none select-none tracking-[0.08em] z-0"
      >
        AURUMM
      </span>

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
          <p
            className="text-[#E7D3A4] font-montserrat text-base font-medium leading-[20.96px] w-fit"
            style={{ letterSpacing: "0.3333em" }}
          >
            The Visionary
          </p>
        </div>

        {/* Heading */}
        <div className="flex pt-[21px] flex-col items-center w-full">
          <h2
            className="text-[#FAF7F0] font-cinzel w-fit text-center"
            style={{
              fontSize: "clamp(32px,4.5vw,63px)",
              lineHeight: "1.2",
              letterSpacing: "0.05em",
            }}
          >
            Meet the Founder
          </h2>
        </div>

        {/* Gold Divider */}
        <div className="flex items-center gap-[21px] w-full max-w-4xl py-4">
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

        {/* ── Two Column Content Grid ── */}
        <div className="flex pt-[84px] flex-col items-start w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-[83.858px] w-full items-center">

            {/* Left Column — Dark Placeholder Card + Overlay Badge (No Image) */}
            <div className="flex justify-center items-start w-full relative pb-12 lg:pb-0">
              <div className="relative w-full max-w-[419px] flex flex-col items-center pb-6">
                {/* Dark Placeholder Card Container */}
                <div
                  className="fs-photo-card relative rounded-[21px] border-[1.31px] border-[rgba(212,175,55,0.14)] w-full overflow-hidden h-[320px] sm:h-[420px] lg:h-[503px]"
                />

                {/* Bottom Badge Overlay */}
                <div className="absolute -bottom-6 flex py-4 lg:py-[21px] px-[31px] flex-col items-center rounded-[15.7px] border-[1.31px] border-[rgba(212,175,55,0.18)] bg-[#222] w-[90%] max-w-[367px] shadow-2xl z-20 text-center">
                  <p
                    className="text-[#D4AF37] font-montserrat text-sm lg:text-base leading-[20.96px] tracking-[0.25em] uppercase w-full"
                  >
                    Jewellery Designer &amp; Gemologist
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column — Founder Details & Story */}
            <div className="flex flex-col items-center lg:items-start w-full gap-[31px] text-center lg:text-left">
              {/* Name */}
              <div className="flex flex-col items-center lg:items-start w-full">
                <h3
                  className="text-[#FAF7F0] font-cinzel font-normal w-full text-center lg:text-left"
                  style={{
                    fontSize: "clamp(28px,3vw,39px)",
                    lineHeight: "1.2",
                    letterSpacing: "0.025em",
                  }}
                >
                  Kashissh Garg
                </h3>
                <p
                  className="text-[#D4AF37] font-montserrat text-base leading-[20.96px] pt-[5px] uppercase w-full text-center lg:text-left"
                  style={{ letterSpacing: "0.25em" }}
                >
                  Jewellery Designer &amp; Gemologist
                </p>
              </div>

              {/* Small Gold Divider */}
              <div className="flex items-center gap-[21px] w-full max-w-md mx-auto lg:mx-0 mt-10 lg:mt-0">
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

              {/* Paragraphs */}
              <div className="flex flex-col items-start w-full gap-[21px]" style={{ maxWidth: "647px" }}>
                <p className="text-[rgba(250,247,240,0.70)] font-montserrat text-lg leading-[29.81px] text-left">
                  Jewellery has always been more than a profession for me; it is
                  an art form that preserves emotions, memories and identity.
                </p>
                <p className="text-[rgba(250,247,240,0.70)] font-montserrat text-lg leading-[29.81px] text-left">
                  As a certified jewellery designer and gemologist, I combine
                  technical expertise with creative vision to design pieces that
                  transcend fleeting trends. Every gemstone is carefully
                  selected, every detail thoughtfully considered, and every
                  design created with the intention of becoming part of your
                  personal story.
                </p>
                <p className="text-[rgba(250,247,240,0.70)] font-montserrat text-lg leading-[29.81px] text-left">
                  Through Aurumm, my vision is to create jewellery that is
                  timeless, meaningful and deeply personal.
                </p>
              </div>

              {/* Expertise Pills */}
              <div className="flex flex-wrap gap-3 pt-2 w-full max-w-[647px] justify-center lg:justify-start">
                {expertise.map((tag, i) => (
                  <div
                    key={i}
                    className="inline-flex py-[5px] px-4 items-center rounded-full border-[1.31px] border-[rgba(212,175,55,0.19)] bg-[rgba(212,175,55,0.07)]"
                  >
                    <p
                      className="text-[#F4E6C1] font-montserrat text-base leading-[20.96px]"
                      style={{ letterSpacing: "0.025em" }}
                    >
                      {tag}
                    </p>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="pt-2 w-full flex justify-center lg:justify-start">
                <a
                  href="#book"
                  className="cursor-pointer text-nowrap inline-flex justify-center items-center rounded-[15.7px] bg-gradient-to-r from-[#B8952A] via-[#D4AF37] to-[#F0D060] shadow-[0_0_18.344px_rgba(212,175,55,0.14),0_2.621px_10.482px_rgba(0,0,0,0.30)] hover:brightness-110 transition-all duration-300 w-full max-w-[284px] h-[68px]"
                >
                  <span className="text-[#0A0800] font-montserrat text-lg font-medium leading-[26.21px] tracking-[0.1429em] uppercase whitespace-nowrap">
                    Book a Session
                  </span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
