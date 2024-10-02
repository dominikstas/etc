import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav style={styles.nav}>
      <div style={styles.navContainer}>
        {isMobile ? (
          <>
            <a href="#hero" style={styles.logo}>Logo</a>
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              style={styles.hamburger}
            >
              ☰
            </button>
          </>
        ) : null}
      </div>
      
      {(isOpen && isMobile) && (
        <div style={styles.mobileMenu}>
          <ul style={styles.navList}>
            <li style={styles.navItem}><a href="#why" style={styles.navLink}>Dlaczego my</a></li>
            <li style={styles.navItem}><a href="#portfolio" style={styles.navLink}>Portfolio</a></li>
            <li style={styles.navItem}><a href="#website-creation" style={styles.navLink}>Czego używamy</a></li>
            <li style={styles.navItem}><a href="#contact" style={styles.navLink}>Kontakt</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

const styles = {
  nav: {
    position: 'fixed',
    top: 0,
    right: 0,
    zIndex: 1000,
    width: 'auto',
  },
  navContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
  },
  logo: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '24px',
  },
  hamburger: {
    background: 'none',
    border: 'none',
    color: 'white',
    fontSize: '24px',
    cursor: 'pointer',
    padding: '10px',
  },
  mobileMenu: {
    position: 'fixed',
    top: '50px',
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    padding: '20px',
    borderRadius: '0 0 0 10px',
  },
  navList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  navItem: {
    margin: '10px 0',
  },
  navLink: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '18px',
    display: 'block',
    padding: '5px 0',
  },
};

export default Navbar;