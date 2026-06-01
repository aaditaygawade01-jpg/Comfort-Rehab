import React from 'react';

export default function Testimonials() {
  const reviews = [
    {
      quote: "Comfort Rehab completely changed my life. After my leg amputation, I was worried I would never walk again. Abhishek sir designed a custom prosthetic limb that fits perfectly. I'm now back to working and walking independently.",
      name: "Rajesh Patil",
      condition: "Transtibial Amputee",
      initial: "R",
      rating: 5
    },
    {
      quote: "The precision and care they put into building my orthopedic caliper was remarkable. I can walk long distances without any pain. Highly recommend Comfort Rehab for their professionalism and expert knowledge.",
      name: "Priya Deshmukh",
      condition: "Polio Caliper Patient",
      initial: "P",
      rating: 5
    },
    {
      quote: "I want to express my sincere gratitude to Abhishek sir at Comfort Rehab for providing exceptional service in the field of prosthetics. Abhishek sir's expertise and attention to detail ensured that the patient receives a prosthetic that perfectly suits their needs and enhances their mobility. The quality of the prosthetics is truly world-class, and patient felt supported throughout the entire process. Abhishek sir's professionalism, care, and commitment to excellence made all the difference. I highly recommend Comfort Rehab to anyone seeking top-notch prosthetic solutions. Thank you for transforming lives with such dedication and skills!",
      name: "Kiran Patil",
      condition: "Prosthetics Patient Caregiver",
      initial: "K",
      rating: 5
    }
  ];

  return (
    <section className="bg-white-section">
      <div className="container">
        
        {/* Header */}
        <div className="row mb-5 justify-content-center">
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
              Testimonials
            </div>
            <h2 className="section-title">
              Patient Stories
            </h2>
            <div className="d-flex align-items-center justify-content-center gap-2 mt-3">
              <span style={{ color: '#F59E0B', fontSize: '20px' }}>★★★★★</span>
              <span style={{ fontFamily: 'var(--font-body)', fontSize: '14.5px', fontWeight: 600, color: 'var(--text-dark)' }}>
                5.0 Rated Clinic on Google Maps
              </span>
            </div>
          </div>
        </div>

        {/* 3 cards row */}
        <div className="row justify-content-center g-4">
          {reviews.map((rev, index) => (
            <div key={index} className="col-lg-4 col-md-6 col-12 reveal-item">
              <div 
                className="nuvica-card p-4 h-100 d-flex flex-column justify-content-between text-start"
                style={{
                  border: '1px solid rgba(37,99,235,0.05)',
                  position: 'relative'
                }}
              >
                
                {/* Large double quote indicator */}
                <div 
                  style={{
                    position: 'absolute',
                    top: '-15px',
                    left: '24px',
                    fontFamily: 'var(--font-headings)',
                    fontWeight: 800,
                    fontSize: '90px',
                    color: 'rgba(37,99,235,0.08)',
                    lineHeight: 1,
                    pointerEvents: 'none'
                  }}
                >
                  “
                </div>

                <div className="pt-3">
                  {/* Rating Stars */}
                  <div className="mb-3 d-flex gap-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <span key={i} style={{ color: 'var(--green)', fontSize: '16px' }}>★</span>
                    ))}
                  </div>

                  {/* Quote Text */}
                  <p 
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '14px',
                      fontStyle: 'italic',
                      color: 'var(--text-gray)',
                      lineHeight: 1.7,
                      marginBottom: '20px'
                    }}
                  >
                    "{rev.quote}"
                  </p>
                </div>

                {/* Bottom line: Divider + Avatar */}
                <div>
                  <div 
                    style={{ 
                      width: '32px', 
                      height: '2px', 
                      backgroundColor: 'var(--green)',
                      marginBottom: '20px'
                    }} 
                  />

                  <div className="d-flex align-items-center gap-3">
                    {/* Circle Avatar */}
                    <div 
                      className="d-flex align-items-center justify-content-center text-primary"
                      style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--blue-light)',
                        fontFamily: 'var(--font-headings)',
                        fontWeight: 700,
                        fontSize: '16px'
                      }}
                    >
                      {rev.initial}
                    </div>

                    <div>
                      <h4 
                        className="m-0"
                        style={{
                          fontFamily: 'var(--font-headings)',
                          fontWeight: 700,
                          fontSize: '16px',
                          color: 'var(--text-dark)'
                        }}
                      >
                        {rev.name}
                      </h4>
                      <p 
                        className="m-0"
                        style={{
                          fontFamily: 'var(--font-body)',
                          fontSize: '12px',
                          color: 'var(--text-light)',
                          fontWeight: 500
                        }}
                      >
                        {rev.condition}
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
