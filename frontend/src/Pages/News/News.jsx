import styles from './News.module.css';

function News() {
    return (
        <div className={styles['news-container']}>
            <div className={styles['iframe-wrapper']}>
                <iframe
                    src="https://wide-mochi-c5e.notion.site/ebd//2d442403455080cbbb30d78b18a7d2d3"
                    width="100%"
                    height="600"
                    frameBorder="0"
                    allowFullScreen
                    style={{ border: 'none', borderRadius: '8px' }}
                />
            </div>
        </div>
    );
}

export default News;
