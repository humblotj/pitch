import type { NextPage } from 'next';
import cn from 'classnames';

import styles from './AboutJobs.module.css';

const AboutJobs: NextPage = () => {
  return (
    <section id="hiring" className={cn(styles['about-jobs'], 'wf-section')}>
      <div className={styles['about-jobs__mission']}>
        <h2 className={styles['about-jobs__mission-heading']}>
          Be part of our mission
        </h2>
        <p className={styles['about-jobs__mission-paragraph']}>
          We’re looking for passionate people to join us. We value flat
          hierarchies, clear communication, and full ownership and
          responsibility.
        </p>
      </div>
      <div className={styles['about-jobs__benefits']}>
        <h3 className={styles['about-jobs__benefits-heading']}>
          Benefits include
        </h3>
        <ul role="list" className={styles['about-jobs__benefits-wrapper']}>
          <li className={styles['about-jobs__benefit']}>
            Quality-driven environment
          </li>
          <li className={styles['about-jobs__benefit']}>
            Flexible hours and vacation
          </li>
          <li className={styles['about-jobs__benefit']}>
            Competitive compensation and equity package
          </li>
          <li className={styles['about-jobs__benefit']}>
            Parent-friendly company culture
          </li>
          <li className={styles['about-jobs__benefit']}>
            Healthy work-life balance
          </li>
          <li className={styles['about-jobs__benefit']}>
            Remote-friendly environment
          </li>
          <li className={styles['about-jobs__benefit']}>Educational stipend</li>
          <li className={styles['about-jobs__benefit']}>
            Top-of-the-line equipment
          </li>
        </ul>
      </div>
      <div className={styles['divider-800']}></div>
      <div
        className={cn(
          styles['about-jobs__positions'],
          styles['about-jobs__positions--86margin'],
        )}
      >
        <h3 className={styles['about-jobs__positions-heading']}>
          Open positions in Engineering
        </h3>
        <a
          href="#"
          className={cn(
            styles['about-jobs__positions-wrapper'],
            styles['about-jobs__positions-wrapper--space'],
            'w-inline-block',
          )}
        >
          <div className={styles['about-jobs__position-title']}>
            Frontend Performance Engineer (m/f/d)
          </div>
          <div className={styles['about-jobs__position-location']}>
            Berlin / Remote
          </div>
        </a>
        <a
          href="#"
          className={cn(
            styles['about-jobs__positions-wrapper'],
            styles['about-jobs__positions-wrapper--space'],
            'w-inline-block',
          )}
        >
          <div className={styles['about-jobs__position-title']}>
            Senior Backend Engineer (m/f/d)
          </div>
          <div className={styles['about-jobs__position-location']}>
            Berlin / Remote
          </div>
        </a>
        <a
          href="#"
          className={cn(
            styles['about-jobs__positions-wrapper'],
            styles['about-jobs__positions-wrapper--space'],
            'w-inline-block',
          )}
        >
          <div className={styles['about-jobs__position-title']}>
            Senior Frontend Engineer - Design Tools (m/f/d)
          </div>
          <div className={styles['about-jobs__position-location']}>
            Berlin / Remote
          </div>
        </a>
        <a
          href="#"
          className={cn(
            styles['about-jobs__positions-wrapper'],
            styles['about-jobs__positions-wrapper--space'],
            'w-inline-block',
          )}
        >
          <div className={styles['about-jobs__position-title']}>
            Senior Frontend Engineer (m/f/d)
          </div>
          <div className={styles['about-jobs__position-location']}>
            Berlin / Remote
          </div>
        </a>
        <a
          href="#"
          className={cn(
            styles['about-jobs__positions-wrapper'],
            'w-inline-block',
          )}
        >
          <div className={styles['about-jobs__position-title']}>
            Senior React Native Engineer (m/f/d)
          </div>
          <div className={styles['about-jobs__position-location']}>
            Berlin / Remote
          </div>
        </a>
      </div>
      <div
        className={cn(
          styles['about-jobs__positions'],
          styles['about-jobs__positions--46margin'],
        )}
      >
        <h3 className={styles['about-jobs__positions-heading']}>
          Open positions in Marketing
        </h3>
        <a
          href="#"
          className={cn(
            styles['about-jobs__positions-wrapper'],
            styles['about-jobs__positions-wrapper--space'],
            'w-inline-block',
          )}
        >
          <div className={styles['about-jobs__position-title']}>
            Head of Communications (m/f/d)
          </div>
          <div className={styles['about-jobs__position-location']}>
            Berlin / Remote
          </div>
        </a>
        <a
          href="#"
          className={cn(
            styles['about-jobs__positions-wrapper'],
            styles['about-jobs__positions-wrapper--space'],
            'w-inline-block',
          )}
        >
          <div className={styles['about-jobs__position-title']}>
            Head of Growth Marketing (m/f/d)
          </div>
          <div className={styles['about-jobs__position-location']}>
            Berlin / Remote
          </div>
        </a>
        <a
          href="#"
          className={cn(
            styles['about-jobs__positions-wrapper'],
            'w-inline-block',
          )}
        >
          <div className={styles['about-jobs__position-title']}>
            Technical Customer Support Specialist (m/f/d)
          </div>
          <div className={styles['about-jobs__position-location']}>
            Berlin / Remote
          </div>
        </a>
      </div>
    </section>
  );
};

export default AboutJobs;
