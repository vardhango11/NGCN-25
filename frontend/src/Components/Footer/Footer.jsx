import React from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import { FaLinkedin, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaHome, FaBook, FaFileAlt, FaUsers, FaImages, FaBlog, FaPhone, FaInfoCircle, FaVideo } from "react-icons/fa";

const Footer = () => {
  // const [email, setEmail] = useState("");
  // const handleEmailChange = (e) => {
  //   setEmail(e.target.value);
  // };

  return (
    <footer className={styles.footer}>
      <div className={styles.description}>
        <img src="/NGCNLogo.png" alt="Logo" className={styles.logo} />
        <p>
          NGCN is a research group focused on advancing the state-of-the-art in
          computing and networking technologies.
        </p>
      </div>

      <nav className={styles.navigation}>
        <h4>Quick Links</h4>
        <ul>
          <li>
            <Link to="/">
              <FaHome style={{ marginRight: "6px" }} />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to="/research">
              <FaBook style={{ marginRight: "6px" }} />
              <span>Research</span>
            </Link>
          </li>
          <li>
            <Link to="/publications">
              <FaFileAlt style={{ marginRight: "6px" }} />
              <span>Publications</span>
            </Link>
          </li>
          <li>
            <Link to="/people">
              <FaUsers style={{ marginRight: "6px" }} />
              <span>People</span>
            </Link>
          </li>
          <li>
            <Link to="/videos">
              <FaVideo style={{ marginRight: "6px" }} />
              <span>Videos</span>
            </Link>
          </li>
          <li>
            <Link to="/gallery">
              <FaImages style={{ marginRight: "6px" }} />
              <span>Gallery</span>
            </Link>
          </li>
          <li>
            <Link to="/blogs">
              <FaBlog style={{ marginRight: "6px" }} />
              <span>Blog</span>
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <FaPhone style={{ marginRight: "6px" }} />
              <span>Contact</span>
            </Link>
          </li>
          <li>
            <Link to="/about">
              <FaInfoCircle style={{ marginRight: "6px" }} />
              <span>About Us</span>
            </Link>
          </li>
        </ul>
      </nav>
      <div className={styles.contactInfo}>
        <h4>Contact Us</h4>
        <ul>
          <li>
            <FaMapMarkerAlt style={{ marginRight: "8px" }} />
            <span>IIITDM Kurnool, Andhra Pradesh</span>
          </li>
          <li>
            <FaEnvelope style={{ marginRight: "8px" }} />
            <span>ngcngroup@gmail.com</span>
          </li>
        </ul>
      </div>

      <div className={styles.socialMedia}>
        <h4>Follow Us</h4>
        <ul>
          <li>
            <FaLinkedin style={{ marginRight: "6px" }} />
            <a href="https://www.linkedin.com/company/next-gen-computing-and-networking-ngcn/posts/?feedView=all" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </li>
          <li>
            <FaTwitter style={{ marginRight: "6px" }} />
            <a href="https://x.com/NGCN_Group" target="_blank" rel="noopener noreferrer">
              Twitter
            </a>
          </li>
          <li>
            <FaInstagram style={{ marginRight: "6px" }} />
            <a href="https://www.instagram.com/ngcngroup" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </li>
          <li>
            <FaYoutube style={{ marginRight: "6px" }} />
            <a href="https://youtube.com/@ngcnresearch" target="_blank" rel="noopener noreferrer">
              YouTube
            </a>
          </li>
        </ul>
      </div>

      <div className={styles.newsletter}>
        <h4>Join Our Newsletter</h4>
        <iframe
          src="https://ngcngroup.substack.com/embed"
          width="60%"
          height="320"
          style={{
            border: "1px solid #EEE",
            borderRadius: "8px"
          }}
          title="NGCN Substack Newsletter"
        ></iframe>
      </div>

      <div className={styles.copyright}>
        <p>Copyright © 2024 NGCN. All Rights Reserved.</p>
        {/* <div className={styles.legalLinks}> */}
        {/* <a href="/terms">Terms & Conditions</a>
          <span>|</span>
          <a href="/privacy">Privacy Policy</a> */}
        {/* </div> */}
        <div>
          <p className={styles["footer-credits"]} style={{ textDecoration: "none" }}>
            Made with ❤️ by Vishwajeet, Shashwat, Jyoti & Aaditya
          </p>
          <p className={styles["footer-credits"]} style={{ textDecoration: "none" }}>
            Website maintenance by Shivamani G & Aditya
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
