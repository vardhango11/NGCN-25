import styles from "./Home.module.css";
import { Link } from 'react-router-dom';
import React, { useState, useEffect, useRef } from 'react';
import impact from "../../db/impact.json";
import domain from "../../db/domain.json";
import homeBlogs from "../../db/homeBlogs.json";
import HomeImpactCard from "../../Components/HomeImpactCard/HomeImpactCard";
import HomeBlogCard from "../../Components/HomeBlogCard/HomeBlogCard";
import HomeNewsCard from "../../Components/HomeNewsCard/HomeNewsCard";
import useRssFeed from "../../hooks/useRssFeed";
import useMediumFeed from "../../hooks/useMediumFeed";
import mediumFeed from "../../hooks/mediumFeed.json";
import ngcnNewsFeed from "../../hooks/ngcnNewsFeed.json";
import youtubeFeed from "../../hooks/youtubeVideos.json";

const RSS_FEED_URL = "https://rss.app/feeds/9tosQeY2S4RLKWcj.xml";
const MEDIUM_FEED_URL = "https://medium.com/feed/@ngcngroup";

function Home() {
    const { feeds: news, loading: newsLoading, error: newsError } = useRssFeed(RSS_FEED_URL);
    const { feeds: articles, loading: articlesLoading, error: articlesError } = useMediumFeed(MEDIUM_FEED_URL);
    const newsContainerRef = useRef(null);
    const [isPaused, setIsPaused] = useState(false);

    // Auto-scroll effect for news
    useEffect(() => {
        const container = newsContainerRef.current;
        if (!container || newsLoading || newsError || !news || news.length === 0) return;

        let animationFrameId;
        let scrollPosition = 0;
        const scrollSpeed = 0.5;

        const autoScroll = () => {
            if (!isPaused && container) {
                scrollPosition += scrollSpeed;

                if (scrollPosition >= container.scrollHeight - container.clientHeight) {
                    scrollPosition = 0;
                }

                container.scrollTop = scrollPosition;
                animationFrameId = requestAnimationFrame(autoScroll);
            }
        };

        if (!isPaused) {
            animationFrameId = requestAnimationFrame(autoScroll);
        }

        return () => {
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }
        };
    }, [news, newsLoading, newsError, isPaused]);

    return (
        <div className={styles.container}>
            {/* Header */}
            <div className={styles.block1}>
                <div className={styles.videoContainer}>
                    <video src="homev.mp4" autoPlay loop muted></video>
                </div>
                <div className={styles.heroOverlay}></div>
                <div className={styles.logo}>
                    <img src="NGCNLogo.png" alt="Logo" />
                </div>
                <div className={styles.title}>
                    <h1>Next Gen Computing And Networking</h1>
                    <h2>Research at the Edge of Computing & Networking</h2>
                </div>
                <div className={styles.titleButton}>
                    <Link to='/about'><button><p>Learn more</p></button></Link>
                </div>
            </div>

            {/* Internship Opportunities */}
            <div className={styles.internshipSection}>
                <div className={styles.internshipHeader}>
                    <h2>Internship Opportunities</h2>
                    <p>Join our research team and contribute to cutting-edge projects</p>
                </div>

                <div className={styles.internshipCards}>
                    <div className={styles.internshipCard}>
                        <div className={styles.cardContent}>
                            <h3>Self-Funded Internships</h3>
                            <p>
                                Open throughout the year! Interested candidates can fill out the forms present in Internships page. Internship opportunities are available in AI,
                                networking, and computing.
                            </p>
                            <p>
                                Gain valuable research experience, work with cutting-edge technologies, and collaborate
                                with our expert team on innovative projects.
                            </p>
                        </div>
                    </div>

                    <div className={styles.internshipCard}>
                        <div className={styles.cardContent}>
                            <h3>Funded Internship Programs</h3>
                            <p>
                                We offer <strong>funded internships</strong> on selected projects, allowing students and
                                professionals to contribute directly to our initiatives while gaining hands-on
                                experience.
                            </p>
                            <p>
                                Work on real-world problems, receive mentorship from industry experts, and build your
                                professional portfolio.
                            </p>
                        </div>
                    </div>
                </div>

                <div className={styles.cardButton}>
                    <Link to="/internships">
                        <button><p>Get More Details on Internships</p></button>
                    </Link>
                </div>
            </div>

            {/* Latest News */}
            <div className={styles.block4}>
                <div className={styles.newsContainer}>
                    <div className={styles.news}>
                        <h2>Latest News</h2>
                    </div>

                    <div className={styles.newsCards}>
                        {ngcnNewsFeed.slice(0, 4).map((card, index) => (
                            <a
                                key={index}
                                href={card.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.newsCard}
                            >
                                <div className={styles.newsThumbWrapper}>
                                    <img
                                        src={card.image}
                                        alt={card.title}
                                        className={styles.newsThumb}
                                    />
                                </div>

                                <div className={styles.newsCardContent}>
                                    <span className={styles.newsTag}>News</span>

                                    <h3>{card.title}</h3>

                                    <p className={styles.newsDescription}>
                                        {card.description}
                                    </p>

                                    <div className={styles.newsWatchRow}>
                                        <span className={styles.newsTime}>
                                            {card.pubDate}
                                        </span>
                                        <span className={styles.newsWatch}>Read More</span>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>

                    <div className={styles.sectionButtons}>
                        <Link to="/news">
                            <button className={styles.sectionBtn}><p>See More News</p></button>
                        </Link>
                        <a href="https://medium.com/@ngcnnews" target="_blank" rel="noopener noreferrer">
                            <button className={styles.sectionBtnSecondary}><p>Follow NGCN News</p></button>
                        </a>
                    </div>
                </div>
            </div>

            {/* NGCN on Medium */}
            <div className={styles.block2}>
                <div>
                    <h2>NGCN on Medium</h2>
                </div>
                <div className={styles.blogCards}>
                    {mediumFeed.slice(0, 6).map(article => (
                        <a
                            key={`medium-${article.id}`}
                            href={article.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.mediumCardLink}
                            aria-label={`Read Medium article: ${article.title}`}
                        >
                            <div className={styles.mediumCard}>
                                <div className={styles.mediumBadge}>Medium</div>

                                {/* NEW IMAGE */}
                                {article.image && (
                                    <div className={styles.mediumThumbWrapper}>
                                        <img
                                            src={article.image}
                                            alt={article.title}
                                            className={styles.mediumThumbnail}
                                        />
                                    </div>
                                )}

                                <div className={styles.mediumCardContent}>
                                    <h3 className={styles.mediumCardTitle}>{article.title}</h3>
                                    <p className={styles.mediumCardExcerpt}>{article.description}</p>
                                    <div className={styles.readMoreBtn}>Read on Medium →</div>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>

                <div className={styles.sectionButtonsLight}>
                    <Link to="/blogs">
                        <button className={styles.sectionBtnLight}><p>See More Blogs</p></button>
                    </Link>
                    <a href="https://medium.com/@ngcngroup" target="_blank" rel="noopener noreferrer">
                        <button className={styles.sectionBtnSecondaryLight}><p>Follow Us on Medium</p></button>
                    </a>
                </div>
            </div>

            {/* NGCN on YouTube */}
            <div className={styles.youtubeSection}>
                <div className={styles.youtubeHeader}>
                    <h2>NGCN on YouTube</h2>
                </div>

                <div className={styles.videoGrid}>
                    {youtubeFeed.slice(0, 4).map(video => (
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
                                {video.tag && (
                                    <span className={styles.tag}>
                                        {video.tag}
                                    </span>
                                )}

                                <h3>{video.title}</h3>

                                <p className={styles.description}>
                                    {video.description}
                                </p>

                                <div className={styles.watchRow}>
                                    <span className={styles.time}>
                                        {video.published}
                                    </span>
                                    <span className={styles.watch}>Watch</span>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>

                <div className={styles.sectionButtons}>
                    <Link to="/videos">
                        <button className={styles.sectionBtn}><p>See More Videos</p></button>
                    </Link>
                    <a href="https://youtube.com/@ngcnresearch" target="_blank" rel="noopener noreferrer">
                        <button className={styles.sectionBtnSecondary}><p>Follow Us on YouTube</p></button>
                    </a>
                </div>
            </div>

            {/* Our Impact */}
            <div className={styles.block3}>
                <div><h2>Our Impact</h2></div>
                <div>
                    <div className={styles.impactCards}>
                        {impact.map(card => (
                            <Link to={card.link} style={{ textDecoration: 'none' }} key={card.id}>
                                <HomeImpactCard
                                    image={card.image}
                                    title={card.title}
                                    description={card.description}
                                    tag={card.tag}
                                />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            {/* Research Excellence */}
            <div className={styles.block5}>
                <div className={styles.head2}>
                    <h2>Research Excellence</h2>
                </div>
                <div className={styles.description}>
                    <p>Leading innovation across multiple domains of computing and networking.</p>
                </div>
                <div className={styles.domainCards}>
                    {domain.map(card => (
                        <HomeImpactCard
                            key={card.id}
                            image={card.image}
                            title={card.title}
                            description={card.description}
                        />
                    ))}
                </div>

                <div className={styles.sectionButtonsLight}>
                    <Link to="/research">
                        <button className={styles.sectionBtnLight}><p>Explore Research Domains</p></button>
                    </Link>
                </div>
            </div>

            {/* Footer CTA */}
            <div className={styles.block6}>
                <div>
                    <h2>Join Our Research Community</h2>
                </div>
                <div>
                    <p>Collaborate with us on cutting-edge research in computing and networking. Together, we can shape the future of technology.</p>
                </div>
                <div className={styles.titleButton}>
                    <Link to='/contact'><button><p>Get in touch</p></button></Link>
                </div>
            </div>
        </div>
    )
}

export default Home;