import styles from "./MediumBlogCard.module.css";

const MediumBlogCard = ({ blog }) => {
  return (
    <a
      href={blog.link}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.mediumCardLink}
      aria-label={`Read Medium article: ${blog.title}`}
    >
      <div className={styles.mediumCard}>
        {blog.image && (
          <img
            src={blog.image}
            alt={blog.title}
            className={styles.mediumCardImage}
          />
        )}

        <div className={styles.mediumBadge}>Medium</div>

        <div className={styles.mediumCardContent}>
          <h2 className={styles.mediumCardTitle}>{blog.title}</h2>

          {blog.pubDate && (
            <p className={styles.mediumCardDate}>{blog.pubDate}</p>
          )}

          <p className={styles.mediumCardExcerpt}>{blog.description}</p>

          <div className={styles.readMoreBtn}>Read on Medium →</div>
        </div>
      </div>
    </a>
  );
};

export default MediumBlogCard;
