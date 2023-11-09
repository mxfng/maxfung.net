"use client";

import { Box, Center, useMediaQuery } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { displaceOnScroll } from "../hooks/displaceOnScroll";

export const Corner = ({ which = "left", children, ...params }) => {
  const [isBelowThreshold] = useMediaQuery("(max-width: 1000px)");
  const [isVisible, setIsVisible] = useState(!isBelowThreshold);

  const { scrollDisplacement, isScrolling } = displaceOnScroll();

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
      position={{ base: "absolute", xl: "fixed" }}
      w="full"
      p={{ base: 4, xl: 10 }}
      pt={{ base: 6, xl: 10 }}
      transition="all 500ms ease"
      zIndex={888}
      {...params}
    >
      <Center h="65px" position="relative">
        <Box
          h="100%"
          w={{ base: 900, xl: "100%" }}
          transition={`transform ${
            isScrolling ? "200ms" : "400ms"
          } ease-in-out`}
          transform={`translateY(${translation}px)`}
        >
          <Box
            transition="0.25s cubic-bezier(0.68, -0.6, 0.32, 1.6)"
            _hover={{
              transform: "scale(1.04)",
            }}
            position="absolute"
            style={{ [which]: 0 }}
          >
            {children}
          </Box>
        </Box>
      </Center>
    </Box>
  );
};
