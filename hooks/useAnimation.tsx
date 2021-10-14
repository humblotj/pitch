import { RefObject, useCallback, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import lottie, { AnimationItem } from 'lottie-web';

const useAnimation = (
  ref: RefObject<HTMLDivElement>,
  animationStartEntering = false,
) => {
  const timerRef = useRef<any>(null);

  const loadAnimation = useCallback(
    (animationData: any, className?: string) => {
      const element = ref.current;
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
        start?: number;
        end?: number;
        duration?: number;
        once?: boolean;
        scrub?: boolean;
        loop?: boolean;
        delay?: number;
      },
    ) => {
      const element = ref.current;
      if (!element || !animation) {
        return;
      }

      if (loop) {
        animation.loop = true;
      }

      const animationStart = animationStartEntering
        ? `${
            (element.offsetHeight + window.innerHeight) * (start / 100)
          } bottom`
        : `${start}% ${start}%`;
      const animationEnd = animationStartEntering
        ? `+=${
            (element.offsetHeight + window.innerHeight) *
            ((Math.min(end, start) - start) / 100)
          }`
        : `+=${element.offsetHeight * ((Math.min(end, start) - start) / 100)}`;

      ScrollTrigger.create({
        trigger: element,
        scrub: scrub && !once,
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
        immediateRender = true,
      }: {
        from: gsap.TweenVars;
        to: gsap.TweenVars;
        start: number;
        end: number;
        immediateRender?: boolean;
      },
    ) => {
      const element = ref.current;
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
            (element.offsetHeight + window.innerHeight) * ((end - start) / 100)
          }`
        : `+=${element.offsetHeight * ((end - start) / 100)}`;

      gsap.fromTo(element.querySelectorAll('.' + className), from, {
        ...to,
        immediateRender,
        scrollTrigger: {
          trigger: element,
          scrub: true,
          start: animationStart,
          end: animationEnd,
        },
      });
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
        toggleActions = undefined,
        ...rest
      }:
        | {
            to: gsap.TweenVars;
            start?: number;
            end?: number;
            duration?: number;
            immediateRender?: boolean;
            once?: boolean;
            scrub?: boolean;
            toggleActions?: string;
          }
        | gsap.TweenVars,
    ) => {
      const element = ref.current;
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
            ((Math.min(end, start) - start) / 100)
          }`
        : `+=${element.offsetHeight * ((Math.min(end, start) - start) / 100)}`;

      return gsap.to(element.querySelectorAll('.' + className), {
        ...to,
        immediateRender,
        scrollTrigger: {
          trigger: element,
          scrub: scrub && !once,
          start: animationStart,
          end: animationEnd,
          once,
          toggleActions,
        },
        duration,
        ...rest,
      });
    },
    [ref, animationStartEntering],
  );

  const timeline = useCallback(
    ({
      start = 0,
      end = 0,
      once = false,
    }: {
      start?: number;
      end?: number;
      once?: boolean;
    }) => {
      const element = ref.current || document.body;

      const animationStart = animationStartEntering
        ? `${
            (element.offsetHeight + window.innerHeight) * (start / 100)
          } bottom`
        : `${start}% ${start}%`;
      const animationEnd = animationStartEntering
        ? `+=${
            (element.offsetHeight + window.innerHeight) *
            ((Math.min(end, start) - start) / 100)
          }`
        : `+=${element.offsetHeight * ((Math.min(end, start) - start) / 100)}`;

      return gsap.timeline({
        scrollTrigger: {
          trigger: element,
          scrub: !once,
          start: animationStart,
          end: animationEnd,
          once,
        },
      });
    },
    [ref, animationStartEntering],
  );

  return {
    loadAnimation,
    lottieAnimate,
    animateFromTo,
    animateTo,
    timeline,
  };
};

export default useAnimation;
