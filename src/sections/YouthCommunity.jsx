import React from 'react';

export default function YouthCommunity() {
  return (
    <section className="youth-community section" data-r="fade-up" style={{ background: 'linear-gradient(rgba(233, 223, 240, 0.85), rgba(233, 223, 240, 0.85)), url("/team huddle.JPG") center/cover no-repeat', color: 'var(--ink)' }}>
      <div className="section-head" style={{ marginBottom: '50px' }}>
        <div>
          <p className="kicker" style={{ color: 'var(--violet)' }}><span></span> Impact</p>
          <h2 style={{ color: 'var(--purple)' }}>YOUTH ENGAGEMENT &<br/><em>COMMUNITY IMPACT</em></h2>
        </div>
        <p style={{ maxWidth: '400px', fontSize: '14px', lineHeight: '1.8', color: '#000' }}>
          The Pro Govinda League has become a platform for youth empowerment through sport, inspiring thousands of young athletes across Maharashtra to participate, compete, and grow.
        </p>
      </div>

      <div className="impact-grid">
        <article data-r="fade-up" data-r-delay="1" style={{ display: 'flex', gap: '20px' }}>
          <span style={{ font: '800 70px/.8 "Barlow Condensed"', color: 'var(--purple)', opacity: '0.15' }}>1</span>
          <div>
            <h3 style={{ font: '800 22px "Barlow Condensed"', marginBottom: '8px', color: 'var(--purple)' }}>Discipline</h3>
            <p style={{ fontSize: '12px', lineHeight: '1.6', color: '#615968' }}>Sport builds character and focus in young participants.</p>
          </div>
        </article>
        <article data-r="fade-up" data-r-delay="2" style={{ display: 'flex', gap: '20px' }}>
          <span style={{ font: '800 70px/.8 "Barlow Condensed"', color: 'var(--purple)', opacity: '0.15' }}>2</span>
          <div>
            <h3 style={{ font: '800 22px "Barlow Condensed"', marginBottom: '8px', color: 'var(--purple)' }}>Team Spirit</h3>
            <p style={{ fontSize: '12px', lineHeight: '1.6', color: '#615968' }}>Collective achievement fosters community pride and belonging.</p>
          </div>
        </article>
        <article data-r="fade-up" data-r-delay="3" style={{ display: 'flex', gap: '20px' }}>
          <span style={{ font: '800 70px/.8 "Barlow Condensed"', color: 'var(--purple)', opacity: '0.15' }}>3</span>
          <div>
            <h3 style={{ font: '800 22px "Barlow Condensed"', marginBottom: '8px', color: 'var(--purple)' }}>Physical Fitness</h3>
            <p style={{ fontSize: '12px', lineHeight: '1.6', color: '#615968' }}>The league promotes an active, healthy lifestyle for youth.</p>
          </div>
        </article>
        <article data-r="fade-up" data-r-delay="4" style={{ display: 'flex', gap: '20px' }}>
          <span style={{ font: '800 70px/.8 "Barlow Condensed"', color: 'var(--purple)', opacity: '0.15' }}>4</span>
          <div>
            <h3 style={{ font: '800 22px "Barlow Condensed"', marginBottom: '8px', color: 'var(--purple)' }}>Sports Culture</h3>
            <p style={{ fontSize: '12px', lineHeight: '1.6', color: '#615968' }}>Building a lasting culture of traditional sport in Maharashtra.</p>
          </div>
        </article>
      </div>
    </section>
  );
}
