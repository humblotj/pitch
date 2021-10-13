import Image from 'next/image';
import cn from 'classnames';

import styles from './Decks.module.css';

const Decks = () => {
  return (
    <div className={cn(styles.decks, 'wf-section')}>
      <div className={styles.decks__text}>
        <h2 className={styles['decks__text-heading']}>
          From draft to deck in no time
        </h2>
        <p className={styles['decks__text-paragraph']}>
          Pick from our library of custom-crafted templates or create your own.
          Manage your company assets directly within Pitch to ensure
          presentations look great and stay on brand.
        </p>
      </div>
      <div className={styles.decks__wrapper}>
        <div className={cn(styles.decks__grid, styles['decks__grid--margin'])}>
          <Image
            src="/slide01_720w.png"
            alt=""
            className={cn(styles.decks__image, styles['decks__image--margin'])}
            width="720"
            height="405"
          />
          <Image
            src="/slide02_720w.png"
            alt=""
            className={cn(styles.decks__image, styles['decks__image--margin'])}
            width="720"
            height="405"
          />
          <Image
            src="/slide03_720w.png"
            alt=""
            className={cn(styles.decks__image, styles['decks__image--margin'])}
            width="720"
            height="405"
          />
          <Image
            src="/slide04_720w.png"
            alt=""
            className={cn(styles.decks__image, styles['decks__image--margin'])}
            width="720"
            height="405"
          />
          <Image
            src="/slide05_720w.png"
            alt=""
            className={styles.decks__image}
            width="720"
            height="405"
          />
        </div>
        <div className={cn(styles.decks__grid, styles['decks__grid--margin'])}>
          <Image
            src="/slide06_720w.jpg"
            alt=""
            className={cn(styles.decks__image, styles['decks__image--margin'])}
            width="720"
            height="405"
          />
          <Image
            src="/slide07_720w.jpg"
            alt=""
            className={cn(styles.decks__image, styles['decks__image--margin'])}
            width="720"
            height="405"
          />
          <Image
            src="/slide08_720w.png"
            alt=""
            className={cn(styles.decks__image, styles['decks__image--margin'])}
            width="720"
            height="405"
          />
          <Image
            src="/slide09_720w.jpg"
            alt=""
            className={cn(styles.decks__image, styles['decks__image--margin'])}
            width="720"
            height="405"
          />
          <Image
            src="/slide10_720w.jpg"
            alt=""
            className={styles.decks__image}
            width="720"
            height="405"
          />
        </div>
        <div className={cn(styles.decks__grid, styles['decks__grid--margin'])}>
          <Image
            src="/slide11_720w.jpg"
            alt=""
            className={cn(styles.decks__image, styles['decks__image--margin'])}
            width="720"
            height="405"
          />
          <Image
            src="/slide12_720w.jpg"
            alt=""
            className={cn(styles.decks__image, styles['decks__image--margin'])}
            width="720"
            height="405"
          />
          <Image
            src="/slide13_720w.png"
            alt=""
            className={cn(styles.decks__image, styles['decks__image--margin'])}
            width="720"
            height="405"
          />
          <Image
            src="/slide14_720w.jpg"
            alt=""
            className={cn(styles.decks__image, styles['decks__image--margin'])}
            width="720"
            height="405"
          />
          <Image
            src="/slide15_720w.png"
            alt=""
            className={styles.decks__image}
            width="720"
            height="405"
          />
        </div>
        <div className={cn(styles.decks__grid, styles['decks__grid--margin'])}>
          <Image
            src="/slide16_720w.png"
            alt=""
            className={cn(styles.decks__image, styles['decks__image--margin'])}
            width="720"
            height="405"
          />
          <Image
            src="/slide17_720w.jpg"
            alt=""
            className={cn(styles.decks__image, styles['decks__image--margin'])}
            width="720"
            height="405"
          />
          <Image
            src="/slide18_720w.jpg"
            alt=""
            className={cn(styles.decks__image, styles['decks__image--margin'])}
            width="720"
            height="405"
          />
          <Image
            src="/slide19_720w.png"
            alt=""
            className={cn(styles.decks__image, styles['decks__image--margin'])}
            width="720"
            height="405"
          />
          <Image
            src="/slide20_720w.jpg"
            alt=""
            className={styles.decks__image}
            width="720"
            height="405"
          />
        </div>
        <div className={cn(styles.decks__grid, styles['decks__grid--margin'])}>
          <Image
            src="/slide21_720w.png"
            alt=""
            className={cn(styles.decks__image, styles['decks__image--margin'])}
            width="720"
            height="405"
          />
          <Image
            src="/slide22_720w.jpg"
            alt=""
            className={cn(styles.decks__image, styles['decks__image--margin'])}
            width="720"
            height="405"
          />
          <Image
            src="/slide23_720w.jpg"
            alt=""
            className={cn(styles.decks__image, styles['decks__image--margin'])}
            width="720"
            height="405"
          />
          <Image
            src="/slide24_720w.jpg"
            alt=""
            className={cn(styles.decks__image, styles['decks__image--margin'])}
            width="720"
            height="405"
          />
          <Image
            src="/slide25_720w.png"
            alt=""
            className={styles.decks__image}
            width="720"
            height="405"
          />
        </div>
        <div className={cn(styles.decks__grid, styles['decks__grid--margin'])}>
          <Image
            src="/slide26_720w.png"
            alt=""
            className={cn(styles.decks__image, styles['decks__image--margin'])}
            width="720"
            height="405"
          />
          <Image
            src="/slide27_720w.png"
            // srcSet="/slide27_720w-p-500.png 500w, /slide27_720w.png 720w"
            sizes="(max-width: 479px) 24vw, (max-width: 991px) 16vw, (max-width: 1919px) 15vw, 16vw"
            alt=""
            className={cn(styles.decks__image, styles['decks__image--margin'])}
            width="720"
            height="405"
          />
          <Image
            src="/slide28_720w.jpg"
            alt=""
            className={cn(styles.decks__image, styles['decks__image--margin'])}
            width="720"
            height="405"
          />
          <Image
            src="/slide29_720w.png"
            alt=""
            className={cn(styles.decks__image, styles['decks__image--margin'])}
            width="720"
            height="405"
          />
          <Image
            src="/slide30_720w.jpg"
            // srcSet="/slide30_720w-p-500.jpeg 500w, /slide30_720w.jpg 720w"
            sizes="(max-width: 479px) 24vw, (max-width: 991px) 16vw, (max-width: 1919px) 15vw, 16vw"
            alt=""
            className={styles.decks__image}
            width="720"
            height="405"
          />
        </div>
        <div className={styles.decks__grid}>
          <Image
            src="/slide31_720w.jpg"
            alt=""
            className={cn(styles.decks__image, styles['decks__image--margin'])}
            width="720"
            height="405"
          />
          <Image
            src="/slide32_720w.jpg"
            alt=""
            className={cn(styles.decks__image, styles['decks__image--margin'])}
            width="720"
            height="405"
          />
          <Image
            src="/slide33_720w.png"
            alt=""
            className={cn(styles.decks__image, styles['decks__image--margin'])}
            width="720"
            height="405"
          />
          <Image
            src="/slide34_720w.jpg"
            alt=""
            className={cn(styles.decks__image, styles['decks__image--margin'])}
            width="720"
            height="405"
          />
          <Image
            src="/slide35_720w.png"
            alt=""
            className={styles.decks__image}
            width="720"
            height="405"
          />
        </div>
      </div>
      <div className={styles.decks__overlay}></div>
    </div>
  );
};

export default Decks;
