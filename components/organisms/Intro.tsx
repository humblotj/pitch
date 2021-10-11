import Image from 'next/image';

const Intro = () => {
  return (
    <div className="intro wf-section">
      <div className="intro__logos">
        <h5 className="intro__logos-heading">Used by teams like</h5>
        <div className="intro__logos-wrapper">
          <Image
            src="/assets/images/superhuman_1.svg"
            alt=""
            className="intro__logo intro__logo--rmargin"
            layout="fill"
          />
          <Image
            src="/assets/images/eyeEm.svg"
            alt=""
            className="intro__logo intro__logo--rmargin"
            layout="fill"
          />
          <Image
            src="/assets/images/chart-mogul.svg"
            alt=""
            className="intro__logo intro__logo--rmargin"
            layout="fill"
          />
          <Image
            src="/assets/images/notion.svg"
            alt=""
            className="intro__logo intro__logo--rmargin"
            layout="fill"
          />
          <Image
            src="/assets/images/dashdash.svg"
            alt=""
            className="intro__logo"
            layout="fill"
          />
        </div>
      </div>
      <div className="intro__workflow">
        <div className="intro__workflow-text">
          <h2 className="intro__workflow-heading">Workflow that just works.</h2>
          <p className="intro__workflow-paragraph">
            Collaboration should be simple, straightforward, and effective. With
            Pitch, it is. Discuss current activities, manage tasks, and stay
            productive as a team. Create on any device, online or offline, and
            get great work done faster.
          </p>
        </div>
        <div className="intro__workflow-lottie"></div>
      </div>
    </div>
  );
};

export default Intro;
