import React from 'react';

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <ul style={styles.navList}>
        <li style={styles.navItem}><a href="#hero" style={styles.navLink}>Logo</a></li>
        <li style={styles.navItem}><a href="#why" style={styles.navLink}>Dlaczego my</a></li>
        <li style={styles.navItem}><a href="#portfolio" style={styles.navLink}>Portfolio</a></li>
        <li style={styles.navItem}><a href="#website-creation" style={styles.navLink}>Czego używamy</a></li>
        <li style={styles.navItem}><a href="#contact" style={styles.navLink}>Kontakt</a></li>
      </ul>
    </nav>
  );
};

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'center',
    padding: '10px 0',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    position: 'sticky',
    top: '0',
    zIndex: '1000',
  },
  navList: {
    listStyle: 'none',
    display: 'flex',
    gap: '20px',
  },
  navItem: {
    margin: '0 15px',
  },
  navLink: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '18px',
    transition: 'color 0.3s',
  },
  navLinkHover: {
    color: '#38b2ac',
  },
};

export default Navbar;
