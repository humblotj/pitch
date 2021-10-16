import type { NextPage } from 'next';
import cn from 'classnames';

import styles from './AboutParagraph1.module.css';

const AboutParagraph1: NextPage = () => {
  return (
    <div className={styles['about__paragraph1-wrapper']}>
      <p className={styles.about__paragraph1}>
        When we needed Pitch, it wasn’t there. So we built it. We rethought
        presentations from the ground up: how we create them, how we use them,
        and how we share them. Pitch is answering years of frustrations about
        how hard it is to bring ideas to life, easily and in style.
        <br />
        <br />
        We are a team of eight co-founders who previously built Wunderlist.
        Pitch is the modern presentation software we wish we had: designed to
        improve the way presentations are crafted and knowledge is shared.
      </p>
    </div>
  );
};

export default AboutParagraph1;
