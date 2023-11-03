"use client";

import { Box, Center, useMediaQuery } from "@chakra-ui/react";
import { SignatureLogoAnimated } from "./svg/SignatureLogoAnimated";
import { useEffect, useState } from "react";

export const Navbar = () => {
  const [isBelowThreshold] = useMediaQuery("(max-width: 1200px)");
  const [isVisible, setIsVisible] = useState(!isBelowThreshold);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box
      className={
        isBelowThreshold
          ? isVisible
            ? "navbar-visible"
            : "navbar-hidden"
          : "navbar-visible"
      }
      bg={
        isBelowThreshold
          ? "linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)"
          : "transparent"
      }
      position="fixed"
      width="full"
      height="100px"
      p={5}
      as="header"
      zIndex={999}
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
