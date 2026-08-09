import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const originalGallery = [
  { src: '/team3.jpg', title: '2025 Highlights' },
  { src: '/gallery (3).JPG', title: '2026 Taj Falaknuma Event' },
  { src: '/pyramid.JPG', title: 'Pro Govinda League 2025' },
  { src: '/owners3.JPG', title: 'Titans Ownership' },
  { src: '/PGL DAY 214750.jpg', title: 'Match Day Action' },
  { src: '/team.JPG', title: 'The Squad 2026' },
  { src: '/pyramid2.JPG', title: 'Record Breaking Pyramid' },
  { src: '/team huddle.JPG', title: 'Pre-match Strategy' },
  { src: '/PGL DAY 214742.jpg', title: 'Govinda Spirit' },
  { src: '/gallery (2).jpg', title: 'Community Outreach' },
  { src: '/gallery 5.jpeg', title: 'Suryakumar Yadav (SKY) - Brand Ambassador' },
  { src: '/gallery 6.jpeg', title: 'Victory Celebration' },
  { src: '/gallery 7.jpeg', title: 'City Parade' },
  { src: '/gallery 8.jpeg', title: 'Season Finale' }
];

const bittuBossGallery = [
  { src: '/Bittu Boss Visit to Shreeji/10.jpeg', title: 'Bittu Boss Visit to Shreeji' },
  { src: '/Bittu Boss Visit to Shreeji/12.jpeg', title: 'Bittu Boss Visit to Shreeji' },
  { src: '/Bittu Boss Visit to Shreeji/2.jpeg', title: 'Bittu Boss Visit to Shreeji' },
  { src: '/Bittu Boss Visit to Shreeji/3.jpeg', title: 'Bittu Boss Visit to Shreeji' },
  { src: '/Bittu Boss Visit to Shreeji/4.jpeg', title: 'Bittu Boss Visit to Shreeji' },
  { src: '/Bittu Boss Visit to Shreeji/5.jpeg', title: 'Bittu Boss Visit to Shreeji' },
  { src: '/Bittu Boss Visit to Shreeji/6.jpeg', title: 'Bittu Boss Visit to Shreeji' },
  { src: '/Bittu Boss Visit to Shreeji/7.jpeg', title: 'Bittu Boss Visit to Shreeji' },
  { src: '/Bittu Boss Visit to Shreeji/8.jpeg', title: 'Bittu Boss Visit to Shreeji' },
  { src: '/Bittu Boss Visit to Shreeji/9.jpeg', title: 'Bittu Boss Visit to Shreeji' },
  { src: '/Bittu Boss Visit to Shreeji/WhatsApp Image 2026-08-09 at 4.55.13 PM.jpeg', title: 'Bittu Boss Visit to Shreeji' }
];

const tajGallery = [
  { src: '/Taj Falaknuma/DSC06873.JPG', title: 'Taj Falaknuma Event 2026' },
  { src: '/Taj Falaknuma/DSC06921.JPG', title: 'Taj Falaknuma Event 2026' },
  { src: '/Taj Falaknuma/DSC07003.JPG', title: 'Taj Falaknuma Event 2026' },
  { src: '/Taj Falaknuma/DSC07709.JPG', title: 'Taj Falaknuma Event 2026' },
  { src: '/Taj Falaknuma/DSC07989.jpg', title: 'Taj Falaknuma Event 2026' },
  { src: '/Taj Falaknuma/DSC08362.JPG', title: 'Taj Falaknuma Event 2026' },
  { src: '/Taj Falaknuma/DSC08387.JPG', title: 'Taj Falaknuma Event 2026' },
  { src: '/Taj Falaknuma/DSC08525.JPG', title: 'Taj Falaknuma Event 2026' }
];

const row1Images = [
  originalGallery[0],
  bittuBossGallery[0],
  tajGallery[0],
  { src: '/bus1.jpeg', title: 'PGL Branded Buses Hit the Roads!' },
  originalGallery[1],
  bittuBossGallery[1],
  originalGallery[2],
  bittuBossGallery[2],
  tajGallery[1],
  originalGallery[3],
  bittuBossGallery[3],
  originalGallery[4],
  bittuBossGallery[4],
  originalGallery[5],
  bittuBossGallery[5],
];

