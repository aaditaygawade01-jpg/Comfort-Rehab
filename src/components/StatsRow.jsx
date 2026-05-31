import React, { useState, useEffect, useRef } from 'react';

export default function StatsRow() {
  const [counts, setCounts] = useState({ patients: 0, years: 0, rate: 0, conditions: 0 });
  const sectionRef = useRef(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting && !animatedRef.current) {
        animatedRef.current = true;
        animateStats();
      }
    }, { threshold: 0.1 });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const animateStats = () => {
    const duration = 2000; // ms
    const startTime = performance.now();

    const targets = {
      patients: 500,
      years: 10,
      rate: 95,
      conditions: 15
    };

    const update = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // easeOutExpo
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

      setCounts({
        patients: Math.floor(ease * targets.patients),
        years: Math.floor(ease * targets.years),
        rate: Math.floor(ease * targets.rate),
        conditions: Math.floor(ease * targets.conditions)
      });

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    };

    requestAnimationFrame(update);
  };

  const statData = [
    { value: `${counts.patients}+`, label: 'Patients\nHelped' },
    { value: `${counts.years}+`, label: 'Years\nExp.' },
    { value: `${counts.rate}%`, label: 'Satisfaction\nRate' },
    { value: `${counts.conditions}+`, label: 'Conditions\nTreated' }
  ];

  return (
    <section ref={sectionRef} className="bg-white-section py-5">
      <div className="container">
        
        {/* Four raw stats in a row */}
        <div className="row align-items-center justify-content-center py-4 g-4 text-center">
          {statData.map((stat, index) => (
            <React.Fragment key={index}>
              {/* Stat Column */}
              <div className="col-md-2 col-6 reveal-item">
                <div 
                  style={{
                    fontFamily: 'var(--font-headings)',
                    fontWeight: 800,
                    fontSize: 'clamp(44px, 6vw, 56px)',
                    color: 'var(--text-dark)',
                    lineHeight: 1.1
                  }}
                >
                  {stat.value}
                </div>
                <div 
                  className="mt-2"
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '14px',
                    fontWeight: 400,
                    color: 'var(--text-gray)',
                    lineHeight: 1.4,
                    whiteSpace: 'pre-line'
                  }}
                >
                  {stat.label}
                </div>
              </div>

              {/* Separator (visible on desktop only) */}
              {index < statData.length - 1 && (
                <div className="col-md-1 d-none d-md-block h-100 p-0 text-center">
                  <div 
                    style={{
                      width: '1px',
                      height: '70px',
                      backgroundColor: 'rgba(37,99,235,0.12)',
                      margin: '0 auto'
                    }} 
                  />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Subheading below */}
        <div className="row mt-4">
          <div className="col-12 text-center reveal-item">
            <h3 
              style={{
                fontFamily: 'var(--font-headings)',
                fontWeight: 700,
                fontSize: 'clamp(24px, 3vw, 32px)',
                color: 'var(--text-dark)'
              }}
            >
              WE OFFER EXPERT P&O CARE
            </h3>
          </div>
        </div>

      </div>
    </section>
  );
}
