import React, { useState } from "react";
import "./BookConsultation.css";

export default function BookConsultation() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="book"
      className="relative w-full overflow-hidden border-t-[1.31px] border-t-[#C8A431]"
      style={{
        background: "linear-gradient(160deg, #1E1E1E 8.49%, #1A1610 41.7%, #1C1A10 58.3%, #1E1E1E 91.51%)"
      }}
    >
      {/* ── Inner container — matches Figma: left-[31px] top-[126px], max-w-[1509px], grid 646.62px+646.62px gap-[83.858px] ── */}
      <div
        className="w-full mx-auto px-[clamp(20px,2vw,31px)] py-6 sm:py-[clamp(60px,8vw,126px)]"
        style={{ maxWidth: "1509.445px" }}
      >
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-[83.858px] w-full max-w-[1377px] mx-auto items-start"
        >
          {/* ── LEFT COLUMN ── */}
          <div className="flex flex-col items-start w-full">
            {/* Eyebrow */}
            <div className="flex flex-col items-start w-full">
              <p className="text-[#D4AF37] font-montserrat text-base font-medium leading-[20.96px] w-fit tracking-[0.3333em] uppercase">
                Reach Out
              </p>
            </div>

            {/* Heading */}
            <div className="flex pt-[21px] flex-col items-start w-full lg:h-[73px]">
              <h2 
                className="text-[#FAF7F0] font-cinzel font-normal w-fit tracking-[0.025em]"
                style={{
                  fontSize: "clamp(28px,3.5vw,47px)",
                  lineHeight: "1.2",
                }}
              >
                Begin a Conversation
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
              <p className="text-[#D4AF37] font-montserrat text-base leading-[23.59px]">
                ✦
              </p>
              <div
                className="flex-1 h-px"
                style={{
                  background:
                    "linear-gradient(270deg, rgba(212,175,55,0.00) 0%, rgba(212,175,55,0.25) 100%)",
                }}
              />
            </div>

            {/* Description */}
            <div className="flex flex-col items-start w-full">
              <p className="text-[rgba(250,247,240,0.70)] font-montserrat text-lg leading-[29.81px] w-full lg:w-[647px]">
                We would love to hear your story. Reach out to begin the journey<br className="hidden lg:block" />
                toward a piece that is entirely yours.
              </p>
            </div>

            {/* Contact Info Rows */}
            <div className="flex pt-8 lg:pt-[42px] flex-col items-start shrink-0 w-full lg:w-[647px]">
              {/* Studio */}
              <div className="flex flex-col items-start w-full">
                <div className="flex flex-col items-start w-full">
                  <p className="text-[#E7D3A4] font-montserrat text-[13px] leading-[19.65px] w-fit tracking-[0.3em] uppercase">
                    Studio
                  </p>
                </div>
                <div className="flex pt-[5px] flex-col items-start w-full lg:h-[31px]">
                  <p className="text-[#FAF7F0] font-montserrat text-lg leading-[26.21px] w-fit">
                    By appointment only
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex pt-[21px] flex-col items-start shrink-0 w-full lg:h-[72px]">
                <div className="flex flex-col items-start w-full">
                  <p className="text-[#E7D3A4] font-montserrat text-[13px] leading-[19.65px] w-fit tracking-[0.3em] uppercase">
                    Email
                  </p>
                </div>
                <div className="flex pt-[5px] flex-col items-start shrink-0 w-full lg:h-[31px]">
                  <a
                    href="mailto:aurumm.designstudio@gmail.com"
                    className="text-[#FAF7F0] font-montserrat text-lg leading-[26.21px] w-fit hover:text-[#D4AF37] transition-colors"
                  >
                    aurumm.designstudio@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex pt-[21px] flex-col items-start shrink-0 w-full lg:h-[72px]">
                <div className="flex flex-col items-start w-full">
                  <p className="text-[#E7D3A4] font-montserrat text-[13px] leading-[19.65px] w-fit tracking-[0.3em] uppercase">
                    Phone
                  </p>
                </div>
                <div className="flex pt-[5px] flex-col items-start shrink-0 w-full lg:h-[31px]">
                  <a
                    href="tel:+91 9315574332"
                    className="text-[#FAF7F0] font-montserrat text-lg leading-[26.21px] w-fit hover:text-[#D4AF37] transition-colors"
                  >
                    +91 9315574332
                  </a>
                </div>
              </div>

              {/* Instagram */}
              <div className="flex pt-[21px] flex-col items-start shrink-0 w-full lg:h-[72px]">
                <div className="flex flex-col items-start w-full">
                  <p className="text-[#E7D3A4] font-montserrat text-[13px] leading-[19.65px] w-fit tracking-[0.3em] uppercase">
                    Instagram
                  </p>
                </div>
                <div className="flex pt-[5px] flex-col items-start shrink-0 w-full lg:h-[31px]">
                  <a
                    href="https://www.instagram.com/kashissh.garg?igsh=MXY1ZXl6ZWQ3cTN1YQ%3D%3D&utm_source=qr"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#FAF7F0] font-montserrat text-lg leading-[26.21px] w-fit hover:text-[#D4AF37] transition-colors"
                  >
                    @kashissh.garg
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* ── RIGHT COLUMN — Send a Message ── */}
          <div className="flex flex-col items-start gap-[21px] w-full">
            {/* Form heading */}
            <div className="flex flex-col items-start w-full">
              <h3 className="text-[#FAF7F0] font-cinzel text-2xl leading-[36.69px] w-fit tracking-[0.025em]">
                Send a Message
              </h3>
            </div>

            {submitted ? (
              <div className="w-full bg-[#222] border border-[rgba(212,175,55,0.18)] rounded-[15.7px] p-8 text-center flex flex-col items-center">
                <span className="text-3xl text-[#D4AF37] mb-3">✦</span>
                <h4 className="font-cinzel text-xl text-[#FAF7F0] mb-2">
                  Message Received
                </h4>
                <p className="font-montserrat text-sm text-[rgba(250,247,240,0.70)]">
                  Thank you for reaching out,{" "}
                  {formData.name || "friend"}. We will get back to you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 px-6 py-2.5 bg-gradient-to-r from-[#B8952A] via-[#D4AF37] to-[#F0D060] text-[#0A0800] font-montserrat font-medium text-xs tracking-[2px] uppercase rounded-[10px]"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col items-start gap-[21px] w-full"
              >
                {/* Name */}
                <div className="flex flex-col items-start w-full">
                  <div className="flex pb-2.5 flex-col items-start w-full">
                    <div className="flex flex-col items-start w-full">
                      <p className="text-[#E7D3A4] font-montserrat text-[13px] leading-[19.65px] w-fit tracking-[0.3em] uppercase">
                        name
                      </p>
                    </div>
                  </div>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="rounded-[13.1px] border-[1.31px] border-[rgba(212,175,55,0.18)] bg-[#222] text-[#FAF7F0] placeholder-[rgba(250,247,240,0.40)] font-montserrat text-base px-4 w-full focus:outline-none focus:border-[#D4AF37] transition-colors h-[50px] sm:h-[60px]"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col items-start w-full">
                  <div className="flex pb-2.5 flex-col items-start w-full">
                    <div className="flex flex-col items-start w-full">
                      <p className="text-[#E7D3A4] font-montserrat text-[13px] leading-[19.65px] w-fit tracking-[0.3em] uppercase">
                        email
                      </p>
                    </div>
                  </div>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="rounded-[13.1px] border-[1.31px] border-[rgba(212,175,55,0.18)] bg-[#222] text-[#FAF7F0] placeholder-[rgba(250,247,240,0.40)] font-montserrat text-base px-4 w-full focus:outline-none focus:border-[#D4AF37] transition-colors h-[50px] sm:h-[60px]"
                  />
                </div>

                {/* Phone */}
                <div className="flex flex-col items-start w-full">
                  <div className="flex pb-2.5 flex-col items-start w-full">
                    <div className="flex flex-col items-start w-full">
                      <p className="text-[#E7D3A4] font-montserrat text-[13px] leading-[19.65px] w-fit tracking-[0.3em] uppercase">
                        phone
                      </p>
                    </div>
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="rounded-[13.1px] border-[1.31px] border-[rgba(212,175,55,0.18)] bg-[#222] text-[#FAF7F0] placeholder-[rgba(250,247,240,0.40)] font-montserrat text-base px-4 w-full focus:outline-none focus:border-[#D4AF37] transition-colors h-[50px] sm:h-[60px]"
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col items-start w-full">
                  <div className="flex pb-2.5 flex-col items-start w-full">
                    <div className="flex flex-col items-start w-full">
                      <p className="text-[#E7D3A4] font-montserrat text-[13px] leading-[19.65px] w-fit tracking-[0.3em] uppercase">
                        Message
                      </p>
                    </div>
                  </div>
                  <textarea
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="rounded-[13.1px] border-[1.31px] border-[rgba(212,175,55,0.18)] bg-[#222] text-[#FAF7F0] font-montserrat text-base p-4 w-full focus:outline-none focus:border-[#D4AF37] transition-colors resize-none lg:h-[165px] h-[120px]"
                  />
                </div>

                {/* Send Enquiry Button */}
                <button
                  type="submit"
                  className="cursor-pointer text-nowrap flex py-[21px] px-[42px] flex-col justify-center items-center rounded-[15.7px] w-full hover:brightness-110 transition-all duration-300"
                  style={{
                    background:
                      "linear-gradient(135deg, #B8952A 0%, #D4AF37 40%, #F0D060 70%, #C9A227 100%)",
                    boxShadow:
                      "0 0 18.344px rgba(212,175,55,0.14), 0 2.621px 10.482px rgba(0,0,0,0.30)",
                  }}
                >
                  <p className="text-[#0A0800] font-montserrat text-lg font-medium leading-[26.21px] w-fit tracking-[0.1429em] uppercase">
                    Send Enquiry
                  </p>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
