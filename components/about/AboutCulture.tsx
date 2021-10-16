import type { NextPage } from 'next';
import { useEffect, useRef } from 'react';

import styles from './AboutCulture.module.css';
import useAnimation from '../../hooks/useAnimation';
import teamLottie from '../../assets/lottie/team.json';

const AboutCulture: NextPage = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { loadAnimation, lottieAnimate } = useAnimation(ref, true);

  useEffect(() => {
    const animation = loadAnimation(teamLottie);
    lottieAnimate(animation, {
      start: '-1120',
      duration: 14.5,
    });
  }, []);

  return (
    <div className={styles.about__culture}>
      <div className={styles['about__culture-office']}></div>
      <div ref={ref} className={styles['about__culture-lottie']}></div>
      <div className={styles['about__culture-party']}></div>
      <img
        src="/images/otto.jpg"
        alt=""
        className={styles['about__culture-photo']}
        width="528"
        height="480"
      />
      <img
        src="/images/office2.jpg"
        alt=""
        className={styles['about__culture-photo']}
        width="528"
        height="480"
      />
    </div>
  );
};

export default AboutCulture;
