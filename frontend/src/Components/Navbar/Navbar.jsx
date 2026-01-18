import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    // Close menu when route changes
    useEffect(() => {
        closeMenu();
    }, [location]);

    return (
        <nav className={styles.navbar}>
            <div className={styles.navContainer}>
                {/* 1. Mobile Hamburger */}
                <button className={styles.hamburger} onClick={toggleMenu} aria-label="Menu">
                    {isMenuOpen ? "✕" : "☰"}
                </button>

                {/* 2. Logo */}
                <div className={styles.logo}>
                    <Link to="/" onClick={closeMenu}>
                        <img src="/NGCNLogo.png" alt="NGCN Logo" />
                    </Link>
                </div>

                {/* 3. Navigation Links */}
                <div className={`${styles.navLinks} ${isMenuOpen ? styles.active : ''}`}>
                    <Link to="/" className={styles.link} onClick={closeMenu}>Home</Link>
                    <Link to="/kesdesikan" className={styles.link} onClick={closeMenu}>Founder</Link>
                    <Link to="/people" className={styles.link} onClick={closeMenu}>People</Link>
                    <Link to="/research" className={styles.link} onClick={closeMenu}>Research</Link>
                    <Link to="/publications" className={styles.link} onClick={closeMenu}>Publications</Link>
                    <Link to="/blogs" className={styles.link} onClick={closeMenu}>Blogs</Link>
                    <Link to="/resources" className={styles.link} onClick={closeMenu}>Videos</Link>
                    <Link to="/news" className={styles.link} onClick={closeMenu}>News</Link>
                    <Link to="/internships" className={styles.link} onClick={closeMenu}>Internships</Link>
                    <Link to="/gallery" className={styles.link} onClick={closeMenu}>Gallery</Link>
                    <Link to="/contact" className={styles.contactBtn} onClick={closeMenu}>Contact</Link>
                </div>
                
                {/* Overlay for mobile when menu is open */}
                {isMenuOpen && <div className={styles.overlay} onClick={closeMenu}></div>}
            </div>
        </nav>
    );
}

export default Navbar;