const row2Images = [
  originalGallery[6],
  bittuBossGallery[6],
  tajGallery[2],
  originalGallery[7],
  originalGallery[8],
  bittuBossGallery[7],
  tajGallery[3],
  originalGallery[9],
  originalGallery[10],
  bittuBossGallery[8],
  originalGallery[11],
  originalGallery[12],
];

const row3Images = [
  originalGallery[13],
  bittuBossGallery[9],
  tajGallery[4],
  { src: '/bus2.jpeg', title: 'Taking PGL Season 4 Closer to the People' },
  originalGallery[0],
  bittuBossGallery[10],
  originalGallery[1],
  tajGallery[5],
  bittuBossGallery[0],
  originalGallery[2],
  bittuBossGallery[1],
  originalGallery[3],
  bittuBossGallery[2],
  originalGallery[4],
];

const row4Images = [
  originalGallery[5],
  bittuBossGallery[3],
  tajGallery[6],
  originalGallery[6],
  bittuBossGallery[4],
  originalGallery[7],
  tajGallery[7],
  bittuBossGallery[5],
  originalGallery[8],
  bittuBossGallery[6],
  originalGallery[9],
  bittuBossGallery[7],
  originalGallery[10],
];

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

import LeagueInfo from '../sections/LeagueInfo'
import YouthCommunity from '../sections/YouthCommunity'
import ReelCarousel from '../sections/ReelCarousel'
import VideoCarousel from '../sections/VideoCarousel'

