import React from 'react';

export default function Blog() {
  const posts = [
    {
      title: 'The Future of Custom Prosthetic Fitting',
      category: 'Technology',
      emoji: '🦿',
      date: 'May 20, 2026',
      readTime: '5 min read',
      excerpt: 'Explore how advanced socket designs and materials like carbon fiber are transforming comfort and mobility for amputees.'
    },
    {
      title: 'Understanding Spinal Orthotics & Taylor Braces',
      category: 'Orthotics',
      emoji: '🫀',
      date: 'May 12, 2026',
      readTime: '4 min read',
      excerpt: 'Learn about the function of Taylor braces, ASH braces, and how they help treat spine decompression and posture correction.'
    },
    {
      title: 'Preventive Footwear for Diabetic Foot Care',
      category: 'Foot Care',
      emoji: '🏃',
      date: 'Apr 28, 2026',
      readTime: '6 min read',
      excerpt: 'How custom-molded insoles and orthopedic shoes play a critical role in preventing pressure ulcers for diabetic patients.'
    }
  ];

  return (
    <section id="blog" className="bg-page-section">
      <div className="container">
        
        {/* Header */}
        <div className="row mb-5">
          <div className="col-12 text-start reveal-item">
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
              Blog
            </div>
            <h2 className="section-title">
              Insights & Articles
            </h2>
          </div>
        </div>

        {/* 3 cards row */}
        <div className="row g-4 justify-content-center">
          {posts.map((post, index) => (
            <div key={index} className="col-lg-4 col-md-6 col-12 reveal-item">
              <div 
                className="nuvica-card h-100 d-flex flex-column overflow-hidden text-start"
                style={{
                  border: '1px solid rgba(37,99,235,0.05)'
                }}
              >
                
                {/* Thumbnail Area */}
                <div 
                  className="w-100 d-flex align-items-center justify-content-center position-relative"
                  style={{
                    height: '180px',
                    backgroundColor: 'var(--blue-light)',
                  }}
                >
                  {/* Category Pill Tag */}
                  <span 
                    className="position-absolute px-3 py-1 text-white"
                    style={{
                      top: '16px',
                      left: '16px',
                      borderRadius: '100px',
                      backgroundColor: 'var(--green)',
                      fontFamily: 'var(--font-body)',
                      fontWeight: 600,
                      fontSize: '10px',
                      letterSpacing: '1px',
                      textTransform: 'uppercase',
                      zIndex: 2
                    }}
                  >
                    {post.category}
                  </span>

                  {/* Huge Emoji */}
                  <div 
                    style={{
                      fontSize: '72px',
                      filter: 'drop-shadow(0 10px 20px rgba(37,99,235,0.15))'
                    }}
                  >
                    {post.emoji}
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-4 d-flex flex-column justify-content-between flex-grow-1">
                  <div>
                    {/* Date and Read Time */}
                    <div 
                      className="mb-2"
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '12px',
                        color: 'var(--text-light)',
                        fontWeight: 500
                      }}
                    >
                      {post.date} &middot; {post.readTime}
                    </div>

                    {/* Title */}
                    <h3 
                      className="mb-2"
                      style={{
                        fontFamily: 'var(--font-headings)',
                        fontWeight: 700,
                        fontSize: '18px',
                        lineHeight: 1.3,
                        color: 'var(--text-dark)'
                      }}
                    >
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p 
                      className="mb-4"
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '13.5px',
                        color: 'var(--text-gray)',
                        lineHeight: 1.6
                      }}
                    >
                      {post.excerpt}
                    </p>
                  </div>

                  {/* Read More Link */}
                  <div>
                    <a 
                      href="#blog" 
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontWeight: 600,
                        fontSize: '14px',
                        color: 'var(--green-dark)',
                        textDecoration: 'none',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px',
                        transition: 'var(--transition-smooth)'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.transform = 'translateX(4px)'}
                      onMouseLeave={(e) => e.currentTarget.style.transform = 'translateX(0)'}
                    >
                      Read More <span>→</span>
                    </a>
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
