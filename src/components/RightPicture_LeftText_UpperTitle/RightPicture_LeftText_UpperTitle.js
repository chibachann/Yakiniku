// RightPicture_LeftText_UpperTitle.js
import * as React from 'react';
import * as styles from './RightPicture_LeftText_UpperTitle.module.css';

const RightPicture_LeftText_UpperTitle = ({
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
        <div className={styles.container}>
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
      <div className={styles.rightContent}>
        <img src={image} alt={alt} className={styles.image} />
      </div>
    </section>
  );
};

export default RightPicture_LeftText_UpperTitle;
