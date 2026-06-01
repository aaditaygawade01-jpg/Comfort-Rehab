import React, { useEffect } from 'react';
import lowerLimbProsthetics from '/Lower Limb Prosthetics.jpg';
import upperLimbProsthetics from '/Upper Limb Prosthetics.jpg';
import lowerLimbOrthotics from '/Lower Limb Orthotics.jpg';
import spinalOrthotics from '/Spinal Orthotics & Bracing.jpg';
import upperLimbSplints from '/Upper Limb Splints.jpg';
import diabeticFootCare from '/Diabetic & Sports Foot Care.png';

export default function ServicePreview() {
  const getServiceImage = (title) => {
    const imageMap = {
      'Lower Limb Prosthetics': lowerLimbProsthetics,
      'Upper Limb Prosthetics': upperLimbProsthetics,
      'Lower Limb Orthotics': lowerLimbOrthotics,
      'Spinal Orthotics & Bracing': spinalOrthotics,
      'Upper Limb Splints': upperLimbSplints,
      'Diabetic & Sports Foot Care': diabeticFootCare,
    };
    return imageMap[title] || diabeticFootCare;
  };

  const previews = [
    {
      id: '01',
      title: 'Lower Limb Prosthetics',
      emoji: '🦿',
      dark: false,
    },
    {
      id: '02',
      title: 'Upper Limb Prosthetics',
      emoji: '🦾',
      dark: false,
    },
    {
      id: '03',
      title: 'Lower Limb Orthotics',
      emoji: '🦵',
      dark: true,
    },
    {
      id: '04',
      title: 'Spinal Orthotics & Bracing',
      emoji: '🫀',
      dark: false,
    },
    {
      id: '05',
      title: 'Upper Limb Splints',
      emoji: '🤚',
      dark: false,
    },
    {
      id: '06',
      title: 'Diabetic & Sports Foot Care',
      emoji: '⚽',
      dark: true,
    }
  ];

  // Prefetch small service images to improve perceived responsiveness
  useEffect(() => {
    previews.forEach(p => {
      const img = new Image();
      img.src = getServiceImage(p.title);
    });
  }, []);

  return (
    <section className="bg-white-section py-5">
      <div className="container">
        <div className="row justify-content-center g-4">
          {previews.map((item, index) => {
            const cardClass = item.dark ? 'nuvica-card-dark' : 'nuvica-card';
            return (
              <div key={index} className="col-lg-4 col-md-6 col-12 reveal-item">
                <div 
                  className={`${cardClass} glass p-4 position-relative d-flex flex-column justify-content-between`}
                  style={{
                    height: '240px',
                    border: item.dark ? 'none' : '1px solid rgba(37,99,235,0.05)',
                    textAlign: 'left'
                  }}
                >
                  {/* Top line with ID / Arrow */}
                  <div className="d-flex justify-content-between align-items-center">
                    <span 
                      style={{ 
                        fontFamily: 'var(--font-headings)', 
                        fontWeight: 700, 
                        fontSize: '16px',
                        color: item.dark ? 'rgba(255,255,255,0.4)' : 'var(--text-light)' 
                      }}
                    >
                      {item.id}
                    </span>
                    <button className="arrow-circle-btn">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-right" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"/>
                      </svg>
                    </button>
                  </div>

                  {/* 3D-style Icon centered */}
                  <div
                    className="my-2"
                    style={{
                      width: '64px',
                      height: '64px',
                      lineHeight: 1,
                      filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.1))',
                    }}
                  >
                    <img 
                      src={getServiceImage(item.title)}
                      alt={item.title}
                      loading="lazy"
                      decoding="async"
                      width="64"
                      height="64"
                      style={{ 
                        width: '100%', 
                        height: '100%',
                        objectFit: 'contain',
                        backfaceVisibility: 'hidden'
                      }} 
                    />
                  </div>

                  {/* Title Bottom */}
                  <h3 
                    className="m-0 title-md"
                      style={{
                        color: item.dark ? 'var(--bg-white)' : 'var(--text-dark)'
                      }}
                  >
                    {item.title}
                  </h3>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
