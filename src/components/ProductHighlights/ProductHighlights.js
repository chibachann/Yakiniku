import * as React from 'react';
import * as styles from './ProductHighlights.module.css';
import TitleUnderline from '../title_underline/TitleUnderline';

const ProductHighlights = () => {
  return (
    <div className={styles.contents}>

        <TitleUnderline title="こだわりの品々" color="#fff" underlineColor="#fff" />

        <div className={styles.content}>
            <div className={styles.imageWrapper}>
                <img src="/images/picture/tokuzyou.jpg" alt="tokuzyouniku" className={styles.image} />
            </div>
            <div className={styles.textWrapper}>
                <img src="/images/text/a5.png" alt="A5 rank" className={styles.imageTitle} />
                <p className={styles.description}>
                        最高ランクであるA5ランクの国産黒毛和牛のみを買い付けています。<br/>

                        国内の原産地にこだわることなく、厳密な品質基準を満たす最高の個体を選定して仕入れを行っております。
                        また、一頭買いし店内で丁寧に捌くことで
                        あらゆる部位を楽しめるほか、手頃な価格でご提供することができています。<br/>

                        お肉そのものの品質はもちろん、おもてなしや店舗空間など、
                        お客様に最高の焼肉文化を体験していただくための努力は惜しみません。
                </p>
            </div>
        </div>

        <div className={`${styles.content} ${styles.reverse}`}>
            <div className={styles.imageWrapper}>
                <img src="/images/picture/horumon.jpg" alt="horumon" className={styles.image} />
            </div>
            <div className={styles.textWrapper}>
                <img src="/images/text/horumon.png" alt="horumon" className={styles.imageTitle} />
                <p className={styles.description}>
                    新鮮なホルモンの美味しさを最大限に引き出すために、
                    備長炭を使用し、高温で一気に焼き上げます。
                    お客様のお好みに合わせて焼き加減を調整し、
                    外はカリッと中はジューシーな食感をご提供いたします。<br/>

                    また、ホルモンの醍醐味である味の変化をお楽しみいただけるよう、
                    各部位に合わせた特製のタレを取り揃えております。
                    山葵や柚子胡椒、季節の野菜などと一緒に、
                    ホルモンの旨味と食感を存分にご堪能ください。
                </p>
            </div>
        </div>

    </div>
  );
};

export default ProductHighlights;
