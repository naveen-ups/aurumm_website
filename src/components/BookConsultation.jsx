import React, { useState } from 'react';

const TYPES = ['Custom Jewellery', 'Heritage Redesign', 'Gemstone Reading', 'General Enquiry'];

export default function BookConsultation() {
  const [activeType, setActiveType] = useState('Custom Jewellery');

  return (
    <section id="book" className="py-12 md:py-20 px-4 sm:px-6 flex flex-col items-center w-full bg-[#3E1122] text-white">
      <div className="max-w-[896px] flex flex-col items-center w-full">
        {/* Header matching 17.png, 18.png & figma.tsx lines 2434-2448 */}
        <p className="text-[#C5A882] font-inter text-xs leading-4 tracking-[0.35em] uppercase text-center mb-2">
          Reserve Your Time
        </p>
        <h2 className="text-white font-androgyDemo text-[clamp(30px,6vw,56px)] leading-tight text-center mb-4">
          <span className="swash">B</span>ook a <span className="swash">C</span>onsultation
        </h2>
        <p className="text-[rgba(255,255,255,0.70)] font-inter text-[15px] leading-[24.38px] text-center mb-10 md:mb-16 max-w-[576px]">
          Every exceptional piece begins with a single conversation. Tell us about your vision and we will make it a reality.
        </p>

        {/* Form Box matching 18.png & figma.tsx lines 2451-2608 */}
        <div className="p-5 sm:p-8 md:p-12 rounded-2xl bg-[#F8F3E9] text-[#40312A] w-full shadow-lg">
          <form className="flex flex-col gap-5 sm:gap-6" onSubmit={e => e.preventDefault()}>
            {/* Consultation Type Tabs */}
            <div>
              <p className="text-[#9C7C5E] font-inter text-xs font-medium leading-4 tracking-[0.1em] mb-3 uppercase">
                Consultation Type
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3">
                {TYPES.map((type) => (
                  <button
                    type="button"
                    key={type}
                    onClick={() => setActiveType(type)}
                    className={`py-3 px-3 rounded-[10px] font-inter text-xs font-medium transition-all ${
                      activeType === type
                        ? 'bg-white border border-[rgba(197,168,130,0.40)] text-[#4A0612] shadow-xs'
                        : 'bg-white/60 border border-[rgba(197,168,130,0.20)] text-[#6B5348] hover:bg-white'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Date & Time */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <p className="text-[#9C7C5E] font-inter text-xs font-medium leading-4 tracking-[0.1em] mb-2 uppercase">Preferred Date</p>
                <input type="date" className="w-full p-3 rounded-[10px] border border-[rgba(197,168,130,0.40)] bg-white font-inter text-sm text-[#40312A] focus:outline-none focus:border-[#4A0612]" />
              </div>
              <div>
                <p className="text-[#9C7C5E] font-inter text-xs font-medium leading-4 tracking-[0.1em] mb-2 uppercase">Preferred Time</p>
                <input type="time" className="w-full p-3 rounded-[10px] border border-[rgba(197,168,130,0.40)] bg-white font-inter text-sm text-[#40312A] focus:outline-none focus:border-[#4A0612]" />
              </div>
            </div>

            {/* Name & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <p className="text-[#9C7C5E] font-inter text-xs font-medium leading-4 tracking-[0.1em] mb-2 uppercase">Full Name</p>
                <input type="text" placeholder="Your name" className="w-full p-3 rounded-[10px] border border-[rgba(197,168,130,0.40)] bg-white font-inter text-sm text-[#40312A] placeholder-[#B5ABA1] focus:outline-none focus:border-[#4A0612]" />
              </div>
              <div>
                <p className="text-[#9C7C5E] font-inter text-xs font-medium leading-4 tracking-[0.1em] mb-2 uppercase">Email Address</p>
                <input type="email" placeholder="your@email.com" className="w-full p-3 rounded-[10px] border border-[rgba(197,168,130,0.40)] bg-white font-inter text-sm text-[#40312A] placeholder-[#B5ABA1] focus:outline-none focus:border-[#4A0612]" />
              </div>
            </div>

            {/* Phone & Budget */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <p className="text-[#9C7C5E] font-inter text-xs font-medium leading-4 tracking-[0.1em] mb-2 uppercase">Phone Number</p>
                <input type="tel" placeholder="+44 7700 000000" className="w-full p-3 rounded-[10px] border border-[rgba(197,168,130,0.40)] bg-white font-inter text-sm text-[#40312A] placeholder-[#B5ABA1] focus:outline-none focus:border-[#4A0612]" />
              </div>
              <div>
                <p className="text-[#9C7C5E] font-inter text-xs font-medium leading-4 tracking-[0.1em] mb-2 uppercase">Budget Range</p>
                <select className="w-full p-3 rounded-[10px] border border-[rgba(197,168,130,0.40)] bg-white font-inter text-sm text-[#40312A] focus:outline-none focus:border-[#4A0612]">
                  <option value="">Select budget</option>
                  <option value="1">£1,000 – £3,000</option>
                  <option value="2">£3,000 – £5,000</option>
                  <option value="3">£5,000+</option>
                </select>
              </div>
            </div>

            {/* Design Requirements */}
            <div>
              <p className="text-[#9C7C5E] font-inter text-xs font-medium leading-4 tracking-[0.1em] mb-2 uppercase">Design Requirements &amp; Vision</p>
              <textarea rows={4} placeholder="Tell us about the piece you have in mind, any inspiration, gemstones of interest, or occasion..." className="w-full p-3 rounded-[10px] border border-[rgba(197,168,130,0.40)] bg-white font-inter text-sm text-[#40312A] placeholder-[#B5ABA1] focus:outline-none focus:border-[#4A0612]"></textarea>
            </div>

            {/* Drag & drop upload box */}
            <div>
              <p className="text-[#9C7C5E] font-inter text-xs font-medium leading-4 tracking-[0.1em] mb-2 uppercase">Upload Reference Images</p>
              <div className="border-[1.48px] border-dashed border-[rgba(197,168,130,0.40)] rounded-[10px] p-6 sm:p-8 text-center bg-white cursor-pointer hover:border-[#4A0612] transition-colors">
                <p className="font-inter text-sm text-[#4A0612]">
                  Drag &amp; drop images here, or <span className="underline font-semibold">browse</span>
                </p>
                <p className="font-inter text-xs text-[#B5ABA1] mt-1">PNG, JPG, WEBP up to 10MB each</p>
              </div>
            </div>

            {/* Submit Button matching 18.png */}
            <button type="submit" className="w-full py-4 rounded-[10px] bg-[#4A0612] text-white font-inter text-sm font-medium tracking-[0.1em] hover:bg-[#3E1122] transition-colors uppercase mt-2">
              Request Consultation
            </button>
            <p className="font-inter text-xs text-center text-[#9C7C5E]">We will respond within 24 hours to confirm your appointment.</p>
          </form>
        </div>
      </div>
    </section>
  );
}
