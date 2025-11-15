import styles from './ArticleModal.module.css';

function ArticleModal({ open, onClose, article }) {
  if (!open || !article) return null;
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.closeBtn} onClick={onClose}>&times;</button>
        <h2 className={styles.title}>{article.title}</h2>
        <div className={styles.meta}><span>{article.date}</span></div>
        {article.image && (
          <div className={styles.imageWrapper}>
            <img src={article.image} alt={article.title} className={styles.image} />
          </div>
        )}
        <div className={styles.content} dangerouslySetInnerHTML={{ __html: article.content }} />
        <a href={article.link} target="_blank" rel="noopener noreferrer" className={styles.readOnMedium}>
          Read on Medium →
        </a>
      </div>
    </div>
  );
}

export default ArticleModal;
