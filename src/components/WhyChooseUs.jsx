import React, { useState, useEffect, useRef } from 'react';

// Inline SVG icons — no external deps needed
const IconTarget     = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
    <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
  </svg>
);
const IconFlask      = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 3h6m-3 0v7l4 8H8L4 10V3m5 0H9"/>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 14h12"/>
  </svg>
);
const IconCheck      = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"/>
  </svg>
);
const IconCommunity  = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 0 0-4-4h-1M9 20H4v-2a4 4 0 0 1 4-4h1m4 6v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"/>
  </svg>
);

const features = [
  { Icon: IconTarget,    title: 'Personalised Assessment',   desc: "We evaluate each patient's lifestyle and anatomy to build customised solutions." },
  { Icon: IconFlask,     title: 'Advanced Fabrication',      desc: 'Our Kolhapur clinic uses high-grade composite materials for lightweight, durable devices.' },
  { Icon: IconCheck,     title: 'Ongoing Follow-Up Care',    desc: 'Regular adjustments and checks to ensure your comfort as your body adapts.' },
  { Icon: IconCommunity, title: 'Community Camps',           desc: 'We organise rehabilitation outreach camps to serve rural areas in Maharashtra.' },
];

export default function WhyChooseUs() {
  const [counts, setCounts] = useState({ satisfaction: 0, fittings: 0 });
  const cardRef    = useRef(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !animatedRef.current) {
        animatedRef.current = true;
        const duration  = 2000;
        const startTime = performance.now();
        const targets   = { satisfaction: 100, fittings: 500 };
        const tick = (now) => {
          const p    = Math.min((now - startTime) / duration, 1);
          const ease = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
          setCounts({
            satisfaction: Math.floor(ease * targets.satisfaction),
            fittings:     Math.floor(ease * targets.fittings),
          });
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.1 });

    if (cardRef.current) observer.observe(cardRef.current);
    return () => { if (cardRef.current) observer.unobserve(cardRef.current); };
  }, []);

  return (
    <section className="bg-white-section">
      <div className="container">

        {/* ── Header ── */}
        <div className="row mb-5 justify-content-center">
          <div className="col-lg-8 col-12 text-center reveal-item">
            <div
              className="d-inline-block text-white px-3 py-1 mb-3"
              style={{ borderRadius: '100px', backgroundColor: 'var(--primary)', fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '11px', letterSpacing: '1.5px', textTransform: 'uppercase' }}
            >
              Why Choose Us
            </div>
            <h2 className="section-title">Exceptional Care Tailored For Your Independence</h2>
          </div>
        </div>

        <div className="row align-items-stretch g-5">

          {/* ── LEFT: 2×2 feature grid ── */}
          <div className="col-lg-7 col-12">
            <div className="row g-4 h-100">
              {features.map(({ Icon, title, desc }, i) => (
                <div key={i} className="col-md-6 col-12 reveal-item">
                  <div
                    className="nuvica-card p-4 h-100 text-start d-flex flex-column gap-3"
                    style={{ border: '1px solid rgba(37,99,235,0.05)', borderRadius: '20px' }}
                  >
                    {/* Icon badge */}
                    <div style={{
                      width: '52px', height: '52px', borderRadius: '14px',
                      background: 'var(--blue-light)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: 'var(--primary)',
                    }}>
                      <Icon />
                    </div>
                    <h3 style={{ fontFamily: 'var(--font-headings)', fontWeight: 700, fontSize: '18px', color: 'var(--text-dark)', margin: 0 }}>{title}</h3>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--text-gray)', lineHeight: 1.6, margin: 0 }}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Animated Stats card ── */}
          <div ref={cardRef} className="col-lg-5 col-12 reveal-item">
            <div
              className="nuvica-card-dark p-5 h-100 d-flex flex-column justify-content-between text-start"
              style={{ borderRadius: '24px', position: 'relative', overflow: 'hidden' }}
            >
              {/* Accent glow */}
              <div style={{ position: 'absolute', top: '-50px', right: '-50px', width: '200px', height: '200px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(34,197,94,0.15) 0%, transparent 70%)', pointerEvents: 'none' }} />

              <div>
                <span className="label-caps d-block mb-2" style={{ color: 'var(--green)' }}>Our Impact</span>
                <h3 className="mb-4" style={{ fontFamily: 'var(--font-headings)', fontWeight: 700, fontSize: '28px', lineHeight: 1.3 }}>
                  Restoring trust, one step at a time
                </h3>
                <p className="mb-5" style={{ fontFamily: 'var(--font-body)', fontSize: '15px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>
                  We believe rehabilitation goes beyond physical recovery — it is about restoring your dignity, confidence, and ability to participate fully in life.
                </p>
              </div>

              <div className="d-flex flex-column gap-4 pt-3 border-top border-secondary">
                {/* Satisfaction */}
                <div className="d-flex align-items-center gap-4">
                  <div style={{ fontFamily: 'var(--font-headings)', fontWeight: 800, fontSize: '48px', color: 'var(--green)', minWidth: '120px', lineHeight: 1 }}>
                    {counts.satisfaction}%
                  </div>
                  <div>
                    <h4 className="m-0" style={{ fontSize: '16px', fontWeight: 600 }}>Patient Satisfaction</h4>
                    <p className="m-0" style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)' }}>Based on clinical reviews</p>
                  </div>
                </div>
                {/* Fittings */}
                <div className="d-flex align-items-center gap-4">
                  <div style={{ fontFamily: 'var(--font-headings)', fontWeight: 800, fontSize: '48px', color: 'var(--blue-light)', minWidth: '120px', lineHeight: 1 }}>
                    {counts.fittings}+
                  </div>
                  <div>
                    <h4 className="m-0" style={{ fontSize: '16px', fontWeight: 600 }}>Custom Fittings</h4>
                    <p className="m-0" style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)' }}>Prosthetics &amp; orthotics</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
