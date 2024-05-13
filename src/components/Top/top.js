import * as React from 'react';
import * as styles from './top.module.css';

const Top = () => {
  return (
    <div className={styles.fadeInUp}>
      <div className={styles.container}>
          
            <div className={styles.name}>
                <img src="images/text/kuroge.png" alt="kurogewagyu" className={styles.kuroge} />
            </div>
          
      </div>
    </div>
  );
};

export default Top;
