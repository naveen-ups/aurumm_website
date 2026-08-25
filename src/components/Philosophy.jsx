import React from "react";
import "./Philosophy.css";
import philosophyImg from "../assets/images/PHILOSOPHY_1.png";

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
      className="border-t-[1.31px] border-[#C8A431] w-full overflow-hidden"
      style={{
        borderImage: "linear-gradient(90deg, #c8a431, #62501880, #c8a431, #62501880, #c8a431, #62501890, #c8a431, #62501880, #c8a431) 1",
        background: "linear-gradient(170deg, #0F0F10 6.17%, #130E08 50%, #0F0F10 93.83%)",
      }}
    >
      {/* ── Inner container — max-w-[1920px], px-[31px], py-[126px] ── */}
      <div
        className="mx-auto w-full flex flex-col items-center"
        style={{
          maxWidth: "1920px",
          padding:
            "clamp(60px,8vw,126px) clamp(20px,2vw,31px) clamp(60px,6vw,100px)",
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-[83.858px] w-full">
          
          {/* ── LEFT COLUMN — Image Frame ── */}
          <div className="flex flex-col items-center lg:items-start w-full">
            <img
              src={philosophyImg}
              alt="Aurumm Philosophy — Crafting luxury jewellery"
              className="w-full max-w-[647px] h-auto object-contain shrink-0"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/Container.png";
              }}
            />
          </div>

          {/* ── RIGHT COLUMN — Content ── */}
          <div className="flex flex-col items-center lg:items-start w-full gap-[31px] text-center lg:text-left">
            {/* Eyebrow */}
            <div className="flex flex-col items-center lg:items-start w-full">
              <p className="text-[#D4AF37] font-montserrat text-base font-medium leading-[20.96px] w-fit mx-auto lg:mx-0 tracking-[0.3333em] uppercase">
                Our Philosophy
              </p>
            </div>

            {/* Heading */}
            <div className="flex pt-[21px] flex-col items-center lg:items-start shrink-0 w-full" style={{ maxWidth: "647px" }}>
              <h2 className="text-[#FAF7F0] font-cinzel font-normal w-full text-center lg:text-left text-[clamp(28px,3.5vw,47px)] leading-[1.3] lg:leading-[64.86px] tracking-[0.025em] uppercase">
                Where Artistry <br className="hidden lg:block" /> Meets Meaning
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
              <p className="text-[rgba(250,247,240,0.70)] font-montserrat text-lg leading-[29.81px] text-left">
                Jewellery is more than precious metal and gemstones. It is an
                expression of identity, love, heritage and legacy.
              </p>
              <p className="text-[rgba(250,247,240,0.70)] font-montserrat text-lg leading-[29.81px] text-left">
                At Aurumm, we believe every piece should be as unique as the
                person wearing it. Our design philosophy blends timeless elegance
                with contemporary aesthetics, creating jewellery that is deeply
                personal and beautifully enduring.
              </p>
              <p className="text-[rgba(250,247,240,0.70)] font-montserrat text-lg leading-[29.81px] text-left">
                Jewellery is more than precious metal and gemstones. It is an
                expression of identity, love, heritage and legacy.
              </p>
            </div>

            {/* 2x2 Stats Grid */}
            <div className="pt-3 w-full max-w-[647px] mx-auto lg:mx-0">
              <div className="grid grid-cols-2 gap-y-8 gap-x-[31px] w-full">
                {stats.map((stat, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-start border-l-[1.97px] border-l-[#D4AF37] pl-[21px] text-left"
                  >
                    <p
                      className="font-cinzel text-[clamp(24px,4vw,31px)] font-semibold leading-[41.93px]"
                      style={{
                        background: "linear-gradient(135deg, #B8952A 0%, #D4AF37 40%, #F0D060 70%, #C9A227 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      {stat.value}
                    </p>
                    <p className="text-[#E7D3A4] font-montserrat text-[clamp(13px,2vw,16px)] lg:text-base leading-[20.96px] pt-[5px] tracking-[0.025em]">
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
