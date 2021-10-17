import React, { useEffect, useRef } from 'react';
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import { gsap } from 'gsap';
import cn from 'classnames';

import styles from './Nav.module.css';

const NavDropdown = ({
  isOpen,
  closeNav,
}: {
  isOpen: boolean;
  closeNav: () => void;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const height =
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight;

    if (isOpen) {
      gsap.set(ref.current, {
        display: 'block',
        height: height - 40,
      });
      gsap.to(ref.current!.querySelector('nav'), {
        y: 0,
        duration: 0.4,
      });
    } else {
      const tl = gsap.timeline();
      tl.to(ref.current!.querySelector('nav'), {
        y: '-101%',
        duration: 0.4,
      });
      tl.set(ref.current, {
        display: 'none',
      });
    }
  }, [isOpen]);

  return (
    <div
      ref={ref}
      className="w-nav-overlay"
      onClick={closeNav}
      //   style="height: 971px; display: block;"
    >
      <nav role="navigation" className={cn(styles.nav__menu, 'w-nav-menu')}>
        <Link href="/">
          <a
            className={cn(
              styles['nav__link-div'],
              styles['nav__link-div--white'],
              styles.space,
              styles['w-inline-block'],
              { [styles['w--current']]: router.pathname === '/' },
            )}
          >
            <div className={styles.nav__link}>Home</div>
          </a>
        </Link>
        <Link href="/about">
          <a
            aria-current="page"
            className={cn(
              styles['nav__link-div'],
              styles['nav__link-div--white'],
              styles.space,
              'w-inline-block',
              'w--current',
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
            styles['nav__link-div--white'],
            styles.space,
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
              {
                [styles['w--current']]: router.pathname === '/blog',
              },
            )}
          >
            <div className={styles.nav__link}>Blog</div>
          </a>
        </Link>
        <a
          href="#"
          className={cn(styles['nav__link-div-onlymobile'], 'w-inline-block')}
        >
          <div className={styles.nav__link}>Help Center</div>
        </a>
        <a
          href="#"
          className={cn(styles['nav__link-div-onlymobile'], 'w-inline-block')}
        >
          <div className={styles.nav__link}>What&apos;s New</div>
        </a>
        <a
          href="#"
          className={cn(styles['nav__link-div-onlymobile'], 'w-inline-block')}
        >
          <div className={styles.nav__link}>Constant Change</div>
        </a>
        <div className={styles['nav__link-div-jobs']}>
          <a
            href="#hiring"
            className={cn(
              styles['nav__link-div-jobstext'],
              styles['nav__link-div-jobs--white'],
              'w-inline-block',
            )}
          >
            <div className={styles.nav__link}>Jobs</div>
          </a>
          <div
            className={cn(
              styles['nav__link-div-jobs-counter'],
              styles['nav__link-div-jobs-counter--white'],
            )}
          >
            <p
              className={cn(
                styles['nav__link-jobs-counter'],
                styles['nav__link-jobs-counter--black'],
              )}
            >
              8
            </p>
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
    </div>
  );
};

export default NavDropdown;
