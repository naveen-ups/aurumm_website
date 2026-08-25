import React from "react";
import "./Plans.css";

/* ── Reusable feature list item ── */
function ListItem({ label, isFirst = false }) {
  return (
    <div className={`flex items-start gap-2.5 w-full ${!isFirst ? "pt-2.5 shrink-0 lg:h-[31px]" : ""}`}>
      <div className="flex flex-col items-start w-fit">
        <p className="text-[#D4AF37] font-montserrat text-base leading-[20.96px] w-fit">
          ✦
        </p>
      </div>
      <p className="text-[rgba(250,247,240,0.70)] font-montserrat text-base leading-[20.96px] w-fit">
        {label}
      </p>
    </div>
  );
}

/* ── Discovery Card (standard border) ── */
function DiscoveryCard() {
  return (
    <div 
      className="pl-card-standard flex p-6 sm:p-8 lg:p-[42px] flex-col items-start rounded-[21px] border-[1.31px] border-[rgba(212,175,55,0.18)] w-full h-full transition-transform duration-300 hover:scale-[1.01] shadow-xl"
      style={{ background: "linear-gradient(145deg, #242420 6.17%, #1E1C14 93.83%)" }}
    >
      {/* Plan label */}
      <div className="flex pb-2.5 flex-col items-start w-full lg:h-[31px]">
        <p className="text-[#E7D3A4] font-montserrat text-base leading-[20.96px] w-fit tracking-[0.25em] uppercase">
          The Discovery
        </p>
      </div>

      {/* Price */}
      <div className="flex pb-4 flex-col items-start w-full lg:h-[58px]">
        <p className="text-[#F4E6C1] font-cinzel text-[31px] font-medium leading-[41.93px] w-fit">
          Complimentary
        </p>
      </div>

      {/* Description */}
      <div className="flex pb-[31px] flex-col items-start w-full">
        <p className="text-[rgba(250,247,240,0.70)] font-montserrat text-base leading-[25.55px] w-full">
          A 30-minute virtual introduction to explore<br className="hidden lg:block" /> your ideas.
        </p>
      </div>

      {/* Features */}
      <div className="flex pb-[42px] flex-col items-start w-full flex-1">
        <div className="flex flex-col items-start shrink-0 w-full lg:h-[84px]">
          <ListItem label="Virtual or in-person" isFirst={true} />
          <ListItem label="Vision exploration" />
          <ListItem label="Style guidance" />
        </div>
      </div>

      {/* CTA — outlined gold */}
      <a href="#book" className="cursor-pointer text-nowrap flex py-[21px] px-[42px] flex-col justify-center items-center rounded-[15.7px] border-[1.31px] border-[#D4AF37] w-full hover:bg-[#D4AF37]/10 transition-colors">
        <p className="text-[#D4AF37] font-montserrat text-lg font-medium leading-[26.21px] w-fit tracking-[0.1429em] text-center uppercase">
          Book Free Session
        </p>
      </a>
    </div>
  );
}

/* ── Creation Card (featured / gold fill) ── */
function CreationCard() {
  return (
    <div 
      className="relative pl-card-featured flex p-6 sm:p-8 lg:p-[42px] flex-col items-start rounded-[21px] border-[1.31px] border-[rgba(212,175,55,0.44)] w-full h-full transition-transform duration-300 hover:scale-[1.01]"
      style={{ 
        background: "linear-gradient(145deg, #2A2416 6.17%, #1F1C10 50%, #252010 93.83%)",
        boxShadow: "0px 0px 62.894px 0px rgba(212,175,55,0.09), 0px 1.31px 0px 0px rgba(212,175,55,0.13) inset"
      }}
    >
      {/* Most Popular badge */}
      <div
        className="pl-badge absolute -top-3.5 flex py-[5px] px-[21px] flex-col items-start rounded-[131px] w-fit"
        style={{ 
          left: "50%", transform: "translateX(-50%)",
          background: "linear-gradient(135deg, #B8952A 0%, #D4AF37 40%, #F0D060 70%, #C9A227 100%)",
          boxShadow: "0px 2.621px 15.723px 0px rgba(212,175,55,0.25)"
        }}
      >
        <p className="text-[#0A0800] font-montserrat text-[13px] leading-[19.65px] w-fit tracking-[0.2em] whitespace-nowrap uppercase">
          Most Popular
        </p>
      </div>

      {/* Plan label */}
      <div className="flex pb-2.5 flex-col items-start w-full lg:h-[31px]">
        <p className="text-[#E7D3A4] font-montserrat text-base leading-[20.96px] w-fit tracking-[0.25em] uppercase">
          The Creation
        </p>
      </div>

      {/* Price */}
      <div className="flex pb-4 flex-col items-start w-full lg:h-[58px]">
        <p className="text-[#F4E6C1] font-cinzel text-[31px] font-medium leading-[41.93px] w-fit">
          From ₹85,000
        </p>
      </div>

      {/* Description */}
      <div className="flex pb-[31px] flex-col items-start w-full">
        <p className="text-[rgba(250,247,240,0.70)] font-montserrat text-base leading-[25.55px] w-full">
          Full bespoke design service from<br className="hidden lg:block" /> consultation to finished piece.
        </p>
      </div>

      {/* Features */}
      <div className="flex pb-[42px] flex-col items-start w-full flex-1">
        <div className="flex flex-col items-start shrink-0 w-full">
          <ListItem label="60-min consultation" isFirst={true} />
          <ListItem label="Bespoke sketches & 3D renders" />
          <ListItem label="3 revision rounds" />
          <ListItem label="Gemstone sourcing" />
          <ListItem label="Master crafting" />
          <ListItem label="Lifetime aftercare" />
        </div>
      </div>

      {/* CTA — solid gold */}
      <a
        href="#book"
        className="cursor-pointer text-nowrap flex py-[21px] px-[42px] flex-col justify-center items-center rounded-[15.7px] w-full hover:brightness-110 transition-all duration-300"
        style={{
          background: "linear-gradient(135deg, #B8952A 0%, #D4AF37 40%, #F0D060 70%, #C9A227 100%)",
          boxShadow: "0px 0px 18.344px 0px rgba(212,175,55,0.14), 0px 2.621px 10.482px 0px rgba(0,0,0,0.30)",
        }}
      >
        <p className="text-[#0A0800] font-montserrat text-lg font-medium leading-[26.21px] w-fit tracking-[0.1429em] text-center uppercase">
          Begin Creation
        </p>
      </a>
    </div>
  );
}

