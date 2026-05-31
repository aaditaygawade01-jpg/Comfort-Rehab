import React from 'react';

export default function About() {
  return (
    <section id="about" className="bg-page-section">
      <div className="container">
        <div className="row align-items-center justify-content-between g-5">
          
          {/* LEFT: Stacked card composition */}
          <div className="col-lg-5 col-12 position-relative">
            
            {/* Background photo area behind card */}
            <div 
              className="position-absolute"
              style={{
                top: '-30px',
                left: '-20px',
                width: '100%',
                height: '110%',
                borderRadius: '24px',
                background: 'linear-gradient(135deg, rgba(37,99,235,0.05) 0%, rgba(37,99,235,0.01) 100%)',
                border: '1px dashed rgba(37,99,235,0.15)',
                zIndex: 1
              }}
            />

            {/* Main identity card */}
            <div 
              className="nuvica-card position-relative overflow-hidden z-index-10"
              style={{
                maxWidth: '440px',
                margin: '0 auto',
                border: '1px solid rgba(37,99,235,0.05)'
              }}
            >
              {/* Blue Header Band */}
              <div 
                className="w-100 d-flex align-items-center justify-content-center gap-2"
                style={{
                  height: '80px',
                  backgroundColor: 'var(--blue-mid)',
                }}
              >
                <div 
                  className="d-flex align-items-center justify-content-center text-primary"
                  style={{
                    width: '32px',
                    height: '32px',
                    backgroundColor: 'var(--bg-white)',
                    borderRadius: '8px',
                    fontFamily: 'var(--font-headings)',
                    fontWeight: 800,
                    fontSize: '14px'
                  }}
                >
                  CR
                </div>
                <div 
                  style={{
                    fontFamily: 'var(--font-headings)',
                    fontWeight: 800,
                    fontSize: '18px',
                    color: 'var(--bg-white)',
                    letterSpacing: '1px'
                  }}
                >
                  COMFORT REHAB
                </div>
              </div>

              {/* Main Content */}
              <div className="p-4 text-start">
                <span className="label-caps d-block mb-1">Clinic Director</span>
                <h4 style={{ fontFamily: 'var(--font-headings)', fontWeight: 700, fontSize: '20px', color: 'var(--text-dark)' }}>
                  Abhishek S. Kadhe
                </h4>
                <p 
                  className="mb-3"
                  style={{ 
                    fontFamily: 'var(--font-body)', 
                    fontSize: '12px', 
                    fontWeight: 600, 
                    color: 'var(--blue-mid)' 
                  }}
                >
                  Consultant Prosthetist – Orthotist
                </p>

                <hr style={{ borderColor: 'rgba(37,99,235,0.1)' }} />

                <span className="label-caps d-block mb-1">Establishment Detail</span>
                <p 
                  className="mb-4"
                  style={{ 
                    fontFamily: 'var(--font-body)', 
                    fontSize: '13px', 
                    color: 'var(--text-gray)',
                    lineHeight: 1.5
                  }}
                >
                  B-16A, Ground Floor, Patolewadi,<br />
                  Behind Hotel Parakh, Opp. S.M. Ghatge Showroom,<br />
                  Kolhapur – 416005, Maharashtra
                </p>

                <p 
                  style={{
                    fontFamily: 'var(--font-headings)',
                    fontWeight: 700,
                    fontSize: '16px',
                    color: 'var(--text-dark)',
                    lineHeight: 1.3
                  }}
                >
                  "Committed to your health and well-being."
                </p>
              </div>

            </div>

            {/* Floating Detail Card overlapping bottom-right */}
            <div 
              className="position-absolute bg-white p-3 floating-element-delay-1"
              style={{
                borderRadius: '20px',
                boxShadow: '0 15px 35px rgba(37,99,235,0.18)',
                border: '1px solid rgba(255,255,255,0.8)',
                bottom: '-25px',
                right: '10px',
                width: '210px',
                zIndex: 20,
                textAlign: 'left'
              }}
            >
              <div 
                className="label-caps mb-1"
                style={{ color: 'var(--green-dark)', fontSize: '10px' }}
              >
                📞 For Appointments
              </div>
              <a 
                href="tel:+919892251088"
                style={{
                  fontFamily: 'var(--font-headings)',
                  fontWeight: 700,
                  fontSize: '16px',
                  color: 'var(--blue-mid)',
                  textDecoration: 'none',
                  display: 'block'
                }}
              >
                +91 98922 51088
              </a>
            </div>

          </div>

          {/* RIGHT: About us copy */}
          <div className="col-lg-6 col-12 text-start reveal-item">
            
            {/* Pill Label */}
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
              About Us
            </div>

            {/* Title */}
            <h2 className="section-title mb-4">
              YOUR COMFORT REHAB CLINIC
            </h2>

            {/* Paragraphs */}
            <p 
              className="mb-3"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '15px',
                color: 'var(--text-gray)',
                lineHeight: 1.8
              }}
            >
              Led by Abhishek S. Kadhe, a highly qualified and Rehabilitation Council of India (RCI) certified Consultant Prosthetist and Orthotist, Comfort Rehab is dedicated to providing state-of-the-art prosthetic and orthotic solutions.
            </p>

            <p 
              className="mb-4"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '15px',
                color: 'var(--text-gray)',
                lineHeight: 1.8
              }}
            >
              Our mission is to help amputees and individuals with neuromusculoskeletal disorders regain their independence and live an active, comfortable life. We design, fabricate, and fit every device with meticulous care right here in Kolhapur.
            </p>

            {/* CTA buttons */}
            <div className="d-flex flex-wrap align-items-center gap-3">
              <a href="#services" className="btn-green-cta">
                Learn More <span className="ms-1">↗</span>
              </a>
              <div 
                className="d-flex align-items-center px-4 py-2 bg-white"
                style={{
                  borderRadius: '100px',
                  border: '1px solid var(--blue-mid)',
                  height: '48px'
                }}
              >
                <a 
                  href="tel:+919892251088"
                  style={{
                    fontFamily: 'var(--font-headings)',
                    fontWeight: 700,
                    color: 'var(--blue-mid)',
                    textDecoration: 'none',
                    fontSize: '14px'
                  }}
                >
                  +91 98922 51088
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
