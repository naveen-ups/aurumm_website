import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="ft-bg border-t-[1.31px] border-[#c8a431] w-full overflow-hidden"
      style={{
        borderImage:
          "linear-gradient(90deg, #c8a431, #62501880, #c8a431, #62501880, #c8a431, #62501890, #c8a431, #62501880, #c8a431) 1",
      }}
    >
      {/* ── Inner container — max-w-[1509.445px], px-[31px], pt-[85px] ── */}
      <div
        className="mx-auto w-full flex flex-col items-start px-[clamp(20px,2vw,31px)] pt-6 sm:pt-[clamp(40px,6vw,85px)]"
        style={{ maxWidth: "1509.445px" }}
      >
        {/* ── 4-Column Grid ── */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full gap-8 lg:gap-0">

          {/* Column 1 — Brand */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1 flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:max-w-[305px] pb-6 lg:pb-0">
            <p
              className="text-[#FAF7F0] font-cinzel leading-[41.93px] w-fit"
              style={{ fontSize: "31px", letterSpacing: "0.25em" }}
            >
              Aurumm
            </p>
            <p
              className="text-[rgba(250,247,240,0.70)] font-montserrat text-base leading-[25.55px] max-w-[305px] w-full"
              style={{ paddingTop: "12px" }}
            >
              Bespoke jewellery crafted for your legacy. Every piece, a story.
            </p>
          </div>

          {/* Column 2 — Services */}
          <div className="flex flex-col items-start col-span-1">
            <p
              className="text-[#D4AF37] font-montserrat text-[13px] leading-[19.65px] w-fit"
              style={{ letterSpacing: "0.3em" }}
            >
              Services
            </p>
            <div className="flex flex-col items-start" style={{ paddingTop: "21px" }}>
              {["Custom Design", "Heritage Redesign", "Gemstone Consultation", "Book a Session"].map(
                (item, i) => (
                  <a
                    key={i}
                    href={
                      item === "Custom Design" ? "#custom" :
                      item === "Heritage Redesign" ? "#heritage" :
                      item === "Gemstone Consultation" ? "#gemstone" :
                      "#book"
                    }
                    className="text-[rgba(250,247,240,0.70)] font-montserrat text-base leading-[20.96px] w-fit hover:text-[#D4AF37] transition-colors"
                    style={i > 0 ? { paddingTop: "10px", display: "block" } : { display: "block" }}
                  >
                    {item}
                  </a>
                )
              )}
            </div>
          </div>

          {/* Column 3 — Collection */}
          <div className="flex flex-col items-start col-span-1">
            <p
              className="text-[#D4AF37] font-montserrat text-[13px] leading-[19.65px] w-fit"
              style={{ letterSpacing: "0.3em" }}
            >
              Collection
            </p>
            <div className="flex flex-col items-start" style={{ paddingTop: "21px" }}>
              {["Engagement", "Statement", "Everyday Luxury", "Heirloom"].map(
                (item, i) => (
                  <a
                    key={i}
                    href="#shop"
                    className="text-[rgba(250,247,240,0.70)] font-montserrat text-base leading-[20.96px] w-fit hover:text-[#D4AF37] transition-colors"
                    style={i > 0 ? { paddingTop: "10px", display: "block" } : { display: "block" }}
                  >
                    {item}
                  </a>
                )
              )}
            </div>
          </div>

          {/* Column 4 — Connect */}
          <div className="flex flex-col items-start col-span-2 sm:col-span-1 pt-6 sm:pt-0">
            <p
              className="text-[#D4AF37] font-montserrat text-[13px] leading-[19.65px] w-fit"
              style={{ letterSpacing: "0.3em" }}
            >
              Connect
            </p>
            <div className="flex flex-col items-start" style={{ paddingTop: "21px" }}>
              {[
                { label: "Instagram", href: "https://instagram.com/aurumm.jewellery" },
                { label: "Pinterest", href: "https://pinterest.com" },
                { label: "Email Us", href: "mailto:hello@aurumm.com" },
                { label: "WhatsApp", href: "https://wa.me/919876543210" },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  className="text-[rgba(250,247,240,0.70)] font-montserrat text-base leading-[20.96px] w-fit hover:text-[#D4AF37] transition-colors"
                  style={i > 0 ? { paddingTop: "10px", display: "block" } : { display: "block" }}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ── Copyright Bar — pt-[63px] then inner pt-[42px] border-t ── */}
        <div className="flex flex-col items-center w-full" style={{ paddingTop: "63px" }}>
          <div
            className="flex flex-col sm:flex-row pt-[42px] justify-between items-center w-full gap-4 border-t-[1.31px] border-t-[rgba(212,175,55,0.18)]"
          >
            <div className="flex flex-col items-start w-fit">
              <p className="text-[rgba(250,247,240,0.70)] font-montserrat text-base leading-[20.96px] w-fit">
                © 2024 Aurumm. All rights reserved.
              </p>
            </div>

            <div className="flex items-center gap-[5px] w-fit">
              <p className="text-[#D4AF37] font-montserrat text-base leading-[20.96px]">✦</p>
              <p className="text-[#D4AF37] font-montserrat text-base leading-[20.96px]">✦</p>
              <p className="text-[#D4AF37] font-montserrat text-base leading-[20.96px]">✦</p>
            </div>

            <div className="flex flex-col items-start w-fit">
              <p className="text-[rgba(250,247,240,0.70)] font-montserrat text-base leading-[20.96px] w-fit">
                Handcrafted with care
              </p>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
