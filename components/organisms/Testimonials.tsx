import Image from 'next/image';

const Testimonials = () => {
  return (
    <div className="testimonials wf-section">
      <h2 className="testimonials__heading">What others are saying</h2>
      <div className="testimonials__wrapper">
        <div className="testimonials__card">
          <div className="testimonials__card-content">
            <div className="testimonials__card-blockquote">
              I make presentations all day long, and I could not imagine doing
              it without Pitch. It’s the best of Slides, Keynote, and PowerPoint
              all in one — plus things that none of these have!
            </div>
            <div className="testimonials__card-info">
              <Image
                layout="fill"
                src="/assets/images/rahul.jpg"
                loading="lazy"
                alt=""
                className="testimonials__card-photo"
              />
              <h4 className="testimonials__card-heading">Rahul Vohra</h4>
              <div className="testimonials__card-role">
                Founder of Superhuman
              </div>
            </div>
          </div>
        </div>
        <div className="testimonials__card">
          <div className="testimonials__card-content">
            <div className="testimonials__card-blockquote">
              Collaboratively building and sharing beautiful presentations has
              always been a nightmare. With Pitch, it’s a dream. If you work in
              a modern team, this product is indispensable.
            </div>
            <div className="testimonials__card-info">
              <Image
                layout="fill"
                src="/assets/images/aidan.jpg"
                loading="lazy"
                alt=""
                className="testimonials__card-photo"
              />
              <h4 className="testimonials__card-heading">Aidan Hornsby</h4>
              <div className="testimonials__card-role">Founder of DoubleUp</div>
            </div>
          </div>
        </div>
        <div className="testimonials__card">
          <div className="testimonials__card-content">
            <div className="testimonials__card-blockquote">
              Pitch makes all of my presentations look like I have a full-time
              design team supporting me.
            </div>
            <div className="testimonials__card-info">
              <Image
                layout="fill"
                src="/assets/images/shane.jpg"
                loading="lazy"
                alt=""
                className="testimonials__card-photo"
              />
              <h4 className="testimonials__card-heading">Shane Parrish</h4>
              <div className="testimonials__card-role">
                Founder of Farnam Street
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
