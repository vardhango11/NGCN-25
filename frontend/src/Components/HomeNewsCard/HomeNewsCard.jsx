import styles from "./HomeNewsCard.module.css";

function HomeNewsCard({ date, title, description, tag, image, link }) {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer" className={styles.cardLink}>
            <div className={styles.container}>
                {/* Image section */}
                {image && (
                    <div className={styles.imageWrapper}>
                        <img src={image} alt={title} className={styles.image} onError={(e) => e.target.style.display = 'none'} />
                    </div>
                )}
                
                {/* Content section */}
                <div className={styles.content}>
                    <div className={styles.header}>
                        <span className={styles.tag}>{tag}</span>
                        <span className={styles.date}>{date}</span>
                    </div>
                    
                    <h3 className={styles.title}>{title}</h3>
                    
                    <p className={styles.description}>{description}</p>
                </div>
            </div>
        </a>
    );
}

export default HomeNewsCard;