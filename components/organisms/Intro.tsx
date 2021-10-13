import Image from 'next/image';
import cn from 'classnames';

import styles from './Intro.module.css';

const Intro = () => {
  return (
    <div className={cn(styles.intro, 'wf-section')}>
      <div className={styles.intro__logos}>
        <h5 className={styles['intro__logos-heading']}>Used by teams like</h5>
        <div className={styles['intro__logos-wrapper']}>
          <Image
            src="/superhuman_1.svg"
            alt=""
            className={styles['intro__logo intro__logo--rmargin']}
            width="209"
            height="16"
          />
          <Image
            src="/eyeEm.svg"
            alt=""
            className={styles['intro__logo intro__logo--rmargin']}
            width="97"
            height="33"
          />
          <Image
            src="/chart-mogul.svg"
            alt=""
            className={styles['intro__logo intro__logo--rmargin']}
            width="140"
            height="26"
          />
          <Image
            src="/notion.svg"
            alt=""
            className={styles['intro__logo intro__logo--rmargin']}
            width="53"
            height="56"
          />
          <Image
            src="/dashdash.svg"
            alt=""
            className={styles.intro__logo}
            width="149"
            height="19"
          />
        </div>
      </div>
      <div className={styles.intro__workflow}>
        <div className={styles['intro__workflow-text']}>
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
        <div className={styles['intro__workflow-lottie']}></div>
      </div>
    </div>
  );
};

export default Intro;
