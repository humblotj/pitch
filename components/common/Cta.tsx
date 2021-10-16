import type { NextPage } from 'next';
import cn from 'classnames';

import styles from './Cta.module.css';

const Cta: NextPage = () => {
  return (
    <div className={cn(styles.cta, 'wf-section')}>
      <div className={styles.cta__container}>
        <h2 className={styles.cta__heading}>
          Ready to see what we’re building?
        </h2>
        <div className={cn(styles.cta__wrapper, 'w-form')}>
          <form id="email-form" name="email-form" className={styles['cta-div']}>
            <div className={styles['cta__input-wrapper']}>
              <input
                type="email"
                className={cn(styles.cta__input, 'w-input')}
                maxLength={256}
                name="Hero-CTA-Email-2"
                placeholder="Your email"
                id="Hero-CTA-Email-2"
                required
              />
              <input
                type="submit"
                value="Sign up"
                className={cn(styles.cta__button, 'w-button')}
              />
            </div>
            <div className={styles.cta__disclaimer}>
              We care about protecting your data. Here’s our{' '}
              <a href="#" className={styles['cta__disclamer-link']}>
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
    </div>
  );
};

export default Cta;
