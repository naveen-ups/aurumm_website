import React from 'react';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="hero">
      {/* Plain light cement background container matching Figma design & 1.png */}
      <div className="hero__image-wrap bg-[#C4C4C4]">
        {/* Centered overlay title and button matching 1.png */}
        <div className="hero__overlay-content">
          <p className="hero__eyebrow">
            BESPOKE FINE JEWELLERY
          </p>
          <h1 className="hero__heading">
            <span>DESIGNED FOR</span>
            <span>YOUR LEGACY</span>
          </h1>
          <a href="#book" className="hero__cta-btn">
            Begin your journey
          </a>
        </div>
      </div>

      {/* 3 feature pillars matching 2.png */}
      <div className="hero__features">
        <div className="hero__feature">
          <span className="hero__feature-icon">✦</span>
          <h3 className="hero__feature-title">Bespoke Design</h3>
          <p className="hero__feature-desc">Every piece conceived uniquely for you</p>
        </div>

        <div className="hero__feature hero__feature--center">
          <span className="hero__feature-icon hero__feature-icon--diamond">◈</span>
          <h3 className="hero__feature-title">Expert Gemology</h3>
          <p className="hero__feature-desc">Certified gemologist &amp; Astrological guidance</p>
        </div>

        <div className="hero__feature">
          <span className="hero__feature-icon">⟡</span>
          <h3 className="hero__feature-title">Heritage Redesign</h3>
          <p className="hero__feature-desc">Transforming heirlooms into modern treasures</p>
        </div>
      </div>
    </section>
  );
}
