import type { NextPage } from 'next';
import Head from 'next/head';
import cn from 'classnames';

import styles from './About.module.css';
import AboutCulture from '../../components/about/AboutCulture';
import AboutHeading from '../../components/about/AboutHeading';
import AboutHero from '../../components/about/AboutHero';
import AboutIntro from '../../components/about/AboutIntro';
import AboutInvestors from '../../components/about/AboutInvestors';
import AboutJobs from '../../components/about/AboutJobs';
import AboutNumbers from '../../components/about/AboutNumbers';
import AboutParagraph1 from '../../components/about/AboutParagraph1';
import AboutParagraph2 from '../../components/about/AboutParagraph2';
import AboutTeam from '../../components/about/AboutTeam';
import Nav from '../../components/common/Nav';
import Cta from '../../components/common/Cta';
import Footer from '../../components/common/Footer';

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>Pitch | About</title>
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Clone Website" />
        <meta property="og:title" content="Pitch | About" />
      </Head>
      <Nav />
      <AboutHero />
      <div className={cn(styles['div-animated'], 'div-animated')}>
        <AboutIntro />
        <div className={cn(styles.about, 'wf-section')}>
          <AboutHeading />
          <AboutParagraph1 />
          <AboutTeam />
          <AboutParagraph2 />
          <AboutCulture />
          <AboutInvestors />
        </div>
        <AboutNumbers />
        <AboutJobs />
        <Cta />
        <Footer />
      </div>
    </>
  );
};

export default About;
