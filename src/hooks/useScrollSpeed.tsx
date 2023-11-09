"use client";
import { useEffect, useState } from "react";

export const useScrollSpeed = () => {
  const threshold = 2;
  const [scrollSpeed, setScrollSpeed] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let previousScrollYPosition = window.scrollY;
    let scrollTimeout;

    const scrolledMoreThanThreshold = (currentScrollYPosition) =>
      Math.abs(currentScrollYPosition - previousScrollYPosition) > threshold;

    const updateScrollDirection = () => {
      const currentScrollYPosition = window.scrollY;

      if (scrolledMoreThanThreshold(currentScrollYPosition)) {
        setScrollSpeed(currentScrollYPosition - previousScrollYPosition);
        previousScrollYPosition =
          currentScrollYPosition > 0 ? currentScrollYPosition : 0;

        // Set scrolling state to true when the scroll event occurs
        if (!isScrolling) {
          setIsScrolling(true);
        }

        // Clear the previous scroll timeout
        if (scrollTimeout) {
          clearTimeout(scrollTimeout);
        }

        // Set a new timeout to detect the end of scrolling
        scrollTimeout = setTimeout(() => {
          setIsScrolling(false);
        }, 500); // Adjust the timeout duration as needed
      }
    };

    const onScroll = () => window.requestAnimationFrame(updateScrollDirection);

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      // Clear the timeout on unmount to prevent memory leaks
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, [isScrolling]);

  return { scrollSpeed, isScrolling };
};
