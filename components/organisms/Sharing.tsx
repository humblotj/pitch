import Image from 'next/image';

const Sharing = () => {
  return (
    <div className="sharing wf-section">
      <div className="sharing__text">
        <h2 className="sharing__text-heading">Ideas that can go anywhere</h2>
        <p className="sharing__text-paragraph">
          There are no limits to how — and with whom — you can share. Present to
          a client or at a conference. Keep presentations private for your team,
          or publish them for the whole world to see.
        </p>
      </div>
      <div className="sharing__wrapper">
        <div className="sharing__plane-wrapper">
          <Image
            layout="fill"
            src="/assets/images/plane_800w.png"
            alt=""
            className="sharing__plane"
          />
          <Image
            layout="fill"
            src="/assets/images/shadow_1shadow.png"
            alt=""
            className="sharing__plane-shadow"
          />
        </div>
        <Image
          layout="fill"
          src="/assets/images/invite2x.png"
          alt=""
          className="sharing__invite"
        />
        <Image
          layout="fill"
          src="/assets/images/access.svg"
          alt=""
          className="sharing__access"
        />
        <Image
          layout="fill"
          src="/assets/images/hand_600w.png"
          alt=""
          className="sharing__hand"
        />
        <Image
          layout="fill"
          src="/assets/images/tablet_2400w.jpg"
          alt=""
          className="sharing__image"
        />
      </div>
    </div>
  );
};

export default Sharing;
