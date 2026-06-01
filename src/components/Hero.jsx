import React from 'react';
import heroCurveImg from '../assets/hero-curve.png';

export default function Hero() {
  // Preload the hero image early when the component mounts
  React.useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = heroCurveImg;
    document.head.appendChild(link);
    return () => { document.head.removeChild(link); };
  }, []);
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

        {/* Description */}
        <p className="hero-desc" style={{ fontSize: '17px', fontWeight: 600, lineHeight: 1.85 }}>
          <span style={{ color: 'var(--blue-mid)', fontWeight: 700 }}>Comfort Rehab</span> is Kolhapur's trusted destination<br className="d-none d-md-inline" />
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
            loading="eager"
            decoding="async"
            fetchPriority="high"
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
        
        {/* Floating text badge overlaid on image */}
        <div className="hero-image-badge floating-element-delay-1">
          Custom Prosthetics &amp; Orthotics <span style={{ color: 'var(--green)' }}>Since 2002</span>
        </div>
      </div>
    </section>
  );
}


