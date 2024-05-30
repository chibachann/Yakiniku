import * as React from 'react';
import * as styles from './OurMessage.module.css';
import TitleUnderline from '../title_underline/TitleUnderline';

const OurMessage = () => {
  return (
    <div className={styles.contents}>
        <TitleUnderline title="はじめに" color="#333" underlineColor="#707070" />
        <div className={styles.content}>
            <div className={styles.textWrapper}>
              <h3 className={styles.subtitle}>MESSAGE</h3>
              <h2 className={styles.title}>慶助が<br/>大切にしていること</h2>
            <p className={styles.description}>
                    何でもない日、ちょっといいことがあった日。
                    頑張った日、うまくいかなかった日。<br/>
                    家族が集まる、皆が集まる。
                    よし、今日は焼肉にしよう。<br/>
                    そう足を運んで下さるお客様のために、
                    いつでも最高のお肉をご提供いたします。<br/><br/>

                    慶助でテーブルを囲んで食べた焼肉が
                    いつか大切な思い出の一つになるように。<br/>
            </p>
            </div>
            <div className={styles.imageWrapper}>
              <img src="/images/picture/tan.jpg" alt="tan" className={styles.image} />
            </div>
        </div>
    </div>
  );
};

export default OurMessage;
