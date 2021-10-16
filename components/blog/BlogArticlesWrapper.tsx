import { useEffect, useRef } from 'react';
import useAnimation from '../../hooks/useAnimation';
import BlogArticle from './BlogArticle';

import styles from './BlogArticles.module.css';

declare interface IArticle {
  index: number;
  heading: string;
  paragraph: string;
}

const BlogArticlesWrapper = ({ articles }: { articles: IArticle[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { animateFromTo } = useAnimation(ref, true);

  useEffect(() => {
    animateFromTo(styles['blog-articles__article'], {
      from: { opacity: 0, y: 100 },
      to: { opacity: 1, y: 0 },
      delay: 0.2,
      duration: 0.3,
      stagger: 0.3,
    });
  }, []);

  return (
    <div ref={ref} className={styles['blog-articles__wrapper']}>
      {articles.slice(0, 3).map((article: IArticle) => (
        <BlogArticle key={article.index} {...article} />
      ))}
    </div>
  );
};

export default BlogArticlesWrapper;
