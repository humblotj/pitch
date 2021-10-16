import type { NextPage } from 'next';
import cn from 'classnames';

import styles from './BlogHero.module.css';

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
              <svg
                width="27"
                height="8"
                viewBox="0 0 27 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M26.3536 4.35355C26.5488 4.15829 26.5488 3.84171 26.3536 3.64645L23.1716 0.464466C22.9763 0.269204 22.6597 0.269204 22.4645 0.464466C22.2692 0.659728 22.2692 0.976311 22.4645 1.17157L25.2929 4L22.4645 6.82843C22.2692 7.02369 22.2692 7.34027 22.4645 7.53553C22.6597 7.7308 22.9763 7.7308 23.1716 7.53553L26.3536 4.35355ZM0 4.5H26V3.5H0V4.5Z"
                  fill="currentColor"
                ></path>
              </svg>
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
