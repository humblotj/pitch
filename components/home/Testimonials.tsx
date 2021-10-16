import type { NextPage } from 'next';
import cn from 'classnames';

import styles from './Testimonials.module.css';

const Testimonials: NextPage = () => {
  return (
    <div className={cn(styles.testimonials, 'wf-section')}>
      <h2 className={styles.testimonials__heading}>What others are saying</h2>
      <div className={styles.testimonials__wrapper}>
        <div className={styles.testimonials__card}>
          <div className={styles['testimonials__card-content']}>
            <div className={styles['testimonials__card-blockquote']}>
              I make presentations all day long, and I could not imagine doing
              it without Pitch. It’s the best of Slides, Keynote, and PowerPoint
              all in one — plus things that none of these have!
            </div>
            <div className={styles['testimonials__card-info']}>
              <img
                src="/images/rahul.jpg"
                loading="lazy"
                alt=""
                className={styles['testimonials__card-photo']}
                // width="120"
                // height="120"
              />
              <h4 className={styles['testimonials__card-heading']}>
                Rahul Vohra
              </h4>
              <div className={styles['testimonials__card-role']}>
                Founder of Superhuman
              </div>
            </div>
          </div>
        </div>
        <div className={styles.testimonials__card}>
          <div className={styles['testimonials__card-content']}>
            <div className={styles['testimonials__card-blockquote']}>
              Collaboratively building and sharing beautiful presentations has
              always been a nightmare. With Pitch, it’s a dream. If you work in
              a modern team, this product is indispensable.
            </div>
            <div className={styles['testimonials__card-info']}>
              <img
                src="/images/aidan.jpg"
                loading="lazy"
                alt=""
                className={styles['testimonials__card-photo']}
                // width="120"
                // height="120"
              />
              <h4 className={styles['testimonials__card-heading']}>
                Aidan Hornsby
              </h4>
              <div className={styles['testimonials__card-role']}>
                Founder of DoubleUp
              </div>
            </div>
          </div>
        </div>
        <div className={styles.testimonials__card}>
          <div className={styles['testimonials__card-content']}>
            <div className={styles['testimonials__card-blockquote']}>
              Pitch makes all of my presentations look like I have a full-time
              design team supporting me.
            </div>
            <div className={styles['testimonials__card-info']}>
              <img
                src="/images/shane.jpg"
                loading="lazy"
                alt=""
                className={styles['testimonials__card-photo']}
                // width="120"
                // height="120"
              />
              <h4 className={styles['testimonials__card-heading']}>
                Shane Parrish
              </h4>
              <div className={styles['testimonials__card-role']}>
                Founder of Farnam Street
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
