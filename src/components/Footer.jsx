import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 68,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer 
      style={{
        backgroundColor: '#0F1728',
        color: 'rgba(255,255,255,0.7)',
        paddingTop: '80px',
        paddingBottom: '30px',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
        textAlign: 'left'
      }}
    >
      <div className="container">
        
        {/* Main Grid */}
        <div className="row g-5 mb-5">
          
          {/* Column 1: Brand */}
          <div className="col-lg-4 col-12">
            <div className="d-flex align-items-center mb-4">
              <div 
                className="d-flex align-items-center justify-content-center text-white"
                style={{
                  width: '36px',
                  height: '36px',
                  backgroundColor: 'var(--blue-mid)',
                  borderRadius: '10px',
                  fontFamily: 'var(--font-headings)',
                  fontWeight: 800,
                  fontSize: '16px',
                  marginRight: '10px'
                }}
              >
                CR
              </div>
              <div>
                <div 
                  style={{
                    fontFamily: 'var(--font-headings)',
                    fontWeight: 700,
                    fontSize: '18px',
                    color: 'var(--bg-white)',
                    lineHeight: 1.1
                  }}
                >
                  Comfort Rehab
                </div>
                <div 
                  style={{
                    fontSize: '10px',
                    fontWeight: 500,
                    color: 'rgba(255,255,255,0.4)',
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                    lineHeight: 1
                  }}
                >
                  Prosthetist · Orthotist
                </div>
              </div>
            </div>

            <p style={{ fontSize: '14px', lineHeight: 1.6, color: 'rgba(255,255,255,0.5)' }}>
              Providing custom-fitted prosthetic and orthotic solutions in Kolhapur. Restoring movement, agility, and quality of life through high-quality fabrication and compassionate care.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="col-lg-4 col-md-6 col-12 ps-lg-5">
            <h4 
              className="mb-4"
              style={{
                fontFamily: 'var(--font-headings)',
                fontWeight: 700,
                fontSize: '16px',
                color: 'var(--bg-white)',
                letterSpacing: '1.5px',
                textTransform: 'uppercase'
              }}
            >
              Quick Links
            </h4>
            <ul className="list-unstyled d-flex flex-column gap-2" style={{ fontSize: '14.5px' }}>
              {['about', 'services', 'gallery', 'blog', 'contact'].map((section) => (
                <li key={section}>
                  <span 
                    onClick={() => scrollToSection(section)}
                    style={{ 
                      cursor: 'pointer',
                      transition: 'var(--transition-smooth)'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--green)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="col-lg-4 col-md-6 col-12">
            <h4 
              className="mb-4"
              style={{
                fontFamily: 'var(--font-headings)',
                fontWeight: 700,
                fontSize: '16px',
                color: 'var(--bg-white)',
                letterSpacing: '1.5px',
                textTransform: 'uppercase'
              }}
            >
              Services
            </h4>
            <ul className="list-unstyled d-flex flex-column gap-2" style={{ fontSize: '14.5px', color: 'rgba(255,255,255,0.5)' }}>
              <li>Lower Limb Prosthetics</li>
              <li>Upper Limb Prosthetics</li>
              <li>Lower Limb Orthotics</li>
              <li>Spinal Orthotics & Bracing</li>
              <li>Diabetic & Sports Foot Care</li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <hr style={{ borderColor: 'rgba(255,255,255,0.08)', margin: '40px 0 20px' }} />

        {/* Bottom Bar */}
        <div className="row align-items-center justify-content-between g-3" style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)' }}>
          <div className="col-md-6 text-center text-md-start">
            &copy; {currentYear} Comfort Rehab. All Rights Reserved. RCI Certified Clinic.
          </div>
          <div className="col-md-6 text-center text-md-end">
            Abhishek S. Kadhe | B-16A, Ground Floor, Patolewadi, Behind Hotel Parakh, Kolhapur.
          </div>
        </div>

      </div>
    </footer>
  );
}
