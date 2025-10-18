import styles from "./Home.module.css";
import { Link } from 'react-router-dom';
import { Tweet } from 'react-tweet';
import React, { useState, useEffect } from 'react';
import impact from "../../db/impact.json";
import domain from "../../db/domain.json";
import homeBlogs from "../../db/homeBlogs.json";
import news from "../../db/news.json";
import tweets from "../../db/tweets.json";
import HomeImpactCard from "../../Components/HomeImpactCard/HomeImpactCard";
import HomeBlogCard from "../../Components/HomeBlogCard/HomeBlogCard";
import HomeNewsCard from "../../Components/HomeNewsCard/HomeNewsCard";


function Home() {
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
                            <h3>Year-Long Open Internship</h3>
                            <p>Open for interns all year round! Interested candidates can send their resumes to <strong>ngcngroup@gmail.com</strong>. Internship opportunities are available in our research areas including AI, networking, and computing.</p>
                            <p>Gain valuable research experience, work with cutting-edge technologies, and collaborate with our expert team on innovative projects.</p> Looking Forward!
                        </div>
                        <div className={styles.cardButton}>
                            <a href="../../public/openinterns.png" target="_blank" rel="noopener noreferrer"><button><p>View Details</p></button></a>
                        </div>
                    </div>
                    <div className={styles.internshipCard}>
                        <div className={styles.cardContent}>
                            <h3>Paid Internship Programs</h3>
                            <p>We offer <strong>paid internships</strong> on selected projects. These roles allow students and professionals to contribute directly to our ongoing initiatives while gaining hands-on research and development experience.</p>
                            <p>Work on real-world problems, receive mentorship from industry experts, and build your professional portfolio.</p> Please contact for more details.
                        </div>
                        <div className={styles.cardButton}>
                            <Link to='/contact'><button><p>Coming Soon</p></button></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.block2}>
                <div>
                    <h2>Top Blogs</h2>
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
                </div>
            </div>

            <div className={styles.block3}>
                <div><h2>Our Impact</h2></div>
                <div>
                    <div className={styles.impactCards}>
                        {impact.map(card => (
                            <Link to={card.link} style={{ textDecoration: 'none' }}>
                                <HomeImpactCard
                                    key={card.id}
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

            <div className={styles.block4}>
                <div className={styles.newsContainer}>
                    <div className={styles.news}>
                        <h2>Latest News</h2>
                    </div>
                    <div className={styles.newsCards}>
                        {news.map(card => (
                            <HomeNewsCard
                                key={card.id}
                                date={card.date}
                                title={card.title}
                                description={card.description}
                                tag={card.tag}
                            />
                        ))}
                    </div>
                </div>
                <div className={styles.tweets}>

                    <h2>Latest Updates</h2>
                    <div className={styles.tweetsContainer}>
                        {tweets.map(card => (
                            <div key={card.id} className={styles.tweetCard} data-theme="light">
                                <Tweet id={card.tweetId} />
                            </div>
                        ))}
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