import Image from 'next/image';
import cn from 'classnames';

import styles from './Hero.module.css';

const Hero = () => {
  return (
    <div className={cn(styles.hero, 'wf-section')}>
      <div className={styles.hero__container}>
        <div className={styles['hero__container-inner']}>
          <div className={styles['hero__scroll-container']}>
            <div className={styles['hero__transform-target']}>
              <p className={styles.hero__intro}>
                Pitch helps teams build better presentations:
                <br />
                collaboratively, effectively, and beautifully.
              </p>
              <div className={styles.hero__headline}>
                <h1 className={styles['hero__headline-text']}>
                  All hands on deck.
                </h1>
                <Image
                  src="/hero-hands.png"
                  loading="eager"
                  alt=""
                  className={styles.hero__hand}
                  width="3840"
                  height="2160"
                />
                <Image
                  src="/hero-ui_2808w.jpg"
                  loading="eager"
                  alt=""
                  className={styles.hero__ui}
                  width="2808"
                  height="1701"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles['hero__cta-section']}>
        <h4 className={styles['hero__cta-heading']}>
          Want to get early access and product updates?
        </h4>
        <div className={cn(styles['hero__cta-wrapper'], 'w-form')}>
          <form
            id="email-form"
            name="email-form"
            data-name="Email Form"
            className={styles['hero__cta-div']}
          >
            <div className={styles['hero__cta-inputwrapper']}>
              <input
                type="email"
                className={cn(styles['hero__cta-input'], 'w-input')}
                maxLength={256}
                name="Hero-CTA-Email"
                data-name="Hero CTA Email"
                placeholder="Your email"
                id="Hero-CTA-Email"
                required
              />
              <input
                type="submit"
                value="Sign up"
                data-wait="Please wait..."
                className={cn(styles['hero__cta-button'], 'w-button')}
              />
            </div>
            <div className={styles['hero__cta-disclaimer']}>
              We care about protecting your data. Here’s our{' '}
              <a href="#" className={styles['hero__cta-disclamer-link']}>
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

export default Hero;
