import React from 'react';

const VideosPage = () => {
  return (
    <div style={{ padding: '4rem 2rem', textAlign: 'center' }}>
      <h1 style={{ marginBottom: '2rem', fontSize: '2.5rem' }}>NGCN Video Gallery</h1>
      <div style={{ maxWidth: '1200px', margin: '0 auto', overflow: 'hidden', borderRadius: '12px' }}>
        <iframe 
          width="100%" 
          height="600" 
          src="https://www.youtube.com/embed/videoseries?list=UUbfYPyITQ-7l4upoX8nvctg" 
          title="Veritasium Videos"
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
          style={{ border: 'none', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
        ></iframe>
      </div>
    </div>
  );
};

export default VideosPage;