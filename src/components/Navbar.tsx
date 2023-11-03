"use client";

import { Box, useMediaQuery, Center } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { SignatureLogoAnimated } from "./svg/SignatureLogoAnimated";

export const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollThreshold = 250;
  const [isBelowThreshold] = useMediaQuery("(max-width: 1200px)");

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;
      const isScrollingPastThreshold = currentPosition > scrollThreshold;

      if (isScrollingPastThreshold && isBelowThreshold) {
        setScrolling(currentPosition > scrollPosition);
      } else {
        setScrolling(false);
      }

      setScrollPosition(currentPosition);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition, isBelowThreshold]);

  return (
    <Box
      bg={
        isBelowThreshold
          ? "linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)"
          : "transparent"
      }
      position="fixed"
      width="full"
      height="100px"
      p={5}
      as="header"
      zIndex={999}
      transition="transform 0.3s ease-in-out"
      transform={scrolling ? "translateY(-100%)" : "translateY(0)"}
    >
      <Center>
        {/* Navbar Contents */}
        <Box height={88} width={1300}>
          {/* Signature Logo */}
          <Box
            width="fit-content"
            transition="0.25s cubic-bezier(0.68, -0.6, 0.32, 1.6)"
            _hover={{
              transform: "scale(1.09)",
            }}
          >
            <SignatureLogoAnimated
              stroke="var(--chakra-colors-palette-900)"
              width="120px"
            />
          </Box>
        </Box>
      </Center>
    </Box>
  );
};
