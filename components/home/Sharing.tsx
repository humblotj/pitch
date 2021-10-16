import type { NextPage } from 'next';
import { useEffect, useRef } from 'react';
import cn from 'classnames';

import styles from './Sharing.module.css';
import useAnimation from '../../hooks/useAnimation';

const Sharing: NextPage = () => {
  const sharingTextRef = useRef<HTMLDivElement>(null);
  const sharingPlaneWrapperRef = useRef<HTMLDivElement>(null);
  const { animateTo } = useAnimation(sharingTextRef, true);
  const { animateFromTo } = useAnimation(sharingPlaneWrapperRef, true);

  useEffect(() => {
    animateTo(styles.sharing__text + '> *', {
      to: {
        opacity: 1,
        y: 0,
      },
      start: 10,
      duration: 0.3,
      once: true,
      stagger: 0.3,
    });

    animateFromTo(styles.sharing__plane, {
      from: { x: -143, y: 100 },
      to: { x: 126, y: -74 },
      start: 0,
      end: 100,
    });
    animateFromTo(styles['sharing__plane-shadow'], {
      from: { x: -83 },
      to: { x: 4 },
      start: 0,
      end: 59,
    });
  }, []);

  return (
    <div className={cn(styles.sharing, 'wf-section')}>
      <div ref={sharingTextRef} className={styles.sharing__text}>
        <h2 className={styles['sharing__text-heading']}>
          Ideas that can go anywhere
        </h2>
        <p className={styles['sharing__text-paragraph']}>
          There are no limits to how — and with whom — you can share. Present to
          a client or at a conference. Keep presentations private for your team,
          or publish them for the whole world to see.
        </p>
      </div>
      <div className={styles.sharing__wrapper}>
        <div
          ref={sharingPlaneWrapperRef}
          className={styles['sharing__plane-wrapper']}
        >
          <img
            src="/images/plane_800w.png"
            alt=""
            className={styles.sharing__plane}
            // width="800"
            // height="601"
          />
          <img
            src="/images/shadow.png"
            alt=""
            className={styles['sharing__plane-shadow']}
            // width="120"
            // height="60"
          />
        </div>
        <img
          src="/images/invite@2x.png"
          alt=""
          className={styles.sharing__invite}
          //   width="800"
          //   height="412"
        />
        <img
          src="/images/access.svg"
          alt=""
          className={styles.sharing__access}
          //   width="382"
          //   height="115"
        />
        <img
          src="/images/hand_600w.png"
          alt=""
          className={styles.sharing__hand}
          //   width="600"
          //   height="748"
        />
        <img
          src="/images/tablet_2400w.jpg"
          alt=""
          className={styles.sharing__image}
          //   width="2400"
          //   height="1202"
        />
      </div>
    </div>
  );
};

export default Sharing;
