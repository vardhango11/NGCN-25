import styles from "./Internships.module.css";
import { FiExternalLink, FiDownload, FiFileText, FiAward, FiUsers, FiCpu, FiDollarSign } from "react-icons/fi";
import { HiOutlineLightBulb, HiOutlineBriefcase } from "react-icons/hi";

function Internships() {
    return (
        <div className={styles.pageWrapper}>
            {/* 1. Hero Header */}
            <header className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1>Internship Opportunities</h1>
                    <p>Join our research team and contribute to impactful and interdisciplinary projects.</p>
                </div>
            </header>

            {/* 2. Main Content Area */}
            <div className={styles.mainContent}>

                {/* Why Intern with Us */}
                <div className={styles.introCard}>
                    <h2>Why Intern with Us?</h2>
                    <p className={styles.introDesc}>
                        We offer a dynamic research environment where theoretical knowledge meets practical application.
                    </p>
                    <div className={styles.benefitsGrid}>
                        <div className={styles.benefitItem}>
                            <div className={styles.benefitIcon}><FiUsers /></div>
                            <h4>Expert Mentorship</h4>
                            <p>Guidance from experienced faculty on real-world research projects.</p>
                        </div>
                        <div className={styles.benefitItem}>
                            <div className={styles.benefitIcon}><FiCpu /></div>
                            <h4>Latest Technologies</h4>
                            <p>Hands-on with AI, Deep Learning, IoT/6G, and IKS.</p>
                        </div>
                        <div className={styles.benefitItem}>
                            <div className={styles.benefitIcon}><FiAward /></div>
                            <h4>Certification</h4>
                            <p>Official internship certificate on successful completion.</p>
                        </div>
                        <div className={styles.benefitItem}>
                            <div className={styles.benefitIcon}><FiDollarSign /></div>
                            <h4>Stipend Opportunities</h4>
                            <p>Funded roles offer up to ₹10,000/month with full resources.</p>
                        </div>
                    </div>
                </div>

                {/* Grid Layout for Internship Types */}
                <div className={styles.gridContainer}>

                    {/* --- Card 1: Self-Funded Summer Internship 2026 --- */}
                    <div className={styles.internshipCard}>
                        <a href="/Images/self_funded_summer_2026.jpeg" target="_blank" rel="noopener noreferrer" className={styles.cardPoster}>
                            <img src="/Images/self_funded_summer_2026.jpeg" alt="Self-Funded Summer Internship 2026 Poster" />
                        </a>
                        <div className={styles.cardContent}>
                            <div className={styles.cardHeader}>
                                <div className={styles.iconBox}>
                                    <HiOutlineLightBulb className={styles.cardIcon} />
                                </div>
                                <h3>Self-Funded Summer Internship</h3>
                            </div>
                            <div className={styles.cardBody}>
                                <ul className={styles.detailsList}>
                                    <li><strong>Duration:</strong> May 1 – Jul 31, 2026 (3 months)</li>
                                    <li><strong>Stipend:</strong> Unpaid (Certificate + mentorship provided)</li>
                                    <li><strong>Last Date:</strong> 24th April 2026</li>
                                </ul>
                                <div className={styles.buttonGroup}>
                                    <a href="https://forms.gle/19bJZFWFMHR2WL196"
                                       target="_blank" rel="noopener noreferrer" className={styles.btnPrimary}>
                                        <FiExternalLink /> Apply Now
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* --- Card 2: Self-Funded Rolling Internship --- */}
                    <div className={styles.internshipCard}>
                        <a href="/Images/self_funded_rolling.jpeg" target="_blank" rel="noopener noreferrer" className={styles.cardPoster}>
                            <img src="/Images/self_funded_rolling.jpeg" alt="Self-Funded Rolling Internship Poster" />
                        </a>
                        <div className={styles.cardContent}>
                            <div className={styles.cardHeader}>
                                <div className={styles.iconBox}>
                                    <HiOutlineLightBulb className={styles.cardIcon} />
                                </div>
                                <h3>Self-Funded Rolling Internship</h3>
                            </div>
                            <div className={styles.cardBody}>
                                <ul className={styles.detailsList}>
                                    <li><strong>Duration:</strong> 3 months (extendable up to 6 months)</li>
                                    <li><strong>Stipend:</strong> Unpaid (Certificate + mentorship provided)</li>
                                    <li><strong>Deadline:</strong> 21st of every month (Year-round)</li>
                                </ul>
                                <div className={styles.buttonGroup}>
                                    <a href="https://forms.gle/ZEAucu3Q9DXPFkY16"
                                       target="_blank" rel="noopener noreferrer" className={styles.btnPrimary}>
                                        <FiExternalLink /> Apply Now
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* --- Card 3: IKS Summer Internship 2026 (Funded) --- */}
                    <div className={styles.internshipCard}>
                        <a href="/Images/iks_summer_2026.jpeg" target="_blank" rel="noopener noreferrer" className={styles.cardPoster}>
                            <img src="/Images/iks_summer_2026.jpeg" alt="IKS Summer Internship 2026 Poster" />
                        </a>
                        <div className={styles.cardContent}>
                            <div className={styles.cardHeader}>
                                <div className={styles.iconBox}>
                                    <HiOutlineBriefcase className={styles.cardIcon} />
                                </div>
                                <h3>IKS Summer Internship 2026</h3>
                                <span className={styles.badge}>Funded</span>
                            </div>
                            <div className={styles.cardBody}>
                                <ul className={styles.detailsList}>
                                    <li><strong>Positions:</strong> 16 (Engineers & Scholars combined)</li>
                                    <li><strong>Stipend:</strong> ₹10,000/month</li>
                                    <li><strong>Duration:</strong> Apr 27 – Jul 31, 2026 (3 months, extendable)</li>
                                    <li><strong>Last Date:</strong> 17th April 2026, 12:00 PM</li>
                                </ul>
                                <div className={styles.buttonGroup}>
                                    <a href="./data/IKS_ADVERTISEMENT_07_04_2026.docx.pdf" target="_blank" rel="noopener noreferrer" className={styles.btnSecondary}>
                                        <FiDownload /> Know More
                                    </a>
                                    <a href="https://forms.gle/M4c1QNVkWWe3nekFA"
                                       target="_blank" rel="noopener noreferrer" className={styles.btnPrimary}>
                                        <FiExternalLink /> Apply Now
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* --- Card 4: CSU Summer Internship 2026 (Funded) --- */}
                    <div className={styles.internshipCard}>
                        <a href="/Images/csu_summer_2026.jpeg" target="_blank" rel="noopener noreferrer" className={styles.cardPoster}>
                            <img src="/Images/csu_summer_2026.jpeg" alt="CSU Summer Internship 2026 Poster" />
                        </a>
                        <div className={styles.cardContent}>
                            <div className={styles.cardHeader}>
                                <div className={styles.iconBox}>
                                    <HiOutlineBriefcase className={styles.cardIcon} />
                                </div>
                                <h3>CSU Summer Internship 2026</h3>
                                <span className={styles.badge}>Funded</span>
                            </div>
                            <div className={styles.cardBody}>
                                <ul className={styles.detailsList}>
                                    <li><strong>Positions:</strong> 10 (Engineers & Scholars combined)</li>
                                    <li><strong>Stipend:</strong> ₹10,000/month</li>
                                    <li><strong>Duration:</strong> Apr 27 – Jul 31, 2026 (3 months, extendable)</li>
                                    <li><strong>Last Date:</strong> 17th April 2026, 12:00 PM</li>
                                </ul>
                                <div className={styles.buttonGroup}>
                                    <a href="./data/CSU_ASHTADASHI_ADVERTISEMENT_07_04_2026.docx-1.pdf" target="_blank" rel="noopener noreferrer" className={styles.btnSecondary}>
                                        <FiDownload /> Know More
                                    </a>
                                    <a href="https://forms.gle/SEu1s6ap2Nkm8GnK9"
                                       target="_blank" rel="noopener noreferrer" className={styles.btnPrimary}>
                                        <FiExternalLink /> Apply Now
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Selection Process Section */}
                <section className={styles.processSection}>
                    <h2>Selection Process</h2>
                    <div className={styles.stepsContainer}>
                        <div className={styles.step}>
                            <div className={styles.stepNumber}>1</div>
                            <p>Profile Shortlisting</p>
                        </div>
                        <div className={styles.line}></div>
                        <div className={styles.step}>
                            <div className={styles.stepNumber}>2</div>
                            <p>Technical Interview</p>
                        </div>
                        <div className={styles.line}></div>
                        <div className={styles.step}>
                            <div className={styles.stepNumber}>3</div>
                            <p>Final Verification</p>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
}

export default Internships;