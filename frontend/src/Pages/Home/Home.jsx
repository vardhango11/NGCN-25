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
import twitterFeed from "../../hooks/twitterFeed.json";
import mediumFeed from "../../hooks/mediumFeed.json";

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
        const scrollSpeed = 0.5; // Adjust speed as needed

        const autoScroll = () => {
            if (!isPaused && container) {
                scrollPosition += scrollSpeed;

                // Reset scroll position when reaching the end
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
            <div className={styles.block1}>
                <div className={styles.videoContainer}><video src="homev.mp4" autoPlay loop muted></video></div>
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
                        <button><p>Get More Details</p></button>
                    </Link>
                </div>
            </div>

            {/* Merged Blogs & Articles Section */}
            <div className={styles.block2}>
                <div>
                    <h2>Top Blogs & Articles</h2>
                </div>
                <div className={styles.blogCards}>
                    {homeBlogs.map(card => (
                        <HomeBlogCard
                            key={card.id}
                            image={card.image}
                            title={card.title}
                            description={card.description}
                            link={card.link}
                        />
                    ))}
                    {articlesLoading ? (
                        <div className={styles.loadingCard}>
                            <p>Loading articles...</p>
                        </div>
                    ) : (articlesError || !articles || articles.length === 0) ? (
                        mediumFeed.slice(0, 3).map(article => (
                            <HomeBlogCard
                                key={`local-article-${article.id}`}
                                image={article.image || "default-article.jpg"}
                                title={article.title}
                                description={article.description}
                                link={article.link}
                            />
                        ))
                    ) : (
                        articles.slice(0, 3).map(article => (
                            <HomeBlogCard
                                key={`article-${article.id}`}
                                image={article.image || "default-article.jpg"}
                                title={article.title}
                                description=""
                                link={article.link}
                            />
                        ))
                    )}

                </div>
            </div>

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

            {/* Auto-scrolling News Section */}
            <div className={styles.block4}>
                <div className={styles.newsContainer}>
                    <div className={styles.news}>
                        <h2>Latest News</h2>
                    </div>
                    <div
                        className={styles.newsCards}
                        ref={newsContainerRef}
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                    >
                        {newsLoading ? (
                            <div className={styles.loadingMessage}>
                                <p>Loading latest news...</p>
                            </div>
                        ) : (newsError || !news || news.length === 0) ? (
                            twitterFeed.map(card => (
                                <HomeNewsCard
                                    key={`local-${card.id}`}
                                    date={card.date}
                                    title={card.title}
                                    description={card.description}
                                    tag={card.tag}
                                    image={card.image}
                                    link={card.link}
                                />
                            ))
                        ) : (
                            news.map(card => (
                                <HomeNewsCard
                                    key={card.id}
                                    date={card.date}
                                    title={card.title}
                                    description={card.description}
                                    tag={card.tag}
                                    image={card.image}
                                    link={card.link}
                                />
                            ))
                        )}

                    </div>
                </div>
            </div>

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
            </div>

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