import * as React from 'react';
import * as styles from './QualityAssurance.module.css';
import TitleUnderline from '../title_underline/TitleUnderline';

const QualityAssurance = () => {
  return (
    <div className={styles.contents}>
        <TitleUnderline title="最高の時間を" color="#fff" underlineColor="#fff" />
        <TitleUnderline title="慶助の焼き肉で" color="#fff" underlineColor="#fff" />
        <div className={styles.content}>
            <div className={styles.textWrapper}>
              <p className={styles.description}>
                  新鮮さはもちろん、高級部位から一頭から2～3人前しか取れない希少部位まで幅広くご堪能いただけます。

                 また、部位ごとに合った厚みや切り方を変えることで、最も美味しく食べていただける状態でご提供しています。

                 お肉の美味しさに絶対の自信があるからこそ、シンプルに味わっていただくのが一番おいしいと考えています。
              </p>
            </div>
        </div>
    </div>
  );
};

export default QualityAssurance;
