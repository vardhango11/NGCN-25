import styles from "./Home.module.css";
import { Link } from 'react-router-dom';
import impact from "../../db/impact.json";

import mediumFeed from "../../hooks/mediumFeed.json";
import ngcnNewsFeed from "../../hooks/ngcnNewsFeed.json";
import youtubeFeed from "../../hooks/youtubeVideos.json";

function Home() {
    return (
        <div className={styles.container}>
            {/* ───── Hero Section ───── */}
            <section className={styles.hero}>
                <div className={styles.videoContainer}>
                    <video src="homev.mp4" autoPlay loop muted playsInline />
                </div>
                <div className={styles.heroOverlay} />
                <div className={styles.heroInner}>
                    <div className={styles.heroContent}>
                        <span className={styles.heroBadge}>
                            NGCN Research • Academic Excellence
                        </span>
                        <h1 className={styles.heroTitle}>
                            Next Gen <br />
                            <span className={styles.heroAccent}>Computing &</span>
                            <br />Networking
                        </h1>
                        <p className={styles.heroSub}>
                            Research at the Edge of Computing &amp; Networking. Weaving the
                            digital fabric of tomorrow through rigorous inquiry into machine
                            learning, IoT systems, and pervasive networking.
                        </p>
                        <div className={styles.heroButtons}>
                            <Link to="/about" className={styles.btnPrimary}>
                                Learn More <span className={styles.btnArrow}>→</span>
                            </Link>
                            <Link to="/research" className={styles.btnGlass}>
                                Our Research
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ───── Research Domains – Bento Grid ───── */}
            <section className={styles.domainsSection}>
                <div className={styles.sectionInner}>
                    <div className={styles.sectionHeaderFlex}>
                        <div>
                            <h2 className={styles.sectionTitle}>Research Domains</h2>
                            <div className={styles.accentBar} />
                        </div>
                        <p className={styles.sectionSubRight}>
                            Leading innovation across multiple domains of computing and
                            networking.
                        </p>
                    </div>

                    <div className={styles.bentoGrid}>
                        {/* Artificial Intelligence – large */}
                        <div className={`${styles.bentoCard} ${styles.bentoLarge}`}>
                            <div>
                                <h3>Artificial Intelligence</h3>
                                <p>
                                    From Machine Learning and Deep Learning to Large Language
                                    Models and Generative AI — advancing Computer Vision, NLP,
                                    Reinforcement Learning, and Explainable AI for robust,
                                    trustworthy systems aligned with real-world needs.
                                </p>
                            </div>
                            <div className={styles.bentoTags}>
                                <span className={styles.chipTag}>Machine Learning</span>
                                <span className={styles.chipTag}>Deep Learning</span>
                                <span className={styles.chipTag}>NLP</span>
                                <span className={styles.chipTag}>Explainable AI</span>
                                <span className={styles.chipTag}>LLMs</span>
                            </div>
                        </div>

                        {/* Indian Knowledge Systems – accent */}
                        <div className={`${styles.bentoCard} ${styles.bentoAccent}`}>
                            <div>
                                <h3>Indian Knowledge Systems</h3>
                                <p>
                                    Computational recovery and preservation of India's
                                    intellectual heritage through NLP, ASR, and deep learning
                                    for heritage manuscripts, classical musicology, and ancient
                                    mathematics.
                                </p>
                            </div>
                            <Link to="/research" className={styles.bentoLink}>
                                View Lab ↗
                            </Link>
                        </div>

                        {/* Emerging Technologies – muted bg */}
                        <div className={`${styles.bentoCard} ${styles.bentoDark}`}>
                            <div>
                                <h3>Emerging Technologies</h3>
                                <p>
                                    Semiconductors, blockchain, agentic AI, quantum computing,
                                    and neuromorphic engineering — disruptive technologies
                                    redefining computation and security.
                                </p>
                            </div>
                        </div>

                        {/* Networking – wide */}
                        <div className={`${styles.bentoCard} ${styles.bentoWide}`}>
                            <div>
                                <h3>Networking</h3>
                                <p>
                                    Next-generation distributed network architectures spanning
                                    cloud, fog, and edge computing with 5G/6G systems, SDN,
                                    and game-theoretic resource allocation frameworks.
                                </p>
                            </div>
                            <div className={styles.bentoTags}>
                                <span className={styles.chipTag}>5G &amp; 6G</span>
                                <span className={styles.chipTag}>SDN</span>
                                <span className={styles.chipTag}>Edge Computing</span>
                            </div>
                        </div>
                    </div>

                    <div className={styles.sectionCta}>
                        <Link to="/research" className={styles.btnPrimary}>
                            Explore Research Domains <span className={styles.btnArrow}>→</span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* ───── Our Impact ───── */}
            <section className={styles.impactSection}>
                <div className={styles.sectionInner}>
                    <div className={styles.impactGrid}>
                        <div className={styles.impactVisual}>
                            <div className={styles.impactImageBox}>
                                <img src="NGCNLogo.png" alt="NGCN Research" />
                            </div>
                            <div className={styles.impactFloatBox}>
                                <span>20+</span>
                                <p>Published Research Papers &amp; Growing</p>
                            </div>
                        </div>
                        <div className={styles.impactContent}>
                            <span className={styles.impactLabel}>Institutional Legacy</span>
                            <h2>Advancing Knowledge for Global Progress.</h2>
                            <p className={styles.impactDesc}>
                                Our impact is measured not just in publications, but in the
                                real-world deployment of more resilient and more intelligent
                                infrastructure. We bridge the gap between theoretical research
                                and applied engineering.
                            </p>
                            <div className={styles.statsGrid}>
                                {impact.map(card => (
                                    <Link to={card.link} key={card.id} className={styles.statItem}>
                                        <h4>{card.tag.split(' ')[0]}</h4>
                                        <p>{card.title}</p>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ───── Internship Opportunities ───── */}
            <section className={styles.internshipSection}>
                <div className={styles.sectionInner}>
                    <div className={styles.sectionHeaderFlex}>
                        <div>
                            <h2 className={styles.sectionTitle}>Internship Opportunities</h2>
                            <div className={styles.accentBar} />
                        </div>
                        <p className={styles.sectionSubRight}>
                            Join our research team and contribute to cutting-edge projects.
                        </p>
                    </div>

                    <div className={styles.internshipGrid}>
                        <div className={styles.internshipCard}>
                            <h3>Self-Funded Internships</h3>
                            <p>
                                Open throughout the year! Interested candidates can fill out the
                                forms present in Internships page. Internship opportunities are
                                available in AI, networking, and computing.
                            </p>
                            <p>
                                Gain valuable research experience, work with cutting-edge
                                technologies, and collaborate with our expert team on innovative
                                projects.
                            </p>
                        </div>
                        <div className={styles.internshipCard}>
                            <h3>Funded Internship Programs</h3>
                            <p>
                                We offer <strong>funded internships</strong> on selected
                                projects, allowing students and professionals to contribute
                                directly to our initiatives while gaining hands-on experience.
                            </p>
                            <p>
                                Work on real-world problems, receive mentorship from industry
                                experts, and build your professional portfolio.
                            </p>
                        </div>
                    </div>

                    <div className={styles.sectionCta}>
                        <Link to="/internships" className={styles.btnPrimary}>
                            Get More Details <span className={styles.btnArrow}>→</span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* ───── Latest News – Asymmetric Layout ───── */}
            <section className={styles.newsSection}>
                <div className={styles.sectionInner}>
                    <div className={styles.sectionHeaderRow}>
                        <h2 className={styles.sectionTitle}>Latest News</h2>
                        <Link to="/news" className={styles.archiveLink}>See All News →</Link>
                    </div>

                    <div className={styles.newsLayout}>
                        {/* Featured article – text only */}
                        {ngcnNewsFeed.length > 0 && (
                            <a
                                href={ngcnNewsFeed[0].link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.newsFeatured}
                            >
                                <span className={styles.featuredBadge}>Latest</span>
                                <h3>{ngcnNewsFeed[0].title}</h3>
                                <p>{ngcnNewsFeed[0].description}</p>
                                <span className={styles.newsMeta}>
                                    {ngcnNewsFeed[0].pubDate}
                                </span>
                            </a>
                        )}

                        {/* Sidebar list */}
                        <div className={styles.newsSidebar}>
                            {ngcnNewsFeed.slice(1, 4).map((item, idx) => (
                                <a
                                    key={idx}
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.newsItem}
                                >
                                    <span className={styles.newsItemTag}>News</span>
                                    <h4>{item.title}</h4>
                                    <p>{item.description}</p>
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className={styles.sectionButtonRow}>
                        <Link to="/news" className={styles.btnPrimary}>See More News</Link>
                        <a
                            href="https://medium.com/@ngcnnews"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.btnOutline}
                        >
                            Follow NGCN News
                        </a>
                    </div>
                </div>
            </section>

            {/* ───── NGCN on Medium ───── */}
            <section className={styles.mediumSection}>
                <div className={styles.sectionInner}>
                    <div className={styles.sectionHeaderRow}>
                        <h2 className={styles.sectionTitle}>NGCN on Medium</h2>
                        <Link to="/blogs" className={styles.archiveLink}>See All Blogs →</Link>
                    </div>

                    <div className={styles.mediumGrid}>
                        {mediumFeed.slice(0, 6).map((article, idx) => (
                            <a
                                key={idx}
                                href={article.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.mediumCard}
                            >
                                {article.image && (
                                    <div className={styles.mediumThumb}>
                                        <img src={article.image} alt={article.title} />
                                    </div>
                                )}
                                <div className={styles.mediumBody}>
                                    <span className={styles.mediumBadge}>Medium</span>
                                    <h3>{article.title}</h3>
                                    {article.description && <p>{article.description}</p>}
                                    <span className={styles.readMoreLink}>Read on Medium →</span>
                                </div>
                            </a>
                        ))}
                    </div>

                    <div className={styles.sectionButtonRow}>
                        <Link to="/blogs" className={styles.btnPrimary}>See More Blogs</Link>
                        <a
                            href="https://medium.com/@ngcngroup"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.btnOutline}
                        >
                            Follow Us on Medium
                        </a>
                    </div>
                </div>
            </section>

            {/* ───── NGCN on YouTube ───── */}
            <section className={styles.youtubeSection}>
                <div className={styles.sectionInner}>
                    <div className={styles.sectionHeaderRow}>
                        <h2 className={`${styles.sectionTitle} ${styles.lightTitle}`}>
                            NGCN on YouTube
                        </h2>
                        <a
                            href="https://youtube.com/@ngcnresearch"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.archiveLinkLight}
                        >
                            Subscribe →
                        </a>
                    </div>

                    <div className={styles.ytGrid}>
                        {youtubeFeed.slice(0, 4).map(video => (
                            <a
                                key={video.id}
                                href={video.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.ytCard}
                            >
                                <div className={styles.ytThumb}>
                                    <img src={video.thumbnail} alt={video.title} />
                                    <div className={styles.ytPlay}>▶</div>
                                </div>
                                <div className={styles.ytBody}>
                                    {video.tag && <span className={styles.ytTag}>{video.tag}</span>}
                                    <h3>{video.title}</h3>
                                    <p>{video.description}</p>
                                    <div className={styles.ytMeta}>
                                        <span>{video.published}</span>
                                        <span className={styles.ytWatch}>Watch</span>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>

                    <div className={styles.sectionButtonRow}>
                        <Link to="/videos" className={styles.btnLight}>See More Videos</Link>
                        <a
                            href="https://youtube.com/@ngcnresearch"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.btnOutlineLight}
                        >
                            Follow Us on YouTube
                        </a>
                    </div>
                </div>
            </section>

            {/* ───── CTA Section ───── */}
            <section className={styles.ctaSection}>
                <div className={styles.ctaInner}>
                    <h2>Join Our Research Community</h2>
                    <p>
                        Collaborate with us on cutting-edge research in computing and
                        networking. Together, we can shape the future of technology.
                    </p>
                    <Link to="/contact" className={styles.btnDark}>Get in Touch</Link>
                </div>
            </section>
        </div>
    );
}

export default Home;
