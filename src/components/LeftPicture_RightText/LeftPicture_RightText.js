// LeftPicture_RightText.js
import * as React from 'react';
import * as styles from './LeftPicture_RightText.module.css';

const LeftPicture_RightText = ({
  image,
  alt,
  title,
  titleColor,
  subtitle,
  subtitleColor,
  description,
  descriptionColor,
}) => {
  return (
    <section className={styles.section}>
      <div className={styles.leftContent}>
        <img src={image} alt={alt} className={styles.image} />
      </div>
      <div className={styles.rightContent}>
        <div className={styles.textContainer}>
          <div className={styles.title}>
            <h2 className={styles.titleText} style={{color: titleColor}}>{title}</h2>
          </div>
          <div className={styles.subtitle} style={{color: subtitleColor}}>
            <p>{subtitle.split('{"\n"}').map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}</p>
          </div>
          <div className={styles.box}>
            <div className={styles.description} style={{color: descriptionColor}}>
              <p>{description.split('{"\n"}').map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeftPicture_RightText;
