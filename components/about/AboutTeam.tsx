import type { NextPage } from 'next';
import cn from 'classnames';

import styles from './AboutTeam.module.css';
import Twitter from '../../assets/icons/twitter.svg';
import Linkedin from '../../assets/icons/linkedin.svg';

const AboutTeam: NextPage = () => {
  return (
    <div className={styles.about__team}>
      <div className={styles['about__photos-grid']}>
        <div
          className={cn(styles['about__wrapper-teammember'], styles.christian)}
        >
          <div className={styles['about__infowrapper-teammember']}>
            <h4 className={styles['about__name-teammember']}>
              Christian Reber
            </h4>
            <div className={styles['about__role-teammember']}>
              Founder &amp; CEO
            </div>
            <div className={styles['about__socialwrapper-teammember']}>
              <a
                href="#"
                className={cn(
                  styles['about__sociallink-teammember'],
                  'w-inline-block',
                )}
              >
                <div
                  className={cn(styles['about__smicon-teammember'], 'w-embed')}
                >
                  {/* <svg
                    width="26"
                    height="26"
                    viewBox="0 0 26 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8.31829 23.3331C17.8228 23.3331 23.0236 15.4513 23.0236 8.62782C23.0236 8.40609 23.0236 8.18435 23.0135 7.96261C24.0214 7.23692 24.8983 6.31973 25.5938 5.28159C24.6665 5.69483 23.6687 5.96696 22.6204 6.09799C23.6888 5.46301 24.5052 4.44503 24.8983 3.23554C23.9005 3.83021 22.7918 4.25352 21.6125 4.48534C20.6651 3.47744 19.3246 2.85254 17.843 2.85254C14.9906 2.85254 12.6724 5.17072 12.6724 8.02308C12.6724 8.42624 12.7228 8.81933 12.8035 9.20233C8.50979 8.99067 4.69992 6.92447 2.14992 3.79997C1.70644 4.56597 1.45447 5.45293 1.45447 6.40036C1.45447 8.19443 2.37166 9.77683 3.75249 10.7041C2.90585 10.6739 2.10961 10.442 1.41415 10.059C1.41415 10.0792 1.41415 10.0994 1.41415 10.1296C1.41415 12.6292 3.19814 14.7256 5.55663 15.1994C5.12324 15.3203 4.66968 15.3808 4.19597 15.3808C3.86336 15.3808 3.54083 15.3505 3.22838 15.2901C3.88352 17.3462 5.79853 18.8379 8.05623 18.8782C6.28233 20.2691 4.05486 21.0956 1.63589 21.0956C1.22265 21.0956 0.809411 21.0754 0.40625 21.025C2.68411 22.4764 5.40545 23.3331 8.31829 23.3331Z"
                      fill="currentColor"
                    ></path>
                  </svg> */}
                  <Twitter />
                </div>
              </a>
              <a
                href="#"
                className={cn(
                  styles['about__sociallink-teammember'],
                  'w-inline-block',
                )}
              >
                <div
                  className={cn(styles['about__smicon-teammember'], 'w-embed')}
                >
                  {/* <svg
                    width="26"
                    height="26"
                    viewBox="0 0 26 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M21.2977 21.2966H17.8037V15.8274C17.8037 14.5237 17.7802 12.8468 15.9867 12.8468C14.1697 12.8468 13.8921 14.2684 13.8921 15.7345V21.2966H10.4008V10.052H13.7494V11.5888H13.7979C14.2652 10.7052 15.4041 9.77319 17.1047 9.77319C20.6445 9.77319 21.2977 12.1006 21.2977 15.1297V21.2966ZM6.46038 8.51658C5.33717 8.51658 4.43127 7.60812 4.43127 6.4889C4.43127 5.37099 5.33717 4.46252 6.46038 4.46252C7.57704 4.46252 8.48556 5.37099 8.48556 6.4889C8.48556 7.60812 7.57704 8.51658 6.46038 8.51658ZM4.7088 21.2967H8.20803V10.0521H4.7088V21.2967ZM23.0375 1.21875H2.95593C1.99766 1.21875 1.21875 1.9793 1.21875 2.91787V23.0808C1.21875 24.0194 1.99766 24.7812 2.95593 24.7812H23.0375C23.9984 24.7812 24.7812 24.0194 24.7812 23.0808V2.91787C24.7812 1.9793 23.9984 1.21875 23.0375 1.21875Z"
                      fill="currentColor"
                    ></path>
                  </svg> */}
                  <Linkedin />
                </div>
              </a>
            </div>
          </div>
          <div className={styles['about__overlay-teammember']}></div>
          <img
            src="/images/christian.jpg"
            width="1260"
            height="960"
            alt=""
            className={styles['about__photo-teammember']}
          />
        </div>
        <div className={styles['about__wrapper-teammember']}>
          <div className={styles['about__infowrapper-teammember']}>
            <h4 className={styles['about__name-teammember']}>
              Charlette Prevot
            </h4>
            <div className={styles['about__role-teammember']}>
              Co-Founder &amp; Head of Operations
            </div>
          </div>
          <div className={styles['about__overlay-teammember']}></div>
          <img
            src="/images/charlette.jpg"
            alt=""
            className={styles['about__photo-teammember']}
            width="600"
            height="456"
          />
        </div>
        <div className={styles['about__wrapper-teammember']}>
          <div className={styles['about__infowrapper-teammember']}>
            <h4 className={styles['about__name-teammember']}>Jan Martin</h4>
            <div className={styles['about__role-teammember']}>
              Co-Founder &amp; Designer
            </div>
            <div className={styles['about__socialwrapper-teammember']}>
              <a
                href="#"
                className={cn(
                  styles['about__sociallink-teammember'],
                  'w-inline-block',
                )}
              >
                <div
                  className={cn(styles['about__smicon-teammember'], 'w-embed')}
                >
                  <Linkedin />
                </div>
              </a>
            </div>
          </div>
          <div className={styles['about__overlay-teammember']}></div>
          <img
            src="/images/jan.jpg"
            alt=""
            className={styles['about__photo-teammember']}
            width="600"
            height="456"
          />
        </div>
        <div className={styles['about__wrapper-teammember']}>
          <div className={styles['about__infowrapper-teammember']}>
            <h4 className={styles['about__name-teammember']}>Eric Labod</h4>
            <div className={styles['about__role-teammember']}>
              Co-Founder &amp; QA Engineer
            </div>
            <div className={styles['about__socialwrapper-teammember']}>
              <a
                href="#"
                className={cn(
                  styles['about__sociallink-teammember'],
                  'w-inline-block',
                )}
              >
                <div
                  className={cn(styles['about__smicon-teammember'], 'w-embed')}
                >
                  <Linkedin />
                </div>
              </a>
            </div>
          </div>
          <div className={styles['about__overlay-teammember']}></div>
          <img
            src="/images/eric.jpg"
            alt=""
            className={styles['about__photo-teammember']}
            width="600"
            height="456"
          />
        </div>
        <div className={styles['about__wrapper-teammember']}>
          <div className={styles['about__infowrapper-teammember']}>
            <h4 className={styles['about__name-teammember']}>Marvin Labod</h4>
            <div className={styles['about__role-teammember']}>
              Co-Founder &amp; Software Engineer
              <br />
            </div>
          </div>
          <div className={styles['about__overlay-teammember']}></div>
          <img
            src="/images/marvin.jpg"
            alt=""
            className={styles['about__photo-teammember']}
            width="600"
            height="456"
          />
        </div>
        <div className={cn(styles['about__wrapper-teammember'], styles.adam)}>
          <div className={styles['about__infowrapper-teammember']}>
            <h4 className={styles['about__name-teammember']}>Adam Renklint</h4>
            <div className={styles['about__role-teammember']}>
              Co-Founder &amp; CTO
              <br />
            </div>
            <div className={styles['about__socialwrapper-teammember']}>
              <a
                href="#"
                className={cn(
                  styles['about__sociallink-teammember'],
                  'w-inline-block',
                )}
              >
                <div
                  className={cn(styles['about__smicon-teammember'], 'w-embed')}
                >
                  <Twitter />
                </div>
              </a>
            </div>
          </div>
          <div className={styles['about__overlay-teammember']}></div>
          <img
            src="/images/adam.jpg"
            width="1260"
            height="961"
            alt=""
            className={styles['about__photo-teammember']}
          />
        </div>
      </div>
      <div className={cn(styles['about__2photos-wrapper'], styles.vanessa)}>
        <div className={styles['about__wrapper-teammember']}>
          <div className={styles['about__infowrapper-teammember']}>
            <h4 className={styles['about__name-teammember']}>Vanessa Stock</h4>
            <div className={styles['about__role-teammember']}>
              Co-Founder &amp; Head of HR
              <br />
            </div>
            <div className={styles['about__socialwrapper-teammember']}>
              <a
                href="#"
                className={cn(
                  styles['about__sociallink-teammember'],
                  'w-inline-block',
                )}
              >
                <div
                  className={cn(styles['about__smicon-teammember'], 'w-embed')}
                >
                  <Linkedin />
                </div>
              </a>
            </div>
          </div>
          <div className={styles['about__overlay-teammember']}></div>
          <img
            src="/images/vanessa.jpg"
            alt=""
            className={styles['about__photo-teammember']}
            width="600"
            height="456"
          />
        </div>
        <div className={cn(styles['about__wrapper-teammember'], styles.misha)}>
          <div className={styles['about__infowrapper-teammember']}>
            <h4 className={styles['about__name-teammember']}>
              Misha Karpenko
              <br />
            </h4>
            <div className={styles['about__role-teammember']}>
              Co-Founder &amp; Software Engineer
              <br />
            </div>
            <div className={styles['about__socialwrapper-teammember']}>
              <a
                href="#"
                className={cn(
                  styles['about__sociallink-teammember'],
                  'w-inline-block',
                )}
              >
                <div
                  className={cn(styles['about__smicon-teammember'], 'w-embed')}
                >
                  <Linkedin />
                </div>
              </a>
            </div>
          </div>
          <div className={styles['about__overlay-teammember']}></div>
          <img
            src="/images/misha.jpg"
            alt=""
            className={styles['about__photo-teammember']}
            width="600"
            height="456"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutTeam;
