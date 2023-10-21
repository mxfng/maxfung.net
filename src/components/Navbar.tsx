"use client";

import { Box, Flex, Image, useMediaQuery } from "@chakra-ui/react";
import { useState, useEffect } from "react";

export const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollThreshold = 250;
  const [isBelowThreshold] = useMediaQuery("(max-width: 1000px)");

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
      height="150px"
      p={5}
      as="header"
      zIndex={999}
      transition="transform 0.3s ease-in-out"
      transform={scrolling ? "translateY(-100%)" : "translateY(0)"}
    >
      <Flex alignItems="center" justifyContent="center"width="88px">
        <Image src="/max-signature.svg" alt="Max Fung" style={{ fill: "green !important", animation: "colorChange 5s linear infinite" }} />
      </Flex>
    </Box>
  );
};