export default function Home() {
  const [videoModalSrc, setVideoModalSrc] = useState(null)
  const [imageModalSrc, setImageModalSrc] = useState(null)
  const [formData, setFormData] = useState({ name: '', email: '', countryCode: '+91', phone: '', message: '' })
  const [status, setStatus] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (!res.ok) throw new Error('Failed to send message');
      setStatus('success');
      setFormData({ name: '', email: '', countryCode: '+91', phone: '', message: '' });
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };



  return (
    <main>
      <section className="hero" id="home">
        <div className="hero-content">
          <p className="kicker"><span></span> Official Pro Govinda League Franchise</p>
          <h1><span>SURAT</span><br /><em>TITANS</em></h1>
          <p className="hero-tag">POWER <b>•</b> PRIDE <b>•</b> LEGACY</p>
          <p className="hero-text">A new era of tradition. A global dream. Built on the courage and spirit of Mumbai.</p>
          <div className="actions">
            <a className="button gold" href="#team">Meet the team <span>→</span></a>
            <button className="watch" onClick={() => setVideoModalSrc('/videos/practice session.mp4')} style={{ background: 'transparent', border: 'none', cursor: 'pointer', outline: 'none' }}><b>▶</b> Watch highlights</button>
          </div>
          <div className="hero-stats">
            <div><strong>2023</strong><span>Founded</span></div>
            <div><strong>50+</strong><span>Athletes</span></div>
            <div><strong>Jio Hotstar</strong><span>Streaming Partner</span></div>
          </div>
        </div>

        <div className="hero-graphics" data-r="stamp">
          <img src="/logo.png" alt="Surat Titans Logo" className="hero-logo" />
          <span className="hero-tagline">
            <span className="stamp stamp-1">JOD</span>{" "}
            <span className="stamp stamp-2">KE</span>{" "}
            <span className="stamp stamp-3">TOD</span>
          </span>
        </div>

        <p className="side-copy">MUMBAI · INDIA</p>
      </section>

      <section className="marquee">
        <div className="marquee-track">
          <div className="marquee-content">
            <b>SURAT TITANS</b><span>•</span><b>POWER. PRIDE. LEGACY.</b><span>•</span>
            <b>SURAT TITANS</b><span>•</span><b>POWER. PRIDE. LEGACY.</b><span>•</span>
            <b>SURAT TITANS</b><span>•</span><b>POWER. PRIDE. LEGACY.</b><span>•</span>
            <b>SURAT TITANS</b><span>•</span><b>POWER. PRIDE. LEGACY.</b><span>•</span>
          </div>
          <div className="marquee-content">
            <b>SURAT TITANS</b><span>•</span><b>POWER. PRIDE. LEGACY.</b><span>•</span>
            <b>SURAT TITANS</b><span>•</span><b>POWER. PRIDE. LEGACY.</b><span>•</span>
            <b>SURAT TITANS</b><span>•</span><b>POWER. PRIDE. LEGACY.</b><span>•</span>
            <b>SURAT TITANS</b><span>•</span><b>POWER. PRIDE. LEGACY.</b><span>•</span>
          </div>
        </div>
      </section>

      <section className="about section" id="about">
        <div className="about-visual" style={{ background: 'linear-gradient(rgba(42, 10, 74, 0.4), rgba(42, 10, 74, 0.4)), url("/pyramid.JPG") center/cover no-repeat' }}>
          <img src="/logo.png" alt="ST Logo" className="about-mark" style={{ height: '180px', width: 'auto' }} />
          <p>THE SPIRIT<br />OF MUMBAI</p>
        </div>
        <div className="about-copy">
          <p className="kicker purple"><span></span> Who we are</p>
          <h2>TRADITION<br />IN <em>MOTION.</em></h2>
          <p>Surat Titans is the official Pro Govinda League franchise representing the courage, craft and sporting heritage of Mumbai. We are here to preserve a beloved tradition while building a professional ecosystem for the athletes of tomorrow.</p>
          <div className="value-grid">
            <span>Strength</span><span>Discipline</span><span>Unity</span><span>Tradition</span><span>Excellence</span>
          </div>
          <a className="text-button" href="#vision">Discover our purpose <b>→</b></a>
        </div>
      </section>

      <LeagueInfo />
      <YouthCommunity />

      <section className="vision" id="vision">
        <div className="vision-grid"></div>
        <p className="kicker"><span></span> Our vision</p>
        <blockquote>“To honour our traditional sport, nurture exceptional talent and take Surat Titans to the world stage—with the ultimate dream of global and National recognition.”</blockquote>
        <div className="vision-numbers">
          <div><strong>100+</strong><span>Training sessions</span></div>
          <div><strong>12+</strong><span>Matches played</span></div>
          <div><strong>8+</strong><span>Wins together</span></div>
        </div>
      </section>

      <section className="owners section">
        <div className="section-head">
          <div>
            <p className="kicker purple"><span></span> The people behind the purpose</p>
            <h2>MEET THE <em>CO-OWNERS</em></h2>
          </div>
        </div>
        
        <div className="owners-layout">
          <div data-r="fade-up">
            <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#554d59', marginBottom: '40px' }}>
              Four visions. One unwavering belief in the potential of our team, our sport and our city.
            </p>
            <Link className="button gold" to="/co-owners">Meet All Co-Owners <span>→</span></Link>
          </div>

          <div className="owners-photos">
            <article className="owner owner-1" data-r="fade-up" data-r-delay="1">
              <div className="portrait" style={{ backgroundImage: "url('/owners.jpeg')", backgroundSize: 'cover', backgroundPosition: 'center', height: 'auto', aspectRatio: '3/4', borderRadius: '12px' }}></div>
            </article>
            <article className="owner owner-2" data-r="fade-up" data-r-delay="2">
              <div className="portrait" style={{ backgroundImage: "url('/owners2.jpeg')", backgroundSize: 'cover', backgroundPosition: 'center', height: 'auto', aspectRatio: '3/4', borderRadius: '12px' }}></div>
            </article>
          </div>
        </div>
      </section>

      <section className="team" id="team">
        <div className="team-intro">
          <p className="kicker"><span></span> The squad</p>
          <h2>ONE <em>CLIMB.</em><br />ONE TEAM.</h2>
          <p>Meet the athletes who turn trust, timing and tenacity into something extraordinary.</p>
          <a className="button gold" href="#contact">Join the Titans <span>→</span></a>
        </div>
        <div className="team-cards" style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
          <article className="athlete captain" data-r="scale" style={{ height: 'auto', padding: 0, background: 'transparent', overflow: 'hidden' }}>
            <img src="/team photo.jpeg" alt="Team Photo 1" style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '12px' }} />
          </article>
          <article className="athlete" data-r="scale" data-r-delay="1" style={{ height: 'auto', padding: 0, background: 'transparent', overflow: 'hidden' }}>
            <img src="/gallery 4.jpeg" alt="Team Photo 2" style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '12px' }} />
          </article>
        </div>
      </section>

      <section className="journey section" id="journey">
        <div className="section-head">
          <div>
            <p className="kicker purple"><span></span> Our story so far</p>
            <h2>THE <em>JOURNEY</em></h2>
          </div>
        </div>
        <div className="timeline">
          <article>
            <span>2023</span>
            <h3>Franchise Founded</h3>
            <p>Born from a vision to elevate Mumbai’s sporting spirit to a national stage, our journey officially began with Bhavesh Seth joining to spearhead our participation.</p>
          </article>
          <article>
            <span>2024</span>
            <h3>The First Squad</h3>
            <p>Formed our inaugural team with the Hind Mata Phatak Govindas through a lucky draw.</p>
          </article>
          <article>
            <span>2025</span>
            <h3>Team Selection</h3>
            <p>Acquired the Sairam Phatak Govindas to represent us through an official auction process.</p>
          </article>
          <article>
            <span>2026</span>
            <h3>Legacy Continues</h3>
            <p>Continuing the journey with our stellar squad for the upcoming season.</p>
          </article>
        </div>
      </section>

      <ReelCarousel />

      <section className="media section" id="media">
        <div className="section-head">
          <div>
            <p className="kicker purple"><span></span> News & media</p>
            <h2>THE TITANS <em>REPORT</em></h2>
          </div>
          <a className="text-button" href="#contact">View all media <b>→</b></a>
        </div>
        <div className="news-grid">
          <article className="news-card" data-r="fade-up" style={{ position: 'relative', overflow: 'hidden', padding: 0, minHeight: '400px' }}>
            <video autoPlay loop muted playsInline preload="none" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0, opacity: 0.5 }} src="/videos/jiohotstar.mp4"></video>
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(20, 5, 30, 0.85), transparent)', zIndex: 1 }}></div>
            <div style={{ position: 'relative', zIndex: 2, padding: '25px', display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'flex-end', pointerEvents: 'none' }}>
              <span style={{ color: '#ccc', pointerEvents: 'auto' }}>Broadcast Update</span>
              <h3 style={{ color: '#fff', textShadow: '0 2px 10px rgba(0,0,0,0.5)', pointerEvents: 'auto' }}>PRO GOVINDA LEAGUE TO BE STREAMED LIVE ON JIOHOTSTAR</h3>
              <button onClick={() => setVideoModalSrc('/videos/jiohotstar.mp4')} style={{ background: 'transparent', border: 'none', color: '#ccc', textShadow: '0 2px 10px rgba(0,0,0,0.5)', pointerEvents: 'auto', cursor: 'pointer', textAlign: 'left', padding: 0, font: 'inherit', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.8px', fontWeight: 800 }}>Watch now →</button>
            </div>
          </article>
          <article className="news-card" data-r="fade-up" data-r-delay="1">
            <span>SEASON 4 ANNOUNCEMENT</span>
            <h3 style={{ margin: '16px 0 10px' }}>OFFICIAL MATCH DATES REVEALED</h3>
            <p style={{ margin: '0 0 15px 0', fontSize: '14px', lineHeight: '1.6' }}>
              Mark your calendars! The Pro Govinda League Season 4 matches will take place on August 25, 26, and 27, 2026.</p>
          </article>
          <article className="news-card" data-r="fade-up" data-r-delay="2" style={{ position: 'relative', overflow: 'hidden', padding: 0, minHeight: '400px' }}>
            <video autoPlay loop muted playsInline preload="none" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0, opacity: 0.5, animation: 'revealVideo 2s ease-out 3s forwards' }} src="/videos/practice session.mp4"></video>
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(20, 5, 30, 0.85), transparent)', zIndex: 1, animation: 'hideOverlay 2s ease-out 3s forwards' }}></div>
            <div style={{ position: 'relative', zIndex: 2, padding: '25px', display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'flex-end', pointerEvents: 'none' }}>
              <span style={{ color: '#ccc', pointerEvents: 'auto' }}>VIDEO · 10 JUL 2026</span>
              <h3 style={{ color: '#fff', textShadow: '0 2px 10px rgba(0,0,0,0.5)', pointerEvents: 'auto' }}>Inside the Titans training camp.</h3>
              <button onClick={() => setVideoModalSrc('/videos/practice session.mp4')} style={{ background: 'transparent', border: 'none', color: '#fff', textShadow: '0 2px 10px rgba(0,0,0,0.5)', pointerEvents: 'auto', cursor: 'pointer', textAlign: 'left', padding: 0, font: 'inherit', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.8px', fontWeight: 800 }}>Watch now →</button>
            </div>
          </article>
          <article className="news-card" data-r="fade-up" style={{ position: 'relative', overflow: 'hidden', padding: 0, minHeight: '500px', gridColumn: '1 / -1' }}>
            <video autoPlay loop muted playsInline preload="none" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0, opacity: 0.6 }} src="/videos/promo vid.mp4"></video>
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(20, 5, 30, 0.85), transparent)', zIndex: 1 }}></div>
            <div style={{ position: 'relative', zIndex: 2, padding: '30px', display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'flex-end', pointerEvents: 'none' }}>
              <span style={{ color: '#ccc', pointerEvents: 'auto' }}>OFFICIAL PROMO</span>
              <h3 style={{ color: '#fff', textShadow: '0 2px 10px rgba(0,0,0,0.5)', pointerEvents: 'auto', fontSize: '42px', margin: '10px 0' }}>THE TITANS ARE READY</h3>
              <button onClick={() => setVideoModalSrc('/videos/promo vid.mp4')} style={{ background: 'transparent', border: 'none', color: '#fff', textShadow: '0 2px 10px rgba(0,0,0,0.5)', pointerEvents: 'auto', cursor: 'pointer', textAlign: 'left', padding: 0, font: 'inherit', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 800 }}>Watch promo →</button>
            </div>
          </article>
        </div>
      </section>

      <VideoCarousel />

      <section className="sponsors">
        <p className="kicker"><span></span> Our partners</p>
        <h2>POWERING THE <em style={{ color: 'var(--purple)' }}>CLIMB.</em></h2>
        <p>Partner with a team built for visibility, community and the future of Indian sport.</p>
        <div className="sponsor-logos">
          <div className="sponsor-slot">
            <img src="/Shreeji.png" alt="Shreeji" className="sponsor-img" />
          </div>
          <div className="sponsor-slot">
            <img src="/AIC Logo.png" alt="AIC" className="sponsor-img" />
          </div>
        </div>
        <a className="button gold" href="#contact">Contact us <span>→</span></a>
      </section>

      <section className="gallery section" id="gallery">
        <div className="section-head">
          <div>
            <p className="kicker purple"><span></span> On and off the field</p>
            <h2>TITANS <em>GALLERY</em></h2>
          </div>
          <p>Moments made with the entire city behind us.</p>
        </div>
        <div className="film-strip-container">
          <div className="film-strip-track">
            {row1Images.concat(row1Images).map((item, index) => (
              <figure key={`row1-${index}`} className="film-slide" onClick={() => setImageModalSrc(item.src)} style={{ cursor: 'pointer' }}>
                <img src={item.src} alt={item.title} />
                <figcaption className="film-caption">{item.title}</figcaption>
              </figure>
            ))}
          </div>
          <div className="film-strip-track reverse" style={{ animationDelay: '-15s' }}>
            {row2Images.concat(row2Images).map((item, index) => (
              <figure key={`row2-${index}`} className="film-slide" onClick={() => setImageModalSrc(item.src)} style={{ cursor: 'pointer' }}>
                <img src={item.src} alt={item.title} />
                <figcaption className="film-caption">{item.title}</figcaption>
              </figure>
            ))}
          </div>
          <div className="film-strip-track" style={{ animationDelay: '-30s' }}>
            {row3Images.concat(row3Images).map((item, index) => (
              <figure key={`row3-${index}`} className="film-slide" onClick={() => setImageModalSrc(item.src)} style={{ cursor: 'pointer' }}>
                <img src={item.src} alt={item.title} />
                <figcaption className="film-caption">{item.title}</figcaption>
              </figure>
            ))}
          </div>
          <div className="film-strip-track reverse" style={{ animationDelay: '-45s' }}>
            {row4Images.concat(row4Images).map((item, index) => (
              <figure key={`row4-${index}`} className="film-slide" onClick={() => setImageModalSrc(item.src)} style={{ cursor: 'pointer' }}>
                <img src={item.src} alt={item.title} />
                <figcaption className="film-caption">{item.title}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div>
          <p className="kicker"><span></span> Get in touch</p>
          <h2>LET’S BUILD<br />A <em>LEGACY.</em></h2>
          <p>For partnership, media or general enquiries, our team would love to hear from you. Interested in becoming a sponsor? Reach out to us below.</p>
        </div>
        <form onSubmit={handleSubmit} style={{ padding: '30px' }}>
          {status === 'success' ? (
            <div style={{ color: 'var(--gold)', fontSize: '14px', marginBottom: '15px' }}>Thanks! We've received your enquiry and will be in touch shortly.</div>
          ) : status === 'error' ? (
            <div style={{ color: '#ff4444', fontSize: '14px', marginBottom: '15px' }}>There was an error sending your message. Please try again later.</div>
          ) : null}
          <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
            <label style={{ flex: '1 1 45%' }}>Name<input type="text" name="name" required placeholder="Your name" value={formData.name} onChange={handleChange} /></label>
            <label style={{ flex: '1 1 45%' }}>Email<input type="email" name="email" required placeholder="you@company.com" value={formData.email} onChange={handleChange} /></label>
          </div>
          <label>Phone
            <div style={{ display: 'flex', gap: '10px' }}>
              <select name="countryCode" value={formData.countryCode} onChange={handleChange} style={{ padding: '10px 0', background: 'transparent', border: '0', borderBottom: '1px solid rgba(42,10,74,.45)', outline: '0', font: '13px "DM Sans"', color: 'var(--ink)' }}>
                <option value="+91">+91</option>
                <option value="+1">+1</option>
                <option value="+44">+44</option>
                <option value="+61">+61</option>
                <option value="+971">+971</option>
              </select>
              <input type="tel" name="phone" required placeholder="Phone number" style={{ flex: 1 }} value={formData.phone} onChange={handleChange} />
            </div>
          </label>
          <label>How can we help?<textarea name="message" required placeholder="Tell us about your enquiry" value={formData.message} onChange={handleChange} style={{ minHeight: '50px' }}></textarea></label>
          <button className="button gold" type="submit" disabled={status === 'loading'} style={{ marginTop: '5px' }}>{status === 'loading' ? 'Sending...' : 'Send enquiry'} <span>→</span></button>
        </form>
      </section>

      {videoModalSrc && (
        <div 
          style={{ position: 'fixed', inset: 0, zIndex: 100, background: 'rgba(0,0,0,0.9)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          onClick={() => setVideoModalSrc(null)}
        >
          <div style={{ position: 'relative', width: '90%', maxWidth: '1000px', aspectRatio: '16/9' }}>
            <button 
              onClick={() => setVideoModalSrc(null)}
              style={{ position: 'absolute', top: '-40px', right: 0, background: 'transparent', border: 'none', color: '#fff', fontSize: '40px', cursor: 'pointer' }}
            >
              &times;
            </button>
            <video 
              src={videoModalSrc} 
              controls 
              autoPlay 
              style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}

      {imageModalSrc && (
        <div 
          style={{ position: 'fixed', inset: 0, zIndex: 100, background: 'rgba(0,0,0,0.9)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          onClick={() => setImageModalSrc(null)}
        >
          <div style={{ position: 'relative', width: '90%', maxWidth: '1000px', height: '90vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <button 
              onClick={() => setImageModalSrc(null)}
              style={{ position: 'absolute', top: '0', right: '0', background: 'transparent', border: 'none', color: '#fff', fontSize: '40px', cursor: 'pointer', zIndex: 101 }}
            >
              &times;
            </button>
            <img 
              src={imageModalSrc} 
              alt="Modal view"
              style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', borderRadius: '8px' }} 
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </main>
  )
}
