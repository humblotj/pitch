import type { NextPage } from 'next';
import cn from 'classnames';
import { useEffect, useRef } from 'react';
import useAnimation from '../../hooks/useAnimation';

import styles from './BlogRecent.module.css';

const BlogRecent: NextPage = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { animateFromTo } = useAnimation(ref, true);

  useEffect(() => {
    animateFromTo(styles['blog-recent__container'], {
      from: { opacity: 0, y: 300 },
      to: { opacity: 1, y: 0 },
      delay: 0.3,
      duration: 0.6,
    });
  }, []);

  return (
    <div ref={ref} className={cn(styles['blog-recent'], 'wf-section')}>
      <div className={styles['blog-recent__scrollable']}>
        <div ref={ref} className={styles['blog-recent__container']}>
          <div className={styles['blog-recent__wrapper']}>
            <a
              href="#"
              className={cn(
                styles['blog-recent__image-link'],
                'w-inline-block',
              )}
            >
              <img
                src="images/bulletin_cover.jpg"
                alt=""
                className={styles['blog-recent__image']}
              />
            </a>
            <a
              href="#"
              className={cn(
                styles['blog-recent__heading-link'],
                'w-inline-block',
              )}
            >
              <h4 className={styles['blog-recent__heading']}>
                Bulletins: A remote - friendly alternative to all hands
              </h4>
            </a>
            <p className={styles['blog-recent__paragraph']}>
              In the past few weeks since we’ve all gone fully remote, we’ve all
              had to adopt new ways of working in order to adapt to our
              &quot;new normal.&quot;
            </p>
          </div>
          <div className={styles['blog-recent__wrapper']}>
            <a
              href="#"
              className={cn(
                styles['blog-recent__image-link'],
                'w-inline-block',
              )}
            >
              <img
                src="images/jeremy_cover.jpg"
                alt=""
                className={styles['blog-recent__image']}
              />
            </a>
            <a
              href="#"
              className={cn(
                styles['blog-recent__heading-link'],
                'w-inline-block',
              )}
            >
              <h4 className={styles['blog-recent__heading']}>
                From Counter-Strike to keyboard shortcuts
              </h4>
            </a>
            <p className={styles['blog-recent__paragraph']}>
              Pitch engineer and Counter-Strike world champion Jeremy Vuillermet
              shares how gaming concepts influenced our quick menu
            </p>
          </div>
          <div className={styles['blog-recent__wrapper']}>
            <a
              href="#"
              className={cn(
                styles['blog-recent__image-link'],
                'w-inline-block',
              )}
            >
              <img
                src="images/cover_ramsaxel.jpg"
                alt=""
                className={styles['blog-recent__image']}
              />
            </a>
            <a
              href="#"
              className={cn(
                styles['blog-recent__heading-link'],
                'w-inline-block',
              )}
            >
              <h4 className={styles['blog-recent__heading']}>
                Why we redesigned Pitch before we launched
              </h4>
            </a>
            <p className={styles['blog-recent__paragraph']}>
              Not many companies redesign a product before they launch. Here’s
              how we — in the midst of our beta — rolled out a redesign of the
              core product experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogRecent;
