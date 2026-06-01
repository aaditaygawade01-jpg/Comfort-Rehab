import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

import About from './components/About';
import StatsRow from './components/StatsRow';
import FullServices from './components/FullServices';
import WhyChooseUs from './components/WhyChooseUs';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Staggered entrance trigger for Hero elements on mount
    setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    // Scroll Reveal IntersectionObserver
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      {
        threshold: 0.1, // trigger when 10% of element is in view
        rootMargin: '0px 0px -50px 0px' // offset to reveal slightly before it hits viewport center
      }
    );

    // Observe all items with the reveal-item class
    const elements = document.querySelectorAll('.reveal-item');
    elements.forEach((el) => observer.observe(el));

    // Cleanup
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className={`app-wrapper ${isLoaded ? 'hero-loaded' : ''}`}>
      {/* Floating Glassmorphism Navbar */}
      <Navbar />

      {/* Main Sections */}
      <div id="home-section">
        <Hero />
      </div>
      

      
      <About />
      
      <StatsRow />
      
      <FullServices />
      
      <Gallery />
      
      <WhyChooseUs />
      
      <Testimonials />
      
      <Blog />
      
      <Contact />
      
      {/* Dark contrast Footer */}
      <Footer />

      {/* Floating WhatsApp pulse button */}
      <a 
        href="https://wa.me/919892251088" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="whatsapp-floating animate-pulse"
        aria-label="Chat on WhatsApp"
      >
        <i className="bi bi-whatsapp"></i>
        <div className="whatsapp-pulse-ring"></div>
      </a>

      {/* Global CSS for entrance stagger */}
      <style>{`
        /* Staggered entrance animations for Hero */
        .app-wrapper .hero-title span,
        .app-wrapper .btn-green-cta,
        .app-wrapper .btn-blue-outline,
        .app-wrapper .organic-image-frame,
        .app-wrapper .floating-element,
        .app-wrapper .floating-element-delay-1,
        .app-wrapper .floating-element-delay-2 {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s cubic-bezier(0.215, 0.61, 0.355, 1),
                      transform 0.8s cubic-bezier(0.215, 0.61, 0.355, 1);
        }

        .hero-loaded .hero-title span:nth-child(1) { transition-delay: 150ms; opacity: 1; transform: translateY(0); }
        .hero-loaded .hero-title span:nth-child(2) { transition-delay: 270ms; opacity: 1; transform: translateY(0); }
        .hero-loaded .hero-title span:nth-child(3) { transition-delay: 390ms; opacity: 1; transform: translateY(0); }
        .hero-loaded .btn-green-cta { transition-delay: 510ms; opacity: 1; transform: translateY(0); }
        .hero-loaded .btn-blue-outline { transition-delay: 630ms; opacity: 1; transform: translateY(0); }
        .hero-loaded .organic-image-frame { transition-delay: 750ms; opacity: 1; transform: translateY(0); }
        .hero-loaded .floating-element { transition-delay: 870ms; opacity: 1; transform: translateY(0); }
        .hero-loaded .floating-element-delay-1 { transition-delay: 990ms; opacity: 1; transform: translateY(0); }
        .hero-loaded .floating-element-delay-2 { transition-delay: 1110ms; opacity: 1; transform: translateY(0); }
      `}</style>
    </div>
  );
}
