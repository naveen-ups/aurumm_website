import React from "react";
import "./Philosophy.css";
import philosophyImg from "../assets/images/philosophy.png";

const stats = [
  { value: "500+", label: "Bespoke Pieces Created" },
  { value: "100%", label: "Ethically Sourced Gems" },
  { value: "15+", label: "Countries Served" },
  { value: "5★", label: "Client Satisfaction" },
];

export default function Philosophy() {
  return (
    <section
      id="about"
      className="ph-page-bg border-t-[1.31px] border-[#c8a431] w-full overflow-hidden"
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
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-[83.858px] w-full">
          
          {/* ── LEFT COLUMN — Image Frame + Decorative Accent Box ── */}
          <div className="relative w-full max-w-[647px] mx-auto lg:mx-0 pr-6 pb-6">
            <div className="relative rounded-[21px] border-[5.24px] border-[#D4AF37] w-full h-[420px] sm:h-[540px] lg:h-[632px] overflow-hidden shadow-2xl bg-[#121212]">
              <img
                src={philosophyImg}
                alt="Aurumm Philosophy — Crafting luxury jewellery"
                className="w-full h-full object-cover rounded-[16px]"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/Container.png";
                }}
              />
            </div>

            {/* Rotated decorative accent box from Figma specs */}
            <div
              className="absolute -right-[20px] -bottom-[20px] sm:-right-[35px] sm:-bottom-[35px] rounded-[10.5px] border-[1.31px] border-[rgba(212,175,55,0.19)] w-[90px] h-[90px] sm:w-[126px] sm:h-[126px] pointer-events-none z-20"
            />
          </div>

          {/* ── RIGHT COLUMN — Content ── */}
          <div className="flex flex-col items-start w-full gap-[31px]">
            {/* Eyebrow */}
            <div className="flex flex-col items-start w-full">
              <p
                className="text-[#E7D3A4] font-montserrat text-base font-medium leading-[20.96px] w-fit"
                style={{ letterSpacing: "0.3333em" }}
              >
                Our Philosophy
              </p>
            </div>

            {/* Heading */}
            <div className="flex flex-col items-start w-full" style={{ maxWidth: "647px" }}>
              <h2
                className="text-[#FAF7F0] font-cinzel font-normal w-fit"
                style={{
                  fontSize: "clamp(28px,3.5vw,47px)",
                  lineHeight: "64.86px",
                  letterSpacing: "0.025em",
                }}
              >
                Where Artistry Meets Meaning
              </h2>
            </div>

            {/* Diamond Accent Divider */}
            <div className="flex items-center justify-center gap-[21px] w-full max-w-[647px] py-1">
              <div
                className="flex-1 h-px shrink-0"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(212,175,55,0.00) 0%, rgba(212,175,55,0.31) 100%)",
                }}
              />
              <div className="w-4 h-4 rotate-45 border-[1.31px] border-[rgba(212,175,55,0.50)] shrink-0" />
              <div
                className="flex-1 h-px shrink-0"
                style={{
                  background:
                    "linear-gradient(270deg, rgba(212,175,55,0.00) 0%, rgba(212,175,55,0.31) 100%)",
                }}
              />
            </div>

            {/* Paragraphs */}
            <div className="flex flex-col items-start w-full gap-[21px]" style={{ maxWidth: "647px" }}>
              <p className="text-[rgba(250,247,240,0.70)] font-montserrat text-lg leading-[29.81px]">
                Jewellery is more than precious metal and gemstones. It is an
                expression of identity, love, heritage and legacy.
              </p>
              <p className="text-[rgba(250,247,240,0.70)] font-montserrat text-lg leading-[29.81px]">
                At Aurumm, we believe every piece should be as unique as the
                person wearing it. Our design philosophy blends timeless elegance
                with contemporary aesthetics, creating jewellery that is deeply
                personal and beautifully enduring.
              </p>
              <p className="text-[rgba(250,247,240,0.70)] font-montserrat text-lg leading-[29.81px]">
                Jewellery is more than precious metal and gemstones. It is an
                expression of identity, love, heritage and legacy.
              </p>
            </div>

            {/* 2x2 Stats Grid */}
            <div className="pt-3 w-full max-w-[647px]">
              <div className="grid grid-cols-2 gap-y-8 gap-x-[31px] w-full">
                {stats.map((stat, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-start border-l-[1.97px] border-l-[#D4AF37] pl-[21px]"
                  >
                    <p className="ph-stat-gradient font-cinzel text-[31px] font-semibold leading-[41.93px]">
                      {stat.value}
                    </p>
                    <p
                      className="text-[#E7D3A4] font-montserrat text-base leading-[20.96px] pt-[5px]"
                      style={{ letterSpacing: "0.025em" }}
                    >
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
