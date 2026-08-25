import React, { useState } from 'react';
import Logo from '../assets/images/Logo.png';

const navigationItems = [
  { label: "COLLECTION", href: "#shop" },
  { label: "ABOUT", href: "#about" },
  { label: "PROCESS", href: "#process" },
  { label: "GEMSTONES", href: "#gemstone" },
  { label: "REVIEWS", href: "#reviews" },
  { label: "CONTACT", href: "#book" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSessionClick = () => {
    const bookSection = document.getElementById("book");
    if (bookSection) {
      bookSection.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.location.hash = "book";
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full border-b-[1.31px] border-[#d4af372e] bg-[linear-gradient(180deg,rgba(10,8,2,0.97)_0%,rgba(15,15,16,0.92)_100%)] backdrop-blur-md shadow-[0_1.31px_31.45px_#00000080]">
      <div className="flex w-full h-[clamp(60px,6vw,83.86px)] justify-between items-center px-[clamp(20px,4vw,60px)]">
        
        {/* Logo */}
        <a href="#top" aria-label="Aurumm home" className="flex items-center flex-shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37] rounded-sm">
          <img
            src={Logo}
            alt="AURUMM"
            className="w-[167px] h-[56px] object-cover"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-[clamp(16px,2.5vw,41.93px)] items-center">
          {navigationItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="relative group text-[#faf7f0b2] hover:text-[#faf7f0] font-['Montserrat',sans-serif] text-[clamp(12px,1vw,15.7px)] tracking-[2.62px] transition-colors duration-300 outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37] rounded-sm py-1"
            >
              {item.label}
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#d4af37] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <button
          onClick={handleSessionClick}
          className="hidden lg:flex items-center justify-center px-[clamp(20px,2vw,30px)] h-[clamp(45px,4vw,68.13px)] rounded-[15.72px] shadow-[0px_2.62px_10.48px_#0000004c,0px_0px_18.34px_#d4af3725] bg-[linear-gradient(117deg,rgba(184,149,42,1)_0%,rgba(212,175,55,1)_40%,rgba(240,208,96,1)_70%,rgba(201,162,39,1)_100%)] hover:brightness-110 transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-[#faf7f0] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0802]"
        >
          <span className="font-['Montserrat',sans-serif] font-medium text-[#0a0800] text-[clamp(13px,1.2vw,18.3px)] tracking-[2.62px] whitespace-nowrap">
            BOOK A SESSION
          </span>
        </button>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-[#d4af37] p-2 outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37] rounded-md"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-[clamp(60px,6vw,83.86px)] left-0 w-full bg-[linear-gradient(180deg,rgba(10,8,2,0.98)_0%,rgba(15,15,16,0.99)_100%)] border-b border-[#d4af372e] flex flex-col items-center py-5 sm:py-6 gap-3.5 sm:gap-4 shadow-2xl backdrop-blur-xl max-h-[calc(100vh-70px)] overflow-y-auto">
          {navigationItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-[#faf7f0b2] hover:text-[#d4af37] font-['Montserrat',sans-serif] text-sm sm:text-base tracking-[2px] sm:tracking-[3px] py-1 transition-colors duration-300"
            >
              {item.label}
            </a>
          ))}
          <button
            onClick={handleSessionClick}
            className="mt-2 px-6 sm:px-8 h-11 sm:h-[50px] rounded-[12px] sm:rounded-[15.72px] shadow-[0px_2.62px_10.48px_#0000004c,0px_0px_18.34px_#d4af3725] bg-[linear-gradient(117deg,rgba(184,149,42,1)_0%,rgba(212,175,55,1)_40%,rgba(240,208,96,1)_70%,rgba(201,162,39,1)_100%)] hover:brightness-110 transition-all duration-300 flex items-center justify-center"
          >
            <span className="font-['Montserrat',sans-serif] font-medium text-[#0a0800] text-xs sm:text-sm tracking-[2px] whitespace-nowrap">
              BOOK A SESSION
            </span>
          </button>
        </div>
      )}
    </header>
  );
}
