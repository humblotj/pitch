import type { NextPage } from 'next';
import { useEffect, useRef } from 'react';
import cn from 'classnames';

import styles from './Formating.module.css';
import useAnimation from '../../hooks/useAnimation';
import snapLottie from '../../assets/lottie/snap.json';

const Formating: NextPage = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { animateTo, loadAnimation, lottieAnimate } = useAnimation(ref, true);

  useEffect(() => {
    animateTo(styles.formatting__text + '> *', {
      to: { x: 0 },
      duration: 1.2,
      scrub: false,
      toggleActions: 'play none none reset',
      delay: 1,
    });

    const snapAnimation = loadAnimation(snapLottie, styles.formatting__lottie);
    lottieAnimate(snapAnimation, {
      duration: 1,
      scrub: false,
      delay: 1,
    });
  }, []);

  return (
    <div ref={ref} className={cn(styles.formatting, 'wf-section')}>
      <div className={styles.formatting__wrapper}>
        <div className={styles.formatting__lottie}></div>
        <div className={styles.formatting__text}>
          <h2 className={styles.formatting__heading}>
            Formatting that’s effortless
          </h2>
          <p
            className={cn(
              styles.formatting__paragraph,
              styles['formatting__paragraph--space'],
            )}
          >
            Work on your story — we’ll take care of the rest. Pitch’s smart
            formatting options turn raw ideas into stunning slides.
            <br />
          </p>
          <p className={styles.formatting__paragraph}>
            Whether you’re a casual builder or you work on slides every day,
            Pitch gives your team design superpowers.
            <br />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Formating;
