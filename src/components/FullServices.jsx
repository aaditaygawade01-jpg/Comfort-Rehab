import React from 'react';
import prostheticLegIcon from '../assets/icons/prosthetic-leg.svg';
import prostheticArmIcon from '../assets/icons/prosthetic-arm.svg';
import prostheticFootIcon from '../assets/icons/prosthetic-foot.svg';

export default function FullServices() {
  const services = [
    {
      num: '01',
      title: 'Lower Limb Prosthetics',
      desc: 'Customized artificial legs including transtibial, transfemoral, and microprocessor-controlled knee systems.',
      img: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=500&q=80'
    },
    {
      num: '02',
      title: 'Upper Limb Prosthetics',
      desc: 'Advanced mechanical, myoelectric, and bionic hand/arm solutions custom tailored for your needs.',
      img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=500&q=80'
    },
    {
      num: '03',
      title: 'Lower Limb Orthotics',
      desc: 'Custom braces, AFOs, KAFOs, and calipers designed to support, align, and improve walking patterns.',
      img: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=500&q=80'
    },
    {
      num: '04',
      title: 'Spinal Orthotics & Bracing',
      desc: 'Customized spinal braces (Scoliosis braces, Taylor braces, ASH braces) for stabilization and deformity correction.',
      img: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=500&q=80'
    },
    {
      num: '05',
      title: 'Upper Limb Splints',
      desc: 'Personalized static and dynamic splints/braces for finger, hand, wrist, and elbow rehabilitation.',
      img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=500&q=80'
    },
    {
      num: '06',
      title: 'Diabetic & Sports Foot Care',
      desc: 'Custom-molded diabetic insoles, orthopedic footwear, and sports arch supports to protect and cushion.',
      img: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&w=500&q=80'
    }
  ];

  return (
    <section id="services" className="bg-page-section" style={{ padding: '100px 0' }}>
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
                className="nuvica-card glass p-3 h-100 d-flex flex-column justify-content-between position-relative"
                style={{
                  border: '1px solid rgba(37,99,235,0.05)',
                  textAlign: 'left',
                  borderRadius: '24px',
                  overflow: 'hidden'
                }}
              >
                
                <div>
                  {/* Card Image Header */}
                  <div 
                    style={{
                      width: '100%',
                      height: '160px',
                      borderRadius: '16px',
                      overflow: 'hidden',
                      marginBottom: '20px',
                      position: 'relative'
                    }}
                  >
                    <img 
                      src={svc.img} 
                      alt={svc.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.5s ease'
                      }}
                      className="service-card-img"
                    />
                    
                    {/* Floating Service Number */}
                    <span 
                      style={{
                        position: 'absolute',
                        top: '12px',
                        right: '12px',
                        background: 'rgba(255,255,255,0.85)',
                        backdropFilter: 'blur(8px)',
                        padding: '4px 10px',
                        borderRadius: '8px',
                        fontFamily: 'var(--font-headings)',
                        fontWeight: 700,
                        fontSize: '12px',
                        color: 'var(--text-dark)'
                      }}
                    >
                      {svc.num}
                    </span>
                  </div>

                  {/* Title & Icon Header */}
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <h3 
                      className="m-0 title-md"
                      style={{
                        color: 'var(--text-dark)',
                        fontSize: '18px',
                        fontWeight: 700
                      }}
                    >
                      {svc.title}
                    </h3>
                    
                    {/* Small Icon decoration for P&O services */}
                    {['01', '02', '03'].includes(svc.num) && (
                      <div style={{ width: '28px', height: '28px', opacity: 0.85 }}>
                        {svc.num === '01' && <img src={prostheticLegIcon} alt="Prosthetic Leg" style={{ width: '100%', height: '100%' }} />}
                        {svc.num === '02' && <img src={prostheticArmIcon} alt="Prosthetic Arm" style={{ width: '100%', height: '100%' }} />}
                        {svc.num === '03' && <img src={prostheticFootIcon} alt="Prosthetic Foot" style={{ width: '100%', height: '100%' }} />}
                      </div>
                    )}
                  </div>

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
