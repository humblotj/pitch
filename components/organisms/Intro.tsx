import { useEffect, useRef } from 'react';
import Image from 'next/image';
import cn from 'classnames';

import styles from './Intro.module.css';
import useAnimation from '../../hooks/useAnimation';
import collaborationLottie from '../../assets/lottie/collaboration.json';

const Intro = () => {
  const workflowRef = useRef<HTMLDivElement>(null);
  const lottieRef = useRef<HTMLDivElement>(null);
  const { animateTo } = useAnimation(workflowRef, true);
  const { loadAnimation, lottieAnimate } = useAnimation(lottieRef, true);

  useEffect(() => {
    const workflowElement = workflowRef.current;
    const lottieElement = lottieRef.current;
    if (!workflowElement || !lottieElement) {
      return;
    }

    animateTo(styles['intro__workflow-heading'], {
      to: { opacity: 1, y: 0 },
      start: 10,
      duration: 0.1,
      once: true,
    });
    animateTo(styles['intro__workflow-paragraph'], {
      to: { opacity: 1, y: 0 },
      start: 10,
      duration: 0.3,
      once: true,
    });

    const collaborationAnimation = loadAnimation(collaborationLottie);
    lottieAnimate(collaborationAnimation, {
      duration: 7.63,
      once: true,
    });
  }, []);

  return (
    <div className={cn(styles.intro, 'wf-section')}>
      <div className={styles.intro__logos}>
        <h5 className={styles['intro__logos-heading']}>Used by teams like</h5>
        <div className={styles['intro__logos-wrapper']}>
          <img
            src="/superhuman.svg"
            alt=""
            className={cn(
              styles['intro__logo'],
              styles['intro__logo--rmargin'],
            )}
            width="209"
            height="16"
          />
          <img
            src="/eyeEm.svg"
            alt=""
            className={cn(
              styles['intro__logo'],
              styles['intro__logo--rmargin'],
            )}
            width="97"
            height="33"
          />
          <img
            src="/chart-mogul.svg"
            alt=""
            className={cn(
              styles['intro__logo'],
              styles['intro__logo--rmargin'],
            )}
            width="140"
            height="26"
          />
          <img
            src="/notion.svg"
            alt=""
            className={cn(
              styles['intro__logo'],
              styles['intro__logo--rmargin'],
            )}
            width="53"
            height="56"
          />
          <img
            src="/dashdash.svg"
            alt=""
            className={styles.intro__logo}
            width="149"
            height="19"
          />
        </div>
      </div>
      <div className={styles.intro__workflow}>
        <div ref={workflowRef} className={styles['intro__workflow-text']}>
          <h2 className={styles['intro__workflow-heading']}>
            Workflow that just works.
          </h2>
          <p className={styles['intro__workflow-paragraph']}>
            Collaboration should be simple, straightforward, and effective. With
            Pitch, it is. Discuss current activities, manage tasks, and stay
            productive as a team. Create on any device, online or offline, and
            get great work done faster.
          </p>
        </div>
        <div ref={lottieRef} className={styles['intro__workflow-lottie']}></div>
      </div>
    </div>
  );
};

export default Intro;
