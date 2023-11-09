"use client";
import { useEffect, useState } from "react";

export const displaceOnScroll = (
  threshold = 2,
  maxScrollDisplacement = 100,
  timeoutDuration = 200,
  throttleDelay = 100
) => {
  const [scrollDisplacement, setScrollDisplacement] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let previousScrollYPosition = window.scrollY;
    let scrollTimeout;
    let throttledUpdateScrollDirection;

    const scrolledMoreThanThreshold = (currentScrollYPosition) =>
      Math.abs(currentScrollYPosition - previousScrollYPosition) > threshold;

    const updateScrollDirection = () => {
      const currentScrollYPosition = window.scrollY;

      if (scrolledMoreThanThreshold(currentScrollYPosition)) {
        const calculatedScrollDisplacement =
          currentScrollYPosition - previousScrollYPosition;
        const clampedScrollDisplacement = Math.min(
          maxScrollDisplacement,
          Math.max(maxScrollDisplacement * -1, calculatedScrollDisplacement)
        );

        setScrollDisplacement(clampedScrollDisplacement);
        previousScrollYPosition =
          currentScrollYPosition > 0 ? currentScrollYPosition : 0;

        if (!isScrolling) {
          setIsScrolling(true);
        }

        if (scrollTimeout) {
          clearTimeout(scrollTimeout);
        }

        scrollTimeout = setTimeout(() => {
          setIsScrolling(false);
        }, timeoutDuration);
      }
    };

    const throttle = (callback, delay) => {
      let previousCall = 0;
      return function () {
        const time = Date.now();
        if (time - previousCall >= delay) {
          previousCall = time;
          callback.apply(null, arguments);
        }
      };
    };

    throttledUpdateScrollDirection = throttle(
      updateScrollDirection,
      throttleDelay
    );

    const onScroll = () =>
      window.requestAnimationFrame(throttledUpdateScrollDirection);

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, [isScrolling]);

  return { scrollDisplacement, isScrolling };
};
