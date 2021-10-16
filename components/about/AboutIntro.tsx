import type { NextPage } from 'next';
import cn from 'classnames';

import styles from './AboutIntro.module.css';

const AboutIntro: NextPage = () => {
  return (
    <div className={cn(styles['about-intro'], 'wf-section')}>
      <div className={styles['about-intro__wrapper']}>
        <p className={styles['about-intro__paragraph"']}>
          Every day, ideas are born. Ideas to start a business. Change a
          community. Transform the world. But ideas alone are not enough.
          <br />‍<br />
          Pitch began with a belief that when people come together around an
          idea, and are empowered by the right software, great things can
          happen. Great is more than the sum of its parts: just like a great
          team is more than a collection of individuals and great presentations
          are more than a collection of slides. Great is a little slice of magic
          (and you know it when you see it).
          <br />
          <br />
          Great software drives our modern lives. We use Slack, not email. We
          jump on a Zoom call, not on the phone. So why are we still using
          presentation software that was designed last century?
        </p>
      </div>
    </div>
  );
};

export default AboutIntro;
