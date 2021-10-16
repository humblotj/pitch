import { RefObject, useCallback, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import lottie, { AnimationItem } from 'lottie-web';

const useAnimation = (
  ref?: RefObject<HTMLDivElement>,
  animationStartEntering = false,
) => {
  const timerRef = useRef<any>(null);

  const loadAnimation = useCallback(
    (animationData: any, className?: string) => {
      const element = ref ? ref.current : document.body;
      if (!element) {
        return;
      }

      return lottie.loadAnimation({
        container: (className
          ? element.querySelector('.' + className)
          : element) as Element,
        renderer: 'canvas' as any,
        animationData,
        loop: false,
        autoplay: false,
      });
    },
    [],
  );

  const lottieAnimate = useCallback(
    (
      animation: AnimationItem | undefined,
      {
        start = 0,
        end = 0,
        duration,
        once = false,
        scrub = true,
        loop = false,
        delay = 0,
      }: {
        start?: number | string;
        end?: number;
        duration?: number;
        once?: boolean;
        scrub?: boolean;
        loop?: boolean;
        delay?: number;
      },
    ) => {
      const element = ref ? ref.current : document.body;
      if (!element || !animation) {
        return;
      }

      if (loop) {
        animation.loop = true;
      }

      let animationStart = start;

      if (typeof start === 'number') {
        animationStart = animationStartEntering
          ? `${
              (element.offsetHeight + window.innerHeight) * (start / 100)
            } bottom`
          : `${start}% ${start}%`;
      }
      let animationEnd = '+=0';
      if (typeof start === 'number') {
        animationEnd = animationStartEntering
          ? `+=${
              (element.offsetHeight + window.innerHeight) *
              ((Math.max(end, start) - start) / 100)
            }`
          : `+=${
              element.offsetHeight * ((Math.max(end, start) - start) / 100)
            }`;
      }

      ScrollTrigger.create({
        trigger: element,
        scrub: scrub && !once && !duration,
        start: animationStart,
        end: animationEnd,
        once,
        onEnter: () => {
          clearTimeout(timerRef.current);
          timerRef.current = setTimeout(() => {
            animation.goToAndPlay(0);
          }, delay * 1000);
        },
      });
    },
    [ref, animationStartEntering],
  );

  const animateFromTo = useCallback(
    (
      className: string,
      {
        from,
        to,
        start,
        end,
        duration,
        immediateRender = true,
        once = false,
        scrub = true,
        toggleActions = undefined,
        bodySelector = false,
        ...rest
      }: {
        from: gsap.TweenVars;
        to: gsap.TweenVars;
        start: number;
        end: number;
        duration?: number;
        immediateRender?: boolean;
        once?: boolean;
        scrub?: boolean;
        toggleActions?: string;
        bodySelector?: boolean;
      },
    ) => {
      const element = ref ? ref.current : document.body;
      if (!element) {
        return;
      }

      const animationStart = animationStartEntering
        ? `${
            (element.offsetHeight + window.innerHeight) * (start / 100)
          } bottom`
        : `${start}% ${start}%`;
      const animationEnd = animationStartEntering
        ? `+=${
            (element.offsetHeight + window.innerHeight) *
            ((Math.max(end, start) - start) / 100)
          }`
        : `+=${element.offsetHeight * ((Math.max(end, start) - start) / 100)}`;

      const targets = (bodySelector ? document.body : element).querySelectorAll(
        '.' + className,
      );
      const vars = {
        ...to,
        immediateRender,
        scrollTrigger: {
          trigger: element,
          scrub: scrub && !once && !duration,
          start: animationStart,
          end: animationEnd,
          once,
          toggleActions,
        },
        ...rest,
      };
      if (duration) {
        vars.duration = duration;
      }

      return gsap.fromTo(targets, from, vars);
    },
    [ref, animationStartEntering],
  );

  const animateTo = useCallback(
    (
      className: string,
      {
        to,
        start = 0,
        end = 0,
        duration,
        immediateRender = true,
        once = false,
        scrub = true,
        toggleActions = 'play none none none',
        bodySelector = false,
        ...rest
      }: {
        to: gsap.TweenVars;
        start?: number;
        end?: number;
        duration?: number;
        immediateRender?: boolean;
        once?: boolean;
        scrub?: boolean;
        toggleActions?: string;
        bodySelector?: boolean;
      },
    ) => {
      const element = ref ? ref.current : document.body;
      if (!element) {
        return;
      }

      const animationStart = animationStartEntering
        ? `${
            (element.offsetHeight + window.innerHeight) * (start / 100)
          } bottom`
        : `${start}% ${start}%`;
      const animationEnd = animationStartEntering
        ? `+=${
            (element.offsetHeight + window.innerHeight) *
            ((Math.max(end, start) - start) / 100)
          }`
        : `+=${element.offsetHeight * ((Math.max(end, start) - start) / 100)}`;

      const targets = (bodySelector ? document.body : element).querySelectorAll(
        '.' + className,
      );

      const vars = {
        ...to,
        immediateRender,
        scrollTrigger: {
          trigger: element,
          scrub: scrub && !once && !duration,
          start: animationStart,
          end: animationEnd,
          once,
          toggleActions,
        },
        ...rest,
      };

      if (duration) {
        vars.duration = duration;
      }

      return gsap.to(targets, vars);
    },
    [ref, animationStartEntering],
  );

  return {
    loadAnimation,
    lottieAnimate,
    animateFromTo,
    animateTo,
  };
};

export default useAnimation;
