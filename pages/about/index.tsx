import type { NextPage } from 'next';
import AboutCulture from '../../components/about/AboutCulture';
import AboutHero from '../../components/about/AboutHero';
import AboutIntro from '../../components/about/AboutIntro';
import AboutInvestors from '../../components/about/AboutInvestors';
import AboutJobs from '../../components/about/AboutJobs';
import AboutNumbers from '../../components/about/AboutNumbers';
import AboutTeam from '../../components/about/AboutTeam';

const About: NextPage = () => {
  return (
    <>
      <AboutHero />
      <div className="div-animated">
        <AboutIntro />
        <div className="about wf-section">
          <div className="about__heading-wrapper">
            <h1 className="about__heading">Pitch is a new beginning</h1>
          </div>
          <img src="/images//confetti.png" alt="" className="about__confetti" />
          <div className="about__paragraph1-wrapper">
            <p className="about__paragraph1">
              When we needed Pitch, it wasn’t there. So we built it. We
              rethought presentations from the ground up: how we create them,
              how we use them, and how we share them. Pitch is answering years
              of frustrations about how hard it is to bring ideas to life,
              easily and in style.
              <br />
              <br />
              We are a team of eight co-founders who previously built
              Wunderlist. Pitch is the modern presentation software we wish we
              had: designed to improve the way presentations are crafted and
              knowledge is shared.
            </p>
          </div>
          <AboutTeam />
          <div className="about__paragraph2-wrapper">
            <p className="about__paragraph2">
              We’re a group of people who love collaborating to create
              well-crafted, delightful products. For us, the best part of
              building a company is taking an idea that everyone believes in and
              working together to turn that into a reality. That&#x27;s why
              we&#x27;re excited about Pitch: We&#x27;re creating a product that
              helps people work better together.
            </p>
          </div>
          <AboutCulture />
          <AboutInvestors />
        </div>
        <AboutNumbers />
        <AboutJobs />
      </div>
    </>
  );
};

export default About;
