import type { NextPage } from 'next';
import Head from 'next/head';

import Cta from '../components/common/Cta';
import Decks from '../components/home/Decks';
import Footer from '../components/common/Footer';
import Formating from '../components/home/Formating';
import Hero from '../components/home/Hero';
import Integrations from '../components/home/Integrations';
import Intro from '../components/home/Intro';
import News from '../components/home/News';
import Sharing from '../components/home/Sharing';
import Testimonials from '../components/home/Testimonials';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Pitch | Home</title>
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Clone Website" />
        <meta property="og:title" content="Pitch | Home" />
      </Head>
      <Hero />
      <Intro />
      <Decks />
      <Formating />
      <Integrations />
      <Sharing />
      <News />
      <Testimonials />
      <Cta />
      <Footer />
    </>
  );
};

export default Home;
