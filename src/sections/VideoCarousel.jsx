import React from 'react';

export default function VideoCarousel() {
  const videos = [
    { id: 1, type: 'video', src: '/videos/practice session.mp4' },
    { id: 5, type: 'video', src: '/videos/IMG_5856.mp4' },
    { id: 2, type: 'video', src: '/videos/C7056.mp4' },
    { id: 3, type: 'video', src: '/videos/C7057.mp4' },
    { id: 4, type: 'video', src: '/videos/C7060.mp4' }
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
