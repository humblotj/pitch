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
            src="/plane_800w.png"
            alt=""
            className={styles.sharing__plane}
            width="800"
            height="601"
          />
          <Image
            src="/shadow.png"
            alt=""
            className={styles['sharing__plane-shadow']}
            width="120"
            height="60"
          />
        </div>
        <Image
          src="/invite2x.png"
          alt=""
          className={styles.sharing__invite}
          width="800"
          height="412"
        />
        <Image
          src="/access.svg"
          alt=""
          className={styles.sharing__access}
          width="382"
          height="115"
        />
        <Image
          src="/hand_600w.png"
          alt=""
          className={styles.sharing__hand}
          width="600"
          height="748"
        />
        <Image
          src="/tablet_2400w.jpg"
          alt=""
          className={styles.sharing__image}
          width="2400"
          height="1202"
        />
      </div>
    </div>
  );
};

export default Sharing;
