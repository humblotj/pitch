import Link from 'next/link';
import cn from 'classnames';

import styles from './Footer.module.css';

import Logo from '../../assets/icons/logo.svg';
import Twitter from '../../assets/icons/twitter.svg';
import Facebook from '../../assets/icons/facebook.svg';
import Linkedin from '../../assets/icons/linkedin.svg';
import Instagram from '../../assets/icons/instagram.svg';

const Footer = () => {
  return (
    <div className={cn(styles.footer, 'wf-section')}>
      <div className={styles.footer__wrapper}>
        <div className={styles.footer__credits}>
          <Link href="/">
            <a
              aria-current="page"
              className={cn(styles.footer__logo, 'w-nav-brand', 'w--current')}
            >
              <div className={cn(styles['footer__logo-image'], 'w-embed')}>
                <Logo />
              </div>
            </a>
          </Link>
          <div className={styles.footer__copyright}>
            © Copyright 2020 Pitch Software GmbH.
          </div>
          <div className={styles.footer__copyright}>All rights reserved.</div>
        </div>
        <div className={styles['footer__links-wrapper']}>
          <h6 className={styles.footer__heading}>Company</h6>
          <Link href="/">
            <a
              aria-current="page"
              className={cn(styles.footer__link, 'w--current')}
            >
              Home
            </a>
          </Link>
          <Link href="/about">
            <a className={styles.footer__link}>About</a>
          </Link>
          <Link href="/blog">
            <a className={styles.footer__link}>Blog</a>
          </Link>
          <a href="#" className={styles.footer__link}>
            Jobs
          </a>
          <a href="#" className={styles.footer__link}>
            What’s New
          </a>
          <a href="#" className={styles.footer__link}>
            Press Room
          </a>
        </div>
        <div className={styles['footer__links-wrapper']}>
          <h6 className={styles.footer__heading}>Legal</h6>
          <a href="#" className={styles.footer__link}>
            Legal Notice
          </a>
          <a href="#" className={styles.footer__link}>
            Privacy Policy
          </a>
          <a href="#" className={styles.footer__link}>
            Terms of Use
          </a>
          <a href="#" className={styles.footer__link}>
            DPA
          </a>
          <a href="#" className={styles.footer__link}>
            DMCA Policy
          </a>
          <a href="#" className={styles.footer__link}>
            ERDF Support
          </a>
        </div>
        <div className={styles.footer__sm}>
          <h6 className={styles.footer__heading}>Follow us</h6>
          <div className={styles['footer__sm-wrapper']}>
            <a
              href="#"
              className={cn(styles['footer__sm-link'], 'w-inline-block')}
            >
              <div className={cn(styles['footer__sm-icon'], 'w-embed')}>
                <Twitter />
              </div>
            </a>
            <a
              href="#"
              className={cn(styles['footer__sm-link'], 'w-inline-block')}
            >
              <div className={cn(styles['footer__sm-icon'], 'w-embed')}>
                <Facebook />
              </div>
            </a>
            <a
              href="#"
              className={cn(styles['footer__sm-link'], 'w-inline-block')}
            >
              <div className={cn(styles['footer__sm-icon'], 'w-embed')}>
                <Linkedin />
              </div>
            </a>
            <a
              href="#"
              className={cn(styles['footer__sm-link'], 'w-inline-block')}
            >
              <div className={cn(styles['footer__sm-icon'], 'w-embed')}>
                <Instagram />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
