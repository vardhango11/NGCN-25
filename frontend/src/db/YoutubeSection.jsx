import React from 'react';
import styles from './YoutubeSection.module.css';
import youtubeData from './youtube.json';
import { FaYoutube } from 'react-icons/fa';

const YoutubeSection = ({ limit = 4 }) => {
  const videos = youtubeData.slice(0, limit);

  return (
    <section className={styles.youtubeSection}>
      <div className={styles.header}>
        <h2 className={styles.title}>
          <FaYoutube className={styles.icon} /> NGCN on Youtube
        </h2>
        <a 
          href="https://www.youtube.com/@veritasium" 
          target="_blank" 
          rel="noopener noreferrer"
          className={styles.subscribeBtn}
        >
          Visit Channel
        </a>
      </div>
      <div className={styles.videoGrid}>
        {videos.map((video) => (
          <a 
            key={video.id} 
            href={video.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.videoCard}
          >
            <img src={video.thumbnail} alt={video.title} className={styles.thumbnail} />
            <h3 className={styles.videoTitle}>{video.title}</h3>
          </a>
        ))}
      </div>
    </section>
  );
};

export default YoutubeSection;