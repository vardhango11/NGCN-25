import styles from "./News.module.css";
import ngcnNewsFeed from "../../hooks/ngcnNewsFeed.json";

function News() {
  return (
    <div className={styles.container}>
      {/* Hero Header */}
      <div className={styles.hero}>
        <div className={styles.heroInner}>
          <h1>News & Updates</h1>
          <p>Stay informed about our latest announcements, events, and research breakthroughs.</p>
        </div>
      </div>

      {/* Grid overlaps the header */}
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

            <div className={styles.cardBody}>
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
          </div>
        ))}
      </div>
    </div>
  );
}

export default News;