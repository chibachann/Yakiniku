import * as React from 'react';
import * as styles from './header.module.css';

const navigationItems = [
  { path: 'images/text/point.png', alt: 'point' },
  { path: 'images/text/menu.png', alt: 'menu' },
  { path: 'images/text/access.png', alt: 'access'},
];

const Header = () => {
  const handleClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img src="images/logo.png" alt="logo" className={styles.logo} />
      </div>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          {navigationItems.map((item, index) => (
            <li key={index}>
              <button onClick={() => handleClick(item.alt)}>
                <img src={item.path} alt={item.alt} />
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
