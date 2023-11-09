"use client";

import { Box, useMediaQuery } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDisplaceOnScroll } from "../hooks/useDisplaceOnScroll";

export const Corner = ({ which = "left", children, ...params }) => {
  const [isBelowThreshold] = useMediaQuery("(max-width: 1000px)");
  const [isVisible, setIsVisible] = useState(!isBelowThreshold);

  const { scrollDisplacement, isScrolling } = useDisplaceOnScroll();

  const hideOnMobileScroll = () => {
    setIsVisible(window.scrollY <= 10);
  };

  useEffect(() => {
    window.addEventListener("scroll", hideOnMobileScroll);

    return () => {
      window.removeEventListener("scroll", hideOnMobileScroll);
    };
  }, []);

  const calculateTranslation = () => {
    if (isScrolling && !isBelowThreshold) {
      return scrollDisplacement * 0.05 * -1;
    }
    return 0;
  };

  const translation = calculateTranslation();

  return (
    <Box
      className={
        isBelowThreshold
          ? isVisible
            ? "cornerVisible"
            : "cornerHidden"
          : "cornerVisible"
      }
      h="100px"
      position={{ base: "absolute", xl: "fixed" }}
      pt={{ base: 6, xl: 10 }}
      transition="all 500ms ease"
      style={{ [which]: 0 }}
    >
      <Box
        className="cornerScrollEffect"
        transition={`transform ${isScrolling ? "200ms" : "400ms"} ease-in-out`}
        transform={`translateY(${translation}px)`}
        position="absolute"
        style={{ [which]: 0 }}
      >
        <Box
          className="cornerContents"
          transition="0.25s cubic-bezier(0.68, -0.6, 0.32, 1.6)"
          _hover={{
            transform: "scale(1.04)",
            cursor: "pointer",
          }}
          position="absolute"
          style={{ [which]: 0 }}
          mx={{ base: 4, xl: 8 }}
          {...params}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
};
