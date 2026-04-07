import styles from "./Internships.module.css";
import { FiExternalLink, FiDownload, FiFileText } from "react-icons/fi";
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

                {/* Overlapping Intro Card */}
                <div className={styles.introCard}>
                    <h2>Why Intern with NGCN?</h2>
                    <p>
                        We offer a dynamic research environment where theoretical knowledge meets practical application.
                        Whether you are looking for funded projects or self-driven research experience, NGCN provides
                        the mentorship and resources to help you excel.
                    </p>
                </div>

                {/* Grid Layout for Internship Types */}
                <div className={styles.gridContainer}>

                    {/* --- Card 1: Self-Funded --- */}
                    <div className={styles.internshipCard}>
                        <div className={styles.cardHeader}>
                            <div className={styles.iconBox}>
                                <HiOutlineLightBulb className={styles.cardIcon} />
                            </div>
                            <h3>Self-Funded Research</h3>
                        </div>

                        <div className={styles.cardBody}>
                            <p className={styles.desc}>
                                Internships in AI, Machine Learning, Indian Knowledge Systems,
                                and Advanced Computing. Guided by Dr. K. E. Srinivasa Desikan.
                                In addition to core CSE domains, focused emphasis will be placed on emerging areas such as IKS and IoT/6G.
                            </p>

                            <ul className={styles.detailsList}>
                                <li><strong>Duration:</strong> 3 months (extendable up to 6 months based on performance)</li>
                                <li><strong>Eligibility:</strong> B.Tech 3rd year or Dual Degree B.Tech 4th year (Academic year 2025–2026). Age ≤ 23 years</li>
                                <li><strong>Stipend:</strong> None (Certificate provided)</li>
                            </ul>

                            <div className={styles.buttonGroup}>
                                <a href="./Images/open_internship.png" target="_blank" rel="noopener noreferrer" className={styles.btnSecondary}>
                                    <FiFileText /> View Details
                                </a>
                                <a href="https://docs.google.com/forms/d/e/1FAIpQLScPkuNbGF2fwrLB6utg51IWPFHTBrZGouhvOiiIvKzP77RgDg/viewform"
                                   target="_blank" rel="noopener noreferrer" className={styles.btnPrimary}>
                                    Apply Now
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* --- Card 2: Fake News Detection (Funded) --- */}
                    <div className={styles.internshipCard}>
                        <div className={styles.cardHeader}>
                            <div className={styles.iconBox}>
                                <HiOutlineBriefcase className={styles.cardIcon} />
                            </div>
                            <h3>Fake News Detection</h3>
                            <span className={styles.badge}>Funded</span>
                        </div>

                        <div className={styles.cardBody}>
                            <p className={styles.desc}>
                                CSU-funded project (Ashtaadashi Scheme 2024–2025) on identifying misinformation
                                in Indian scriptures using deep learning (XLNet, Attention Mechanisms, BiGRU).
                            </p>

                            <ul className={styles.detailsList}>
                                <li><strong>Positions:</strong> 10 (Engineers & Scholars combined)</li>
                                <li><strong>Stipend:</strong> ₹10,000/month</li>
                                <li><strong>Duration:</strong> 3 months (Apr 27 – Jul 31, 2026), extendable up to 6 months</li>
                                <li><strong>Eligibility:</strong> B.Tech 3rd year or Dual Degree B.Tech 4th year (2025–2026) with ML knowledge, or BA/MA Sanskrit scholars. Age ≤ 23 years</li>
                                <li><strong>Last Date:</strong> 17th April 2026, 12:00 PM</li>
                            </ul>

                            <div className={styles.buttonGroup}>
                                <a href="./data/CSU_ASHTADASHI_ADVERTISEMENT_07_04_2026.docx-1.pdf" target="_blank" rel="noopener noreferrer" className={styles.btnSecondary}>
                                    <FiDownload /> Advertisement
                                </a>
                                <a href="https://docs.google.com/forms/d/e/1FAIpQLScPkuNbGF2fwrLB6utg51IWPFHTBrZGouhvOiiIvKzP77RgDg/viewform"
                                   target="_blank" rel="noopener noreferrer" className={styles.btnPrimary}>
                                    Apply Now
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* --- Card 3: Nyāya-Śāstra (Funded) --- */}
                    <div className={styles.internshipCard}>
                        <div className={styles.cardHeader}>
                            <div className={styles.iconBox}>
                                <HiOutlineBriefcase className={styles.cardIcon} />
                            </div>
                            <h3>Nyāya-Śāstra Research</h3>
                            <span className={styles.badge}>Funded</span>
                        </div>

                        <div className={styles.cardBody}>
                            <p className={styles.desc}>
                                IKS–MoE funded internship studying classical Indian logical frameworks (Tarka/Nyāya) 
                                and their relevance to modern AI reasoning systems.
                            </p>

                            <ul className={styles.detailsList}>
                                <li><strong>Stipend:</strong> Up to ₹10,000/month</li>
                                <li><strong>Focus:</strong> Mapping ancient logic to computational models</li>
                                <li><strong>Eligibility:</strong> Strong logic background & Sanskrit skills</li>
                            </ul>

                            <div className={styles.buttonGroup}>
                                <a href="./data/IKS_ADVERTISEMENT_13_11_2025.pdf" target="_blank" rel="noopener noreferrer" className={styles.btnSecondary}>
                                    <FiDownload /> Advertisement
                                </a>
                                <a href="https://docs.google.com/forms/d/e/1FAIpQLScPkuNbGF2fwrLB6utg51IWPFHTBrZGouhvOiiIvKzP77RgDg/viewform" 
                                   target="_blank" rel="noopener noreferrer" className={styles.btnPrimary}>
                                    Apply Now
                                </a>
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