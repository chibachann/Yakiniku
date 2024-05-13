// RightPicture_LeftText.js
import * as React from 'react';
import * as styles from './RightPicture_LeftText.module.css';

const RightPicture_LeftText = ({ image, alt, title, number, subtitle, discription}) => {
  return (
    <section className={styles.section}>
      <div className={styles.leftContent}>
        <div className={styles.textContainer}>
          <div className={styles.title}>
            <h2 className={styles.number}>{number}</h2>
            <h2 className={styles.titleText}>{title}</h2>
          </div>
          <div className={styles.subtitle}>
            <h3 className={styles.subtitleText}>{subtitle}</h3>
          </div>
          <div className={styles.discription}>
            <p>{discription}</p>
          </div>
         
         
        </div>
      </div>
      <div className={styles.rightContent}>
        <img src={image} alt={alt} className={styles.image} />
      </div>
    </section>
  );
};

export default RightPicture_LeftText;
