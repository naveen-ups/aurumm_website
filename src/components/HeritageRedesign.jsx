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
      className="border-t-[1.31px] border-t-[#C8A431] w-full overflow-hidden relative"
      style={{
        borderImage: "linear-gradient(90deg, #c8a431, #62501880, #c8a431, #62501880, #c8a431, #62501890, #c8a431, #62501880, #c8a431) 1",
        background: "linear-gradient(180deg, #0F0F10 0%, #110E08 50%, #0F0F10 100%)"
      }}
    >
      <div 
        className="hidden lg:block absolute right-0 top-[335px] w-[419px] h-[419px]"
        style={{
          background: "radial-gradient(111.8% 111.8% at 100% 50%, rgba(212, 175, 55, 0.03) 0%, rgba(212, 175, 55, 0.00) 65%)"
        }}
      />
      
      {/* ── Inner container — matches Figma: max-w-[1509.445px], px-[31px], py-[126px] ── */}
      <div
        className="w-full mx-auto px-4 md:px-[31px] py-[60px] md:py-[126px] relative z-10 flex justify-center"
        style={{ maxWidth: "1509.445px" }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-[83.858px] items-start w-full max-w-[1377px] mx-auto">
          {/* ── LEFT COLUMN ── */}
          <div className="flex flex-col items-start w-full">
            {/* Eyebrow */}
            <div className="flex flex-col items-start w-full">
              <p className="text-[#D4AF37] font-montserrat text-base font-medium leading-[20.96px] w-fit tracking-[0.3333em] uppercase">
                Heritage Redesign
              </p>
            </div>

            {/* Heading */}
            <div className="flex pt-[21px] flex-col items-start w-full">
              <h2
                className="text-[#FAF7F0] font-cinzel font-normal w-fit text-left tracking-[0.025em]"
                style={{
                  fontSize: "clamp(28px,3.5vw,47px)",
                  lineHeight: "1.2",
                }}
              >
                Honouring the Past, <br className="hidden lg:block" />Reimagining the Future
              </h2>
            </div>

            {/* Gold Divider */}
            <div className="flex items-center gap-[21px] w-full py-4">
              <div
                className="flex-1 h-px"
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
                className="flex-1 h-px"
                style={{
                  background:
                    "linear-gradient(270deg, rgba(212,175,55,0.00) 0%, rgba(212,175,55,0.25) 100%)",
                }}
              />
            </div>

            {/* Paragraphs */}
            <div className="flex flex-col items-start w-full">
              <div className="flex flex-col items-start w-full">
                <p className="text-[rgba(250,247,240,0.70)] font-montserrat text-lg leading-[29.81px] w-full max-w-[647px]">
                  Your grandmother's brooch. A mother's ring. A gift from someone no<br className="hidden lg:block" />
                  longer here. These pieces carry histories too precious to leave unworn<br className="hidden lg:block" />
                  in a drawer.
                </p>
              </div>
              <div className="flex pt-[21px] flex-col items-start w-full">
                <p className="text-[rgba(250,247,240,0.70)] font-montserrat text-lg leading-[29.81px] w-full max-w-[647px]">
                  We carefully disassemble heirloom jewellery, preserve every original<br className="hidden lg:block" />
                  gemstone, and craft entirely new settings that bring those stones into<br className="hidden lg:block" />
                  your present life — while honouring their past.
                </p>
              </div>
              <div className="flex pt-[21px] flex-col items-start w-full">
                <p className="text-[rgba(250,247,240,0.70)] font-montserrat text-lg leading-[29.81px] w-full max-w-[647px]">
                  The result is jewellery that bridges generations: a wearable legacy for<br className="hidden lg:block" />
                  you, and eventually, for those who come after.
                </p>
              </div>
            </div>

            {/* Bullet List */}
            <div className="flex pt-[42px] flex-col items-start shrink-0 w-full">
              {listItems.map((item, i) => (
                <div key={i} className={`flex ${i === 0 ? 'items-start' : 'pt-4 items-start'} gap-4 shrink-0 w-full`}>
                  <div className="flex pt-[3px] flex-col items-start shrink-0 w-3 h-[29px]">
                    <p className="text-[#D4AF37] font-montserrat text-lg leading-[26.21px] w-fit">
                      ✦
                    </p>
                  </div>
                  <p className="text-[rgba(250,247,240,0.70)] font-montserrat text-lg leading-[26.21px] w-fit">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            {/* Enquire Now Button */}
            <div className="flex pt-[42px] flex-col items-start w-full sm:w-auto">
              <a
                href="#enquire"
                className="cursor-pointer inline-flex justify-center items-center rounded-[15.7px] border-[1.31px] border-[#D4AF37] hover:bg-[#D4AF37]/10 transition-colors w-full sm:w-[259px]"
                style={{ height: "71px" }}
              >
                <p className="text-[#D4AF37] font-montserrat text-lg font-medium leading-[26.21px] text-center tracking-[0.1429em] uppercase">
                  Enquire Now
                </p>
              </a>
            </div>
          </div>

          {/* ── RIGHT COLUMN ── */}
          <div className="flex flex-col items-start w-full relative">
            {/* Top Cards (Offset Layout) */}
            <div className="grid grid-cols-2 gap-4 sm:gap-[21px] w-full items-start mb-[21px]">
              {/* Left Card */}
              <div
                className="rounded-[15.7px] border-[1.31px] border-[rgba(212,175,55,0.18)] bg-[#222] w-full h-[200px] sm:h-[300px] lg:h-[393px]"
              />
              {/* Right Card (Top Offset 42px) */}
              <div
                className="rounded-[15.7px] border-[1.31px] border-[rgba(212,175,55,0.18)] bg-[#222] w-full mt-[21px] sm:mt-[42px] h-[200px] sm:h-[300px] lg:h-[393px]"
              />
            </div>

            {/* Before & After Banner */}
            <div className="flex pt-[21px] flex-col items-start w-full">
              <div className="flex p-[21px] flex-col items-start rounded-[15.7px] border-[1.31px] border-[rgba(212,175,55,0.18)] bg-[#171717] w-full">
                <div className="flex flex-col items-center w-full">
                  <p className="text-[#FAF7F0] font-cinzel text-[21px] font-medium leading-[31.45px] w-fit text-center">
                    Before &amp; After
                  </p>
                </div>
                <div className="flex pt-[5px] flex-col items-center w-full lg:w-[602px] h-auto lg:h-[26px]">
                  <p className="text-[rgba(250,247,240,0.70)] font-montserrat text-base leading-[20.96px] w-fit text-center">
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
