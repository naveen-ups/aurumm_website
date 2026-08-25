import React from "react";
import "./GemstoneConsultation.css";

import imgBlueSapphire from "../assets/images/gemstones/blue-sapphire.png";
import imgRuby from "../assets/images/gemstones/ruby.png";
import imgEmerald from "../assets/images/gemstones/emerald.png";
import imgYellowSapphire from "../assets/images/gemstones/yellow-sapphire.png";
import imgAmethyst from "../assets/images/gemstones/amethyst.png";
import imgAquamarine from "../assets/images/gemstones/aquamarine.png";

/* ── Gemstone radial colour map ── */
const gemstones = [
  { name: "Blue Sapphire", planet: "Saturn",  color: "#3498DB", size: "lg" },
  { name: "Ruby",          planet: "Sun",     color: "#E74C3C", size: "lg" },
  { name: "Emerald",       planet: "Mercury", color: "#2ECC71", size: "sm" },
  { name: "Yellow Sapphire", planet: "Jupiter", color: "#F1C40F", size: "sm" },
  { name: "Amethyst",      planet: "Saturn",  color: "#9B59B6", size: "sm" },
  { name: "Aquamarine",    planet: "Moon",    color: "#1ABC9C", size: "sm" },
];

const featureCards = [
  {
    title: "Astrological Guidance",
    body: (
      <>
        Stones chosen based on your Vedic<br className="hidden lg:block" />
        birth chart for resonance and harmony.
      </>
    ),
  },
  {
    title: "GIA Certification",
    body: (
      <>
        Every gemstone comes with<br className="hidden lg:block" />
        independent certification of quality and<br className="hidden lg:block" />
        authenticity.
      </>
    ),
  },
  {
    title: "Ethical Sourcing",
    body: (
      <>
        Conflict-free, responsibly mined stones<br className="hidden lg:block" />
        selected with full traceability.
      </>
    ),
  },
];

function GemstoneCard({ name, planet, color, size }) {
  const isLarge = size === "lg";
  return (
    <div
      className="gc-gem-card flex flex-col items-center gap-4 rounded-[21px] border-[1.31px] border-[rgba(212,175,55,0.18)] transition-transform duration-300 hover:scale-[1.03]"
      style={{ padding: "31px" }}
    >
      {/* Radial gem orb */}
      <div
        className="rounded-full shrink-0"
        style={{
          width: isLarge ? "84px" : "58px",
          height: isLarge ? "84px" : "58px",
          background: `radial-gradient(91.92% 91.92% at 35% 35%, #FFFFFF 0%, ${color} 100%)`,
        }}
      />
      {/* Name */}
      <p
        className="text-[#FAF7F0] font-cinzel text-center w-fit"
        style={{
          fontSize: isLarge ? "24px" : "20px",
          lineHeight: isLarge ? "35.38px" : "29.48px",
        }}
      >
        {name}
      </p>
      {/* Planet */}
      <p
        className="text-[#E7D3A4] font-montserrat text-[13px] leading-[19.65px] w-fit"
        style={{ letterSpacing: "0.2em" }}
      >
        {planet}
      </p>
    </div>
  );
}

function FeatureCard({ title, body }) {
  return (
    <div className="flex p-[31px] flex-col items-start rounded-[21px] border-[1.31px] border-[rgba(212,175,55,0.18)] bg-[#222] w-full h-full">
      {/* Gold accent line */}
      <div className="bg-[#D4AF37] w-[42px] h-px" />
      {/* Title */}
      <div className="flex pt-[21px] flex-col items-start w-full lg:w-[373px] h-auto lg:h-[52px]">
        <p className="text-[#FAF7F0] font-cinzel text-[21px] leading-[31.45px] w-fit tracking-[0.025em] uppercase">
          {title}
        </p>
      </div>
      {/* Body */}
      <div className="flex pt-2.5 flex-col items-start w-full lg:w-[373px]">
        <p className="text-[rgba(250,247,240,0.70)] font-montserrat text-lg leading-[29.81px] w-full lg:w-[373px]">
          {body}
        </p>
      </div>
    </div>
  );
}

