import React, { useState } from "react";
import "./BookConsultation.css";

export default function BookConsultation() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (!/^[A-Za-z\s]+$/.test(formData.name)) {
      newErrors.name = "Name should contain only letters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be exactly 10 digits";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      setSubmitError(null);

      try {
        const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';
        const response = await fetch(`${API_URL}/api/contact`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setSubmitted(true);
          setFormData({ name: "", email: "", phone: "", message: "" });
        } else {
          const data = await response.json();
          setSubmitError(data.error || 'Failed to send message. Please try again.');
        }
      } catch (error) {
        setSubmitError('Unable to connect to the server. Please try again later.');
        console.error("Submission error:", error);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <section
      id="book"
      className="relative w-full overflow-hidden border-t-[1.31px] border-t-[#C8A431]"
      style={{
        borderImage:
          "linear-gradient(90deg, #c8a431, #62501880, #c8a431, #62501880, #c8a431, #62501890, #c8a431, #62501880, #c8a431) 1",
        background: "linear-gradient(160deg, #1E1E1E 8.49%, #1A1610 41.7%, #1C1A10 58.3%, #1E1E1E 91.51%)"
      }}
    >
      {/* ── Inner container — matches Figma: left-[31px] top-[126px], max-w-[1509px], grid 646.62px+646.62px gap-[83.858px] ── */}
      <div
        className="w-full mx-auto px-[clamp(20px,2vw,31px)] py-6 sm:py-[clamp(60px,8vw,126px)]"
        style={{ maxWidth: "1920px" }}
      >
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-[83.858px] w-full items-start"
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
                noValidate
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
                    className={`rounded-[13.1px] border-[1.31px] ${errors.name ? 'border-[#D4AF37]' : 'border-[rgba(212,175,55,0.18)]'} bg-[#222] text-[#FAF7F0] placeholder-[rgba(250,247,240,0.40)] font-montserrat text-base px-4 w-full focus:outline-none focus:border-[#D4AF37] transition-colors h-[50px] sm:h-[60px]`}
                  />
                  {errors.name && <p className="text-[#D4AF37] font-montserrat text-xs mt-1.5">{errors.name}</p>}
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
                    className={`rounded-[13.1px] border-[1.31px] ${errors.email ? 'border-[#D4AF37]' : 'border-[rgba(212,175,55,0.18)]'} bg-[#222] text-[#FAF7F0] placeholder-[rgba(250,247,240,0.40)] font-montserrat text-base px-4 w-full focus:outline-none focus:border-[#D4AF37] transition-colors h-[50px] sm:h-[60px]`}
                  />
                  {errors.email && <p className="text-[#D4AF37] font-montserrat text-xs mt-1.5">{errors.email}</p>}
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
                    className={`rounded-[13.1px] border-[1.31px] ${errors.phone ? 'border-[#D4AF37]' : 'border-[rgba(212,175,55,0.18)]'} bg-[#222] text-[#FAF7F0] placeholder-[rgba(250,247,240,0.40)] font-montserrat text-base px-4 w-full focus:outline-none focus:border-[#D4AF37] transition-colors h-[50px] sm:h-[60px]`}
                  />
                  {errors.phone && <p className="text-[#D4AF37] font-montserrat text-xs mt-1.5">{errors.phone}</p>}
                </div>

                {/* Message */}
                <div className="flex flex-col items-start w-full">
                  <div className="flex pb-2.5 flex-col items-start w-full">
                    <div className="flex flex-col items-start w-full">
                      <p className="text-[#E7D3A4] font-montserrat text-[13px] leading-[19.65px] w-fit tracking-[0.3em] uppercase">
                        message
                      </p>
                    </div>
                  </div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="rounded-[13.1px] border-[1.31px] border-[rgba(212,175,55,0.18)] bg-[#222] text-[#FAF7F0] placeholder-[rgba(250,247,240,0.40)] font-montserrat text-base p-4 w-full focus:outline-none focus:border-[#D4AF37] transition-colors h-[120px] resize-none"
                  ></textarea>
                </div>

                {submitError && (
                  <div className="w-full bg-red-500/10 border border-red-500/30 rounded-lg p-3">
                    <p className="text-[#D4AF37] font-montserrat text-sm text-center">
                      {submitError}
                    </p>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-4 flex w-full h-[65.53px] items-center justify-center gap-[10.48px] px-[20.97px] py-[26.21px] rounded-[13.11px] bg-[linear-gradient(93deg,#B8952A_0%,#D4AF37_39.5%,#F0D060_69%,#C9A227_100%)] disabled:opacity-70 disabled:cursor-not-allowed hover:opacity-90 transition-opacity"
                >
                  <p className="text-[#0A0800] font-montserrat font-medium text-[13px] leading-[19.65px] w-fit tracking-[0.2em] uppercase">
                    {isSubmitting ? 'Sending...' : 'SEND ENQUIRY'}
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
