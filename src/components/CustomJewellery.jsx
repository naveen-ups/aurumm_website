import React from "react";
import "./CustomJewellery.css";

import imgEngagementWedding from "../assets/images/custom Jwellery/Engagement & Wedding.png";
import imgStatementPieces from "../assets/images/custom Jwellery/Statement Pieces.png";
import imgEverydayLuxury from "../assets/images/custom Jwellery/Everyday Luxury.png";

const categories = [
  {
    title: "Engagement & Wedding",
    description:
      "Rings, bands, and bridal sets crafted to mark life's most sacred promises.",
    image: imgEngagementWedding,
    fallbackImage: "/Cd3bf4f4b48e4f8792cfa0703cca56611.png",
  },
  {
    title: "Statement Pieces",
    description:
      "Bold necklaces, chandelier earrings, and cuffs designed to command attention.",
    image: imgStatementPieces,
    fallbackImage: "/D1c40afb368f4acea472d37cf48167b71.png",
  },
  {
    title: "Everyday Luxury",
    description:
      "Refined pieces for daily wear — elegant enough for any occasion.",
    image: imgEverydayLuxury,
    fallbackImage: "/D7be44f70c2a42af9a76f28acaa5c06a1.png",
  },
];

export default function CustomJewellery() {
  return (
    <section
      id="custom"
      className="cj-page-bg border-t-[1.31px] border-[#c8a431] w-full overflow-hidden"
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
            Crafted for you alone
          </p>
        </div>

        {/* Heading */}
        <div className="flex pt-[21px] flex-col items-center w-full">
          <h2
            className="text-[#FAF7F0] font-cinzel w-fit text-center"
            style={{
              fontSize: "clamp(28px,3.5vw,47px)",
              lineHeight: "1.2",
              letterSpacing: "0.05em",
            }}
          >
            Custom Jewellery
          </h2>
        </div>

        {/* Subtitle */}
        <div className="flex pt-2.5 flex-col items-start md:items-center w-full">
          <p
            className="text-[rgba(250,247,240,0.70)] font-montserrat text-lg leading-[29.81px] text-left md:text-center"
            style={{ maxWidth: "671px" }}
          >
            From a first sketch to the final polish, your bespoke piece is an
            entirely personal journey — shaped by your vision and perfected by our
            craft.
          </p>
        </div>

        {/* ── 3 Category Cards Grid ── */}
        <div className="flex pt-[63px] flex-col items-start w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-[31.447px] w-full items-stretch">
            {categories.map((cat, i) => (
              <div
                key={i}
                className="cj-card-bg flex flex-col items-start rounded-[21px] border-[1.31px] border-[rgba(212,175,55,0.18)] w-full overflow-hidden transition-transform duration-300 hover:scale-[1.01] shadow-xl"
              >
                {/* Image Container — 341px height */}
                <div className="w-full h-[240px] sm:h-[300px] lg:h-[341px] overflow-hidden bg-[#1E1E1E]">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = cat.fallbackImage;
                    }}
                  />
                </div>

                {/* Card Text Content */}
                <div className="flex p-[31px] flex-col items-start w-full flex-1 justify-between">
                  <div className="flex flex-col items-start w-full">
                    <p
                      className="text-[#FAF7F0] font-cinzel text-2xl leading-[36.69px] w-fit"
                      style={{ letterSpacing: "0.025em" }}
                    >
                      {cat.title}
                    </p>
                  </div>
                  <div className="flex pt-2.5 flex-col items-start w-full">
                    <p className="text-[rgba(250,247,240,0.70)] font-montserrat text-lg leading-[29.81px] w-full">
                      {cat.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Bottom CTA Banner ── */}
        <div className="flex pt-[84px] flex-col items-center w-full">
          <div className="cj-cta-banner flex p-8 lg:p-[73px] flex-col lg:flex-row items-center justify-between gap-[31px] rounded-[21px] border-[1.31px] border-[rgba(212,175,55,0.19)] w-full">
            {/* Left Text */}
            <div className="flex flex-col items-center lg:items-start w-full max-w-[926px] text-center lg:text-left">
              <div className="flex flex-col items-center lg:items-start w-full">
                <h3
                  className="text-[#FAF7F0] font-cinzel text-[clamp(18px,4.5vw,31px)] leading-[1.3] w-full text-center lg:text-left"
                  style={{ letterSpacing: "0.025em" }}
                >
                  Ready to create something extraordinary?
                </h3>
              </div>
              <div className="flex pt-2.5 flex-col items-center lg:items-start w-full">
                <p className="text-[rgba(250,247,240,0.70)] font-montserrat text-base sm:text-lg leading-[26.21px] w-full text-center lg:text-left">
                  Book a design consultation with Kashissh and take the first step
                  toward a piece that is entirely, unmistakably yours.
                </p>
              </div>
            </div>

            {/* Right Button */}
            <a
              href="#book"
              className="cursor-pointer text-nowrap inline-flex py-4 px-6 lg:py-[21px] lg:px-[42px] justify-center items-center rounded-[15.7px] bg-gradient-to-r from-[#B8952A] via-[#D4AF37] to-[#F0D060] shadow-[0_0_18.344px_rgba(212,175,55,0.14),0_2.621px_10.482px_rgba(0,0,0,0.30)] hover:brightness-110 transition-all duration-300 shrink-0 w-full sm:w-auto max-w-[284px] mx-auto lg:mx-0"
            >
              <span className="text-[#0A0800] font-montserrat text-lg font-medium leading-[26.21px] tracking-[0.1429em] uppercase whitespace-nowrap">
                Start Designing
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
