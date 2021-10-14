/* eslint-disable @next/next/no-img-element */
const AboutNumbers = () => {
  return (
    <div className="about-numbers wf-section">
      <div className="about-numbers__container">
        <h2 className="about-numbers__heading">Pitch in numbers:</h2>
        <div className="about-numbers__wrapper">
          <h4 className="about-numbers__metric">2018</h4>
          <h4 className="about-numbers__metric">$50M</h4>
          <h4 className="about-numbers__metric">72</h4>
          <div className="about-numbers__metrich">Year founded</div>
          <div className="about-numbers__metrich">Total funding</div>
          <div className="about-numbers__metrich">Team members</div>
          <div
            id="w-node-_9110bbda-ac3e-35ee-f26f-a632cb821a19-946182ad"
            className="about-numbers__metrich"
          >
            Open positions
          </div>
          <a
            href="#hiring"
            className="about-numbers__metric-link w-inline-block"
          >
            <h4 className="about-numbers__metric about-numbers__metric--blue">
              8
            </h4>
          </a>
        </div>
        <div className="about-numbers__glassdoor">
          <h4 className="about-numbers__metric">Glassdoor</h4>
          <a href="#" className="about-numbers__rating w-inline-block">
            <div className="about-numbers__stars-wrapper">
              <img
                src="images/star.svg"
                loading="lazy"
                alt=""
                className="about-numbers__star"
              />
              <img
                src="images/star.svg"
                loading="lazy"
                alt=""
                className="about-numbers__star"
              />
              <img
                src="images/star.svg"
                loading="lazy"
                alt=""
                className="about-numbers__star"
              />
              <img
                src="images/star.svg"
                loading="lazy"
                alt=""
                className="about-numbers__star"
              />
              <img
                src="images/star.svg"
                loading="lazy"
                alt=""
                className="about-numbers__star"
              />
            </div>
            <div className="about-numbers__rating-link">
              Average rating (as of March, 11 2020)
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutNumbers;
