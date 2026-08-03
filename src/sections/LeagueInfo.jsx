import React from 'react';

export default function LeagueInfo() {
  return (
    <section className="league-info section" data-r="fade-up" id="league" style={{ background: 'var(--off)', color: 'var(--ink)' }}>
      <div className="section-head" style={{ marginBottom: '60px' }}>
        <div>
          <p className="kicker purple" style={{ color: 'var(--violet)' }}><span></span> The Stage</p>
          <h2 style={{ color: 'var(--purple)' }}>ABOUT <em>THE LEAGUE</em></h2>
        </div>
        <p style={{ maxWidth: '450px', fontSize: '16px', lineHeight: '1.8', color: '#554d59' }}>
          The Pro Govinda League has become a platform for youth empowerment through sport, inspiring thousands of young athletes across Maharashtra to participate, compete, and grow.
        </p>
      </div>

      <div className="league-cards">
        <article style={{ background: '#fff', padding: '25px', borderRadius: '12px', boxShadow: '0 10px 30px rgba(42,10,74,0.05)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h3 style={{ font: '800 24px "Barlow Condensed"', color: 'var(--purple)', marginBottom: '10px' }}>INDIA'S FIRST</h3>
          <p style={{ fontSize: '15px', lineHeight: '1.7', color: '#17101d' }}>The nation's first fully professional, structured Dahi Handi sports league, inspired by global franchise league models.</p>
        </article>
        <article style={{ background: '#fff', padding: '25px', borderRadius: '12px', boxShadow: '0 10px 30px rgba(42,10,74,0.05)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h3 style={{ font: '800 24px "Barlow Condensed"', color: 'var(--purple)', marginBottom: '10px' }}>COMPETITIVE FORMAT</h3>
          <p style={{ fontSize: '15px', lineHeight: '1.7', color: '#17101d' }}>A structured season with fixtures, standings, playoffs, and a grand finale bringing sporting rigor to a beloved cultural tradition.</p>
        </article>
        <article style={{ background: '#fff', padding: '25px', borderRadius: '12px', boxShadow: '0 10px 30px rgba(42,10,74,0.05)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h3 style={{ font: '800 24px "Barlow Condensed"', color: 'var(--purple)', marginBottom: '10px' }}>YOUTH-POWERED</h3>
          <p style={{ fontSize: '15px', lineHeight: '1.7', color: '#17101d' }}>Thousands of young athletes compete at the highest level, bringing raw energy and athletic excellence to every event.</p>
        </article>
        <article style={{ background: '#fff', padding: '25px', borderRadius: '12px', boxShadow: '0 10px 30px rgba(42,10,74,0.05)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h3 style={{ font: '800 24px "Barlow Condensed"', color: 'var(--purple)', marginBottom: '10px' }}>FESTIVAL + SPORT</h3>
          <p style={{ fontSize: '15px', lineHeight: '1.7', color: '#17101d' }}>Rooted in Janmashtami, combining the spectacle of a cultural festival with the discipline and drama of professional sport.</p>
        </article>
      </div>

      <div className="league-feature">
        <div>
          <p className="kicker" style={{ color: '#fff' }}><span></span> The Athletic Challenge</p>
          <h3 style={{ font: '900 48px/.9 "Barlow Condensed"', color: '#fff', marginBottom: '25px', letterSpacing: '1px' }}>DAHI HANDI: INDIA'S MOST <em>ELECTRIFYING</em> TRADITIONAL SPORT</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '15px' }}>
            {['High-intensity athletic performance visible to every spectator', 'Explosive moments of celebration', 'Massive crowds create a festival-within-a-stadium atmosphere', 'Deeply emotional and culturally rooted', 'Perfectly designed for live broadcast, short-form video, and viral content'].map((item, i) => (
              <li key={i} style={{ display: 'flex', gap: '12px', fontSize: '13px', lineHeight: '1.5', color: '#ded3e8' }}>
                <span style={{ color: 'var(--gold)', marginTop: '2px' }}>✦</span> {item}
              </li>
            ))}
          </ul>
        </div>
        <div style={{ background: 'rgba(255,255,255,0.95)', padding: '40px', borderRadius: '8px', color: '#17101d', backdropFilter: 'blur(10px)' }}>
          <p style={{ font: '700 18px "Barlow Condensed"', lineHeight: '1.5', marginBottom: '20px' }}>Human pyramids reaching 5 to 8 levels high, built by teams of 200 elite athletes. Every climb demands timing, balance, raw strength, lightning-fast reflexes, and absolute trust in teammates.</p>
          <p style={{ font: '700 18px "Barlow Condensed"', lineHeight: '1.5', color: 'var(--violet)' }}>The crowd holds its breath. The top athlete reaches for the handi. The entire stadium erupts.</p>
        </div>
      </div>
    </section>
  );
}
