import type { NextPage } from 'next';
import Head from 'next/head';

import Cta from '../components/organisms/Cta';
import Decks from '../components/organisms/Decks';
import Footer from '../components/organisms/Footer';
import Formating from '../components/organisms/Formating';
import Hero from '../components/organisms/Hero';
import Integrations from '../components/organisms/Integrations';
import Intro from '../components/organisms/Intro';
import Nav from '../components/organisms/Nav';
import News from '../components/organisms/News';
import Sharing from '../components/organisms/Sharing';
import Testimonials from '../components/organisms/Testimonials';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <link
          rel="preload"
          href="/fonts/eina-bold.woff2"
          as="font"
          crossOrigin=""
          type="font/woff2"
        />
        <link
          rel="preload"
          href="/fonts/eina-regular.woff2"
          as="font"
          crossOrigin=""
          type="font/woff2"
        />
        <link
          rel="preload"
          href="/fonts/markpro-heavy-1.woff2"
          as="font"
          crossOrigin=""
          type="font/woff2"
        />
      </Head>
      <Nav />
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
