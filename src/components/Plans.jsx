import React from "react";
import "./Plans.css";

/* ── Reusable feature list item ── */
function ListItem({ label }) {
  return (
    <div className="flex items-start gap-2.5 w-full">
      <p className="text-[#D4AF37] font-montserrat text-base leading-[20.96px] w-fit shrink-0">
        ✦
      </p>
      <p className="text-[rgba(250,247,240,0.70)] font-montserrat text-base leading-[20.96px]">
        {label}
      </p>
    </div>
  );
}

/* ── Discovery Card (standard border) ── */
function DiscoveryCard() {
  return (
    <div className="pl-card-standard flex p-[42px] flex-col items-start rounded-[21px] border-[1.31px] border-[rgba(212,175,55,0.18)] w-full h-full transition-transform duration-300 hover:scale-[1.01] shadow-xl">
      {/* Plan label */}
      <div className="flex pb-2.5 flex-col items-start w-full">
        <p
          className="text-[#E7D3A4] font-montserrat text-base leading-[20.96px] w-fit"
          style={{ letterSpacing: "0.25em" }}
        >
          The Discovery
        </p>
      </div>

      {/* Price */}
      <div className="flex pb-4 flex-col items-start w-full">
        <p className="text-[#F4E6C1] font-cinzel text-[31px] font-medium leading-[41.93px] w-fit">
          Complimentary
        </p>
      </div>

      {/* Description */}
      <div className="flex pb-[31px] flex-col items-start w-full">
        <p className="text-[rgba(250,247,240,0.70)] font-montserrat text-base leading-[25.55px]">
          A 30-minute virtual introduction to explore your ideas.
        </p>
      </div>

      {/* Features */}
      <div className="flex pb-[42px] flex-col items-start w-full flex-1 gap-2.5">
        <ListItem label="Virtual or in-person" />
        <ListItem label="Vision exploration" />
        <ListItem label="Style guidance" />
      </div>

      {/* CTA — outlined gold */}
      <button
        className="cursor-pointer flex py-[21px] px-[42px] flex-col justify-center items-center rounded-[15.7px] border-[1.31px] border-[#D4AF37] w-full hover:bg-[#D4AF37]/10 transition-colors"
      >
        <p
          className="text-[#D4AF37] font-montserrat text-lg font-medium leading-[26.21px] w-fit"
          style={{ letterSpacing: "0.1429em" }}
        >
          Book Free Session
        </p>
      </button>
    </div>
  );
}

/* ── Creation Card (featured / gold fill) ── */
function CreationCard() {
  return (
    <div className="relative pl-card-featured flex p-[42px] flex-col items-start rounded-[21px] border-[1.31px] border-[rgba(212,175,55,0.44)] w-full h-full transition-transform duration-300 hover:scale-[1.01]">
      {/* Most Popular badge */}
      <div
        className="pl-badge absolute -top-3.5 flex py-[5px] px-[21px] flex-col items-start rounded-[131px] w-fit"
        style={{ left: "50%", transform: "translateX(-50%)" }}
      >
        <p
          className="text-[#0A0800] font-montserrat text-[13px] leading-[19.65px] w-fit whitespace-nowrap"
          style={{ letterSpacing: "0.2em" }}
        >
          Most Popular
        </p>
      </div>

      {/* Plan label */}
      <div className="flex pb-2.5 flex-col items-start w-full">
        <p
          className="text-[#E7D3A4] font-montserrat text-base leading-[20.96px] w-fit"
          style={{ letterSpacing: "0.25em" }}
        >
          The Creation
        </p>
      </div>

      {/* Price */}
      <div className="flex pb-4 flex-col items-start w-full">
        <p className="text-[#F4E6C1] font-cinzel text-[31px] font-medium leading-[41.93px] w-fit">
          From ₹85,000
        </p>
      </div>

      {/* Description */}
      <div className="flex pb-[31px] flex-col items-start w-full">
        <p className="text-[rgba(250,247,240,0.70)] font-montserrat text-base leading-[25.55px]">
          Full bespoke design service from consultation to finished piece.
        </p>
      </div>

      {/* Features */}
      <div className="flex pb-[42px] flex-col items-start w-full flex-1 gap-2.5">
        <ListItem label="60-min consultation" />
        <ListItem label="Bespoke sketches & 3D renders" />
        <ListItem label="3 revision rounds" />
        <ListItem label="Gemstone sourcing" />
        <ListItem label="Master crafting" />
        <ListItem label="Lifetime aftercare" />
      </div>

      {/* CTA — solid gold */}
      <button
        className="cursor-pointer flex py-[21px] px-[42px] flex-col justify-center items-center rounded-[15.7px] w-full hover:brightness-110 transition-all duration-300"
        style={{
          background:
            "linear-gradient(135deg, #B8952A 0%, #D4AF37 40%, #F0D060 70%, #C9A227 100%)",
          boxShadow:
            "0 0 18.344px rgba(212,175,55,0.14), 0 2.621px 10.482px rgba(0,0,0,0.30)",
        }}
      >
        <p
          className="text-[#0A0800] font-montserrat text-lg font-medium leading-[26.21px] w-fit"
          style={{ letterSpacing: "0.1429em" }}
        >
          Begin Creation
        </p>
      </button>
    </div>
  );
}

