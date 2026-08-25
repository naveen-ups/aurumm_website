import React from "react";
import "./ShopGrid.css";

import imgEngagementRings from "../assets/images/shopGrid/Engagement Rings.png";
import imgStatementNecklaces from "../assets/images/shopGrid/Statement Necklaces.png";
import imgHeirloomPieces from "../assets/images/shopGrid/Heirloom Pieces.png";
import imgEverydayLuxury from "../assets/images/shopGrid/Everyday Luxury.png";
import imgGemstoneCuffs from "../assets/images/shopGrid/Gemstone Cuffs.png";

const collections = [
  {
    id: "engagement-rings",
    title: "Engagement Rings",
    description: "Sacred promises set in gold",
    image: imgEngagementRings,
    fallbackImage: "/F29500df0f134fdca798ef1264d2f4e81.png",
  },
  {
    id: "statement-necklaces",
    title: "Statement Necklaces",
    description: "Command any room",
    image: imgStatementNecklaces,
    fallbackImage: "/Ec36ffe9c0a54ffbaa3dee174e566f501.png",
  },
  {
    id: "heirloom-pieces",
    title: "Heirloom Pieces",
    description: "Redesigned with reverence",
    image: imgHeirloomPieces,
    fallbackImage: "/E191636c97a44d9aad07a57b832c22fc1.png",
  },
  {
    id: "everyday-luxury",
    title: "Everyday Luxury",
    description: "Refined for daily wear",
    image: imgEverydayLuxury,
    fallbackImage: "/Daaf5e7b50664745a32a76da359a51821.png",
  },
  {
    id: "gemstone-cuffs",
    title: "Gemstone Cuffs",
    description: "Astrologically guided",
    image: imgGemstoneCuffs,
    fallbackImage: "/D7015141f20d490c96681afe1d1715d11.png",
  },
];

export default function ShopGrid() {
  return (
    <section
      id="shop"
      className="sg-page-bg border-t-[1.31px] border-[#c8a431] w-full overflow-hidden"
      style={{
        borderImage:
          "linear-gradient(90deg, #c8a431, #62501880, #c8a431, #62501880, #c8a431, #62501890, #c8a431, #62501880, #c8a431) 1",
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
        {/* Eyebrow */}
        <div className="flex flex-col items-center w-full">
          <p className="text-[#D4AF37] font-montserrat text-base font-medium leading-[20.96px] w-fit text-center tracking-[0.3333em] uppercase">
            Curated for you
          </p>
        </div>

        {/* Heading */}
        <div className="flex pt-[21px] flex-col items-center w-full">
          <h2 className="text-[#FAF7F0] font-cinzel text-[clamp(28px,3.5vw,47px)] font-normal leading-[52.41px] w-fit text-center tracking-[0.05em] uppercase">
            Shop The Collection
          </h2>
        </div>

        {/* Gold Divider */}
        <div className="flex pt-2.5 items-center gap-[21px] w-full max-w-[1377px]">
          <div className="shrink-0 bg-[#D4AF37] h-px flex-1"></div>
          <div className="flex flex-col items-start w-fit">
            <p className="text-[#D4AF37] font-montserrat text-base leading-[23.59px] w-fit">
              ✦
            </p>
          </div>
          <div className="shrink-0 bg-[#D4AF37] h-px flex-1"></div>
        </div>

        {/* ── 5-Column Grid ── */}
        <div className="flex pt-[63px] flex-col items-start w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 lg:gap-[21px] w-full items-start">
            {collections.map((item) => (
              <a
                key={item.id}
                href="#custom"
                className="group flex flex-col items-center sm:items-start w-full text-center sm:text-left focus:outline-none"
              >
                {/* Image Container — 259px height */}
                <div className="flex flex-col items-start rounded-[15.7px] border-[1.31px] border-[rgba(212,175,55,0.18)] bg-[#222] w-full h-[259px] overflow-hidden transition-all duration-300 group-hover:scale-[1.02] group-hover:border-[#D4AF37]/50 shadow-xl">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center opacity-[85%] transition-opacity duration-300 group-hover:opacity-100"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = item.fallbackImage;
                    }}
                  />
                </div>

                {/* Title */}
                <div className="flex pt-4 flex-col items-center sm:items-start w-full">
                  <p className="text-[#FAF7F0] font-cinzel text-base font-medium leading-[20.96px] w-fit tracking-[0.1em] group-hover:text-[#D4AF37] transition-colors">
                    {item.title}
                  </p>
                </div>

                {/* Description */}
                <div className="flex pt-[5px] flex-col items-center sm:items-start w-full">
                  <p className="text-[rgba(250,247,240,0.70)] font-montserrat text-base leading-[20.96px] w-fit">
                    {item.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* View All Pieces Button */}
        <div className="flex pt-[63px] justify-center items-start w-full">
          <a
            href="#custom"
            className="cursor-pointer text-nowrap flex py-[21px] px-[42px] flex-col justify-center items-center rounded-[15.7px] border-[1.31px] border-[#D4AF37] w-fit hover:bg-[#D4AF37]/10 transition-colors"
          >
            <p className="text-[#D4AF37] font-montserrat text-lg font-medium leading-[26.21px] w-fit tracking-[0.1429em]">
              View All Pieces
            </p>
          </a>
        </div>
      </div>
    </section>
  );
}
