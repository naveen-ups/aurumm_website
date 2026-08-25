import React from "react";
import "./TeamConsultants.css";

const teamMembers = [
  {
    name: "Kashissh Garg",
    role: "Founder & Lead Designer",
    specialty: "Bespoke Design · Gemology · Vedic<br/>Astrology",
  },
  {
    name: "Aryan Kapoor",
    role: "Master Goldsmith",
    specialty: "Hand Finishing · Setting · Fabrication",
  },
  {
    name: "Meera Joshi",
    role: "Client Experience",
    specialty: "Consultations · Project Management",
  },
];

function TeamCard({ name, role, specialty }) {
  return (
    <div 
      className="flex p-6 sm:p-8 lg:p-[42px] flex-col items-start rounded-[21px] border-[1.31px] border-[rgba(212,175,55,0.18)] w-full h-full transition-transform duration-300 hover:scale-[1.01] shadow-xl"
      style={{ background: "linear-gradient(145deg, #252320 6.17%, #1E1C14 58.77%, #222018 93.83%)" }}
    >
      {/* Avatar */}
      <div className="flex flex-col items-center w-full">
        <div className="rounded-full border-[1.31px] border-[rgba(212,175,55,0.18)] bg-[#1E1E1E] w-[105px] h-[105px]">
        </div>
      </div>

      {/* Name */}
      <div className="flex pt-[21px] flex-col items-center w-full lg:h-[52px]">
        <p className="text-[#FAF7F0] font-cinzel text-[21px] leading-[31.45px] w-fit tracking-[0.025em] text-center uppercase">
          {name}
        </p>
      </div>

      {/* Role */}
      <div className="flex pt-[5px] flex-col items-center w-full lg:h-[26px]">
        <p className="text-[#D4AF37] font-montserrat text-base leading-[20.96px] w-fit tracking-[0.1667em] text-center uppercase">
          {role}
        </p>
      </div>

      {/* Specialty */}
      <div className="flex pt-4 flex-col items-center w-full">
        <p className="text-[rgba(250,247,240,0.70)] font-montserrat text-base leading-[20.96px] w-fit text-center">
          {specialty.split('<br/>').map((part, i, arr) => (
            <React.Fragment key={i}>
              {part}
              {i < arr.length - 1 && <br className="hidden lg:block" />}
            </React.Fragment>
          ))}
        </p>
      </div>
    </div>
  );
}

export default function TeamConsultants() {
  return (
    <section
      id="team"
      className="tc-section-bg border-t-[1.31px] border-[#c8a431] w-full overflow-hidden"
      style={{
        borderImage:
          "linear-gradient(90deg, #c8a431, #62501880, #c8a431, #62501880, #c8a431, #62501890, #c8a431, #62501880, #c8a431) 1",
      }}
    >
      {/* Inner container — max-w-[1920px], px-[31px], pt-[127px] */}
      <div
        className="mx-auto w-full flex flex-col items-start"
        style={{
          maxWidth: "1920px",
          padding: "clamp(60px,8vw,127px) clamp(20px,2vw,31px) clamp(60px,6vw,100px)",
        }}
      >
        {/* Eyebrow */}
        <div className="flex flex-col items-center w-full">
          <p className="text-[#D4AF37] font-montserrat text-base font-medium leading-[20.96px] w-fit tracking-[0.3333em] uppercase text-center">
            The Artisans
          </p>
        </div>

        {/* Heading */}
        <div className="flex pt-[21px] flex-col items-center w-full lg:h-[73px]">
          <p 
            className="text-[#FAF7F0] font-cinzel font-normal w-fit tracking-[0.05em] uppercase text-center"
            style={{
              fontSize: "clamp(32px,3.5vw,47px)",
              lineHeight: "1.2",
            }}
          >
            Our Team
          </p>
        </div>

        {/* Gold Divider */}
        <div className="flex pt-2.5 items-center gap-[21px] w-full lg:h-[34px]">
          <div
            className="flex-1 h-px shrink-0"
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
            className="flex-1 h-px shrink-0"
            style={{
              background:
                "linear-gradient(270deg, rgba(212,175,55,0.00) 0%, rgba(212,175,55,0.25) 100%)",
            }}
          />
        </div>

        {/* Team Cards Grid — 3 columns matching Figma: col gaps ~470px / ~939px */}
        <div className="flex pt-[63px] flex-col items-start w-full">
          <div className="grid grid-cols-1 lg:inline-grid lg:grid-cols-3 gap-6 lg:gap-[31.447px] w-full items-stretch relative">
            {teamMembers.map((member, i) => (
              <TeamCard key={i} {...member} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
