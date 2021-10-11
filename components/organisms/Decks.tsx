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
            layout="fill"
            src="/assets/images/slide01_720w.png"
            alt=""
            className={cn(styles.decks__image, styles['decks__image--margin'])}
          />
          <Image
            layout="fill"
            src="/assets/images/slide02_720w.png"
            alt=""
            className={cn(styles.decks__image, styles['decks__image--margin'])}
          />
          <Image
            layout="fill"
            src="/assets/images/slide03_720w.png"
            alt=""
            className={cn(styles.decks__image, styles['decks__image--margin'])}
          />
          <Image
            layout="fill"
            src="/assets/images/slide04_720w.png"
            alt=""
            className={cn(styles.decks__image, styles['decks__image--margin'])}
          />
          <Image
            layout="fill"
            src="/assets/images/slide05_720w.png"
            alt=""
            className={styles.decks__image}
          />
        </div>
        <div className={cn(styles.decks__grid, styles['decks__grid--margin'])}>
          <Image
            layout="fill"
            src="/assets/images/slide06_720w.jpg"
            alt=""
            className={cn(styles.decks__image, styles['decks__image--margin'])}
          />
          <Image
            layout="fill"
            src="/assets/images/slide07_720w.jpg"
            alt=""
            className={cn(styles.decks__image, styles['decks__image--margin'])}
          />
          <Image
            layout="fill"
            src="/assets/images/slide08_720w.png"
            alt=""
            className={cn(styles.decks__image, styles['decks__image--margin'])}
          />
          <Image
            layout="fill"
            src="/assets/images/slide09_720w.jpg"
            alt=""
            className={cn(styles.decks__image, styles['decks__image--margin'])}
          />
          <Image
            layout="fill"
            src="/assets/images/slide10_720w.jpg"
            alt=""
            className={styles.decks__image}
          />
        </div>
        <div className={cn(styles.decks__grid, styles['decks__grid--margin'])}>
          <Image
            layout="fill"
            src="/assets/images/slide11_720w.jpg"
            alt=""
            className={cn(styles.decks__image, styles['decks__image--margin'])}
          />
          <Image
            layout="fill"
            src="/assets/images/slide12_720w.jpg"
            alt=""
            className={cn(styles.decks__image, styles['decks__image--margin'])}
          />
          <Image
            layout="fill"
            src="/assets/images/slide13_720w.png"
            alt=""
            className={cn(styles.decks__image, styles['decks__image--margin'])}
          />
          <Image
            layout="fill"
            src="/assets/images/slide14_720w.jpg"
            alt=""
            className={cn(styles.decks__image, styles['decks__image--margin'])}
          />
          <Image
            layout="fill"
            src="/assets/images/slide15_720w.png"
            alt=""
            className={styles.decks__image}
          />
        </div>
        <div className={cn(styles.decks__grid, styles['decks__grid--margin'])}>
          <Image
            layout="fill"
            src="/assets/images/slide16_720w.png"
            alt=""
            className={cn(styles.decks__image, styles['decks__image--margin'])}
          />
          <Image
            layout="fill"
            src="/assets/images/slide17_720w.jpg"
            alt=""
            className={cn(styles.decks__image, styles['decks__image--margin'])}
          />
          <Image
            layout="fill"
            src="/assets/images/slide18_720w.jpg"
            alt=""
            className={cn(styles.decks__image, styles['decks__image--margin'])}
          />
          <Image
            layout="fill"
            src="/assets/images/slide19_720w.png"
            alt=""
            className={cn(styles.decks__image, styles['decks__image--margin'])}
          />
          <Image
            layout="fill"
            src="/assets/images/slide20_720w.jpg"
            alt=""
            className={styles.decks__image}
          />
        </div>
        <div className={cn(styles.decks__grid, styles['decks__grid--margin'])}>
          <Image
            layout="fill"
            src="/assets/images/slide21_720w.png"
            alt=""
            className={cn(styles.decks__image, styles['decks__image--margin'])}
          />
          <Image
            layout="fill"
            src="/assets/images/slide22_720w.jpg"
            alt=""
            className={cn(styles.decks__image, styles['decks__image--margin'])}
          />
          <Image
            layout="fill"
            src="/assets/images/slide23_720w.jpg"
            alt=""
            className={cn(styles.decks__image, styles['decks__image--margin'])}
          />
          <Image
            layout="fill"
            src="/assets/images/slide24_720w.jpg"
            alt=""
            className={cn(styles.decks__image, styles['decks__image--margin'])}
          />
          <Image
            layout="fill"
            src="/assets/images/slide25_720w.png"
            alt=""
            className={styles.decks__image}
          />
        </div>
        <div className={cn(styles.decks__grid, styles['decks__grid--margin'])}>
          <Image
            layout="fill"
            src="/assets/images/slide26_720w.png"
            alt=""
            className={cn(styles.decks__image, styles['decks__image--margin'])}
          />
          <Image
            layout="fill"
            src="/assets/images/slide27_720w.png"
            // srcSet="/assets/images/slide27_720w-p-500.png 500w, /assets/images/slide27_720w.png 720w"
            sizes="(max-width: 479px) 24vw, (max-width: 991px) 16vw, (max-width: 1919px) 15vw, 16vw"
            alt=""
            className={cn(styles.decks__image, styles['decks__image--margin'])}
          />
          <Image
            layout="fill"
            src="/assets/images/slide28_720w.jpg"
            alt=""
            className={cn(styles.decks__image, styles['decks__image--margin'])}
          />
          <Image
            layout="fill"
            src="/assets/images/slide29_720w.png"
            alt=""
            className={cn(styles.decks__image, styles['decks__image--margin'])}
          />
          <Image
            layout="fill"
            src="/assets/images/slide30_720w.jpg"
            // srcSet="/assets/images/slide30_720w-p-500.jpeg 500w, /assets/images/slide30_720w.jpg 720w"
            sizes="(max-width: 479px) 24vw, (max-width: 991px) 16vw, (max-width: 1919px) 15vw, 16vw"
            alt=""
            className={styles.decks__image}
          />
        </div>
        <div className={styles.decks__grid}>
          <Image
            layout="fill"
            src="/assets/images/slide31_720w.jpg"
            alt=""
            className={cn(styles.decks__image, styles['decks__image--margin'])}
          />
          <Image
            layout="fill"
            src="/assets/images/slide32_720w.jpg"
            alt=""
            className={cn(styles.decks__image, styles['decks__image--margin'])}
          />
          <Image
            layout="fill"
            src="/assets/images/slide33_720w.png"
            alt=""
            className={cn(styles.decks__image, styles['decks__image--margin'])}
          />
          <Image
            layout="fill"
            src="/assets/images/slide34_720w.jpg"
            alt=""
            className={cn(styles.decks__image, styles['decks__image--margin'])}
          />
          <Image
            layout="fill"
            src="/assets/images/slide35_720w.png"
            alt=""
            className={styles.decks__image}
          />
        </div>
      </div>
      <div className={styles.decks__overlay}></div>
    </div>
  );
};

export default Decks;
