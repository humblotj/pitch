import { RefObject, useCallback } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import lottie, { AnimationItem } from 'lottie-web';

gsap.registerPlugin(ScrollTrigger);

const useAnimation = (
  ref: RefObject<HTMLDivElement>,
  animationStartEntering = false,
) => {
  const loadAnimation = useCallback(
    (animationData: any, className?: string) => {
      const element = ref.current;
      if (!element) {
        return;
      }

      console.log(element.querySelector('*'));

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

  const enterLeaveTrigger = useCallback(
    (leave: string, enter?: string) => {
      const element = ref.current;
      if (!element) {
        return;
      }

      const animationStart = animationStartEntering ? 'top bottom' : 'top top';
      const animationEnd = 'bottom bottom';

      ScrollTrigger.create({
        trigger: element,
        scrub: true,
        start: animationStart,
        end: animationEnd,
        onLeave: () => {
          gsap.set(document.querySelectorAll(leave), { opacity: 0 });
        },
        onEnter: () => {
          if (enter) {
            gsap.set(document.querySelectorAll(enter), { opacity: 1 });
          }
        },
      });
    },
    [ref, animationStartEntering],
  );

  const lottieAnimate = useCallback(
    (
      animation: AnimationItem | undefined,
      {
        start = 0,
        end = 0,
        duration,
        once = false,
      }: {
        start?: number;
        end?: number;
        duration?: number;
        once?: boolean;
      },
    ) => {
      const element = ref.current;
      if (!element || !animation) {
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

      ScrollTrigger.create({
        trigger: element,
        scrub: !once,
        start: animationStart,
        end: animationEnd,
        once,
        onUpdate: (self) => {
          animation.play();
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
      }: {
        to: gsap.TweenVars;
        start?: number;
        end?: number;
        duration?: number;
        immediateRender?: boolean;
        once?: boolean;
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
            (element.offsetHeight + window.innerHeight) *
            ((Math.min(end, start) - start) / 100)
          }`
        : `+=${element.offsetHeight * ((Math.min(end, start) - start) / 100)}`;

      gsap.to(element.querySelectorAll('.' + className), {
        ...to,
        immediateRender,
        scrollTrigger: {
          trigger: element,
          scrub: !once,
          start: animationStart,
          end: animationEnd,
          once,
        },
        duration,
      });
    },
    [ref, animationStartEntering],
  );

  return {
    enterLeaveTrigger,
    loadAnimation,
    lottieAnimate,
    animateFromTo,
    animateTo,
  };
};

export default useAnimation;
