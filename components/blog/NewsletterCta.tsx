import type { NextPage } from 'next';
import cn from 'classnames';
import { useEffect, useRef } from 'react';
import useAnimation from '../../hooks/useAnimation';

import styles from './NewsletterCta.module.css';

const NewsletterCta: NextPage = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { animateFromTo } = useAnimation(ref, true);

  useEffect(() => {
    animateFromTo(styles['newsletter-cta__container'], {
      from: { opacity: 0, y: 120 },
      to: { opacity: 1, y: 0 },
      start: 20,
      delay: 0.3,
      duration: 0.5,
    });
  }, []);

  return (
    <div ref={ref} className={cn(styles['newsletter-cta'], 'wf-section')}>
      <div className={styles['newsletter-cta__container']}>
        <div className={styles['newsletter-cta__wrapper']}>
          <a
            href="#"
            className={cn(
              styles['newsletter-cta__heading-link'],
              'w-inline-block',
            )}
          >
            <h3 className={styles['newsletter-cta__heading']}>
              Sign up for Constant Change
            </h3>
          </a>
          <div className={styles['newsletter-cta__paragraph']}>
            Subscribe and receive new issues twice a month.{' '}
            <a href="#" className={styles['newsletter-cta__link']}>
              Learn more.
            </a>
          </div>
          <div className={cn(styles['newsletter-cta__cta-wrapper'], 'w-form')}>
            <form
              id="email-form"
              name="email-form"
              data-name="Email Form"
              className={styles['newsletter-cta__div']}
            >
              <div className={styles['newsletter-cta__input-wrapper']}>
                <input
                  type="email"
                  className={cn(styles['newsletter-cta__input'], 'w-input')}
                  maxLength={256}
                  name="Hero-CTA-Email-2"
                  data-name="Hero CTA Email 2"
                  placeholder="Your email"
                  id="Hero-CTA-Email-2"
                  required
                />
                <input
                  type="submit"
                  value="Subscribe"
                  data-wait="Please wait..."
                  className={cn(styles['newsletter-cta__button'], 'w-button')}
                />
              </div>
              <div className={styles['newsletter-cta__disclaimer']}>
                We care about protecting your data. Here’s our{' '}
                <a
                  href="#"
                  className={styles['newsletter-cta__disclamer-link']}
                >
                  Privacy Policy
                </a>
                .
              </div>
            </form>
            <div className="w-form-done">
              <div>Thank you! Your submission has been received!</div>
            </div>
            <div className="w-form-fail">
              <div>Oops! Something went wrong while submitting the form.</div>
            </div>
          </div>
        </div>
        <img
          src="images/paper-plane.png"
          alt=""
          className={styles['newsletter-cta__image']}
        />
      </div>
    </div>
  );
};

export default NewsletterCta;
