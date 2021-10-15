import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import cn from 'classnames';

import styles from './AboutHero.module.css';
import useAnimation from '../../hooks/useAnimation';

const AboutHero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { animateTo } = useAnimation(ref);

  useEffect(() => {
    animateTo('div-animated', {
      to: { y: '-80em' },
      start: 25,
      end: 100,
      bodySelector: true,
    });
    // gsap.to(document.body.querySelectorAll('.div-animated'), {
    //   y: '-80em',
    //   scrollTrigger: {
    //     trigger: ref.current,
    //     scrub: true,
    //     start: '25% 25%',
    //     end: '+=504',
    //   },
    // });
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
      />
    </div>
  );
};

export default AboutHero;
