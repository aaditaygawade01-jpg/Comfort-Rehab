import React from 'react';
import heroCurveImg from '../assets/hero-curve.png';

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      {/* Left content */}
      <div className="hero-content">
        {/* Top label with line */}
        <div className="hero-label-line">
          <span>EXPERT CARE, BASED IN KOLHAPUR</span>
          <span className="hero-label-dash" />
        </div>

        {/* Main heading — elegant, mixed case */}
        <h1 className="hero-heading">
          Restoring Mobility<br />
          &amp; Lives
        </h1>

        {/* Italic subtitle */}
        <p className="hero-subtitle">
          <em>Custom Prosthetics &amp; Orthotics Since 2002</em>
        </p>

        {/* Description */}
        <p className="hero-desc">
          Comfort Rehab is Kolhapur's trusted destination<br className="d-none d-md-inline" />
          for custom prosthetics and orthotics,<br className="d-none d-md-inline" />
          combining clinical expertise with compassionate care.
        </p>

        {/* Two buttons */}
        <div className="hero-actions">
          <a href="#services" className="hero-btn-primary">
            EXPLORE SERVICES →
          </a>
          <a href="tel:+919892251088" className="hero-btn-outline">
            CALL NOW
          </a>
        </div>
      </div>

      {/* Right curved image */}
      <div className="hero-image-wrapper">
        <div className="hero-image-curve">
          <img
            src={heroCurveImg}
            alt="Comfort Rehab — prosthetic and orthotic care"
            className="hero-image"
          />
        </div>
      </div>
    </section>
  );
}
