import React from 'react';
import prostheticLegIcon from '../assets/icons/prosthetic-leg.svg';
import prostheticArmIcon from '../assets/icons/prosthetic-arm.svg';
import prostheticFootIcon from '../assets/icons/prosthetic-foot.svg';

export default function FullServices() {
  const services = [
    {
      num: '01',
      emoji: '🦿',
      title: 'Lower Limb Prosthetics',
      desc: 'Customized artificial legs including transtibial, transfemoral, and microprocessor-controlled knee systems.'
    },
    {
      num: '02',
      emoji: '🦾',
      title: 'Upper Limb Prosthetics',
      desc: 'Advanced mechanical, myoelectric, and bionic hand/arm solutions custom tailored for your needs.'
    },
    {
      num: '03',
      emoji: '🦵',
      title: 'Lower Limb Orthotics',
      desc: 'Custom braces, AFOs, KAFOs, and calipers designed to support, align, and improve walking patterns.'
    },
    {
      num: '04',
      emoji: '🫀',
      title: 'Spinal Orthotics & Bracing',
      desc: 'Customized spinal braces (Scoliosis braces, Taylor braces, ASH braces) for stabilization and deformity correction.'
    },
    {
      num: '05',
      emoji: '🤲',
      title: 'Upper Limb Splints',
      desc: 'Personalized static and dynamic splints/braces for finger, hand, wrist, and elbow rehabilitation.'
    },
    {
      num: '06',
      emoji: '🏃',
      title: 'Diabetic & Sports Foot Care',
      desc: 'Custom-molded diabetic insoles, orthopedic footwear, and sports arch supports to protect and cushion.'
    }
  ];

  return (
    <section id="services" className="bg-page-section">
      <div className="container">
        
        {/* Label & Header */}
        <div className="row mb-5">
          <div className="col-12 text-center reveal-item">
            <div 
              className="d-inline-block text-white px-3 py-1 mb-3"
              style={{
                borderRadius: '100px',
                backgroundColor: 'var(--green)',
                fontFamily: 'var(--font-body)',
                fontWeight: 600,
                fontSize: '11px',
                letterSpacing: '1.5px',
                textTransform: 'uppercase'
              }}
            >
              Services
            </div>
            <h2 className="section-title">
              What We Offer
            </h2>
          </div>
        </div>

        {/* 3x2 Grid */}
        <div className="row g-4">
          {services.map((svc, index) => (
            <div key={index} className="col-lg-4 col-md-6 col-12 reveal-item">
              <div 
                className="nuvica-card glass p-4 h-100 d-flex flex-column justify-content-between position-relative"
                style={{
                  border: '1px solid rgba(37,99,235,0.05)',
                  minHeight: '280px',
                  textAlign: 'left'
                }}
              >
                
                <div>
                  {/* Top line with Number & Icon */}
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <span 
                      style={{
                        fontFamily: 'var(--font-headings)',
                        fontWeight: 700,
                        fontSize: '14px',
                        color: 'var(--text-light)'
                      }}
                    >
                      {svc.num}
                    </span>
                    <div
                      style={{
                        width: '44px',
                        height: '44px',
                        filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.08))'
                      }}
                    >
                      {svc.num === '01' && <img src={prostheticLegIcon} alt="Prosthetic Leg" style={{ width: '100%', height: '100%' }} />}
                      {svc.num === '02' && <img src={prostheticArmIcon} alt="Prosthetic Arm" style={{ width: '100%', height: '100%' }} />}
                      {svc.num === '03' && <img src={prostheticFootIcon} alt="Prosthetic Foot" style={{ width: '100%', height: '100%' }} />}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 
                    className="mb-2 title-md"
                      style={{
                        color: 'var(--text-dark)'
                      }}
                  >
                    {svc.title}
                  </h3>

                  {/* Description */}
                  <p 
                    className="mb-4"
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '14px',
                      color: 'var(--text-gray)',
                      lineHeight: 1.6
                    }}
                  >
                    {svc.desc}
                  </p>
                </div>

                {/* Bottom right Arrow button */}
                <div className="d-flex justify-content-end w-100">
                  <button 
                    className="arrow-circle-btn"
                    style={{
                      width: '36px',
                      height: '36px',
                      fontSize: '16px'
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-arrow-up-right" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"/>
                    </svg>
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
