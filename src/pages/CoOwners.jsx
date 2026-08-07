import React, { useEffect, useState } from 'react';

export default function CoOwners() {
  const [btnHovered, setBtnHovered] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const owners = [
    {
      name: "Bhavesh Sheth",
      image: "/bhavesh sheth.jpeg",
      vision: ""
    },
    {
      name: "Viral Desai",
      image: "/viral desai.jpg",
      vision: ""
    },
    {
      name: "Shilpa Sheth",
      image: "/shilpa sheth.jpeg",
      vision: ""
    },
    {
      name: "Aparna Desai",
      image: "/aparna desai.jpeg",
      vision: ""
    }
  ];

  return (
    <main style={{ paddingTop: '80px', minHeight: '100vh', background: 'var(--off)' }}>
      <section className="section" style={{ paddingTop: '40px' }}>
        <div className="section-head" data-r="fade-up" style={{ textAlign: 'center', margin: '0 auto 60px' }}>
          <p className="kicker purple" style={{ justifyContent: 'center' }}><span></span> The visionary leaders</p>
          <h1 style={{ fontSize: '74px', color: 'var(--purple)', margin: '10px 0' }}>OUR <em>VISION</em></h1>
          <p style={{ margin: '0 auto', maxWidth: '600px', color: '#554d59', fontSize: '15px' }}>
            Four leaders united by a single vision: to elevate the sporting culture of Surat and put our athletes on the global map.
          </p>
        </div>

        <div className="owners-photos" style={{ gap: '30px', maxWidth: '900px', margin: '0 auto' }}>
          {owners.map((owner, index) => (
            <article key={index} data-r="fade-up" data-r-delay={index % 4} style={{ background: '#fff', padding: '20px', borderRadius: '16px', boxShadow: '0 15px 35px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <div style={{ 
                width: '100%',
                height: '350px', 
                borderRadius: '12px', 
                backgroundImage: `url('${owner.image}')`, 
                backgroundSize: 'cover', 
                backgroundPosition: 'center',
                marginBottom: '15px'
              }}></div>
              <h3 style={{ font: '800 32px "Barlow Condensed"', color: 'var(--purple)', margin: '0', textTransform: 'uppercase' }}>{owner.name}</h3>
            </article>
          ))}
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
            <h3 style={{ font: '800 42px "Barlow Condensed"', color: '#fff', WebkitTextFillColor: '#fff', marginBottom: '10px' }}>Shri. Pratap Sarnaik</h3>
            <p style={{ textTransform: 'uppercase', letterSpacing: '1px', fontSize: '11px', color: 'var(--violet)', marginBottom: '25px', fontWeight: 'bold' }}>Founder, Pro Govinda League</p>
            <p style={{ fontSize: '14px', lineHeight: '1.8', color: '#ded3e8', marginBottom: '30px' }}>
              A visionary sports enthusiast and established businessman, Pratap Sarnaik founded the Pro Govinda League with a mission to elevate the traditional Govinda Pathak culture into a nationally recognized and professionally managed sport. With deep roots in Mumbai as a successful real estate developer and community leader, he is a strong advocate for youth empowerment, cultural preservation, and the development of modern sports infrastructure. Under his leadership, Pro Govinda League has evolved into a dynamic platform that celebrates athletic excellence while staying rooted in India’s rich cultural legacy.
            </p>
          </div>
          <div data-r="fade-up" data-r-delay="1" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
             <div style={{ position: 'relative', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.4)', maxWidth: '280px', width: '100%' }}>
                <img src="/Pratap Sarnaik.webp" alt="Pratap Sarnaik" style={{ width: '100%', height: 'auto', display: 'block' }} />
             </div>
          </div>
        </div>

        <div className="heritage-grid" style={{ marginTop: '60px' }}>
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
          <div data-r="fade-up" data-r-delay="1" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px' }}>
             <div style={{ position: 'relative', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.4)', maxWidth: '280px', width: '100%', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src="/bittu boss.jpeg" alt="Bittu Boss" style={{ width: '100%', height: '280px', objectFit: 'cover', transform: 'scale(1.25)', transformOrigin: 'center', display: 'block' }} />
             </div>
             <div style={{ position: 'relative', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.4)', maxWidth: '280px', width: '100%', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src="/mascot poster.jpeg" alt="Mascot Poster" style={{ width: '100%', height: '280px', objectFit: 'cover', display: 'block' }} />
             </div>
          </div>
        </div>
        
        <div data-r="scale" data-r-delay="1" style={{ margin: '80px auto 0', maxWidth: '900px', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }}>
           <video src="/videos/MD170080.mp4" autoPlay loop muted playsInline preload="none" style={{ width: '100%', height: 'auto', display: 'block' }}></video>
        </div>
      </section>
    </main>
  );
}
