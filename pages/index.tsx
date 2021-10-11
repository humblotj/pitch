import type { NextPage } from 'next';

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
