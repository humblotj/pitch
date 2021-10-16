import cn from 'classnames';
import { useEffect, useRef } from 'react';

import styles from './BlogArticles.module.css';
import useAnimation from '../../hooks/useAnimation';

const BlogArticle = ({
  index,
  heading,
  paragraph,
  animate = false,
}: {
  index: number;
  heading: string;
  paragraph: string;
  animate?: boolean;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { animateFromTo } = useAnimation(ref, true);

  useEffect(() => {
    if (animate) {
      animateFromTo(null, {
        from: { opacity: 0, y: 100 },
        to: { opacity: 1, y: 0 },
        start: 10,
        duration: 0.3,
      });
    }
  }, []);

  return (
    <div ref={ref} className={styles['blog-articles__article']}>
      <a
        href="#"
        className={cn(styles['blog-articles__image' + index], 'w-inline-block')}
      ></a>
      <a
        href="#"
        className={cn(
          styles['blog-articles__article-heading-link'],
          'w-inline-block',
        )}
      >
        <h4 className={styles['blog-articles__article-heading']}>{heading}</h4>
      </a>
      <p className={styles['blog-articles__paragraph']}>{paragraph}</p>
    </div>
  );
};

export default BlogArticle;
