import Link from 'next/link';

import Logo from '../../assets/icons/logo.svg';
import Twitter from '../../assets/icons/twitter.svg';
import Facebook from '../../assets/icons/facebook.svg';
import Linkedin from '../../assets/icons/linkedin.svg';
import Instagram from '../../assets/icons/instagram.svg';

const Footer = () => {
  return (
    <div className="footer wf-section">
      <div className="footer__wrapper">
        <div className="footer__credits">
          <Link href="/">
            <a
              aria-current="page"
              className="footer__logo w-nav-brand w--current"
            >
              <div className="footer__logo-image w-embed">
                <Logo />
              </div>
            </a>
          </Link>
          <div className="footer__copyright">
            © Copyright 2020 Pitch Software GmbH.
          </div>
          <div className="footer__copyright">All rights reserved.</div>
        </div>
        <div className="footer__links-wrapper">
          <h6 className="footer__heading">Company</h6>
          <Link href="/">
            <a aria-current="page" className="footer__link w--current">
              Home
            </a>
          </Link>
          <Link href="/about">
            <a className="footer__link">About</a>
          </Link>
          <Link href="/blog">
            <a className="footer__link">Blog</a>
          </Link>
          <a href="#" className="footer__link">
            Jobs
          </a>
          <a href="#" className="footer__link">
            What’s New
          </a>
          <a href="#" className="footer__link">
            Press Room
          </a>
        </div>
        <div className="footer__links-wrapper">
          <h6 className="footer__heading">Legal</h6>
          <a href="#" className="footer__link">
            Legal Notice
          </a>
          <a href="#" className="footer__link">
            Privacy Policy
          </a>
          <a href="#" className="footer__link">
            Terms of Use
          </a>
          <a href="#" className="footer__link">
            DPA
          </a>
          <a href="#" className="footer__link">
            DMCA Policy
          </a>
          <a href="#" className="footer__link">
            ERDF Support
          </a>
        </div>
        <div className="footer__sm">
          <h6 className="footer__heading">Follow us</h6>
          <div className="footer__sm-wrapper">
            <a href="#" className="footer__sm-link w-inline-block">
              <div className="footer__sm-icon w-embed">
                <Twitter />
              </div>
            </a>
            <a href="#" className="footer__sm-link w-inline-block">
              <div className="footer__sm-icon w-embed">
                <Facebook />
              </div>
            </a>
            <a href="#" className="footer__sm-link w-inline-block">
              <div className="footer__sm-icon w-embed">
                <Linkedin />
              </div>
            </a>
            <a href="#" className="footer__sm-link w-inline-block">
              <div className="footer__sm-icon w-embed">
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
