// LeftPicture_RightText_UpperPicture.js
import * as React from 'react';
import * as styles from './LeftPicture_RightText_UpperPicture.module.css';

const LeftPicture_RightText_UpperPicture = ({
  image,
  alt,
  title_image,
  alt_title,
  description,
  descriptionColor,
}) => {
  return (
    <section className={styles.section}>
      <div className={styles.leftContent}>
        <img src={image} alt={alt} className={styles.image} />
      </div>
      <div className={styles.rightContent}>
        <div className={styles.Container}>
          <div className={styles.title}>
            <img src={title_image} alt={alt_title} className={styles.titleImage} />
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

export default LeftPicture_RightText_UpperPicture;
