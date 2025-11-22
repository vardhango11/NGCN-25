import styles from "./Internships.module.css";
import { FiExternalLink } from "react-icons/fi";
import "../About/About.css";

function Internships() {
    return (
        <div>
            <div className="title">
                <h1>Internship Opportunities</h1>
                <center>
                    <p>Join our research team and contribute to impactful and interdisciplinary projects.</p>
                </center>
            </div>

            <div className={styles.container}>

                {/* --- Self-Funded Internship Section --- */}
                <section className={styles.section}>
                    <div className={styles.content}>
                        <h2>Self-Funded Research Internships</h2>
                        <p>
                            The Next Gen Computing and Networking (NGCN) Research Group at IIITDM Kurnool invites applications
                            for year-long rolling research internships in domains including AI, ML, Networking, IKS, and Next-Gen Computing.
                        </p>
                        <p>
                            Duration options include 1, 3, 6 and 12 months. Internships are guided by
                            Dr. K. E. Srinivasa Desikan, Assistant Professor, IIITDM Kurnool.
                        </p>
                        <p>
                            <strong>Eligibility:</strong> B.Tech 2nd–4th year students with CGPA ≥ 8.5 (relaxations for CFTI and exceptional candidates).
                            Limited seats only. No stipend provided; internship certificate awarded on successful completion.
                        </p>

                        <div className={styles.cardButton}>
                            <a href="./Images/open_internship.png" target="_blank" rel="noopener noreferrer">
                                <button><p>View Internship Details</p></button>
                            </a>
                            <a href="https://docs.google.com/forms/d/e/1FAIpQLScPkuNbGF2fwrLB6utg51IWPFHTBrZGouhvOiiIvKzP77RgDg/viewform"
                                target="_blank" rel="noopener noreferrer">
                                <button><p>Submit Application Form</p></button>
                            </a>
                        </div>
                    </div>
                </section>


                {/* --- Funded Internship Section --- */}
                <section className={styles.sectionAlt}>
                    <div className={styles.content}>
                        <h2>Funded Internship Programs</h2>
                        <p>
                            Fully funded research internships offering stipends up to ₹10,000/month in collaboration with
                            national funding bodies. Interdisciplinary work opportunities under the guidance of faculty at IIITDM Kurnool.
                        </p>
                        <p>
                            Applicants must download the official advertisement PDF, fill the required application form,
                            and upload the completed form along with their latest CV merge it as a PDF and upload it in the
                            Google application form.
                        </p>

                        {/* Fake News Internship */}
                        <h3>1. Fake News Detection Internship</h3>
                        <p>
                            A CSU-funded project under the Ashtadashi Scheme–2025 focusing on identifying and preventing
                            misinformation related to Indian scriptures using AI, NLP, and Machine Learning technologies.
                            The research aims to protect the authenticity of culturally significant texts such as the Ramayana
                            and Mahabharata by developing computational models for fact validation and content analysis.
                            <p>
                                Interns will contribute to dataset creation, model development, and evaluation of misinformation
                                patterns within digital media environments.
                            </p>
                        </p>
                        <p>
                            <strong>Eligibility:</strong> B.Tech 2nd year and above with knowledge in ML & Discrete Mathematics, or
                            traditional scholars with Sanskrit literacy and cultural knowledge. Mode: On-campus preferred. Tenure up to Dec 2026.
                        </p>

                        <div className={styles.cardButton}>
                            <a href="./Images/fake_news_internship.png" target="_blank" rel="noopener noreferrer">
                                <button><p>View Project Details</p></button>
                            </a>
                            <a href="./data/csu_astadashi.pdf" target="_blank" rel="noopener noreferrer">
                                <button><p>Official Advertisement (PDF)</p></button>
                            </a>
                            <a href="https://docs.google.com/forms/d/e/1FAIpQLScPkuNbGF2fwrLB6utg51IWPFHTBrZGouhvOiiIvKzP77RgDg/viewform"
                                target="_blank" rel="noopener noreferrer">
                                <button><p>Submit Application Form</p></button>
                            </a>
                        </div>


                        {/* Nyaya Shastra Internship */}
                        <h3>2. Nyāya-Śāstra Internship</h3>
                        <p>
                            An IKS–MoE funded internship focused on studying classical Indian logical frameworks such as
                            Tarka and Nyāya, and examining their relevance to computation, inference mechanisms, and
                            modern AI-based reasoning systems.
                            The project aims to explore how traditional knowledge systems can contribute to more robust,
                            explainable, and culturally-aware logic models in computer science.
                            <p>
                                Interns will engage in
                                conceptual analysis, mapping of logic principles, and foundational research in computational
                                reasoning inspired by ancient texts.
                            </p>
                        </p>
                        <p>
                            <strong>Eligibility:</strong> B.Tech (2nd year & above) with strong logic background and Sanskrit reading skills,
                            or scholars with training in Tarka-Śāstra. Tenure up to Feb 2026. Mostly on-campus research.
                        </p>

                        <div className={styles.cardButton}>
                            <a href="./Images/iks_internship.png" target="_blank" rel="noopener noreferrer">
                                <button><p>View Project Details</p></button>
                            </a>
                            <a href="./data/IKS_ADVERTISEMENT_13_11_2025.pdf" target="_blank" rel="noopener noreferrer">
                                <button><p>Official Advertisement (PDF)</p></button>
                            </a>
                            <a href="https://docs.google.com/forms/d/e/1FAIpQLScPkuNbGF2fwrLB6utg51IWPFHTBrZGouhvOiiIvKzP77RgDg/viewform"
                                target="_blank" rel="noopener noreferrer">
                                <button><p>Submit Application Form</p></button>
                            </a>
                        </div>

                        <p style={{ marginTop: "25px", fontSize: "14px" }}>
                            Note: Do not send emails separately. Applications submitted through the form alone will be considered.
                        </p>
                    </div>
                </section>


                {/* Interview Process */}
                <section className={styles.section}>
                    <div className={styles.content}>
                        <h2>Internship Selection Process</h2>
                        <p>
                            Candidates will undergo a structured evaluation process to ensure suitability for the research roles:
                        </p>
                        <ul>
                            <li><strong>Stage 1:</strong> Profile and Resume Shortlisting</li>
                            <li><strong>Stage 2:</strong> One or Two Interviews (based on technical and research performance)</li>
                            <li><strong>Stage 3:</strong> Background and Academic Verification</li>
                        </ul>
                    </div>
                </section>


            </div>
        </div>
    );
}

export default Internships;
