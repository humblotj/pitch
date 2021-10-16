import type { NextPage } from 'next';
import cn from 'classnames';

import styles from './AboutNumbers.module.css';

const AboutNumbers: NextPage = () => {
  return (
    <div className={cn(styles['about-numbers'], 'wf-section')}>
      <div className={styles['about-numbers__container']}>
        <h2 className={styles['about-numbers__heading']}>Pitch in numbers:</h2>
        <div className={styles['about-numbers__wrapper']}>
          <h4 className={styles['about-numbers__metric']}>2018</h4>
          <h4 className={styles['about-numbers__metric']}>$50M</h4>
          <h4 className={styles['about-numbers__metric']}>72</h4>
          <div className={styles['about-numbers__metrich']}>Year founded</div>
          <div className={styles['about-numbers__metrich']}>Total funding</div>
          <div className={styles['about-numbers__metrich']}>Team members</div>
          <div
            className={cn(
              styles['about-numbers__metrich'],
              styles['about-numbers__open-position'],
            )}
          >
            Open positions
          </div>
          <a
            href="#hiring"
            className={cn(
              styles['about-numbers__metric-link'],
              styles['about-numbers__hiring'],
              'w-inline-block',
            )}
          >
            <h4
              className={cn(
                styles['about-numbers__metric'],
                styles['about-numbers__metric--blue'],
              )}
            >
              8
            </h4>
          </a>
        </div>
        <div className={styles['about-numbers__glassdoor']}>
          <h4 className={styles['about-numbers__metric']}>Glassdoor</h4>
          <a
            href="#"
            className={cn(styles['about-numbers__rating'], 'w-inline-block')}
          >
            <div className={styles['about-numbers__stars-wrapper']}>
              <img
                src="/images/star.svg"
                loading="lazy"
                alt=""
                className={styles['about-numbers__star']}
                width="36"
                height="34"
              />
              <img
                src="/images/star.svg"
                loading="lazy"
                alt=""
                className={styles['about-numbers__star']}
                width="36"
                height="34"
              />
              <img
                src="/images/star.svg"
                loading="lazy"
                alt=""
                className={styles['about-numbers__star']}
                width="36"
                height="34"
              />
              <img
                src="/images/star.svg"
                loading="lazy"
                alt=""
                className={styles['about-numbers__star']}
                width="36"
                height="34"
              />
              <img
                src="/images/star.svg"
                loading="lazy"
                alt=""
                className={styles['about-numbers__star']}
                width="36"
                height="34"
              />
            </div>
            <div className={styles['about-numbers__rating-link']}>
              Average rating (as of March, 11 2020)
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutNumbers;
