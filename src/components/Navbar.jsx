import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Simple active link detection based on section visibility
      const sections = ['home', 'about', 'services', 'gallery', 'blog', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 68, // navbar height
        behavior: 'smooth'
      });
    }
  };

  const navLinks = [
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <>
      <nav 
        className="w-100 position-fixed top-0 start-0 overlay-blur" 
        style={{
          height: '68px',
          zIndex: 999,
          backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.93)' : 'rgba(255, 255, 255, 0.85)',
          borderBottom: '1px solid rgba(37, 99, 235, 0.08)',
          boxShadow: scrolled ? 'var(--shadow-navbar)' : 'none',
          transition: 'var(--transition-smooth)'
        }}
      >
        <div className="container h-100 d-flex align-items-center justify-content-between">
          
          {/* Logo Brand left */}
          <div 
            onClick={() => scrollTo('home')} 
            className="d-flex align-items-center cursor-pointer"
            style={{ cursor: 'pointer' }}
          >
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
                  color: 'var(--text-dark)',
                  lineHeight: 1.1
                }}
              >
                Comfort Rehab
              </div>
              <div 
                style={{
                  fontSize: '10px',
                  fontWeight: 500,
                  color: 'var(--text-light)',
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  lineHeight: 1
                }}
              >
                Prosthetist · Orthotist
              </div>
            </div>
          </div>

          {/* Links Center (Desktop) */}
          <div className="d-none d-md-flex align-items-center gap-4">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <div 
                  key={link.id} 
                  onClick={() => scrollTo(link.id)}
                  className="position-relative py-2"
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontWeight: 500,
                    fontSize: '14px',
                    color: isActive ? 'var(--text-dark)' : 'var(--text-gray)',
                    cursor: 'pointer',
                    transition: 'var(--transition-smooth)'
                  }}
                >
                  {link.label}
                  {isActive && (
                    <span 
                      className="position-absolute start-50 translate-middle-x"
                      style={{
                        bottom: '-2px',
                        width: '4px',
                        height: '4px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--blue-mid)'
                      }}
                    />
                  )}
                </div>
              );
            })}
          </div>

          {/* CTAs Right */}
          <div className="d-flex align-items-center gap-3">
            <button 
              onClick={() => scrollTo('contact')}
              className="d-none d-sm-flex align-items-center justify-content-center text-white"
              style={{
                backgroundColor: 'var(--green)',
                fontFamily: 'var(--font-body)',
                fontWeight: 600,
                fontSize: '13px',
                padding: '9px 18px',
                borderRadius: '10px',
                border: 'none',
                transition: 'var(--transition-smooth)',
                boxShadow: '0 4px 15px rgba(34, 197, 94, 0.15)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--green-dark)';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--green)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Book Appointment <span className="ms-1" style={{ fontSize: '11px' }}>↗</span>
            </button>

            {/* Mobile Hamburger menu toggle button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="d-md-none border-0 bg-transparent p-2"
              aria-label="Toggle Menu"
            >
              <div 
                style={{
                  width: '24px',
                  height: '2px',
                  backgroundColor: 'var(--text-dark)',
                  marginBottom: '6px',
                  transition: 'var(--transition-smooth)',
                  transform: mobileMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none'
                }}
              />
              <div 
                style={{
                  width: '24px',
                  height: '2px',
                  backgroundColor: 'var(--text-dark)',
                  marginBottom: '6px',
                  transition: 'var(--transition-smooth)',
                  opacity: mobileMenuOpen ? 0 : 1
                }}
              />
              <div 
                style={{
                  width: '24px',
                  height: '2px',
                  backgroundColor: 'var(--text-dark)',
                  transition: 'var(--transition-smooth)',
                  transform: mobileMenuOpen ? 'rotate(-45deg) translate(6px, -6px)' : 'none'
                }}
              />
            </button>
          </div>

        </div>
      </nav>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div 
          className="position-fixed w-100 start-0 overlay-blur d-md-none d-flex flex-column align-items-center justify-content-center gap-4"
          style={{
            top: '68px',
            bottom: 0,
            backgroundColor: 'rgba(255, 255, 255, 0.98)',
            zIndex: 998,
            transition: 'var(--transition-smooth)'
          }}
        >
          {navLinks.map((link) => (
            <div 
              key={link.id} 
              onClick={() => scrollTo(link.id)}
              style={{
                fontFamily: 'var(--font-headings)',
                fontWeight: 700,
                fontSize: '24px',
                color: activeSection === link.id ? 'var(--blue-mid)' : 'var(--text-dark)',
                cursor: 'pointer'
              }}
            >
              {link.label}
            </div>
          ))}
          <button 
            onClick={() => scrollTo('contact')}
            className="text-white mt-3"
            style={{
              backgroundColor: 'var(--green)',
              fontFamily: 'var(--font-body)',
              fontWeight: 600,
              fontSize: '16px',
              padding: '12px 32px',
              borderRadius: '12px',
              border: 'none',
              transition: 'var(--transition-smooth)'
            }}
          >
            Book Appointment ↗
          </button>
        </div>
      )}
    </>
  );
}
