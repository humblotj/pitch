import Image from 'next/image';

import CardButtonarrow from '../../assets/icons/card-buttonarrow.svg';

const News = () => {
  return (
    <div className="news wf-section">
      <div className="news__wrapper">
        <div className="news__card">
          <div className="news__card-content">
            <a href="#" className="news__card-linkh w-inline-block">
              <h3 className="news__card-heading">
                Our plans for Pitch in 2020
              </h3>
            </a>
            <Image
              layout="fill"
              src="/assets/images/stealthreveal_header_thumbnail.jpg"
              //   srcSet="images/stealthreveal_header_thumbnail-p-500.jpeg 500w, images/stealthreveal_header_thumbnail-p-800.jpeg 800w, images/stealthreveal_header_thumbnail-p-1080.jpeg 1080w, images/stealthreveal_header_thumbnail.jpg 1370w"
              sizes="(max-width: 479px) 100vw, (max-width: 767px) 77vw, (max-width: 991px) 76vw, (max-width: 1279px) 32vw, (max-width: 1919px) 29vw, 544.984375px"
              alt=""
              className="news__card-image"
            />
          </div>
          <a href="#" className="news__card-button w-inline-block">
            <div className="news__card-buttontext">Read more</div>
            <div className="news__card-buttonarrow w-embed">
              <CardButtonarrow />
            </div>
          </a>
        </div>
        <div className="news__card news__card--purple">
          <div className="news__card-content">
            <h3 className="news__card-heading news__card-heading--white">
              Introducing Constant Change
            </h3>
            <p className="news__card-paragraph">
              How do you keep up in a modern workplace where the only constant
              is change? Constant Change is a new email series that explores how
              the past informs the future.
            </p>
          </div>
          <a href="#" className="news__card-button w-inline-block">
            <div className="news__card-buttontext news__card-buttontext--white">
              Learn more
            </div>
            <div className="news__card-buttonarrow news__card-buttonarrow--white w-embed">
              <CardButtonarrow />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default News;
