import React, { useState } from 'react';

export default function LeagueInfo() {
  const [btnHovered, setBtnHovered] = useState(false);

  return (
    <>
      <section className="league-info section" data-r="fade-up" id="league" style={{ background: 'var(--off)', color: 'var(--ink)' }}>
        <div className="section-head" style={{ marginBottom: '60px' }}>
          <div>
            <p className="kicker purple" style={{ color: 'var(--violet)' }}><span></span> The Stage</p>
            <h2 style={{ color: 'var(--purple)' }}>ABOUT <em>THE LEAGUE</em></h2>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '80px' }}>
          <div data-r="scale" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', width: '100%', maxWidth: '800px', gap: '20px', padding: '0 20px' }}>
            <img src="/streaming partner.jpeg" alt="Streaming Partner" style={{ width: '100%', height: '100%', aspectRatio: '1 / 1.1', objectFit: 'cover', borderRadius: '16px', boxShadow: '0 25px 50px rgba(0,0,0,0.15)' }} />
            <img src="/popup-banner.webp" alt="Pro Govinda League Banner" style={{ width: '100%', height: '100%', aspectRatio: '1 / 1.1', objectFit: 'cover', borderRadius: '16px', boxShadow: '0 25px 50px rgba(0,0,0,0.15)' }} />
          </div>
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

      <section className="section" style={{ background: '#13061f', color: '#fff' }}>
        <div className="section-head" data-r="fade-up" style={{ textAlign: 'center', margin: '0 auto 60px' }}>
          <p className="kicker" style={{ justifyContent: 'center', color: 'var(--purple)' }}><span></span> The Heritage</p>
          <h2 style={{ color: '#fff', margin: '10px 0', WebkitTextFillColor: '#fff' }}>PRO GOVINDA <em>LEAGUE</em></h2>
          <p style={{ margin: '0 auto', maxWidth: '750px', color: '#c4b8c9', fontSize: '15px', lineHeight: '1.8' }}>
            Pro Govinda League is India’s first professional league dedicated to the sport of human pyramid formation, traditionally known as Dahi Handi. Established to bring structure and recognition to this age-old practice, the league introduces standardized rules, safety protocols and competitive formats. By transforming a cultural celebration into an organised sport, Pro Govinda League offers athletes a platform to showcase their tremendous skills on a national stage.
          </p>
          <a 
            href="https://www.progovindaindia.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="button" 
            style={{ 
              display: 'inline-flex',
              marginTop: '35px',
              background: btnHovered ? 'var(--purple)' : '#fff',
              color: btnHovered ? '#fff' : 'var(--purple)',
              transition: 'background 0.3s ease, color 0.3s ease'
            }}
            onMouseEnter={() => setBtnHovered(true)}
            onMouseLeave={() => setBtnHovered(false)}
          >
            Website <span>→</span>
          </a>
        </div>

        <div className="heritage-grid">
          <div data-r="fade-up">
            <h3 style={{ font: '800 42px "Barlow Condensed"', color: '#fff', WebkitTextFillColor: '#fff', marginBottom: '10px' }}>Shri. Pratap Sarnaik</h3>
            <p style={{ textTransform: 'uppercase', letterSpacing: '1px', fontSize: '11px', color: 'var(--violet)', marginBottom: '25px', fontWeight: 'bold' }}>Co-Founder, Pro Govinda League</p>
            <p style={{ fontSize: '14px', lineHeight: '1.8', color: '#ded3e8', marginBottom: '30px' }}>
              A visionary leader and sports enthusiast, Pratap Sarnaik co-founded the Pro Govinda League to elevate the traditional Govinda Pathak into a nationally recognized sport. His dedication to youth empowerment and cultural preservation has transformed the league into a dynamic platform for athletic excellence.
            </p>
          </div>
          <div data-r="fade-up" data-r-delay="1" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
             <div style={{ position: 'relative', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.4)', maxWidth: '280px', width: '100%' }}>
                <img src="/Pratap Sarnaik.webp" alt="Pratap Sarnaik" style={{ width: '100%', height: 'auto', display: 'block' }} />
             </div>
          </div>
        </div>

        <div className="heritage-grid reverse" style={{ marginTop: '60px' }}>
          <div data-r="fade-up">
            <h3 style={{ font: '800 42px "Barlow Condensed"', color: '#fff', WebkitTextFillColor: '#fff', marginBottom: '10px' }}>Shri. Purvesh Pratap Sarnaik</h3>
            <p style={{ textTransform: 'uppercase', letterSpacing: '1px', fontSize: '11px', color: 'var(--violet)', marginBottom: '25px', fontWeight: 'bold' }}>President, Pro Govinda League</p>
            <p style={{ fontSize: '14px', lineHeight: '1.8', color: '#ded3e8', marginBottom: '30px' }}>
              Purvesh Sarnaik brings a fresh, athlete-centric vision to the Pro Govinda League, championing franchise development and nationwide talent scouting. His strategic leadership is transforming this traditional sport into a structured national event.
            </p>
          </div>
          <div data-r="fade-up" data-r-delay="1" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
             <div style={{ position: 'relative', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.4)', maxWidth: '280px', width: '100%' }}>
                <img src="/Purvesh.JPG" alt="Purvesh Sarnaik" style={{ width: '100%', height: 'auto', display: 'block' }} />
             </div>
          </div>
        </div>

        <div className="heritage-grid" style={{ marginTop: '60px' }}>
          <div data-r="fade-up">
            <h3 style={{ font: '800 42px "Barlow Condensed"', color: '#fff', WebkitTextFillColor: '#fff', marginBottom: '10px' }}>Suryakumar Yadav (SKY)</h3>
            <p style={{ textTransform: 'uppercase', letterSpacing: '1px', fontSize: '11px', color: 'var(--violet)', marginBottom: '25px', fontWeight: 'bold' }}>Brand Ambassador, Pro Govinda League</p>
            <p style={{ fontSize: '14px', lineHeight: '1.8', color: '#ded3e8', marginBottom: '20px' }}>
              We are thrilled to welcome Indian cricket superstar Suryakumar Yadav as the official Brand Ambassador for the Pro Govinda League! Known for his fearless approach and unmatched energy, SKY embodies the spirit and passion of the Govindas.
            </p>
            <p style={{ fontSize: '14px', lineHeight: '1.8', color: '#ded3e8', marginBottom: '20px' }}>
              With SKY joining the family, the league is set to reach new heights and inspire millions of young athletes across the nation.
            </p>
          </div>
          <div data-r="fade-up" data-r-delay="1" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
             <div style={{ position: 'relative', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.4)', maxWidth: '280px', width: '100%' }}>
                <img src="/sky.jpeg" alt="Suryakumar Yadav (SKY)" style={{ width: '100%', height: 'auto', display: 'block' }} />
             </div>
          </div>
        </div>

        <div className="heritage-grid reverse" style={{ marginTop: '60px' }}>
          <div data-r="fade-up">
            <h3 style={{ font: '800 42px "Barlow Condensed"', color: '#fff', WebkitTextFillColor: '#fff', marginBottom: '10px' }}>Bittu Boss</h3>
            <p style={{ textTransform: 'uppercase', letterSpacing: '1px', fontSize: '11px', color: 'var(--violet)', marginBottom: '25px', fontWeight: 'bold' }}>Official Mascot, Pro Govinda League</p>
            <p style={{ fontSize: '14px', lineHeight: '1.8', color: '#ded3e8', marginBottom: '20px' }}>
              Meet Bittu Boss, the official mascot of the Pro Govinda League! He has officially kicked off his city-wide promotional journey after seeking blessings at Shri Siddhivinayak Mandir, Mumbai, alongside his newly inaugurated mascot vehicle.
            </p>
            <p style={{ fontSize: '14px', lineHeight: '1.8', color: '#ded3e8', marginBottom: '20px' }}>
              Bittu Boss is now traveling across the city, meeting fans and Govindas to spread the excitement for Pro Govinda League Season 4. Keep following his journey—there’s a lot more coming!
            </p>
          </div>
          <div data-r="fade-up" data-r-delay="1" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
             <div style={{ position: 'relative', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.4)', maxWidth: '280px', width: '100%', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src="/bittu boss.jpeg" alt="Bittu Boss" style={{ width: '100%', height: '280px', objectFit: 'cover', transformOrigin: 'center', display: 'block' }} />
             </div>
          </div>
        </div>
        

      </section>
    </>
  );
}

