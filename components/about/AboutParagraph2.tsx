import type { NextPage } from 'next';

import styles from './AboutParagraph2.module.css';

const AboutParagraph2: NextPage = () => {
  return (
    <div className={styles['about__paragraph2-wrapper']}>
      <p className={styles.about__paragraph2}>
        We’re a group of people who love collaborating to create well-crafted,
        delightful products. For us, the best part of building a company is
        taking an idea that everyone believes in and working together to turn
        that into a reality. That&#x27;s why we&#x27;re excited about Pitch:
        We&#x27;re creating a product that helps people work better together.
      </p>
    </div>
  );
};

export default AboutParagraph2;
