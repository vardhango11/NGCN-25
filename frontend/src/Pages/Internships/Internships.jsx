import styles from "./Internships.module.css";
import "../About/About.css";

function Internships() {
    return (
        <div>
            <div className="title">
                <div>
                    <h1>Internship Opportunities</h1>
                </div>
                <div>
                    <center>
                        <p>Join our research team and contribute to cutting-edge projects.</p>
                    </center>
                </div>
            </div>

<div className={styles.container}>
                {/* --- Unpaid Internship Section --- */}
                <section className={styles.section}>
                    <div className={styles.content}>
                        <h2>Self-Funded Internships</h2>
                        <p>
                            The <strong>Next Gen Computing and Networking (NGCN)</strong> research group currently at IIITDM Kurnool
                            invites applications for a <strong>Research Internship</strong> open throughout the year.
                            Interns can work in AI, ML, Indian Knowledge Systems, Networking, and Computing for more reseach domains exotic list can be found in reseach page link <a href="./Research">here</a>under the guidance of
                            <strong> Dr. K. E. Srinivasa Desikan</strong>. 
                        </p>
                        <p>
                            Duration options: <strong>1 / 3 / 6 / 12 months</strong>. Limited seats available.
                            Internship certificates will be awarded upon completion.
                        </p>
                        <p>
                            Eligibility: 2nd, 3rd & 4th year B.Tech students with CGPA ≥ 8.5 (relaxed for CFTI students and exceptional candidates).
                        </p>
                        <div className={styles.cardButton}>
                            <a href="./Images/internship_1.png" target="_blank" rel="noopener noreferrer">
                                <button><p>View Internship Details</p></button>
                            </a>
                            <a href="https://docs.google.com/forms/d/e/1FAIpQLScPkuNbGF2fwrLB6utg51IWPFHTBrZGouhvOiiIvKzP77RgDg/viewform" target="_blank" rel="noopener noreferrer">
                                <button><p>Interested Students: Fill this Form</p></button>
                            </a>
                        </div>
                    </div>
                </section>

                {/* --- Paid Internship Section --- */}
                <section className={styles.sectionAlt}>
                    <div className={styles.content}>
                        <h2>Funded Internship Programs</h2>
                        <p>
                            These funded research internships offer stipends up to <strong>₹10,000 per month</strong> and
                            provide opportunities to contribute to advanced interdisciplinary projects.
                        </p>
                        <p>
                            <strong>1. Fake News Detection Internship:</strong> Focused on identifying misinformation related
                            to ancient scriptures, requiring Sanskrit literacy, logical reasoning, and NLP / AI skills.
                            Duration – up to 12 months.
                        </p>
                        <p>
                            <strong>2. Nyāya-Śāstra Internship:</strong> Designed for Computer Science Engineers to apply
                            Nyāya principles to computing logic. Duration – 3 months (Nov 2025 – Feb 2026).
                        </p>    
                        <p>
                            Both programs are guided by <strong>Dr. K. E. Srinivasa Desikan</strong> and open to scholars
                            and engineers with CGPA ≥ 8.5 (relaxed for CFTI students and exceptional candidates and Sanskrit scholars).
                        </p>
                        <div className={styles.cardButton}>
                            <a href="./Images/internship_3.png" target="_blank" rel="noopener noreferrer">
                                <button><p>View Fake News Internship</p></button>
                            </a>
                            <a href="./Images/internship_2.png" target="_blank" rel="noopener noreferrer">
                                <button><p>View Nyāya-Śāstra Internship</p></button>
                            </a>
                            <a href="https://docs.google.com/forms/d/e/1FAIpQLScPkuNbGF2fwrLB6utg51IWPFHTBrZGouhvOiiIvKzP77RgDg/viewform" target="_blank" rel="noopener noreferrer">
                                <button><p>Interested Students: Fill this Form</p></button>
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Internships;
