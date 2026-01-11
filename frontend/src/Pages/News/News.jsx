import styles from "./News.module.css";
import ngcnNewsFeed from "../../hooks/ngcnNewsFeed.json";

function News() {
  return (
    <div className={styles.container}>
      <div className={styles.block1}>
        <h1>Stay tuned for latest News & Updates</h1>
        <p>Announcements, events, and research updates</p>
      </div>

      <div className={styles.newsGrid}>
        {ngcnNewsFeed.map((item, index) => (
          <div className={styles.card} key={index}>
            
            {/* Image */}
            {item.image && (
              <img
                src={item.image}
                alt={item.title}
                className={styles.cardImage}
              />
            )}

            {/* Tag */}
            <span className={styles.tag}>
              {item.tag || "NEWS"}
            </span>

            <h3>{item.title}</h3>
            <p>{item.description}</p>

            <div className={styles.meta}>
              <span>{item.pubDate}</span>
              <a href={item.link} target="_blank" rel="noreferrer">
                Read →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default News;
