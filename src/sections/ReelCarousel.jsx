import React, { useState, useEffect, useRef } from 'react';

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

function ReelCard({ reelCode, index, containerRef }) {
  const [active, setActive] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const cardRef = useRef(null);

  // Lazy-load when the card enters the horizontal scroll visible area
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      {
        root: containerRef.current,
        threshold: 0.05,
        rootMargin: '0px 250px 0px 250px' // Start loading when card is within 250px horizontally
      }
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, [containerRef]);

  return (
    <div
      ref={cardRef}
      className="carousel-item reel-item"
      style={{
        position: 'relative',
        width: '280px',
        height: '497px',
        borderRadius: '20px',
        overflow: 'hidden',
        flexShrink: 0,
        boxShadow: '0 8px 30px rgba(42,10,74,0.12), 0 2px 8px rgba(0,0,0,0.06)',
        transition: 'transform 0.4s cubic-bezier(0.25,1,0.5,1), box-shadow 0.4s cubic-bezier(0.25,1,0.5,1)',
        background: '#fff',
        border: '1px solid rgba(107,47,160,0.1)',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-6px) scale(1.02)';
        e.currentTarget.style.boxShadow = '0 20px 50px rgba(107,47,160,0.2), 0 6px 20px rgba(0,0,0,0.08)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0) scale(1)';
        e.currentTarget.style.boxShadow = '0 8px 30px rgba(42,10,74,0.12), 0 2px 8px rgba(0,0,0,0.06)';
      }}
    >
      {/* Skeleton Shimmer — shown until the iframe fully loads */}
      {!loaded && (
        <div style={{
          position: 'absolute', inset: 0, zIndex: 2,
          background: 'linear-gradient(90deg, #f0edf4 25%, #e8e2ef 50%, #f0edf4 75%)',
          backgroundSize: '200% 100%',
          animation: 'shimmer 1.4s infinite',
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '16px',
        }}>
          <img src="/logo.png" alt="Loading..." style={{ width: '56px', opacity: 0.35 }} />
          <div style={{ width: '28px', height: '28px', borderRadius: '50%', border: '3px solid rgba(107,47,160,0.15)', borderTopColor: 'var(--purple)', animation: 'spin 0.8s linear infinite' }} />
          <span style={{ fontSize: '10px', fontWeight: 700, color: 'rgba(107,47,160,0.35)', letterSpacing: '1px', textTransform: 'uppercase' }}>
            Loading Reel…
          </span>
        </div>
      )}

      {/* Native Direct Iframe Embed (No heavy embed.js script required) */}
      {active && (
        <iframe
          src={`https://www.instagram.com/reel/${reelCode}/embed/`}
          title={`Instagram Reel ${index + 1}`}
          width="100%"
          height="100%"
          frameBorder="0"
          scrolling="no"
          allowFullScreen
          allow="encrypted-media"
          onLoad={() => setLoaded(true)}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            border: 'none',
            zIndex: 1,
            display: loaded ? 'block' : 'none'
          }}
        />
      )}

      {/* Border overlay */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 3, borderRadius: '20px', pointerEvents: 'none', border: '1px solid rgba(107,47,160,0.1)' }} />

      {/* Instagram Badge */}
      <div style={{
        position: 'absolute', top: '14px', right: '14px', zIndex: 10,
        display: 'flex', alignItems: 'center', gap: '5px',
        background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(8px)',
        borderRadius: '20px', padding: '5px 10px',
        color: 'var(--purple)', fontSize: '10px', fontWeight: 700, letterSpacing: '0.5px',
        border: '1px solid rgba(107,47,160,0.12)',
        pointerEvents: 'none',
      }}>
        <InstagramIcon /> Reel
      </div>


    </div>
  );
}

export default function ReelCarousel() {
  const containerRef = useRef(null);
  
  // Directly use the Instagram Reel codes
  const reelCodes = [
    "DcK5IKwIaTl",
    "DcJBce7IoqB",
    "Da-z0zloGBt",
    "DbVHVJgiLb5",
    "DbU6Khby_6t",
    "DbAmK1sCIiK",
    "DNJHcN9obwI",
    "DMslRRyyZWG",
    "DMzSCQPNv2J",
    "DMuKgwQoQUg"
  ];

  return (
    <section className="carousel-section section" style={{ padding: '60px 0 50px 0', background: 'var(--off)' }}>
      <style>{`
        @keyframes shimmer { 0%{background-position:200% 0} 100%{background-position:-200% 0} }
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>

      <div className="section-head" style={{ padding: '0 9vw', marginBottom: '36px' }}>
        <div>
          <p className="kicker purple"><span></span> Reels</p>
          <h2>TITANS <em>SHORTS</em></h2>
        </div>
        <a href="https://www.instagram.com/surat.titans/" target="_blank" rel="noopener noreferrer" className="text-button" style={{ whiteSpace: 'nowrap' }}>
          Follow us <b>→</b>
        </a>
      </div>

      <div 
        ref={containerRef}
        className="carousel-container hide-scrollbar" 
        style={{ paddingBottom: '55px' }}
      >
        <div className="carousel-track">
          {reelCodes.map((code, index) => (
            <ReelCard key={code} reelCode={code} index={index} containerRef={containerRef} />
          ))}
        </div>
      </div>
    </section>
  );
}
