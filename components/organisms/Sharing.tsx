import Image from 'next/image';
import cn from 'classnames';

import styles from './Sharing.module.css';

const Sharing = () => {
  return (
    <div className={cn(styles.sharing, 'wf-section')}>
      <div className={styles.sharing__text}>
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
        <div className={styles['sharing__plane-wrapper']}>
          <Image
            layout="fill"
            src="/assets/images/plane_800w.png"
            alt=""
            className={styles.sharing__plane}
          />
          <Image
            layout="fill"
            src="/assets/images/shadow_1shadow.png"
            alt=""
            className={styles['sharing__plane-shadow']}
          />
        </div>
        <Image
          layout="fill"
          src="/assets/images/invite2x.png"
          alt=""
          className={styles.sharing__invite}
        />
        <Image
          layout="fill"
          src="/assets/images/access.svg"
          alt=""
          className={styles.sharing__access}
        />
        <Image
          layout="fill"
          src="/assets/images/hand_600w.png"
          alt=""
          className={styles.sharing__hand}
        />
        <Image
          layout="fill"
          src="/assets/images/tablet_2400w.jpg"
          alt=""
          className={styles.sharing__image}
        />
      </div>
    </div>
  );
};

export default Sharing;