/* ── Heritage Card (standard border) ── */
function HeritageCard() {
  return (
    <div 
      className="pl-card-standard flex p-6 sm:p-8 lg:p-[42px] flex-col items-start rounded-[21px] border-[1.31px] border-[rgba(212,175,55,0.18)] w-full h-full transition-transform duration-300 hover:scale-[1.01] shadow-xl"
      style={{ background: "linear-gradient(145deg, #242420 6.17%, #1E1C14 93.83%)" }}
    >
      {/* Plan label */}
      <div className="flex pb-2.5 flex-col items-start w-full lg:h-[31px]">
        <p className="text-[#E7D3A4] font-montserrat text-base leading-[20.96px] w-fit tracking-[0.25em] uppercase">
          The Heritage
        </p>
      </div>

      {/* Price */}
      <div className="flex pb-4 flex-col items-start w-full lg:h-[58px]">
        <p className="text-[#F4E6C1] font-cinzel text-[31px] font-medium leading-[41.93px] w-fit">
          Custom Quote
        </p>
      </div>

      {/* Description */}
      <div className="flex pb-[31px] flex-col items-start w-full">
        <p className="text-[rgba(250,247,240,0.70)] font-montserrat text-base leading-[25.55px] w-full">
          Complete heirloom redesign service,<br className="hidden lg:block" /> preserving your stones and history.
        </p>
      </div>

      {/* Features */}
      <div className="flex pb-[42px] flex-col items-start w-full flex-1">
        <div className="flex flex-col items-start shrink-0 w-full lg:h-[115px]">
          <ListItem label="Heirloom assessment" isFirst={true} />
          <ListItem label="Redesign concepts" />
          <ListItem label="Stone extraction & reuse" />
          <ListItem label="Certificate of provenance" />
        </div>
      </div>

      {/* CTA — outlined gold */}
      <a href="#book" className="cursor-pointer text-nowrap flex py-[21px] px-[42px] flex-col justify-center items-center rounded-[15.7px] border-[1.31px] border-[#D4AF37] w-full hover:bg-[#D4AF37]/10 transition-colors">
        <p className="text-[#D4AF37] font-montserrat text-lg font-medium leading-[26.21px] w-fit tracking-[0.1429em] text-center uppercase">
          Enquire Now
        </p>
      </a>
    </div>
  );
}

/* ── Main Section ── */
export default function Plans() {
  return (
    <section
      id="plans"
      className="pl-page-bg border-t-[1.31px] border-[#c8a431] w-full overflow-hidden"
      style={{
        borderImage:
          "linear-gradient(90deg, #c8a431, #62501880, #c8a431, #62501880, #c8a431, #62501890, #c8a431, #62501880, #c8a431) 1",
      }}
    >
      {/* Inner container — max-w-[1509.445px], px-[31px], pt-[126px] */}
      <div
        className="mx-auto w-full flex flex-col items-start"
        style={{
          maxWidth: "1509.445px",
          padding: "clamp(60px,8vw,126px) clamp(20px,2vw,31px) clamp(60px,6vw,100px)",
        }}
      >
        {/* Eyebrow */}
        <div className="flex flex-col items-center w-full">
          <p className="text-[#D4AF37] font-montserrat text-base font-medium leading-[20.96px] w-fit tracking-[0.3333em] uppercase text-center">
            Promotions &amp; Plans
          </p>
        </div>

        {/* Heading */}
        <div className="flex pt-[21px] flex-col items-center shrink-0 w-full lg:h-[73px]">
          <p 
            className="text-[#FAF7F0] font-cinzel font-normal w-fit text-center tracking-[0.05em] uppercase"
            style={{
              fontSize: "clamp(28px,3.5vw,47px)",
              lineHeight: "1.2",
            }}
          >
            Your Journey Begins Here
          </p>
        </div>

        {/* Gold Divider */}
        <div className="flex pt-2.5 items-center gap-[21px] shrink-0 w-full lg:h-[34px]">
          <div
            className="flex-1 h-[1.31px]"
            style={{
              background: "linear-gradient(90deg, rgba(212,175,55,0.00) 0%, rgba(212,175,55,0.25) 100%)",
            }}
          />
          <div className="flex flex-col items-start w-fit">
            <p className="text-[#D4AF37] font-montserrat text-base leading-[23.59px] w-fit">
              ✦
            </p>
          </div>
          <div
            className="flex-1 h-[1.31px]"
            style={{
              background: "linear-gradient(270deg, rgba(212,175,55,0.00) 0%, rgba(212,175,55,0.25) 100%)",
            }}
          />
        </div>

        {/* 3-column Cards Grid */}
        <div className="flex pt-[63px] flex-col items-start w-full">
          <div className="grid grid-cols-1 lg:inline-grid lg:grid-cols-3 gap-6 lg:gap-[31.447px] w-full items-stretch relative">
            <DiscoveryCard />
            <CreationCard />
            <HeritageCard />
          </div>
        </div>
      </div>
    </section>
  );
}
