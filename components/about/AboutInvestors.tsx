import cn from 'classnames';

import styles from './AboutInvestors.module.css';

const AboutInvestors = () => {
  return (
    <div className={styles.about__investors}>
      <h2 className={styles['about__investors-heading']}>Our Investors</h2>
      <div className={styles['about__investors-container']}>
        <div className={styles['about__investors-wrapper']}>
          <img
            src="/images/thrive.svg"
            loading="lazy"
            alt=""
            className={cn(
              styles['about__investors-logo'],
              styles['about__investors-logo--50space'],
            )}
          />
          <div className={styles['about__investors-name']}>Joshua Kushner</div>
          <div className={styles['about__investors-info']}>
            Founder of Thrive Capital
          </div>
        </div>
        <div className={styles['about__investors-wrapper']}>
          <img
            src="/images/index.svg"
            loading="lazy"
            alt=""
            className={cn(
              styles['about__investors-logo'],
              styles['about__investors-logo--34space'],
            )}
          />
          <div className={styles['about__investors-name']}>Neil Rimer</div>
          <div className={styles['about__investors-info']}>
            Founder of Index Ventures
          </div>
        </div>
        <div className={styles['about__investors-wrapper']}>
          <img
            src="/images/blueyard.svg"
            loading="lazy"
            alt=""
            className={cn(
              styles['about__investors-logo'],
              styles['about__investors-logo--34space'],
            )}
          />
          <div className={styles['about__investors-name']}>
            Ciarán O&#x27;Leary
          </div>
          <div className={styles['about__investors-info']}>
            Founder of BlueYard
          </div>
        </div>
        <div className={styles['about__investors-wrapper']}>
          <img
            src="/images/slack.svg"
            loading="lazy"
            alt=""
            className={cn(
              styles['about__investors-logo'],
              styles['about__investors-logo--50space'],
            )}
          />
          <div className={styles['about__investors-name']}>Slack Fund</div>
        </div>
        <div className={styles['about__investors-wrapper']}>
          <img
            src="/images/zoom.svg"
            loading="lazy"
            alt=""
            className={cn(
              styles['about__investors-logo'],
              styles['about__investors-logo--50space'],
            )}
          />
          <div className={styles['about__investors-name']}>Eric Yuan</div>
          <div className={styles['about__investors-info']}>Founder of Zoom</div>
        </div>
        <div className={styles['about__investors-wrapper']}>
          <img
            src="/images/instagram.svg"
            loading="lazy"
            alt=""
            className={cn(
              styles['about__investors-logo'],
              styles['about__investors-logo--27space'],
            )}
          />
          <div className={styles['about__investors-name']}>
            Kevin Systrom &amp; Mike Krieger
          </div>
          <div className={styles['about__investors-info']}>
            Founders of Instagram
          </div>
        </div>
        <div className={styles['about__investors-wrapper']}>
          <img
            src="/images/superhuman2.svg"
            loading="lazy"
            alt=""
            className={cn(
              styles['about__investors-logo'],
              styles['about__investors-logo--27space'],
            )}
          />
          <div className={styles['about__investors-name']}>Rahul Vohra</div>
          <div className={styles['about__investors-info']}>
            Founder of Superhuman
          </div>
        </div>
        <div className={styles['about__investors-wrapper']}>
          <img
            src="/images/metalab.svg"
            loading="lazy"
            alt=""
            className={cn(
              styles['about__investors-logo'],
              styles['about__investors-logo--27space'],
            )}
          />
          <div className={styles['about__investors-name']}>
            Andrew Wilkinson
          </div>
          <div className={styles['about__investors-info']}>
            Founder of MetaLab
          </div>
        </div>
        <div className={styles['about__investors-wrapper']}>
          <img
            src="/images/framer.svg"
            loading="lazy"
            alt=""
            className={cn(
              styles['about__investors-logo'],
              styles['about__investors-logo--27space'],
            )}
          />
          <div className={styles['about__investors-name']}>Koen Bok</div>
          <div className={styles['about__investors-info']}>
            Founder of Framer
          </div>
        </div>
        <div className={styles['about__investors-wrapper']}>
          <img
            src="/images/datadog.svg"
            loading="lazy"
            alt=""
            className={cn(
              styles['about__investors-logo'],
              styles['about__investors-logo--19space'],
            )}
          />
          <div className={styles['about__investors-name']}>Olivier Pomel</div>
          <div className={styles['about__investors-info']}>
            Founder of Datadog
          </div>
        </div>
        <div className={styles['about__investors-wrapper']}>
          <img
            src="/images/elastic.svg"
            loading="lazy"
            alt=""
            className={cn(
              styles['about__investors-logo'],
              styles['about__investors-logo--19space'],
            )}
          />
          <div className={styles['about__investors-name']}>Simon Willnauer</div>
          <div className={styles['about__investors-info']}>
            Founder of Elastic
          </div>
        </div>
        <div className={styles['about__investors-wrapper']}>
          <img
            src="/images/freigeist.svg"
            loading="lazy"
            alt=""
            className={cn(
              styles['about__investors-logo'],
              styles['about__investors-logo--50space'],
            )}
          />
          <div className={styles['about__investors-name']}>Frank Thelen</div>
          <div className={styles['about__investors-info']}>
            Founder of Freigeist Capital
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutInvestors;
