// B.js
import * as React from 'react';
import * as styles from './B.module.css';
import TitleUnderline from '../title_underline/TitleUnderline';
import LeftPicture_RightText_UpperPicture from '../LeftPicture_RightText_UpperPicture/LeftPicture_RightText_UpperPicture';
import RightPicture_LeftText_UpperTitle from '../RightPicture_LeftText_UpperTitle/RightPicture_LeftText_UpperTitle';

const B = () => {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <TitleUnderline title="こだわりの品々" color="#fff"  underlineColor="#fff"/>
        <LeftPicture_RightText_UpperPicture
          image='images/picture/loin.jpeg' 
          alt='loin' 
          title_image='images/text/kuroge.png'
          alt_title='kuroge'
          descriptionColor={'#fff'}
          description={'最高ランクであるA5ランクの国産黒毛和牛のみを{"\n"}買い付けています。{"\n"}国内の原産地にこだわることなく、厳密な品質基準を満たす{"\n"}最高の個体を選定して仕入れを行っております。{"\n"}{"\n"}また、一頭買いし店内で丁寧に捌くことで{"\n"}あらゆる部位を楽しめるほか、手頃な価格でご提供することができています。{"\n"}{"\n"}お肉そのものの品質はもちろん、おもてなしや店舗空間など、{"\n"}お客様に最高の焼肉文化を体験していただくための努力は惜しみません。'}
        />
        <RightPicture_LeftText_UpperTitle
          image='images/picture/horumon.jpeg' 
          alt='loin' 
          title_image='images/text/horumon.png'
          alt_title='kuroge'
          descriptionColor={'#fff'}
          description={'ホルモンは、独特の食感と風味から焼肉には欠かせない存在です。{"\n"}当店では、最高品質のホルモンを提供するために{"\n"}北海道や九州など各地の有名産地から厳選して仕入れています。{"\n"}{"\n"}ミノやセンマイ、ギアラなどの定番商品に加え、{"\n"}希少部位のシマチョウやアカセンなども取り扱っております。{"\n"}豊富な種類のホルモンを心ゆくまでご堪能ください。{"\n"}{"\n"}当店自慢の特製タレとの相性も抜群で、{"\n"}やみつきになること間違いなしの美味しさです。{"\n"}ぜひ一度ご賞味ください。'}
        />

      </div>
    </section>
  );
};

export default B;
