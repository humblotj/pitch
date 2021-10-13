import cn from 'classnames';
import { useEffect, useRef } from 'react';

import styles from './Integrations.module.css';
import useAnimation from '../../hooks/useAnimation';
import integrationsLottie from '../../assets/lottie/integrations.json';

const Integrations = () => {
  const integrationsTextRef = useRef<HTMLDivElement>(null);
  const lottieRef = useRef<HTMLDivElement>(null);
  const { timeline } = useAnimation(integrationsTextRef, true);
  const { loadAnimation, lottieAnimate } = useAnimation(lottieRef, true);

  useEffect(() => {
    const tl = timeline({ start: 10, once: true });

    tl.to('.' + styles['integrations__text-heading'], {
      opacity: 1,
      y: 0,
      duration: 0.3,
    });
    tl.to('.' + styles['integrations__text-paragraph'], {
      opacity: 1,
      y: 0,
      duration: 0.3,
    });

    const integrationsAnimation = loadAnimation(integrationsLottie);
    lottieAnimate(integrationsAnimation, {
      duration: 3.8,
      once: true,
      loop: true,
    });
  }, []);

  return (
    <div className={cn(styles.integrations, 'wf-section')}>
      <div className={styles.integrations__wrapper}>
        <div ref={integrationsTextRef} className={styles.integrations__text}>
          <h2 className={styles['integrations__text-heading']}>
            Connected to what matters
          </h2>
          <p className={styles['integrations__text-paragraph']}>
            Knowledge isn’t static — why should your presentations be? We
            integrate with the tools you rely on every day to keep information
            and conversations up-to-date, turning presentations into living
            documents.
          </p>
        </div>
        <div ref={lottieRef} className={styles.integrations__lottie}></div>
      </div>
    </div>
  );
};

export default Integrations;
