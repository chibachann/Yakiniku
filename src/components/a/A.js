// A.js
import * as React from 'react';
import * as styles from './A.module.css';
import TitleUnderline from '../title_underline/TitleUnderline';
import LeftPicture_RightText from '../LeftPicture_RightText/LeftPicture_RightText';

const A = () => {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <TitleUnderline title="はじめに" color="#333" underlineColor="#707070"/>
        <LeftPicture_RightText
          image='images/picture/horumon.jpeg' 
          alt='pc' 
          title='MESSAGE' 
          subtitle={'慶助が{"\n"}大切にしていること'}
          description={'何でもない日、ちょっといいことがあった日、頑張った日。{"\n"}うまくいかなかった日。家族が集まる、皆が集まる。{"\n"}よし、今日は焼肉にしよう。そう足を運んで下さるお客様の笑顔に、いつでも最高のお肉をご提供いたします。{"\n"}{"\n"}慶助でテーブルを囲んで食べた焼肉がいつか大切な思い出の一つになるように。'}
        />
      </div>
    </section>
  );
};

export default A;
