// Footer.js
import * as React from 'react';
import * as styles from './footer.module.css';

const Footer = () => {
 return (
   <footer className={styles.footer}>
    <img src='images/text/logo.png' alt='logo' className={styles.logo} />
     <div className={styles.footerContent}>
       <p>&copy; {new Date().getFullYear()} Keisuke </p>
     </div>
   </footer>
 );
};

export default Footer;
