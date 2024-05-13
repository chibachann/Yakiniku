// TitleUnderline.js
import * as React from 'react';
import * as styles from './TitleUnderline.module.css';

const TitleUnderline = ({ title, color, underlineColor }) => {
  return (
    <div className={styles.title} style={{ color }}>
      <h2 className={styles.underline} style={{ textDecorationColor: underlineColor }}>{title}</h2>
    </div>
  );
};

export default TitleUnderline;
