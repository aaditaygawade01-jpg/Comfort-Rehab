import React, { useState } from 'react';

const items = [
  { src: '/Gemini_Generated_Image_aj8bf4aj8bf4aj8b.png', title: 'Advanced Prosthetic Assembly',  tag: 'Technology', wide: true  },
  { src: '/Gemini_Generated_Image_j02amnj02amnj02a.png', title: 'Patient Mobility Restoration', tag: 'Rehabilitation', wide: false },
  { src: '/Gemini_Generated_Image_py7yo1py7yo1py7y.png', title: 'Custom Fabricated Orthotics',   tag: 'Orthotics', wide: false },
  { src: '/Gemini_Generated_Image_xfwy2yxfwy2yxfwy.png', title: 'Clinical Care & Fitting',       tag: 'Patient Care', wide: true  },
];

export default function Gallery() {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="gallery" className="bg-page-section" style={{ padding: '100px 0' }}>
      <div className="container">

        {/* Section Header */}
        <div className="row mb-5 justify-content-center">
          <div className="col-12 text-center reveal-item">
            <div
              className="d-inline-block text-white px-3 py-1 mb-3"
              style={{
                borderRadius: '100px',
                backgroundColor: 'var(--primary)',
                fontFamily: 'var(--font-body)',
                fontWeight: 600,
                fontSize: '11px',
                letterSpacing: '1.5px',
                textTransform: 'uppercase'
              }}
            >
              Our Gallery
            </div>
            <h2 className="section-title">Clinic &amp; Technology</h2>
            <p
              className="mx-auto mt-2"
              style={{
                maxWidth: '480px',
                fontFamily: 'var(--font-body)',
                color: 'var(--text-gray)',
                fontSize: '15px',
                lineHeight: 1.7
              }}
            >
              A closer look at our state-of-the-art facility, advanced prosthetic solutions,
              and the compassionate care we deliver every day.
            </p>
          </div>
        </div>

        {/* Mosaic Grid */}
        <div className="gallery-grid">
          {items.map((item, index) => {
            const isHovered = hovered === index;
            const isWide = item.wide;

            return (
              <div
                key={index}
                className={`reveal-item gallery-item ${isWide ? 'wide' : 'narrow'}`}
                style={{
                  transform: isHovered ? 'translateY(-6px)' : 'translateY(0)',
                  boxShadow: isHovered
                    ? '0 20px 50px rgba(37,99,235,0.22)'
                    : '0 8px 32px rgba(100,150,220,0.12)',
                }}
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* Photo */}
                <img
                  src={item.src}
                  alt={item.title}
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.55s cubic-bezier(0.25,0.46,0.45,0.94)',
                    transform: isHovered ? 'scale(1.08)' : 'scale(1)',
                    display: 'block',
                  }}
                />

                {/* Gradient overlay — always present, intensifies on hover */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: isHovered
                      ? 'linear-gradient(180deg, rgba(0,0,0,0.08) 0%, rgba(15,30,80,0.72) 100%)'
                      : 'linear-gradient(180deg, rgba(0,0,0,0.0) 40%, rgba(15,30,80,0.55) 100%)',
                    transition: 'background 0.4s ease',
                  }}
                />

                {/* Tag pill — top-left */}
                <span
                  style={{
                    position: 'absolute',
                    top: '16px',
                    left: '16px',
                    background: 'rgba(255,255,255,0.18)',
                    backdropFilter: 'blur(8px)',
                    WebkitBackdropFilter: 'blur(8px)',
                    border: '1px solid rgba(255,255,255,0.35)',
                    color: '#fff',
                    borderRadius: '100px',
                    padding: '4px 14px',
                    fontFamily: 'var(--font-body)',
                    fontSize: '11px',
                    fontWeight: 600,
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                    transition: 'opacity 0.3s ease',
                    opacity: isHovered ? 1 : 0.85,
                  }}
                >
                  {item.tag}
                </span>

                {/* Title — bottom */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: '20px 20px 18px',
                    transform: isHovered ? 'translateY(0)' : 'translateY(6px)',
                    opacity: isHovered ? 1 : 0.92,
                    transition: 'transform 0.4s ease, opacity 0.4s ease',
                  }}
                >
                  <h3
                    style={{
                      margin: 0,
                      fontFamily: 'var(--font-headings)',
                      fontWeight: 700,
                      fontSize: isWide ? '22px' : '18px',
                      color: '#fff',
                      lineHeight: 1.25,
                      textShadow: '0 2px 8px rgba(0,0,0,0.3)',
                    }}
                  >
                    {item.title}
                  </h3>

                  {/* Arrow — slides in on hover */}
                  <div
                    style={{
                      marginTop: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      opacity: isHovered ? 1 : 0,
                      transform: isHovered ? 'translateY(0)' : 'translateY(8px)',
                      transition: 'opacity 0.35s ease 0.05s, transform 0.35s ease 0.05s',
                      color: 'rgba(255,255,255,0.85)',
                      fontFamily: 'var(--font-body)',
                      fontSize: '13px',
                      fontWeight: 500,
                    }}
                  >
                    <span>View</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"/>
                    </svg>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats row below gallery */}
        <div
          className="reveal-item"
          style={{
            marginTop: '48px',
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '32px',
          }}
        >
          {[
            { value: '500+', label: 'Patients Served' },
            { value: '15+', label: 'Years Experience' },
            { value: '98%', label: 'Satisfaction Rate' },
            { value: '24/7', label: 'Support Available' },
          ].map((stat, i) => (
            <div
              key={i}
              style={{
                background: '#fff',
                borderRadius: '20px',
                boxShadow: '0 8px 32px rgba(100,150,220,0.12)',
                padding: '24px 36px',
                textAlign: 'center',
                minWidth: '140px',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-headings)',
                  fontWeight: 800,
                  fontSize: '28px',
                  color: 'var(--primary)',
                  lineHeight: 1,
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '13px',
                  color: 'var(--text-gray)',
                  marginTop: '6px',
                  fontWeight: 500,
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
