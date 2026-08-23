import React from 'react';

export default function VideoCarousel() {
  const videos = [
    { id: 'harbhajan1', type: 'video', src: '/Harbhajan Singh Visit/AIC - Harbhajansingh Reel.mp4' },
    { id: 'bbw1', type: 'video', src: '/videos/Bittu Boss Welcome AIC - Reel.mp4' },
    { id: 'tshirt1', type: 'video', src: '/videos/Tshirt Reveal Event .mp4', muted: true },
    { id: 'tshirt2', type: 'video', src: '/videos/Tshirt Reveal Event 2026.mp4', muted: true },
    { id: 'tshirt3', type: 'video', src: '/videos/tshirt reveal pyramid.mp4' },
    { id: 'bbv2', type: 'video', src: '/bittu boss visit Surat Titans Team/WhatsApp Video 2026-08-10 at 10.58.48 PM.mp4' },
    { id: 7, type: 'video', src: '/2026/snapsave-app_3880082030319205049_60939500623.mp4' },
    { id: 'falalnuma', type: 'video', src: '/videos/falalnuma reel.mp4' },
    { id: 8, type: 'video', src: '/2026/snapsave-app_3929373313324925049_60939500623.mp4' },
    { id: 6, type: 'video', src: '/videos/jiohotstar.mp4' },
    { id: 9, type: 'video', src: '/2026/snapsave-app_3929400936205864871_60939500623.mp4' },
    { id: 1, type: 'video', src: '/videos/practice session.mp4' },
    { id: 10, type: 'video', src: '/2026/snapsave-app_3930892287152273378_60939500623.mp4' },
    { id: 5, type: 'video', src: '/videos/IMG_5856.mp4' },
    { id: 11, type: 'video', src: '/2026/snapsave-app_3930892287613649724_60939500623.mp4' },
    { id: 2, type: 'video', src: '/videos/C7056.mp4' },
    { id: 12, type: 'video', src: '/2026/snapsave-app_3937236853394529355_60939500623.mp4' },
    { id: 13, type: 'video', src: '/2026/snapsave-app_3945244251909396901_5490820387.mp4' },
    { id: 4, type: 'video', src: '/videos/C7060.mp4' },
    { id: 14, type: 'video', src: '/2026/snapsave-app_3945321144185817226_60939500623.mp4' },
    { id: 15, type: 'video', src: '/2026/snapsave-app_3946242518171618049_60939500623.mp4' },
    { id: 16, type: 'video', src: '/2026/snapsave-app_3958439903236374297_60939500623.mp4' }
  ];

  return (
    <section className="carousel-section section" style={{ padding: '60px 0 50px 0' }}>
      <div className="section-head" style={{ padding: '0 9vw' }}>
        <div>
          <p className="kicker purple"><span></span> Video Library</p>
          <h2>MORE <em>VIDEOS</em></h2>
        </div>
      </div>
      <div className="carousel-container hide-scrollbar">
        <div className="carousel-track">
          {videos.map((video) => (
            <div key={video.id} className="carousel-item video-item">
              {video.type === 'video' ? (
                <video 
                  src={video.src} 
                  controls 
                  preload="metadata"
                  muted={video.muted}
                  style={{ width: '250px', height: '444px', borderRadius: '12px', objectFit: 'cover', display: 'block', backgroundColor: '#000' }} 
                />
              ) : (
                <div className="placeholder-video" style={{ width: '250px', height: '444px' }}>
                  <span>▶ Play Video</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
