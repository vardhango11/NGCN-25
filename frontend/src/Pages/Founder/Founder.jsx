import React from "react";
import { Link } from "react-router-dom";
import { Award, BookOpen, Users } from "lucide-react";
import PublicationCard from "../../Components/PublicationCard/PublicationCard";
import "./Founder.css";

// --- Data Objects (Kept exactly as provided) ---
const keyPublicationsData = [
  {
    title: "Decoding the Interplay Between Latency, Reliability, Cost, and Energy While Provisioning Resources in Fog-Computing-Enabled IoT Networks.",
    author: "K. E. Srinivasa Desikan, Vĳeth J. Kotagi, & C. Siva Ram Murthy",
    conference: "IEEE Internet of Things Journal, 2023",
    doi: "https://ieeexplore.ieee.org/document/9913681",
  },
  {
    title: "A Novel Matching Theory-Based Data Offloading Framework for a Fog Network With Selfish and Rational Nodes.",
    author: "K. E. Srinivasa Desikan, Vĳeth J. Kotagi, & C. Siva Ram Murthy",
    conference: "IEEE Networking Letters, 2021",
    doi: "https://ieeexplore.ieee.org/document/9598902",
  },
  {
    title: "Topology Control in Fog Computing Enabled IoT Networks for Smart Cities",
    author: "K. E. Srinivasa Desikan, Vĳeth J. Kotagi, & C. Siva Ram Murthy",
    conference: "Computer Networks, 2020",
    doi: "https://linkinghub.elsevier.com/retrieve/pii/S1389128620301468",
  },
];

const awardsData = [
  {
    title: "Huawei Fellowship for Excellence",
    year: "2022",
    description: "For research work done during the Ph.D. program.",
  },
  {
    title: "Star TA Award",
    year: "2018",
    description: "For valuable contribution as a teaching assistant in Foundations of Computer Systems Design course.",
  },
  {
    title: "Best Outgoing Student Award",
    year: "2008",
    description: "Bharatiya Vidya Bhavan's Sri Venkateswara Vidyalaya, Tirupati",
  },
];

const educationData = [
  {
    degree: "M.S - Ph.D Dual Degree in CSE",
    university: "IIT Madras",
    year: "2015-2022",
  },
  {
    degree: "B.Tech in CSE",
    university: "Pondicherry Engineering College",
    year: "2010-2014",
  },
  {
    degree: "CBSE Class XII",
    university: "P.S Senior Secondary School, Chennai",
    year: "2010",
  },
  {
    degree: "CBSE Class X",
    university: "Bharatiya Vidya Bhavan's, Tirupati",
    year: "2008",
  },
];

const experienceData = [
  {
    title: "Founder & Principal Researcher",
    company: "Next Gen Computing and Networking (NGCN)",
    years: "2024 - Present",
    description: "Founded and leads NGCN research group, focusing on edge computing, IoT, and machine learning applications.",
  },
  {
    title: "Assistant Professor in CSE",
    company: "IIITDM Kurnool",
    years: "2022 - Present",
    description: "Subjects: OOP, Software Engineering, Game Theory, IOTs, Computer Architecture, DSA, Discrete Mathematics, Computer Networks",
  },
  {
    title: "Teaching Assistant, CSE",
    company: "IIT Madras",
    years: "2017 - 2021",
    description: "Subjects: Introduction to Programming, Foundations of Computer Systems Design, COA, Computer Networks, Advanced DSA",
  },
  {
    title: "Project Associate, CSE",
    company: "IIT Madras",
    years: "2015 - 2017",
    description: "Project: Investigating Capacity, Coverage, and Energy-efficiency in Heterogeneous Wireless Networks",
  },
];

const researchInterests = [
  "Edge Computing & IoT",
  "Federated Learning",
  "Distributed Systems",
  "Machine Learning",
  "Privacy & Security",
  "Quantum Computing",
  "Network Optimization",
  "Cloud-Edge Integration",
];

