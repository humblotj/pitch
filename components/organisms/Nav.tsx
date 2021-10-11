import Link from 'next/link';

import styles from './Nav.module.css';
import Logo from '../../assets/icons/logo.svg';
import DropdownArrow from '../../assets/icons/dropdown-arrow.svg';

const Nav = () => {
  return (
    <>
      <div role="banner" className="nav w-nav">
        <div className="nav__container w-container">
          <Link href="/">
            <a aria-current="page" className="nav__logo w-nav-brand w--current">
              <div className="nav__logo-image w-embed">
                <Logo />
              </div>
            </a>
          </Link>
          <nav role="navigation" className="nav__menu w-nav-menu">
            <Link href="/">
              <a
                aria-current="page"
                className="nav__link-div nav__link-div--black nav__link-div--space w-inline-block w--current"
              >
                <div className="nav__link">Home</div>
              </a>
            </Link>
            <Link href="/about">
              <a className="nav__link-div nav__link-div--black nav__link-div--space w-inline-block">
                <div className="nav__link">About</div>
              </a>
            </Link>
            <a
              href="#"
              className="nav__link-div nav__link-div--black nav__link-div--space nav__link-div--hidedesktop w-inline-block"
            >
              <div className="nav__link">Learning</div>
            </a>
            <Link href="/blog">
              <a className="nav__link-div-onlymobile w-inline-block">
                <div className="nav__link">Blog</div>
              </a>
            </Link>
            <a href="#" className="nav__link-div-onlymobile w-inline-block">
              <div className="nav__link">Help Center</div>
            </a>
            <a href="#" className="nav__link-div-onlymobile w-inline-block">
              <div className="nav__link">What&#x27;s New</div>
            </a>
            <a href="#" className="nav__link-div-onlymobile w-inline-block">
              <div className="nav__link">Constant Change</div>
            </a>
            <div className="nav__link-div-learning nav__link-div-learning--space w-dropdown">
              <div className="nav__link-wrapper-learning w-dropdown-toggle">
                <div className="nav__link-div-learning-arrow w-icon-dropdown-toggle"></div>
                <div className="nav__link-learning nav__link--8pxspace nav__link-learning--black">
                  Learning
                </div>
              </div>
              <nav className="nav__dropdown w-dropdown-list">
                <div className="nav__dropdown-wrapper">
                  <div className="nav__dropdown-arrow w-embed">
                    <DropdownArrow />
                  </div>
                  <div className="nav__dropdown-bg"></div>
                </div>
                <div className="nav__dropdown-links-wrapper">
                  <div className="nav__dropdown-links-div">
                    <Link href="/blog">
                      <a className="nav__dropdown-link-div nav__dropdown-link-div--black nav__dropdown-link-div--space w-inline-block">
                        <div className="nav__dropdown-link">Blog</div>
                      </a>
                    </Link>
                    <a
                      href="#"
                      className="nav__dropdown-link-div nav__dropdown-link-div--black nav__dropdown-link-div--space w-inline-block"
                    >
                      <div className="nav__dropdown-link">Help Center</div>
                    </a>
                    <a
                      href="#"
                      className="nav__dropdown-link-div nav__dropdown-link-div--black nav__dropdown-link-div--space w-inline-block"
                    >
                      <div className="nav__dropdown-link">What&#x27;s New</div>
                    </a>
                    <a
                      href="#"
                      className="nav__dropdown-link-div nav__dropdown-link-div--black w-inline-block"
                    >
                      <div className="nav__dropdown-link">Constant Change</div>
                    </a>
                  </div>
                </div>
              </nav>
            </div>
            <div className="nav__link-div-jobs">
              <a
                href="#"
                className="nav__link-div-jobstext nav__link-div-jobs--black w-inline-block"
              >
                <div className="nav__link">Jobs</div>
              </a>
              <div className="nav__link-div-jobs-counter">
                <p className="nav__link-jobs-counter">8</p>
              </div>
            </div>
            <a
              href="#"
              className="nav__link-div-jobs-mobileonly w-inline-block"
            >
              <div className="nav__link">Jobs</div>
              <div className="nav__link-div-jobs-counter">
                <p className="nav__link-jobs-counter">8</p>
              </div>
            </a>
          </nav>
          <div
            id="w-node-_32e10129-2707-fa69-8e71-2a2e29fe89df-29fe89b6"
            className="nav__buttons"
          >
            <a
              href="#"
              className="button button--white-whitebg button--space button--nomobile w-button"
            >
              Login
            </a>
            <a href="#" className="button button--blue w-button">
              Get early access
            </a>
          </div>
          <div className="nav__mobilebutton w-nav-button">
            <div className="nav__mobileicon w-icon-nav-menu"></div>
          </div>
        </div>
      </div>
      <div className="nav-shadow"></div>
    </>
  );
};

export default Nav;
