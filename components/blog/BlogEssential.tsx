import type { NextPage } from 'next';
import cn from 'classnames';
import { useEffect, useRef } from 'react';
import useAnimation from '../../hooks/useAnimation';

import styles from './BlogEssential.module.css';

const BlogEssential: NextPage = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { animateFromTo } = useAnimation(ref, true);

  useEffect(() => {
    animateFromTo(styles['blog-essential__article'], {
      from: { opacity: 0, y: 170 },
      to: { opacity: 1, y: 0 },
      start: 20,
      delay: 0.3,
      duration: 0.4,
      stagger: 0.4,
    });
  }, []);

  return (
    <div ref={ref} className={cn(styles['blog-essential'], 'wf-section')}>
      <div className={styles['blog-essential__container']}>
        <h5 className={styles['blog-essential__heading']}>Essential Reading</h5>
        <div className={styles['divider-1184']}></div>
        <div className={styles['blog-essential__wrapper']}>
          <a
            data-w-id="0e4c7574-5ada-e5db-1020-7676e80929f5"
            href="#"
            className={cn(styles['blog-essential__article'], 'w-inline-block')}
          >
            <h1 className={styles['blog-essential__article-nr']}>01.</h1>
            <h4
              data-w-id="2b152e60-a21e-7b36-f240-d6e8e164b322"
              className={styles['blog-essential__article-heading']}
            >
              Why you should build features users don’t ask for
            </h4>
          </a>
          <a
            data-w-id="6242d60b-8b8e-cd1a-ba32-bcbc45d59282"
            href="#"
            className={cn(styles['blog-essential__article'], 'w-inline-block')}
          >
            <h1 className={styles['blog-essential__article-nr']}>02.</h1>
            <h4
              data-w-id="6242d60b-8b8e-cd1a-ba32-bcbc45d59285"
              className={styles['blog-essential__article-heading']}
            >
              Designing in the open at Pitch
            </h4>
          </a>
          <a
            data-w-id="fe271954-2026-6bf2-68df-6a332a5a0bf4"
            href="#"
            className={cn(styles['blog-essential__article'], 'w-inline-block')}
          >
            <h1 className={styles['blog-essential__article-nr']}>03.</h1>
            <h4
              data-w-id="fe271954-2026-6bf2-68df-6a332a5a0bf7"
              className={styles['blog-essential__article-heading']}
            >
              A peek into our template creation process
            </h4>
          </a>
          <a
            data-w-id="b2378eb6-bb8c-bb15-b19b-343d2b97975f"
            href="#"
            className={cn(styles['blog-essential__article'], 'w-inline-block')}
          >
            <h1 className={styles['blog-essential__article-nr']}>04.</h1>
            <h4
              data-w-id="b2378eb6-bb8c-bb15-b19b-343d2b979762"
              className={styles['blog-essential__article-heading']}
            >
              Communication &amp; collaborating through change
            </h4>
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogEssential;