export default function Founder() {
  return (
    <div className="founder-page-wrapper">

      {/* 1. Hero Header Section */}
      <header className="founder-hero">
        <div className="hero-content">
          <span className="hero-eyebrow">Founder Profile</span>
          <h1>Meet the Founder</h1>
          <p className="hero-subtitle">
            Leading the charge in Next-Gen Computing & Networking through innovation, education, and impactful research.
          </p>
        </div>
      </header>

      <div className="main-content-area">

        {/* 2. Overlapping Profile Card */}
        <section className="profile-section-wrapper">
          <div className="profile-card">

            <div className="profile-image-container">
              <div className="blob-background"></div>
              <img src="Prof_Desikan_pic.svg" alt="Dr. K. E. Srinivasa Desikan" />
            </div>

            <div className="profile-details">
              <h3>Dr. K. E. Srinivasa Desikan</h3>
              <div className="profile-roles">
                <span className="highlight-role">Founder & Principal Researcher, NGCN</span>
                <span className="secondary-role">Researcher • Educator • Innovator</span>
              </div>

              <div className="profile-bio">
                <p>
                  Dr. Kaniyambakkam Elayavilli Srinivasa Desikan, currently
                  working as an Assistant Professor at IIITDM Kurnool, leads the
                  Next Gen Computing and Networking (NGCN) Group. The team focuses
                  on emerging research areas such as Artificial Intelligence, IoT,
                  Networks, and other advanced computing technologies.
                </p>
              </div>

              <div className="profile-actions">
                <div className="social-row">
                  <a href="https://www.linkedin.com/in/srinivasa-desikan-kaniyambakkam-elayavilli-553449217/" aria-label="LinkedIn">
                    <i className="fa-brands fa-linkedin"></i>
                    <span>LinkedIn</span>
                  </a>
                  <a href="mailto:srinivasadesikan@iiitk.ac.in" aria-label="Email">
                    <i className="fa-solid fa-envelope"></i>
                    <span>Email</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Vision Section */}
        <section className="vision-section">
          <div className="section-header center">
            <h3>Our Vision</h3>
            <div className="divider"></div>
          </div>
          <div className="vision-content">
            <p className="lead-text">
              To contribute meaningfully to the advancement of computer science
              through impactful research, student-centered teaching, and
              collaborative innovation.
            </p>
            <p>
              I envision building a nurturing and inclusive academic environment
              that inspires critical thinking, fosters interdisciplinary research,
              and equips students with both theoretical foundations and practical
              skills. My goal is to bridge the gap between academia and industry,
              solve real-world challenges using emerging technologies, and cultivate
              the next generation of ethical and socially responsible engineers and
              researchers.
            </p>
          </div>
        </section>

        {/* 4. Education & Experience Grid */}
        <section className="resume-section">
          <div className="resume-grid">

            {/* Education Column */}
            <div className="resume-card">
              <div className="card-header">
                <div className="icon-box">
                  <BookOpen size={24} />
                </div>
                <h3>Education</h3>
              </div>
              <div className="resume-list">
                {educationData.map((item, index) => (
                  <div key={index} className="resume-item">
                    <h4 className="item-title">{item.degree}</h4>
                    <span className="item-subtitle">{item.university}</span>
                    <span className="item-year">{item.year}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience Column */}
            <div className="resume-card">
              <div className="card-header">
                <div className="icon-box">
                  <Users size={24} />
                </div>
                <h3>Professional Experience</h3>
              </div>
              <div className="resume-list">
                {experienceData.map((item, index) => (
                  <div key={index} className="resume-item">
                    <h4 className="item-title">{item.title}</h4>
                    <span className="item-subtitle">{item.company}</span>
                    <div className="meta-row">
                      <i className="fa-regular fa-calendar-days"></i>
                      <span>{item.years}</span>
                    </div>
                    <p className="item-desc">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* 5. Awards Section */}
        <section className="awards-section">
          <div className="section-header center">
            <h3>Awards & Recognition</h3>
            <div className="divider"></div>
            <p className="section-sub">Honoring contributions to research and academia</p>
          </div>

          <div className="awards-grid-container">
            {awardsData.map((award, index) => (
              <div key={index} className="award-tile">
                <div className="award-top">
                  <div className="award-icon-small">
                    <Award size={20} />
                  </div>
                  <span className="award-badge">{award.year}</span>
                </div>
                <h4>{award.title}</h4>
                <p>{award.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 6. Research Interests */}
        <section className="interests-section">
          <div className="section-header center">
            <h3>Research Interests</h3>
          </div>
          <div className="badges-cloud">
            {researchInterests.map((interest, index) => (
              <span key={index} className="interest-pill">
                {interest}
              </span>
            ))}
          </div>
        </section>

        {/* 7. Publications */}
        <section className="publications-section">
          <div className="section-header center">
            <h3>Key Publications</h3>
            <div className="divider"></div>
          </div>
          <div className="publications-wrapper">
            {keyPublicationsData.map((pub, index) => (
              <PublicationCard
                key={index}
                title={pub.title}
                author={pub.author}
                conference={pub.conference}
                doi={pub.doi}
              />
            ))}
          </div>
          <div className="action-row">
            <Link to="/publications" className="cta-button">
              View All Publications <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
