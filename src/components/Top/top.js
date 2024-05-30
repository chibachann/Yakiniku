import * as React from 'react';
import * as styles from './top.module.css';

const Top = () => {
  return (
    <div className={styles.contents}>
      <div className={styles.top}>
        <img src="images/text/a5.png" alt="title" className={styles.title}/>
      </div>
    </div>
  );
};

export default Top;
