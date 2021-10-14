const AboutJobs = () => {
  return (
    <section id="hiring" className="about-jobs wf-section">
      <div className="about-jobs__mission">
        <h2 className="about-jobs__mission-heading">Be part of our mission</h2>
        <p className="about-jobs__mission-paragraph">
          We’re looking for passionate people to join us. We value flat
          hierarchies, clear communication, and full ownership and
          responsibility.
        </p>
      </div>
      <div className="about-jobs__benefits">
        <h3 className="about-jobs__benefits-heading">Benefits include</h3>
        <ul role="list" className="about-jobs__benefits-wrapper">
          <li className="about-jobs__benefit">Quality-driven environment</li>
          <li className="about-jobs__benefit">Flexible hours and vacation</li>
          <li className="about-jobs__benefit">
            Competitive compensation and equity package
          </li>
          <li className="about-jobs__benefit">
            Parent-friendly company culture
          </li>
          <li className="about-jobs__benefit">Healthy work-life balance</li>
          <li className="about-jobs__benefit">Remote-friendly environment</li>
          <li className="about-jobs__benefit">Educational stipend</li>
          <li className="about-jobs__benefit">Top-of-the-line equipment</li>
        </ul>
      </div>
      <div className="divider-800"></div>
      <div className="about-jobs__positions about-jobs__positions--86margin">
        <h3 className="about-jobs__positions-heading">
          Open positions in Engineering
        </h3>
        <a
          href="#"
          className="about-jobs__positions-wrapper about-jobs__positions-wrapper--space w-inline-block"
        >
          <div className="about-jobs__position-title">
            Frontend Performance Engineer (m/f/d)
          </div>
          <div className="about-jobs__position-location">Berlin / Remote</div>
        </a>
        <a
          href="#"
          className="about-jobs__positions-wrapper about-jobs__positions-wrapper--space w-inline-block"
        >
          <div className="about-jobs__position-title">
            Senior Backend Engineer (m/f/d)
          </div>
          <div className="about-jobs__position-location">Berlin / Remote</div>
        </a>
        <a
          href="#"
          className="about-jobs__positions-wrapper about-jobs__positions-wrapper--space w-inline-block"
        >
          <div className="about-jobs__position-title">
            Senior Frontend Engineer - Design Tools (m/f/d)
          </div>
          <div className="about-jobs__position-location">Berlin / Remote</div>
        </a>
        <a
          href="#"
          className="about-jobs__positions-wrapper about-jobs__positions-wrapper--space w-inline-block"
        >
          <div className="about-jobs__position-title">
            Senior Frontend Engineer (m/f/d)
          </div>
          <div className="about-jobs__position-location">Berlin / Remote</div>
        </a>
        <a href="#" className="about-jobs__positions-wrapper w-inline-block">
          <div className="about-jobs__position-title">
            Senior React Native Engineer (m/f/d)
          </div>
          <div className="about-jobs__position-location">Berlin / Remote</div>
        </a>
      </div>
      <div className="about-jobs__positions about-jobs__positions--46margin">
        <h3 className="about-jobs__positions-heading">
          Open positions in Marketing
        </h3>
        <a
          href="#"
          className="about-jobs__positions-wrapper about-jobs__positions-wrapper--space w-inline-block"
        >
          <div className="about-jobs__position-title">
            Head of Communications (m/f/d)
          </div>
          <div className="about-jobs__position-location">Berlin / Remote</div>
        </a>
        <a
          href="#"
          className="about-jobs__positions-wrapper about-jobs__positions-wrapper--space w-inline-block"
        >
          <div className="about-jobs__position-title">
            Head of Growth Marketing (m/f/d)
          </div>
          <div className="about-jobs__position-location">Berlin / Remote</div>
        </a>
        <a href="#" className="about-jobs__positions-wrapper w-inline-block">
          <div className="about-jobs__position-title">
            Technical Customer Support Specialist (m/f/d)
          </div>
          <div className="about-jobs__position-location">Berlin / Remote</div>
        </a>
      </div>
    </section>
  );
};

export default AboutJobs;
