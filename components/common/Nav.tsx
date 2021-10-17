import type { NextPage } from 'next';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import cn from 'classnames';

import styles from './Nav.module.css';

import Logo from '../../assets/icons/logo.svg';
import DropdownArrow from '../../assets/icons/dropdown-arrow.svg';
import IconExpand from '../../assets/icons/icon-expand.svg';
import { useRouter } from 'next/dist/client/router';

const Nav: NextPage = () => {
  const ref = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const [dropDownOpen, setDropDownOpen] = useState(false);

  useEffect(() => {
    gsap.to(ref.current, {
      opacity: 1,
      scrollTrigger: {
        trigger: document.body,
        start: 'top top',
        toggleActions: 'play none none reset',
      },
      duration: 0.5,
    });
  }, []);

  return (
    <>
      <div
        role="banner"
        className={cn(styles.nav, 'w-nav', {
          [styles['nav--purple']]: router.pathname === '/about',
        })}
      >
        <div className={cn(styles.nav__container, 'w-container')}>
          <Link href="/">
            <a
              aria-current={router.pathname === '/' && 'page'}
              className={cn(styles.nav__logo, 'w-nav-brand', 'w--current')}
            >
              <div className={cn(styles['nav__logo-image'], 'w-embed')}>
                <Logo />
              </div>
            </a>
          </Link>
          <nav role="navigation" className={cn(styles.nav__menu, 'w-nav-menu')}>
            <Link href="/">
              <a
                aria-current={router.pathname === '/' && 'page'}
                className={cn(
                  styles['nav__link-div'],
                  styles['nav__link-div--black'],
                  styles['nav__link-div--space'],
                  'w-inline-block',
                  { [styles['w--current']]: router.pathname === '/' },
                )}
              >
                <div className={styles.nav__link}>Home</div>
              </a>
            </Link>
            <Link href="/about">
              <a
                aria-current={router.pathname === '/about' && 'page'}
                className={cn(
                  styles['nav__link-div'],
                  styles['nav__link-div--black'],
                  styles['nav__link-div--space'],
                  'w-inline-block',
                  { [styles['w--current']]: router.pathname === '/about' },
                )}
              >
                <div className={styles.nav__link}>About</div>
              </a>
            </Link>
            <a
              href="#"
              className={cn(
                styles['nav__link-div'],
                styles['nav__link-div--black'],
                styles['nav__link-div--space'],
                styles['nav__link-div--hidedesktop'],
                'w-inline-block',
              )}
            >
              <div className={styles.nav__link}>Learning</div>
            </a>
            <Link href="/blog">
              <a
                className={cn(
                  styles['nav__link-div-onlymobile'],
                  'w-inline-block',
                )}
              >
                <div className={styles.nav__link}>Blog</div>
              </a>
            </Link>
            <a
              href="#"
              className={cn(
                styles['nav__link-div-onlymobile'],
                'w-inline-block',
              )}
            >
              <div className={styles.nav__link}>Help Center</div>
            </a>
            <a
              href="#"
              className={cn(
                styles['nav__link-div-onlymobile'],
                'w-inline-block',
              )}
            >
              <div className={styles.nav__link}>What&#x27;s New</div>
            </a>
            <a
              href="#"
              className={cn(
                styles['nav__link-div-onlymobile'],
                'w-inline-block',
              )}
            >
              <div className={styles.nav__link}>Constant Change</div>
            </a>
            <div
              className={cn(
                styles['nav__link-div-learning'],
                styles['nav__link-div-learning--space'],
                'w-dropdown',
              )}
              onMouseEnter={() => setDropDownOpen(true)}
              onMouseLeave={() => setDropDownOpen(false)}
            >
              <div
                className={cn(
                  styles['nav__link-wrapper-learning'],
                  'w-dropdown-toggle',
                )}
              >
                <IconExpand />
                <div
                  className={cn(
                    styles['nav__link-learning'],
                    styles['nav__link--8pxspace'],
                    styles['nav__link-learning--black'],
                  )}
                >
                  Learning
                </div>
              </div>
              <nav
                className={cn(styles['nav__dropdown'], 'w-dropdown-list', {
                  'w--open': dropDownOpen,
                })}
              >
                <div className={styles['nav__dropdown-wrapper']}>
                  <div className={cn(styles['nav__dropdown-arrow'], 'w-embed')}>
                    <DropdownArrow />
                  </div>
                  <div className={styles['nav__dropdown-bg']}></div>
                </div>
                <div className={styles['nav__dropdown-links-wrapper']}>
                  <div className={styles['nav__dropdown-links-div']}>
                    <Link href="/blog">
                      <a
                        aria-current={router.pathname === '/blog' && 'page'}
                        className={cn(
                          styles['nav__dropdown-link-div'],
                          styles['nav__dropdown-link-div--black'],
                          styles['nav__dropdown-link-div--space'],
                          'w-inline-block',
                          {
                            [styles['w--current']]: router.pathname === '/blog',
                          },
                        )}
                      >
                        <div className={styles['nav__dropdown-link']}>Blog</div>
                      </a>
                    </Link>
                    <a
                      href="#"
                      className={cn(
                        styles['nav__dropdown-link-div'],
                        styles['nav__dropdown-link-div--black'],
                        styles['nav__dropdown-link-div--space'],
                        'w-inline-block',
                      )}
                    >
                      <div className={styles['nav__dropdown-link']}>
                        Help Center
                      </div>
                    </a>
                    <a
                      href="#"
                      className={cn(
                        styles['nav__dropdown-link-div'],
                        styles['nav__dropdown-link-div--black'],
                        styles['nav__dropdown-link-div--space'],
                        'w-inline-block',
                      )}
                    >
                      <div className={styles['nav__dropdown-link']}>
                        What&#x27;s New
                      </div>
                    </a>
                    <a
                      href="#"
                      className={cn(
                        styles['nav__dropdown-link-div'],
                        styles['nav__dropdown-link-div--black'],
                        'w-inline-block',
                      )}
                    >
                      <div className={styles['nav__dropdown-link']}>
                        Constant Change
                      </div>
                    </a>
                  </div>
                </div>
              </nav>
            </div>
            <div className={styles['nav__link-div-jobs']}>
              <a
                href="#"
                className={cn(
                  styles['nav__link-div-jobstext'],
                  'w-inline-block',
                )}
              >
                <div className={styles.nav__link}>Jobs</div>
              </a>
              <div className={styles['nav__link-div-jobs-counter']}>
                <p className={styles['nav__link-jobs-counter']}>8</p>
              </div>
            </div>
            <a
              href="#"
              className={cn(
                styles['nav__link-div-jobs-mobileonly'],
                'w-inline-block',
              )}
            >
              <div className={styles.nav__link}>Jobs</div>
              <div className={styles['nav__link-div-jobs-counter']}>
                <p className={styles['nav__link-jobs-counter']}>8</p>
              </div>
            </a>
          </nav>
          <div
            id="w-node-_32e10129-2707-fa69-8e71-2a2e29fe89df-29fe89b6"
            className={styles.nav__buttons}
          >
            <a
              href="#"
              className={cn(
                styles.button,
                styles['button--white-whitebg'],
                styles['button--space'],
                styles['button--nomobile'],
                'w-button',
              )}
            >
              Login
            </a>
            <a
              href="#"
              className={cn(styles.button, styles['button--blue'], 'w-button')}
            >
              Get early access
            </a>
          </div>
          <button className={cn(styles.nav__mobilebutton, 'w-nav-button')}>
            <span className={cn(styles.nav__mobileicon)}></span>
          </button>
        </div>
      </div>
      <div ref={ref} className={styles['nav-shadow']}></div>
    </>
  );
};

export default Nav;
