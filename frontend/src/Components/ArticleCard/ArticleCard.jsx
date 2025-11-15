import styles from './ArticleCard.module.css';

function ArticleCard({ date, title, description, image, onClick }) {
  return (
    <div className={styles.container} onClick={onClick} tabIndex={0} role="button">
      {image && (
        <div className={styles.imageWrapper}>
          <img src={image} alt={title} className={styles.image} onError={e => (e.target.style.display = 'none')} />
        </div>
      )}
      <div className={styles.content}>
        <div className={styles.header}>
          <span className={styles.date}>{date}</span>
        </div>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
}

export default ArticleCard;
