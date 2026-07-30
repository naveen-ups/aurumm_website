import React from 'react';

export default function ConnectWithUs() {
  return (
    <section id="contact" className="py-12 md:py-20 px-4 sm:px-6 flex flex-col items-center w-full bg-[#F8F3E9]">
      <div className="max-w-[1152px] flex flex-col items-start gap-7 w-full">
        {/* Header matching 19.png & figma.tsx lines 2616-2627 */}
        <div className="flex flex-col items-center w-full text-center">
          <p className="text-[#9C7C5E] font-inter text-xs leading-4 tracking-[0.35em] uppercase mb-2">
            Find Us
          </p>
          <h2 className="text-[#40312A] font-androgyDemo text-[clamp(30px,6vw,56px)] leading-tight text-center mb-8 md:mb-10">
            <span className="swash">C</span>onnect with <span className="swash">U</span>s
          </h2>
        </div>

        {/* Content layout: Left cards + Right map matching 19.png & figma.tsx lines 2628-2830 */}
        <div className="flex items-center gap-5 w-full flex-wrap lg:flex-nowrap">
          {/* Left Side */}
          <div className="flex flex-col items-start gap-4 shrink-0 w-full lg:w-[689px]">
            {/* Top row: Address + Phone/Email */}
            <div className="flex items-center gap-4 sm:gap-5 w-full flex-wrap md:flex-nowrap">
              {/* Studio Address Card matching figma.tsx line 2631 */}
              <div className="flex p-5 items-start gap-4 rounded-[14px] bg-[#FEFEFE] w-full md:flex-1 min-h-[184px] shadow-xs">
                <span className="text-xl text-[#4A0612] pt-0.5">📍</span>
                <div className="flex flex-col items-start">
                  <h3 className="font-timesNewNormal text-[#40312A] text-lg leading-7 mb-1">Aurumm Jewellery Studio</h3>
                  <p className="font-inter text-[#6B5348] text-sm leading-[22.75px]">
                    Somewhere ,007<br />
                    Some street<br />
                    Somewhere in the world<br />
                    pin code 110123<br />
                    India
                  </p>
                </div>
              </div>

              {/* Phone + Email Column matching figma.tsx lines 2682-2772 */}
              <div className="flex flex-col items-start gap-4 w-full md:flex-1">
                {/* Phone Card */}
                <div className="flex p-5 items-center gap-4 rounded-[14px] bg-[#FEFEFE] w-full shadow-xs">
                  <span className="text-xl text-[#4A0612]">📞</span>
                  <div className="flex flex-col items-start">
                    <p className="font-timesNewNormal text-[#9C7C5E] text-xs leading-4 tracking-[0.1em] uppercase">Phone</p>
                    <p className="font-cormorantGaramond text-[#40312A] text-lg leading-7">+44 7700 000 000</p>
                  </div>
                </div>

                {/* Email Card */}
                <div className="flex p-5 items-center gap-4 rounded-[14px] bg-[#FEFEFE] w-full shadow-xs">
                  <span className="text-xl text-[#4A0612]">✉️</span>
                  <div className="flex flex-col items-start">
                    <p className="font-timesNewNormal text-[#9C7C5E] text-xs leading-4 tracking-[0.1em] uppercase">Email</p>
                    <p className="font-cormorantGaramond text-[#40312A] text-lg leading-7">hello@aurumm.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Studio Hours Card matching figma.tsx lines 2774-2818 */}
            <div className="flex p-5 flex-col items-start rounded-[14px] bg-[#FEFEFE] w-full shadow-xs">
              <p className="font-inter text-[#9C7C5E] text-xs leading-4 tracking-[0.1em] uppercase mb-3">Studio Hours</p>
              <div className="flex flex-col gap-2 w-full">
                <div className="flex justify-between items-center w-full">
                  <p className="font-inter text-[#6B5348] text-sm leading-5">Monday – Friday</p>
                  <p className="font-inter text-[#40312A] text-sm font-medium leading-5">10:00 AM – 6:00 PM</p>
                </div>
                <div className="flex justify-between items-center w-full">
                  <p className="font-inter text-[#6B5348] text-sm leading-5">Saturday</p>
                  <p className="font-inter text-[#40312A] text-sm font-medium leading-5">11:00 AM – 4:00 PM</p>
                </div>
                <div className="flex justify-between items-center w-full">
                  <p className="font-inter text-[#6B5348] text-sm leading-5">Sunday</p>
                  <p className="font-inter text-[#40312A] text-sm font-medium leading-5">By Appointment Only</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Map Embed matching 19.png & figma.tsx line 2820 */}
          <div className="flex items-center rounded-2xl border-[3px] border-[rgba(71,20,20,0.08)] bg-[#EEE] w-full lg:w-[443px] h-[280px] sm:h-[344px] overflow-hidden shadow-sm">
            <iframe
              title="Aurumm Studio Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.8392319277!2d77.06889754725782!3d28.527280343940176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
