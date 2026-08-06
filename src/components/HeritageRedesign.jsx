import React from "react";
import "./HeritageRedesign.css";

const listItems = [
  "Full assessment & valuation of your heirloom",
  "Hand-drawn redesign concepts for your approval",
  "Careful stone extraction and reuse",
  "Photographic documentation throughout",
  "Certificate of provenance with finished piece",
];

export default function HeritageRedesign() {
  return (
    <section
      id="heritage"
      className="hr-page-bg border-t-[1.31px] border-[#c8a431] w-full overflow-hidden"
      style={{
        borderImage:
          "linear-gradient(90deg, #c8a431, #62501880, #c8a431, #62501880, #c8a431, #62501890, #c8a431, #62501880, #c8a431) 1",
      }}
    >
      {/* ── Inner container — matches Figma: max-w-[1509.445px], px-[31px], py-[126px] ── */}
      <div
        className="w-full mx-auto px-[clamp(20px,2vw,31px)] py-[clamp(60px,8vw,126px)]"
        style={{ maxWidth: "1509.445px" }}
      >
        <div
          className="grid grid-cols-1 lg:grid-cols-2 items-start"
          style={{ gap: "clamp(40px,5.5vw,83.858px)" }}
        >
          {/* ── LEFT COLUMN ── */}
          <div className="flex flex-col items-start w-full">
            {/* Eyebrow */}
            <p className="text-[#E7D3A4] font-montserrat text-base font-medium leading-[20.96px] tracking-[0.3333em] uppercase">
              Heritage Redesign
            </p>

            {/* Heading */}
            <div className="flex pt-[21px] flex-col items-start w-full" style={{ maxWidth: "647px" }}>
              <h2
                className="text-[#FAF7F0] font-cinzel font-normal w-fit"
                style={{
                  fontSize: "clamp(28px,3.5vw,47px)",
                  lineHeight: "64.86px",
                  letterSpacing: "0.025em",
                }}
              >
                Honouring the Past, Reimagining the Future
              </h2>
            </div>

            {/* Gold Divider */}
            <div className="flex items-center gap-[21px] w-full max-w-[647px] py-4">
              <div
                className="flex-1 h-px"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(212,175,55,0.00) 0%, rgba(212,175,55,0.25) 100%)",
                }}
              />
              <p className="text-[#D4AF37] font-montserrat text-base leading-[23.59px]">
                ✦
              </p>
              <div
                className="flex-1 h-px"
                style={{
                  background:
                    "linear-gradient(270deg, rgba(212,175,55,0.00) 0%, rgba(212,175,55,0.25) 100%)",
                }}
              />
            </div>

            {/* Paragraphs */}
            <div className="flex flex-col items-start w-full gap-[21px]" style={{ maxWidth: "647px" }}>
              <p className="text-[rgba(250,247,240,0.70)] font-montserrat text-lg leading-[29.81px]">
                Your grandmother's brooch. A mother's ring. A gift from someone no
                longer here. These pieces carry histories too precious to leave
                unworn in a drawer.
              </p>
              <p className="text-[rgba(250,247,240,0.70)] font-montserrat text-lg leading-[29.81px]">
                We carefully disassemble heirloom jewellery, preserve every
                original gemstone, and craft entirely new settings that bring
                those stones into your present life — while honouring their past.
              </p>
              <p className="text-[rgba(250,247,240,0.70)] font-montserrat text-lg leading-[29.81px]">
                The result is jewellery that bridges generations: a wearable
                legacy for you, and eventually, for those who come after.
              </p>
            </div>

            {/* Bullet List */}
            <div
              className="flex pt-[42px] flex-col items-start w-full gap-4"
              style={{ maxWidth: "647px" }}
            >
              {listItems.map((item, i) => (
                <div key={i} className="flex items-start gap-4 w-full">
                  <p className="text-[#D4AF37] font-montserrat text-lg leading-[26.21px] shrink-0 pt-[3px]">
                    ✦
                  </p>
                  <p className="text-[rgba(250,247,240,0.70)] font-montserrat text-lg leading-[26.21px]">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            {/* Enquire Now Button */}
            <div className="flex pt-[42px] flex-col items-start w-full">
              <a
                href="#book"
                className="cursor-pointer inline-flex justify-center items-center rounded-[15.7px] border-[1.31px] border-[#D4AF37] hover:bg-[#D4AF37]/10 transition-colors"
                style={{ width: "259px", height: "71px" }}
              >
                <p className="text-[#D4AF37] font-montserrat text-lg font-medium leading-[26.21px] text-center tracking-[0.1429em]">
                  Enquire Now
                </p>
              </a>
            </div>
          </div>

          {/* ── RIGHT COLUMN ── */}
          <div className="flex flex-col items-start w-full gap-[21px]">
            {/* Top Cards (Offset Layout) */}
            <div className="grid grid-cols-2 gap-4 sm:gap-[21px] w-full items-start">
              {/* Left Card */}
              <div
                className="rounded-[15.7px] border-[1.31px] border-[rgba(212,175,55,0.18)] bg-[#222] w-full"
                style={{ height: "393px" }}
              />
              {/* Right Card (Top Offset 42px) */}
              <div
                className="rounded-[15.7px] border-[1.31px] border-[rgba(212,175,55,0.18)] bg-[#222] w-full mt-[42px]"
                style={{ height: "393px" }}
              />
            </div>

            {/* Before & After Caption Card */}
            <div className="flex pt-[21px] flex-col items-start w-full">
              <div className="flex p-[21px] flex-col items-start rounded-[15.7px] border-[1.31px] border-[rgba(212,175,55,0.18)] bg-[#171717] w-full text-center">
                <div className="flex flex-col items-center w-full">
                  <p className="text-[#FAF7F0] font-cinzel text-[21px] font-medium leading-[31.45px] w-fit">
                    Before &amp; After
                  </p>
                </div>
                <div className="flex pt-[5px] flex-col items-center w-full">
                  <p className="text-[rgba(250,247,240,0.70)] font-montserrat text-base leading-[20.96px] w-fit">
                    Transformations that honour your story
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
