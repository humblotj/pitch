import type { NextPage } from 'next';
import { useEffect, useRef } from 'react';
import cn from 'classnames';

import styles from './AboutHero.module.css';
import useAnimation from '../../hooks/useAnimation';

const AboutHero: NextPage = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { animateTo } = useAnimation();

  useEffect(() => {
    animateTo('div-animated', {
      to: { y: '-80em' },
      start: 25,
      end: 100,
      bodySelector: true,
    });
  }, []);

  return (
    <div ref={ref} className={cn(styles['about-hero'], 'wf-section')}>
      <div className={styles['about-hero__wrapper']}>
        <h1 className={styles['about-hero__heading']}>
          It all starts with an idea
        </h1>
      </div>
      <img
        src="/images/gurl.png"
        alt=""
        className={styles['about-hero__image']}
        width="2560"
        height="1963"
      />
    </div>
  );
};

export default AboutHero;
