import styles from "./Resources.module.css";
import youtubeVideos from "../../hooks/youtubeVideos.json";
import { MdSmartDisplay, MdSubscriptions } from "react-icons/md";


function YouTube() {
  const hasVideos = youtubeVideos.length > 0;

  return (
    <div className={styles.container}>
      {/* Header */}
      <header className={styles.header}>
        <h1>Videos</h1>
        <p className={styles.headerSub}>
          Moving forward, we are planning to upload YouTube Shorts,
          research highlights, and quick insights from our work.
        </p>
      </header>


      {/* Content */}
      {!hasVideos ? (
        <div className={styles.comingSoon}>
          <div className={styles.iconCircle}>
            <MdSmartDisplay size={48} color="#dc2626" />
          </div>

          <h2>YouTube Videos Coming Soon</h2>
          <p>
            We are curating research talks, lectures, and events.
            Follow us on YouTube for updates.
          </p>

          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.subscribeBtn}
          >
            <MdSubscriptions size={22} />
            Subscribe to our Channel
          </a>
        </div>
      ) : (
        <div className={styles.videoGrid}>
          {youtubeVideos.map(video => (
            <a
              key={video.id}
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.videoCard}
            >
              <div className={styles.thumbWrapper}>
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className={styles.videoThumb}
                />
                <div className={styles.playButton}>▶</div>
              </div>

              <div className={styles.cardContent}>
                <span className={`${styles.tag} ${styles.newsTag}`}>
                  {video.tag}
                </span>

                <h3>{video.title}</h3>

                <p className={styles.description}>
                  {video.description}
                </p>

                <div className={styles.watchRow}>
                  <span className={styles.time}>
                    {new Date(video.published).toLocaleDateString()}
                  </span>
                  <span className={styles.watch}>Watch</span>
                </div>
              </div>
            </a>

          ))}
        </div>
      )}
    </div>
  );
}

export default YouTube;
