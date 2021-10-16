import type { NextPage } from 'next';
import cn from 'classnames';

import styles from './Decks.module.css';
import { useEffect, useRef } from 'react';
import useAnimation from '../../hooks/useAnimation';

const Decks: NextPage = () => {
  const decksTextRef = useRef<HTMLDivElement>(null);
  const decksWrapperRef = useRef<HTMLDivElement>(null);
  const { animateTo } = useAnimation(decksTextRef, true);
  const { animateFromTo } = useAnimation(decksWrapperRef, true);

  useEffect(() => {
    animateTo(styles.decks__text + '> *', {
      to: {
        opacity: 1,
        y: 0,
      },
      start: 10,
      duration: 0.3,
      once: true,
      stagger: 0.3,
    });

    animateFromTo(styles.decks__grid + ':nth-child(1)', {
      from: { y: 196 },
      to: { y: -178 },
      start: 0,
      end: 80,
    });
    animateFromTo(styles.decks__grid + ':nth-child(2)', {
      from: { y: 317 },
      to: { y: -109 },
      start: 0,
      end: 100,
    });
    animateFromTo(styles.decks__grid + ':nth-child(3)', {
      from: { y: 317 },
      to: { y: -109 },
      start: 0,
      end: 80,
    });
    animateFromTo(styles.decks__grid + ':nth-child(4)', {
      from: { y: 230 },
      to: { y: -117 },
      start: 0,
      end: 100,
    });
    animateFromTo(styles.decks__grid + ':nth-child(5)', {
      from: { y: 213 },
      to: { y: -152 },
      start: 0,
      end: 80,
    });
    animateFromTo(styles.decks__grid + ':nth-child(6)', {
      from: { y: 196 },
      to: { y: -117 },
      start: 0,
      end: 100,
    });
    animateFromTo(styles.decks__grid + ':nth-child(7)', {
      from: { y: 230 },
      to: { y: -178 },
      start: 0,
      end: 80,
    });
  }, []);

  return (
    <div className={cn(styles.decks, 'wf-section')}>
      <div ref={decksTextRef} className={styles.decks__text}>
        <h2 className={styles['decks__text-heading']}>
          From draft to deck in no time
        </h2>
        <p className={styles['decks__text-paragraph']}>
          Pick from our library of custom-crafted templates or create your own.
          Manage your company assets directly within Pitch to ensure
          presentations look great and stay on brand.
        </p>
      </div>
      <div ref={decksWrapperRef} className={styles.decks__wrapper}>
        <div className={cn(styles.decks__grid, styles['decks__grid--margin'])}>
          <img
            src="/images/slide01_720w.png"
            alt=""
            className={cn(styles.decks__img, styles['decks__img--margin'])}
            // width="720"
            // height="405"
          />
          <img
            src="/images/slide02_720w.png"
            alt=""
            className={cn(styles.decks__img, styles['decks__img--margin'])}
            // width="720"
            // height="405"
          />
          <img
            src="/images/slide03_720w.png"
            alt=""
            className={cn(styles.decks__img, styles['decks__img--margin'])}
            // width="720"
            // height="405"
          />
          <img
            src="/images/slide04_720w.png"
            alt=""
            className={cn(styles.decks__img, styles['decks__img--margin'])}
            // width="720"
            // height="405"
          />
          <img
            src="/images/slide05_720w.png"
            alt=""
            className={styles.decks__img}
            // width="720"
            // height="405"
          />
        </div>
        <div className={cn(styles.decks__grid, styles['decks__grid--margin'])}>
          <img
            src="/images/slide06_720w.jpg"
            alt=""
            className={cn(styles.decks__img, styles['decks__img--margin'])}
            // width="720"
            // height="405"
          />
          <img
            src="/images/slide07_720w.jpg"
            alt=""
            className={cn(styles.decks__img, styles['decks__img--margin'])}
            // width="720"
            // height="405"
          />
          <img
            src="/images/slide08_720w.png"
            alt=""
            className={cn(styles.decks__img, styles['decks__img--margin'])}
            // width="720"
            // height="405"
          />
          <img
            src="/images/slide09_720w.jpg"
            alt=""
            className={cn(styles.decks__img, styles['decks__img--margin'])}
            // width="720"
            // height="405"
          />
          <img
            src="/images/slide10_720w.jpg"
            alt=""
            className={styles.decks__img}
            // width="720"
            // height="405"
          />
        </div>
        <div className={cn(styles.decks__grid, styles['decks__grid--margin'])}>
          <img
            src="/images/slide11_720w.jpg"
            alt=""
            className={cn(styles.decks__img, styles['decks__img--margin'])}
            // width="720"
            // height="405"
          />
          <img
            src="/images/slide12_720w.jpg"
            alt=""
            className={cn(styles.decks__img, styles['decks__img--margin'])}
            // width="720"
            // height="405"
          />
          <img
            src="/images/slide13_720w.png"
            alt=""
            className={cn(styles.decks__img, styles['decks__img--margin'])}
            // width="720"
            // height="405"
          />
          <img
            src="/images/slide14_720w.jpg"
            alt=""
            className={cn(styles.decks__img, styles['decks__img--margin'])}
            // width="720"
            // height="405"
          />
          <img
            src="/images/slide15_720w.png"
            alt=""
            className={styles.decks__img}
            // width="720"
            // height="405"
          />
        </div>
        <div className={cn(styles.decks__grid, styles['decks__grid--margin'])}>
          <img
            src="/images/slide16_720w.png"
            alt=""
            className={cn(styles.decks__img, styles['decks__img--margin'])}
            // width="720"
            // height="405"
          />
          <img
            src="/images/slide17_720w.jpg"
            alt=""
            className={cn(styles.decks__img, styles['decks__img--margin'])}
            // width="720"
            // height="405"
          />
          <img
            src="/images/slide18_720w.jpg"
            alt=""
            className={cn(styles.decks__img, styles['decks__img--margin'])}
            // width="720"
            // height="405"
          />
          <img
            src="/images/slide19_720w.png"
            alt=""
            className={cn(styles.decks__img, styles['decks__img--margin'])}
            // width="720"
            // height="405"
          />
          <img
            src="/images/slide20_720w.jpg"
            alt=""
            className={styles.decks__img}
            // width="720"
            // height="405"
          />
        </div>
        <div className={cn(styles.decks__grid, styles['decks__grid--margin'])}>
          <img
            src="/images/slide21_720w.png"
            alt=""
            className={cn(styles.decks__img, styles['decks__img--margin'])}
            // width="720"
            // height="405"
          />
          <img
            src="/images/slide22_720w.jpg"
            alt=""
            className={cn(styles.decks__img, styles['decks__img--margin'])}
            // width="720"
            // height="405"
          />
          <img
            src="/images/slide23_720w.jpg"
            alt=""
            className={cn(styles.decks__img, styles['decks__img--margin'])}
            // width="720"
            // height="405"
          />
          <img
            src="/images/slide24_720w.jpg"
            alt=""
            className={cn(styles.decks__img, styles['decks__img--margin'])}
            // width="720"
            // height="405"
          />
          <img
            src="/images/slide25_720w.png"
            alt=""
            className={styles.decks__img}
            // width="720"
            // height="405"
          />
        </div>
        <div className={cn(styles.decks__grid, styles['decks__grid--margin'])}>
          <img
            src="/images/slide26_720w.png"
            alt=""
            className={cn(styles.decks__img, styles['decks__img--margin'])}
            // width="720"
            // height="405"
          />
          <img
            src="/images/slide27_720w.png"
            srcSet="/images/slide27_720w-p-500.png 500w, /images/slide27_720w.png 720w"
            sizes="(max-width: 479px) 24vw, (max-width: 991px) 16vw, (max-width: 1919px) 15vw, 16vw"
            alt=""
            className={cn(styles.decks__img, styles['decks__img--margin'])}
            // width="720"
            // height="405"
          />
          <img
            src="/images/slide28_720w.jpg"
            alt=""
            className={cn(styles.decks__img, styles['decks__img--margin'])}
            // width="720"
            // height="405"
          />
          <img
            src="/images/slide29_720w.png"
            alt=""
            className={cn(styles.decks__img, styles['decks__img--margin'])}
            // width="720"
            // height="405"
          />
          <img
            src="/images/slide30_720w.jpg"
            srcSet="/images/slide30_720w-p-500.jpeg 500w, /images/slide30_720w.jpg 720w"
            sizes="(max-width: 479px) 24vw, (max-width: 991px) 16vw, (max-width: 1919px) 15vw, 16vw"
            alt=""
            className={styles.decks__img}
            // width="720"
            // height="405"
          />
        </div>
        <div className={styles.decks__grid}>
          <img
            src="/images/slide31_720w.jpg"
            alt=""
            className={cn(styles.decks__img, styles['decks__img--margin'])}
            // width="720"
            // height="405"
          />
          <img
            src="/images/slide32_720w.jpg"
            alt=""
            className={cn(styles.decks__img, styles['decks__img--margin'])}
            // width="720"
            // height="405"
          />
          <img
            src="/images/slide33_720w.png"
            alt=""
            className={cn(styles.decks__img, styles['decks__img--margin'])}
            // width="720"
            // height="405"
          />
          <img
            src="/images/slide34_720w.jpg"
            alt=""
            className={cn(styles.decks__img, styles['decks__img--margin'])}
            // width="720"
            // height="405"
          />
          <img
            src="/images/slide35_720w.png"
            alt=""
            className={styles.decks__img}
            // width="720"
            // height="405"
          />
        </div>
      </div>
      <div className={styles.decks__overlay}></div>
    </div>
  );
};

export default Decks;
