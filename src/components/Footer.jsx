import React from "react";
import "./Footer.css";
import Logo from "../assets/images/Logo.png";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="ft-bg border-t-[1.31px] border-t-[rgba(212,175,55,0.18)] w-full overflow-hidden"
    >
      {/* ── Inner container — max-w-[1920px], px-[31px], pt-[85px] ── */}
      <div
        className="mx-auto w-full flex flex-col items-start px-[clamp(20px,2vw,31px)] pt-6 sm:pt-[clamp(40px,6vw,85px)]"
        style={{ maxWidth: "1920px" }}
      >
        {/* ── 4-Column Grid ── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 w-full gap-8 lg:gap-[52.411px] justify-center lg:justify-start lg:max-w-fit mx-auto">

          {/* Column 1 — Brand */}
          <div className="col-span-2 lg:col-span-1 flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:max-w-[305px] pb-6 lg:pb-0">
            <div className="flex flex-col items-start w-full">
              <img
                src={Logo}
                className="w-[167px] h-[56px] max-w-none object-contain mx-auto lg:mx-0"
                alt="Aurumm"
              />
            </div>
            <div className="flex pt-[21px] flex-col items-start w-full lg:w-[304.97px]">
              <p className="text-[rgba(250,247,240,0.70)] font-montserrat text-base leading-[25.55px] w-full">
                Bespoke jewellery crafted for your<br className="hidden lg:block" /> legacy. Every piece, a story.
              </p>
            </div>
          </div>

          {/* Column 2 — Services */}
          <div className="flex flex-col items-start col-span-1">
            <div className="flex flex-col items-start w-full">
              <p className="text-[#D4AF37] font-montserrat text-[13px] leading-[19.65px] w-fit tracking-[0.3em] uppercase">
                Services
              </p>
            </div>
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
            <div className="flex flex-col items-start w-full">
              <p className="text-[#D4AF37] font-montserrat text-[13px] leading-[19.65px] w-fit tracking-[0.3em] uppercase">
                Collection
              </p>
            </div>
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
          <div className="flex flex-col items-start col-span-1">
            <div className="flex flex-col items-start w-full">
              <p className="text-[#D4AF37] font-montserrat text-[13px] leading-[19.65px] w-fit tracking-[0.3em] uppercase">
                Connect
              </p>
            </div>
            <div className="flex flex-col items-start" style={{ paddingTop: "21px" }}>
              {[
                { label: "Instagram", href: "https://www.instagram.com/kashissh.garg?igsh=MXY1ZXl6ZWQ3cTN1YQ%3D%3D&utm_source=qr" },
                { label: "Pinterest", href: "https://pinterest.com" },
                { label: "Email Us", href: "mailto:aurumm.designstudio@gmail.com" },
                { label: "WhatsApp", href: "https://wa.me/919315574332" },
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
