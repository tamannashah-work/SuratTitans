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
            <p style={{ font: '700 18px "Barlow Condensed"', lineHeight: '1.5', marginBottom: '20px' }}>Human pyramids reaching 5 to 8 levels high, built by teams of more than 100 elite athletes. Every climb demands timing, balance, raw strength, lightning-fast reflexes, and absolute trust in teammates.</p>
            <p style={{ font: '700 18px "Barlow Condensed"', lineHeight: '1.5', color: 'var(--violet)' }}>The crowd holds its breath. The top athlete reaches for the handi. The entire stadium erupts.</p>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--black)', color: '#fff', paddingBottom: '100px' }}>
        <div className="section-head" data-r="fade-up" style={{ textAlign: 'center', margin: '0 auto 80px' }}>
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

        {/* People cards — alternating layout */}
        {[
          {
            num: '01',
            name: 'Shri. Pratap Sarnaik',
            role: 'Founder, Pro Govinda League',
            bio: 'A visionary leader and sports enthusiast, Pratap Sarnaik founded the Pro Govinda League to elevate the traditional Govinda Pathak into a nationally recognized sport. His dedication to youth empowerment and cultural preservation has transformed the league into a dynamic platform for athletic excellence.',
            img: '/Pratap Sarnaik.webp',
            imgFit: 'cover',
            imgBg: 'transparent',
            reverse: false,
          },
          {
            num: '02',
            name: 'Shri. Purvesh Pratap Sarnaik',
            role: 'President, Pro Govinda League',
            bio: 'Purvesh Sarnaik brings a fresh, athlete-centric vision to the Pro Govinda League, championing franchise development and nationwide talent scouting. His strategic leadership is transforming this traditional sport into a structured national event.',
            img: '/Purvesh.JPG',
            imgFit: 'cover',
            imgBg: 'transparent',
            reverse: true,
          },
          {
            num: '03',
            name: 'Suryakumar Yadav',
            role: 'Brand Ambassador · Season 4',
            bio: 'We are thrilled to welcome Indian cricket superstar Suryakumar Yadav as the official Brand Ambassador for the Pro Govinda League Season 4! Known for his fearless approach and unmatched energy, SKY embodies the spirit and passion of the Govindas. With SKY joining the family, the league is set to reach new heights and inspire millions of young athletes across the nation.',
            img: '/suryakumar yadav.jpeg',
            img2: '/sky.jpeg',
            imgFit: 'cover',
            imgBg: 'transparent',
            reverse: false,
          },
          {
            num: '04',
            name: 'Bittu Boss',
            role: 'Official Mascot, Pro Govinda League',
            bio: 'Meet Bittu Boss, the official mascot of the Pro Govinda League! He kicked off his city-wide promotional journey after seeking blessings at Shri Siddhivinayak Mandir, Mumbai. Bittu Boss is now traveling across the city, meeting fans and Govindas to spread the excitement for Season 4.',
            img: '/bittu boss.jpeg',
            imgFit: 'cover',
            imgBg: '#fff',
            reverse: true,
          },
        ].map(({ num, name, role, bio, img, img2, imgFit, imgBg, reverse }, i) => (
          <div
            key={i}
            data-r="fade-up"
            style={{
              display: 'flex',
              flexDirection: reverse ? 'row-reverse' : 'row',
              alignItems: 'center',
              gap: '40px',
              maxWidth: '1100px',
              margin: i === 0 ? '0 auto' : '40px auto 0',
              padding: '0 20px',
              borderRadius: '20px',
              background: 'transparent',
              boxSizing: 'border-box',
              flexWrap: 'wrap',
            }}
          >
            {/* Photo column */}
            <div style={{ flex: '0 0 auto', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', gap: '16px' }}>
              <div style={{
                position: 'relative',
                width: '260px',
                height: '320px',
                borderRadius: '16px',
                overflow: 'hidden',
                border: '1px solid rgba(255,255,255,0.15)', // Lighter border on dark bg
                boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
                background: imgBg,
                flexShrink: 0,
              }}>
                <img
                  src={img}
                  alt={name}
                  style={{ width: '100%', height: '100%', objectFit: imgFit, objectPosition: 'top', display: 'block' }}
                />
              </div>
              
              {img2 && (
                <div style={{
                  position: 'relative',
                  width: '260px',
                  height: '320px',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  border: '1px solid rgba(255,255,255,0.15)',
                  boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
                  background: imgBg,
                  flexShrink: 0,
                }}>
                  <img
                    src={img2}
                    alt={`${name} secondary`}
                    style={{ width: '100%', height: '100%', objectFit: imgFit, objectPosition: 'top', display: 'block' }}
                  />
                </div>
              )}
            </div>

            {/* Text column */}
            <div style={{ flex: 1, minWidth: '260px' }}>
              {/* Role pill */}
              <span style={{
                display: 'inline-block',
                background: 'rgba(139,92,246,0.18)', // Darker pill bg for dark theme
                border: '1px solid rgba(139,92,246,0.35)',
                borderRadius: '30px',
                padding: '5px 14px',
                fontSize: '10px',
                fontWeight: 700,
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                color: 'var(--violet)',
                marginBottom: '18px',
              }}>{role}</span>

              <h3 style={{
                font: '900 48px/1 "Barlow Condensed"',
                color: '#fff', // White heading on dark bg
                WebkitTextFillColor: '#fff',
                margin: '0 0 20px',
                letterSpacing: '0.5px',
              }}>{name}</h3>

              <p style={{ fontSize: '15px', lineHeight: '1.9', color: '#c4b8c9', margin: 0 }}>{bio}</p>

              {/* Decorative line */}
              <div style={{
                width: '40px',
                height: '3px',
                borderRadius: '2px',
                background: 'linear-gradient(90deg, var(--violet), transparent)',
                marginTop: '28px',
              }} />
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