/* ── Heritage Card (standard border) ── */
function HeritageCard() {
  return (
    <div className="pl-card-standard flex p-[42px] flex-col items-start rounded-[21px] border-[1.31px] border-[rgba(212,175,55,0.18)] w-full h-full transition-transform duration-300 hover:scale-[1.01] shadow-xl">
      {/* Plan label */}
      <div className="flex pb-2.5 flex-col items-start w-full">
        <p
          className="text-[#E7D3A4] font-montserrat text-base leading-[20.96px] w-fit"
          style={{ letterSpacing: "0.25em" }}
        >
          The Heritage
        </p>
      </div>

      {/* Price */}
      <div className="flex pb-4 flex-col items-start w-full">
        <p className="text-[#F4E6C1] font-cinzel text-[31px] font-medium leading-[41.93px] w-fit">
          Custom Quote
        </p>
      </div>

      {/* Description */}
      <div className="flex pb-[31px] flex-col items-start w-full">
        <p className="text-[rgba(250,247,240,0.70)] font-montserrat text-base leading-[25.55px]">
          Complete heirloom redesign service, preserving your stones and
          history.
        </p>
      </div>

      {/* Features */}
      <div className="flex pb-[42px] flex-col items-start w-full flex-1 gap-2.5">
        <ListItem label="Heirloom assessment" />
        <ListItem label="Redesign concepts" />
        <ListItem label="Stone extraction & reuse" />
        <ListItem label="Certificate of provenance" />
      </div>

      {/* CTA — outlined gold */}
      <button
        className="cursor-pointer flex py-[21px] px-[42px] flex-col justify-center items-center rounded-[15.7px] border-[1.31px] border-[#D4AF37] w-full hover:bg-[#D4AF37]/10 transition-colors"
      >
        <p
          className="text-[#D4AF37] font-montserrat text-lg font-medium leading-[26.21px] w-fit"
          style={{ letterSpacing: "0.1429em" }}
        >
          Enquire Now
        </p>
      </button>
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
          <p
            className="text-[#E7D3A4] font-montserrat text-base font-medium leading-[20.96px] w-fit"
            style={{ letterSpacing: "0.3333em" }}
          >
            Promotions &amp; Plans
          </p>
        </div>

        {/* Heading */}
        <div className="flex pt-[21px] flex-col items-center w-full">
          <p
            className="text-[#FAF7F0] font-cinzel w-fit"
            style={{
              fontSize: "clamp(28px,3.5vw,47px)",
              lineHeight: "52.41px",
              letterSpacing: "0.05em",
            }}
          >
            Your Journey Begins Here
          </p>
        </div>

        {/* Gold Divider */}
        <div className="flex pt-2.5 items-center gap-[21px] w-full" style={{ height: "34px" }}>
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

        {/* 3-column Cards Grid */}
        <div className="flex pt-[63px] flex-col items-start w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-[31.447px] w-full items-stretch">
            <DiscoveryCard />
            <CreationCard />
            <HeritageCard />
          </div>
        </div>
      </div>
    </section>
  );
}
