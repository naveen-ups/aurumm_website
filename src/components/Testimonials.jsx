import React from "react";
import "./Testimonials.css";

import firstImg from "../assets/images/Testimonials/firstpng.png";
import secondImg from "../assets/images/Testimonials/second.png";
import thirdImg from "../assets/images/Testimonials/third.png";

const testimonials = [
  {
    image: firstImg,
    quote:
      "Kashissh turned my late mother's diamond brooch into the most exquisite ring. I wear it every day. The craftsmanship and care she put into every detail is extraordinary.",
    name: "Priya Mehta",
    location: "Mumbai",
  },
  {
    image: secondImg,
    quote:
      "Kashissh turned my late mother's diamond brooch into the most exquisite ring. I wear it every day. The craftsmanship and care she put into every detail is extraordinary.",
    name: "Priya Mehta",
    location: "Mumbai",
  },
  {
    image: thirdImg,
    quote:
      "Kashissh turned my late mother's diamond brooch into the most exquisite ring. I wear it every day. The craftsmanship and care she put into every detail is extraordinary.",
    name: "Priya Mehta",
    location: "Mumbai",
  },
];

function StarRating() {
  return (
    <div className="flex items-start gap-[5px] w-full">
      {Array.from({ length: 5 }).map((_, i) => (
        <p
          key={i}
          className="text-[#D4AF37] font-montserrat text-base leading-[23.59px] w-fit"
        >
          ★
        </p>
      ))}
    </div>
  );
}

function TestimonialCard({ image, quote, name, location }) {
  return (
    <div className="tm-card flex p-[42px] flex-col items-start gap-[21px] rounded-[21px] border-[1.31px] border-[rgba(212,175,55,0.18)] w-full h-full transition-transform duration-300 hover:scale-[1.01] shadow-xl">
      {/* Image — exact Figma: w-[351px] h-[300px] */}
      <div
        className="w-full rounded-[13px] overflow-hidden shrink-0 bg-[#1E1E1E]"
        style={{ height: "300px" }}
      >
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
          onError={(e) => { e.target.style.display = "none"; }}
        />
      </div>

      {/* Stars */}
      <StarRating />

      {/* Quote */}
      <div className="flex flex-col items-start w-full" style={{ minHeight: "178px" }}>
        <p className="text-[rgba(250,247,240,0.70)] font-montserrat text-lg leading-[29.81px] w-full">
          &ldquo;{quote}&rdquo;
        </p>
      </div>

      {/* Author — with top divider */}
      <div className="flex pt-[21px] flex-col items-start border-t-[1.31px] border-t-[rgba(212,175,55,0.18)] w-full">
        <div className="flex flex-col items-start w-full">
          <p className="text-[#FAF7F0] font-cinzel text-lg font-medium leading-[26.21px] w-fit">
            {name}
          </p>
        </div>
        <div className="flex pt-[5px] flex-col items-start w-full">
          <p
            className="text-[#E7D3A4] font-montserrat text-base leading-[20.96px] w-fit"
            style={{ letterSpacing: "0.1em" }}
          >
            {location}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section
      id="reviews"
      className="tm-page-bg border-t-[1.31px] border-[#c8a431] w-full overflow-hidden"
      style={{
        borderImage:
          "linear-gradient(90deg, #c8a431, #62501880, #c8a431, #62501880, #c8a431, #62501890, #c8a431, #62501880, #c8a431) 1",
      }}
    >
      {/* Inner container — max-w-[1509.445px], px-[31px], pt-[127px] */}
      <div
        className="mx-auto w-full flex flex-col items-start"
        style={{
          maxWidth: "1509.445px",
          padding:
            "clamp(60px,8vw,127px) clamp(20px,2vw,31px) clamp(60px,6vw,100px)",
        }}
      >
        {/* Eyebrow */}
        <div className="flex flex-col items-center w-full">
          <p
            className="text-[#E7D3A4] font-montserrat text-base font-medium leading-[20.96px] w-fit"
            style={{ letterSpacing: "0.3333em" }}
          >
            Client Stories
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
            Written by Our Clients
          </p>
        </div>

        {/* Gold Divider */}
        <div
          className="flex pt-2.5 items-center gap-[21px] w-full"
          style={{ height: "34px" }}
        >
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
            {testimonials.map((t, i) => (
              <TestimonialCard key={i} {...t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
