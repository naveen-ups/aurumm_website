import { useState, useEffect } from 'react';
import Logo from './Logo';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu on outside click
  useEffect(() => {
    if (!menuOpen) return;
    const handler = (e) => {
      if (!e.target.closest('nav')) setMenuOpen(false);
    };
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, [menuOpen]);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Customize', href: '#custom' },
    { label: 'Shop', href: '#shop' },
    { label: 'Process', href: '#process' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        <a href="#hero" className="navbar__logo-link">
          <Logo height={32} color="#4A0612" />
        </a>

        {/* Desktop links */}
        <ul className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          {navLinks.map(link => (
            <li key={link.label}>
              <a href={link.href} onClick={() => setMenuOpen(false)}>{link.label}</a>
            </li>
          ))}
          {/* Mobile-only CTA inside the dropdown menu — shown only on small screens via CSS */}
          <li className="navbar__mobile-cta-item">
            <a href="#book" className="navbar__mobile-cta" onClick={() => setMenuOpen(false)}>
              Get your jewellery now
            </a>
          </li>
        </ul>

        {/* Desktop CTA — hidden on mobile via CSS */}
        <a href="#book" className="navbar__cta" id="nav-book-now">
          Get your jewellery now
        </a>

        <button
          className={`navbar__burger ${menuOpen ? 'navbar__burger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  );
}
