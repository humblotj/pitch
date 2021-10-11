import Image from 'next/image';

const Hero = () => {
  return (
    <div className="hero wf-section">
      <div className="hero__container">
        <div className="hero__container-inner">
          <div className="hero__scroll-container">
            <div className="hero__transform-target">
              <p className="hero__intro">
                Pitch helps teams build better presentations:
                <br />
                collaboratively, effectively, and beautifully.
              </p>
              <div className="hero__headline">
                <h1 className="hero__headline-text">All hands on deck.</h1>
                <Image
                  src="/assets/images/hero-hands.png"
                  loading="eager"
                  alt=""
                  className="hero__hand"
                  layout="fill"
                />
                <Image
                  src="/assets/images/hero-ui_2808w.jpg"
                  loading="eager"
                  alt=""
                  className="hero__ui"
                  layout="fill"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero__cta-section">
        <h4 className="hero__cta-heading">
          Want to get early access and product updates?
        </h4>
        <div className="hero__cta-wrapper w-form">
          <form
            id="email-form"
            name="email-form"
            data-name="Email Form"
            className="hero__cta-div"
          >
            <div className="hero__cta-inputwrapper">
              <input
                type="email"
                className="hero__cta-input w-input"
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
                className="hero__cta-button w-button"
              />
            </div>
            <div className="hero__cta-disclaimer">
              We care about protecting your data. Here’s our{' '}
              <a href="#" className="hero__cta-disclamer-link">
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
