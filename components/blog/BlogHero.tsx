import type { NextPage } from 'next';
import cn from 'classnames';

import styles from './BlogHero.module.css';
import CardButtonarrow from '../../assets/icons/card-buttonarrow.svg';

const BlogHero: NextPage = () => {
  return (
    <div className={cn(styles['blog-hero'], 'wf-section')}>
      <div className={styles['blog-hero__wrapper']}>
        <div className={styles['blog-hero__text-wrapper']}>
          <a
            href="#"
            className={cn(styles['blog-hero__heading-link'], 'w-inline-block')}
          >
            <h2 className={styles['blog-hero__heading']}>
              Presentation templates for modern teams
            </h2>
          </a>
          <p className={styles['blog-hero__paragraph']}>
            Presentations aren&#x27;t just for pitch decks: How modern,
            remote-optimized teams are using presentations for knowledge
            sharing, brainstorming, and more.
          </p>
          <a
            data-w-id="85dcad88-c308-1e09-6702-a3782d7d7c65"
            href="#"
            className={cn(styles['blog-hero__cta'], 'w-inline-block')}
          >
            <div
              data-w-id="85dcad88-c308-1e09-6702-a3782d7d7c66"
              className={styles['blog-hero__cta-text']}
            >
              Turn the page
            </div>
            <div
              data-w-id="85dcad88-c308-1e09-6702-a3782d7d7c68"
              className={cn(styles['blog-hero__cta-arrow'], 'w-embed')}
            >
              <CardButtonarrow />
            </div>
          </a>
        </div>
        <a href="#" className="blog-hero__image-link w-inline-block">
          <div
            className={
              (styles['blog-hero__image'],
              styles['blog-hero__image--onlymobile'])
            }
          ></div>
          <img
            src="images/featuredportrait_moderntemplates.jpg"
            alt=""
            className={cn(
              styles['blog-hero__image'],
              styles['blog-hero__image--nomobile'],
            )}
          />
        </a>
      </div>
    </div>
  );
};

export default BlogHero;
