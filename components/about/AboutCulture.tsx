import { useEffect, useRef } from 'react';

import styles from './AboutCulture.module.css';
import useAnimation from '../../hooks/useAnimation';
import teamLottie from '../../assets/lottie/team.json';

const AboutCulture = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { loadAnimation, lottieAnimate } = useAnimation(ref, true);

  useEffect(() => {
    const animation = loadAnimation(
      teamLottie,
      styles['about__culture-lottie'],
    );
    lottieAnimate(animation, {
      duration: 14.5,
    });
  }, []);

  return (
    <div ref={ref} className={styles.about__culture}>
      <div className={styles['about__culture-office']}></div>
      <div className={styles['about__culture-lottie']}></div>
      <div className={styles['about__culture-party']}></div>
      <img
        src="/images/otto.jpg"
        alt=""
        className={styles['about__culture-photo']}
      />
      <img
        src="/images/office2.jpg"
        alt=""
        className={styles['about__culture-photo']}
      />
    </div>
  );
};

export default AboutCulture;
