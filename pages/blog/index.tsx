import type { NextPage } from 'next';
import BlogArticles from '../../components/blog/BlogArticles';
import BlogEssential from '../../components/blog/BlogEssential';
import BlogHero from '../../components/blog/BlogHero';
import BlogRecent from '../../components/blog/BlogRecent';
import NewsletterCta from '../../components/blog/NewsletterCta';
import Footer from '../../components/common/Footer';
import Nav from '../../components/common/Nav';

const Blog: NextPage = () => {
  return (
    <>
      <Nav />
      <BlogHero />
      <BlogRecent />
      <NewsletterCta />
      <BlogEssential />
      <BlogArticles />
      <Footer />
    </>
  );
};

export default Blog;
