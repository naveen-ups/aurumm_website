import React, { useState } from "react";

const goldGradient =
  "bg-[linear-gradient(117deg,rgba(184,149,42,1)_0%,rgba(212,175,55,1)_40%,rgba(240,208,96,1)_70%,rgba(201,162,39,1)_100%)]";

export default function Hero() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const handleConsultationSubmit = async (event) => {
    event.preventDefault();
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

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      setIsSubmitting(true);
      setSubmitError(null);

      try {
        const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';
        const response = await fetch(`${API_URL}/api/contact`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name: formData.name, email: formData.email }),
        });

        if (response.ok) {
          setIsSubmitted(true);
          setFormData({ name: "", email: "" });
        } else {
          const data = await response.json();
          setSubmitError(data.error || 'Failed to request consultation.');
        }
      } catch (error) {
        setSubmitError('Unable to connect to server. Please try again later.');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <main className="w-full overflow-hidden bg-[#0f0f10]">
      <section
        aria-labelledby="hero-title"
        className="relative flex min-h-[100dvh] sm:min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-[linear-gradient(144deg,rgba(15,15,16,1)_0%,rgba(26,18,8,1)_40%,rgba(13,13,16,1)_70%,rgba(19,15,8,1)_100%)] px-[clamp(20px,4vw,50px)] pb-[160px] sm:pb-[180px] pt-[clamp(80px,10vw,125.79px)] border-b-[1.31px] border-[#c8a431]"
        style={{
          borderImage:
            "linear-gradient(90deg, #c8a431, #62501880, #c8a431, #62501880, #c8a431, #62501890, #c8a431, #62501880, #c8a431) 1",
        }}
      >
        {/* Decorative Backgrounds */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-0 z-0 h-full w-full opacity-[0.06]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-0 z-0 h-[500px] w-[500px] bg-[radial-gradient(50%_50%_at_32%_32%,rgba(212,175,55,0.06)_0%,rgba(212,175,55,0)_60%)]"
        >
          <div className="relative left-[-20%] top-[10%] h-[200%] w-[200%] rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,rgba(212,175,55,0.08)_0%,rgba(212,175,55,0.02)_40%,rgba(212,175,55,0)_70%)]" />
        </div>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[-10%] bottom-[-10%] z-0 h-[400px] w-[400px] bg-[radial-gradient(50%_50%_at_68%_68%,rgba(212,175,55,0.04)_0%,rgba(212,175,55,0)_60%)]"
        />

        {/* Content Container */}
        <div className="relative z-10 flex flex-col items-center w-full max-w-7xl mx-auto">
          <p className="mb-[clamp(12px,2vw,20px)] text-center font-medium tracking-[clamp(1.5px,0.5vw,5.24px)] text-[#e7d3a4] font-['Montserrat',sans-serif] text-[clamp(10px,1.2vw,15.7px)] uppercase sm:whitespace-nowrap whitespace-normal">
            Bespoke · Timeless · Personal
          </p>
          
          <h1
            id="hero-title"
            className="flex flex-col items-center font-normal font-['Cinzel',serif] w-full"
          >
            <span className="text-center tracking-[clamp(2px,0.5vw,6.29px)] text-[#faf7f0] text-[clamp(28px,8vw,115.3px)] leading-[1.1] sm:whitespace-nowrap whitespace-normal">
              DESIGNED FOR
            </span>
            <span
              className={`text-center tracking-[clamp(2px,0.5vw,6.29px)] text-[clamp(28px,8vw,115.3px)] leading-[1.1] text-transparent bg-clip-text [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] sm:whitespace-nowrap whitespace-normal ${goldGradient}`}
            >
              YOUR LEGACY
            </span>
          </h1>

          <div className="flex flex-col items-center px-0 sm:px-4 pb-[clamp(30px,4vw,52.41px)] pt-[clamp(16px,2vw,30px)] max-w-[800px]">
            <p className="text-center font-light text-[#faf7f0b2] font-['Montserrat',sans-serif] text-[clamp(15px,1.8vw,21px)] leading-[clamp(24px,3vw,34.1px)]">
              Every piece we create begins with your story. Handcrafted with
              ethically sourced gemstones and timeless craft, jewellery that
              endures.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-[clamp(12px,1.5vw,20.96px)] w-full sm:w-auto">
            <a
              href="#collection"
              className={`flex min-h-[clamp(52px,5vw,68px)] w-full sm:w-[clamp(240px,25vw,300px)] md:w-auto items-center justify-center rounded-[clamp(12px,1.2vw,15.72px)] px-[clamp(24px,3vw,41.93px)] py-[clamp(12px,1.5vw,20.96px)] text-center font-medium tracking-[clamp(1.8px,0.2vw,2.62px)] text-[#0a0800] shadow-[0px_2.62px_10.48px_#0000004c,0px_0px_18.34px_#d4af3725] font-['Montserrat',sans-serif] text-[clamp(13px,1.5vw,18.3px)] transition-transform hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#faf7f0] whitespace-nowrap ${goldGradient}`}
            >
              SHOP THE COLLECTION
            </a>
            <button
              type="button"
              onClick={() => {
                setIsSubmitted(false);
                setIsConsultationOpen(true);
              }}
              className="flex min-h-[clamp(52px,5vw,68px)] w-full sm:w-[clamp(240px,25vw,300px)] md:w-auto items-center justify-center rounded-[clamp(12px,1.2vw,15.72px)] border-[1.31px] border-solid border-[#d4af37] px-[clamp(24px,3vw,41.93px)] py-[clamp(12px,1.5vw,20.96px)] text-center font-medium tracking-[clamp(1.8px,0.2vw,2.62px)] text-[#d4af37] font-['Montserrat',sans-serif] text-[clamp(13px,1.5vw,18.3px)] transition-colors hover:bg-[#d4af3714] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#faf7f0] whitespace-nowrap"
            >
              BOOK A CONSULTATION
            </button>
          </div>
        </div>
        {/* Scroll Indicator */}
        <a
          href="#collection"
          aria-label="Scroll to the collection"
          className="flex flex-col items-center gap-[10.48px] absolute left-1/2 -translate-x-1/2 bottom-0 sm:bottom-[52px] z-10 hover:opacity-80 transition-opacity"
        >
          <p className="text-[#D4AF37] font-['Montserrat',sans-serif] text-base font-medium leading-[20.96px] tracking-[0.333em] uppercase">
            SCROLL
          </p>
          <div className="bg-[linear-gradient(180deg,#D4AF37_0%,rgba(212,175,55,0)_100%)] w-px h-[42px]"></div>
        </a>
      </section>

      {/* Hidden SEO text */}
      <section id="collection" className="sr-only" aria-label="Collection">
        Explore our handcrafted jewellery collection.
      </section>

      {/* Consultation Modal */}
      {isConsultationOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 md:p-5"
          role="dialog"
          aria-modal="true"
          aria-labelledby="consultation-title"
        >
          <div className="w-full max-w-[500px] rounded-2xl border border-[#d4af3766] bg-[linear-gradient(180deg,rgba(18,16,13,1)_0%,rgba(10,8,6,1)_100%)] p-6 md:p-8 text-[#faf7f0] shadow-2xl">
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <p className="mb-2 font-medium tracking-[3px] text-[#d4af37] font-['Montserrat',sans-serif] text-[clamp(10px,1.2vw,12px)]">
                  PERSONAL SERVICE
                </p>
                <h2
                  id="consultation-title"
                  className="font-normal tracking-[1px] font-['Cinzel',serif] text-[clamp(24px,2.5vw,30px)]"
                >
                  Book a Consultation
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setIsConsultationOpen(false)}
                aria-label="Close consultation form"
                className="text-3xl leading-none text-[#d4af37] transition-colors hover:text-[#faf7f0] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#faf7f0]"
              >
                &times;
              </button>
            </div>
            
            {isSubmitted ? (
              <div className="space-y-6">
                <p className="font-light text-[#faf7f0b2] font-['Montserrat',sans-serif] leading-7 text-[clamp(14px,1.5vw,16px)]">
                  Thank you. Our concierge will be in touch shortly to arrange
                  your personal consultation.
                </p>
                <button
                  type="button"
                  onClick={() => setIsConsultationOpen(false)}
                  className={`w-full rounded-xl px-6 py-4 font-medium tracking-[2px] text-[#0a0800] font-['Montserrat',sans-serif] text-sm transition-transform hover:brightness-110 ${goldGradient}`}
                >
                  CLOSE
                </button>
              </div>
            ) : (
              <form className="space-y-5" onSubmit={handleConsultationSubmit} noValidate>
                <label className="block">
                  <span className="mb-2 block font-medium tracking-[1.5px] text-[#e7d3a4] font-['Montserrat',sans-serif] text-[clamp(10px,1.2vw,12px)]">
                    NAME
                  </span>
                  <input
                    required
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    autoComplete="name"
                    className={`w-full rounded-lg border ${errors.name ? 'border-[#D4AF37]' : 'border-[#d4af3755]'} bg-[#ffffff08] px-4 py-3 md:py-4 text-[#faf7f0] placeholder-[#faf7f040] focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] transition-all outline-none`}
                    placeholder="Enter your full name"
                  />
                  {errors.name && <p className="text-[#D4AF37] font-montserrat text-xs mt-1.5">{errors.name}</p>}
                </label>
                <label className="block">
                  <span className="mb-2 block font-medium tracking-[1.5px] text-[#e7d3a4] font-['Montserrat',sans-serif] text-[clamp(10px,1.2vw,12px)]">
                    EMAIL
                  </span>
                  <input
                    required
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="email"
                    className={`w-full rounded-lg border ${errors.email ? 'border-[#D4AF37]' : 'border-[#d4af3755]'} bg-[#ffffff08] px-4 py-3 md:py-4 text-[#faf7f0] placeholder-[#faf7f040] focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] transition-all outline-none`}
                    placeholder="Enter your email address"
                  />
                  {errors.email && <p className="text-[#D4AF37] font-montserrat text-xs mt-1.5">{errors.email}</p>}
                </label>
                
                {submitError && (
                  <div className="w-full bg-red-500/10 border border-red-500/30 rounded-lg p-3">
                    <p className="text-[#D4AF37] font-montserrat text-sm text-center">
                      {submitError}
                    </p>
                  </div>
                )}
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`mt-4 w-full rounded-xl px-6 py-4 font-medium tracking-[2px] text-[#0a0800] font-['Montserrat',sans-serif] text-sm transition-transform hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#faf7f0] disabled:opacity-70 disabled:cursor-not-allowed ${goldGradient}`}
                >
                  {isSubmitting ? 'SENDING...' : 'REQUEST CONSULTATION'}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
