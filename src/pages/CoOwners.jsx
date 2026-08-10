import React, { useEffect, useState } from 'react';

export default function CoOwners() {
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
            Four leaders united by a single vision: to elevate the sporting culture of Mumbai and put our athletes on the global map.
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
    </main>
  );
}
