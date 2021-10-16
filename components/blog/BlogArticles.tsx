import type { NextPage } from 'next';
import cn from 'classnames';
import BlogArticle from './BlogArticle';

import styles from './BlogArticles.module.css';
import BlogArticlesWrapper from './BlogArticlesWrapper';

const articles1 = [
  {
    index: 1,
    heading: `A new look &amp; new ways to collaborate`,
    paragraph: `We&#x27;re debuting a new look for Pitch, and with it, new ways to
    collaborate and create presentations faster than ever before.`,
  },
  {
    index: 2,
    heading: `3 months, 50+ updates: Q2 in review`,
    paragraph: `Over the past three months, we’ve shipped dozens of new features and
    improvements. See what we’ve been up to and get an update on our beta.`,
  },
  {
    index: 3,
    heading: `How Supercast raised $2 million with Pitch`,
    paragraph: `From side project to startup — How Supercast used Pitch to raise $2M
    and spin off a big idea into a new business`,
  },
];

const articles2 = [
  {
    index: 4,
    heading: `Why you should build features users don&#x27;t ask for`,
    paragraph: `How we use Pitch at Pitch, and the different ways we weave user
    research into the fabric of our company culture`,
  },
  {
    index: 5,
    heading: `Communicating &amp; collaborating through change`,
    paragraph: ` I&#x27;ve worked remotely my entire career. Here&#x27;s what
    I&#x27;ve learned about leading, communicating, and collaborating
    through change and challenges.`,
  },
  {
    index: 6,
    heading: `Designing in the open: How we make design accessible`,
    paragraph: `Our Head of Design shares how Pitch builds an open design culture
    that encourages collaboration across the company.`,
  },
];

const articles3 = [
  {
    index: 7,
    heading: `A peek into our template creation process`,
    paragraph: `Tee Tran oversees the creation of all of our presentation
    templates, and in this post, she gives us a look inside her design
    process.`,
  },
  {
    index: 8,
    heading: `Shining a spotlight on our beta users`,
    paragraph: `We’re ready to showcase how some of our very first users are using
    Pitch to raise money, work faster, and communicate more
    effectively.`,
  },
  {
    index: 9,
    heading: `Our plans for Pitch in 2020`,
    paragraph: `We’ve been busy behind the scenes working to build the future of
    presentations. It’s time to give you a peek at what we’ve been up
    to and share what’s coming next in 2020.`,
  },
];

const articles4 = [
  {
    index: 10,
    heading: `On inclusivity in a modern workplace`,
    paragraph: `We want to build great software, but more than that, we want to
    build a great company, an inclusive workplace where all people are
    able to create, lead, innovate, and thrive.`,
  },
  {
    index: 11,
    heading: `Announcing our limited preview beta &amp; new funding`,
    paragraph: `We&#x27;re inviting the first teams and companies to use Pitch,
    opening up our invite-only beta with the help of some additional
    funding.`,
  },
  {
    index: 12,
    heading: `Pitch raises $19M from Index, Slack &amp; more`,
    paragraph: `Today we are proud to announce a $19M Series A, led by Index
    Ventures and our existing investor BlueYard.`,
  },
];

const BlogArticles: NextPage = () => {
  return (
    <div className={cn(styles['blog-articles'], 'wf-section')}>
      <div className={styles['blog-articles__container']}>
        <h5 className={styles['blog-articles__heading']}>more articles</h5>
        <div className={styles['divider-1184']}></div>
        <div className={styles['blog-articles__wrapper-mobile']}>
          {articles1.map((article) => (
            <BlogArticle key={article.index} {...article} animate />
          ))}
          {articles2.map((article) => (
            <BlogArticle key={article.index} {...article} animate />
          ))}
          {articles3.map((article) => (
            <BlogArticle key={article.index} {...article} animate />
          ))}
          {articles4.map((article) => (
            <BlogArticle key={article.index} {...article} animate />
          ))}
        </div>
        <BlogArticlesWrapper articles={articles1} />
        <BlogArticlesWrapper articles={articles2} />
        <BlogArticlesWrapper articles={articles3} />
        <BlogArticlesWrapper articles={articles4} />
      </div>
    </div>
  );
};

export default BlogArticles;