export default function GemstoneConsultation() {
  return (
    <section
      id="gemstone"
      className="gc-page-bg border-t-[1.31px] border-[#c8a431] w-full overflow-hidden"
      style={{
        borderImage:
          "linear-gradient(90deg, #c8a431, #62501880, #c8a431, #62501880, #c8a431, #62501890, #c8a431, #62501880, #c8a431) 1",
      }}
    >
      {/* Inner container — max-w-[1920px], px-[31px], pt-[126px] */}
      <div
        className="mx-auto w-full flex flex-col items-start"
        style={{
          maxWidth: "1920px",
          padding:
            "clamp(60px,8vw,126px) clamp(20px,2vw,31px) clamp(60px,6vw,100px)",
        }}
      >
        {/* Eyebrow */}
        <div className="flex flex-col items-center w-full">
          <p
            className="text-[#D4AF37] font-montserrat text-base font-medium leading-[20.96px] w-fit text-center uppercase"
            style={{ letterSpacing: "0.3333em" }}
          >
            Guided by the Stars
          </p>
        </div>

        {/* Heading — gold gradient text */}
        <div className="flex pt-[21px] flex-col items-center w-full">
          <p
            className="gc-heading-gradient font-cinzel w-fit text-center uppercase"
            style={{
              fontSize: "clamp(28px,3.5vw,47px)",
              lineHeight: "52.41px",
              letterSpacing: "0.05em",
            }}
          >
            Gemstone Consultation
          </p>
        </div>

        {/* Description */}
        <div className="flex pt-[21px] flex-col items-center w-full">
          <p
            className="text-[rgba(250,247,240,0.70)] font-montserrat text-lg leading-[26.21px] text-center w-full lg:w-[671px]"
          >
            Kashissh combines her gemological expertise with deep knowledge of<br className="hidden lg:block" />
            Vedic astrology to recommend stones that resonate with your unique<br className="hidden lg:block" />
            cosmic blueprint.
          </p>
        </div>

        {/* ── Gemstone Cards ── */}
        <div className="flex pt-[84px] flex-col items-center w-full">

          {/* Desktop 3-col grid — centered via mx-auto */}
          <div
            className="hidden lg:grid"
            style={{
              gridTemplateColumns: "262.056px 209.645px 209.645px",
              gridTemplateRows: "auto auto",
              gap: "31.447px",
            }}
          >
            {/* ── Row 1 ── */}
            {/* [0,0] Blue Sapphire — large card, auto height */}
            <div
              className="gc-gem-card flex p-[31px] flex-col items-center rounded-[21px] border-[1.31px] border-[rgba(212,175,55,0.18)] transition-transform duration-300 hover:scale-[1.02] w-full"
              style={{ gap: "15.723px", background: "linear-gradient(145deg, #252320 6.17%, #1E1C14 93.83%)" }}
            >
              <img src={imgBlueSapphire} alt="Blue Sapphire" className="rounded-full object-cover shrink-0" style={{ width: "84px", height: "84px" }} />
              <p className="text-[#FAF7F0] font-cinzel text-2xl leading-[35.38px] w-fit text-center">Blue Sapphire</p>
              <p className="text-[#E7D3A4] font-montserrat text-[13px] leading-[19.65px] w-fit uppercase" style={{ letterSpacing: "0.2em" }}>Saturn</p>
            </div>

            {/* [0,1] Emerald — small card */}
            <div
              className="gc-gem-card flex p-[31px] flex-col items-center rounded-[21px] border-[1.31px] border-[rgba(212,175,55,0.18)] transition-transform duration-300 hover:scale-[1.02] w-full h-[236px]"
              style={{ gap: "15.723px", background: "linear-gradient(145deg, #252320 6.17%, #1E1C14 93.83%)" }}
            >
              <img src={imgEmerald} alt="Emerald" className="rounded-full object-cover shrink-0" style={{ width: "58px", height: "58px" }} />
              <p className="text-[#FAF7F0] font-cinzel text-xl leading-[29.48px] w-fit text-center">Emerald</p>
              <p className="text-[#E7D3A4] font-montserrat text-[13px] leading-[19.65px] w-fit uppercase" style={{ letterSpacing: "0.2em" }}>Mercury</p>
            </div>

            {/* [0,2] Yellow Sapphire — small card */}
            <div
              className="gc-gem-card flex p-[31px] flex-col items-center rounded-[21px] border-[1.31px] border-[rgba(212,175,55,0.18)] transition-transform duration-300 hover:scale-[1.02] w-full h-[236px]"
              style={{ gap: "15.723px", background: "linear-gradient(145deg, #252320 6.17%, #1E1C14 93.83%)" }}
            >
              <img src={imgYellowSapphire} alt="Yellow Sapphire" className="rounded-full object-cover shrink-0" style={{ width: "58px", height: "58px" }} />
              <p className="text-[#FAF7F0] font-cinzel text-xl leading-[29.48px] text-center w-36">Yellow Sapphire</p>
              <p className="text-[#E7D3A4] font-montserrat text-[13px] leading-[19.65px] w-fit uppercase" style={{ letterSpacing: "0.2em" }}>Jupiter</p>
            </div>

            {/* ── Row 2 ── */}
            {/* [1,0] Ruby — large card, auto height */}
            <div
              className="gc-gem-card flex p-[31px] flex-col items-center rounded-[21px] border-[1.31px] border-[rgba(212,175,55,0.18)] transition-transform duration-300 hover:scale-[1.02] w-full"
              style={{ gap: "15.723px", background: "linear-gradient(145deg, #252320 6.17%, #1E1C14 93.83%)" }}
            >
              <img src={imgRuby} alt="Ruby" className="rounded-full object-cover shrink-0" style={{ width: "84px", height: "84px" }} />
              <p className="text-[#FAF7F0] font-cinzel text-2xl leading-[35.38px] w-fit text-center">Ruby</p>
              <p className="text-[#E7D3A4] font-montserrat text-[13px] leading-[19.65px] w-fit uppercase" style={{ letterSpacing: "0.2em" }}>Sun</p>
            </div>

            {/* [1,1] Amethyst — small card */}
            <div
              className="gc-gem-card flex p-[31px] flex-col items-center rounded-[21px] border-[1.31px] border-[rgba(212,175,55,0.18)] transition-transform duration-300 hover:scale-[1.02] w-full h-[236px]"
              style={{ gap: "15.723px", background: "linear-gradient(145deg, #252320 6.17%, #1E1C14 93.83%)" }}
            >
              <img src={imgAmethyst} alt="Amethyst" className="rounded-full object-cover shrink-0" style={{ width: "58px", height: "58px" }} />
              <p className="text-[#FAF7F0] font-cinzel text-xl leading-[29.48px] w-fit text-center">Amethyst</p>
              <p className="text-[#E7D3A4] font-montserrat text-[13px] leading-[19.65px] w-fit uppercase" style={{ letterSpacing: "0.2em" }}>Saturn</p>
            </div>

            {/* [1,2] Aquamarine — small card to match siblings */}
            <div
              className="gc-gem-card flex p-[31px] flex-col items-center rounded-[21px] border-[1.31px] border-[rgba(212,175,55,0.18)] transition-transform duration-300 hover:scale-[1.02] w-full h-[236px]"
              style={{ gap: "15.723px", background: "linear-gradient(145deg, #252320 6.17%, #1E1C14 93.83%)" }}
            >
              <img src={imgAquamarine} alt="Aquamarine" className="rounded-full object-cover shrink-0" style={{ width: "58px", height: "58px" }} />
              <p className="text-[#FAF7F0] font-cinzel text-xl leading-[29.48px] w-fit text-center">Aquamarine</p>
              <p className="text-[#E7D3A4] font-montserrat text-[13px] leading-[19.65px] w-fit uppercase" style={{ letterSpacing: "0.2em" }}>Moon</p>
            </div>
          </div>

          {/* Mobile: 2-col grid */}
          <div className="lg:hidden grid grid-cols-2 sm:grid-cols-3 gap-4 w-full">
            {[
              { name: "Blue Sapphire", planet: "Saturn",  color: "#3498DB", lg: true, image: imgBlueSapphire },
              { name: "Emerald",       planet: "Mercury", color: "#2ECC71", lg: false, image: imgEmerald },
              { name: "Yellow Sapphire", planet: "Jupiter", color: "#F1C40F", lg: false, image: imgYellowSapphire },
              { name: "Ruby",          planet: "Sun",     color: "#E74C3C", lg: true, image: imgRuby },
              { name: "Amethyst",      planet: "Saturn",  color: "#9B59B6", lg: false, image: imgAmethyst },
              { name: "Aquamarine",    planet: "Moon",    color: "#1ABC9C", lg: false, image: imgAquamarine },
            ].map((gem, i) => (
              <div key={i} className="gc-gem-card flex p-[24px] flex-col items-center gap-3 rounded-[21px] border-[1.31px] border-[rgba(212,175,55,0.18)]" style={{ background: "linear-gradient(145deg, #252320 6.17%, #1E1C14 93.83%)" }}>
                <img
                  src={gem.image}
                  alt={gem.name}
                  className="rounded-full object-cover shrink-0"
                  style={{ width: "64px", height: "64px" }}
                />
                <p className="text-[#FAF7F0] font-cinzel text-base text-center w-full">{gem.name}</p>
                <p className="text-[#E7D3A4] font-montserrat text-xs w-fit uppercase" style={{ letterSpacing: "0.2em" }}>{gem.planet}</p>
              </div>
            ))}
          </div>
        </div>



        {/* ── Feature Info Cards Grid — pt-[105px] per Figma ── */}
        <div className="flex pt-[105px] flex-col items-start w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-[31.447px] w-full items-stretch">
            {featureCards.map((card, i) => (
              <FeatureCard key={i} {...card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
