import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import styles from './Header.module.css';
import { FiMenu, FiX } from 'react-icons/fi';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.logo}>TravelGo</div>
      
      <nav className={`${styles.nav} ${isOpen ? styles.open : ''}`}>
        <Link to="features" smooth={true} className={styles.navLink}>Features</Link>
        <Link to="testimonials" smooth={true} className={styles.navLink}>Testimonials</Link>
        <Link to="pricing" smooth={true} className={styles.navLink}>Pricing</Link>
        <Link to="contact" smooth={true} className={styles.navLink}>Contact</Link>
        <button className={styles.closeButton} onClick={() => setIsOpen(false)}>
          <FiX size={24} />
        </button>
      </nav>

      <button className={styles.menuButton} onClick={() => setIsOpen(!isOpen)}>
        <FiMenu size={24} />
      </button>
    </header>
  );
};

export default Header;