"use client";

import { Box, Center, useMediaQuery } from "@chakra-ui/react";
import { SignatureLogoAnimated } from "./svg/SignatureLogoAnimated";
import { useEffect, useState } from "react";

export const SiteLogo = () => {
  const [isBelowThreshold] = useMediaQuery("(max-width: 1000px)");
  const [isVisible, setIsVisible] = useState(!isBelowThreshold);

  const handleScroll = () => {
    if (window.scrollY > 10) {
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
      position={{ base: "absolute", xl: "fixed" }}
      width="full"
      p={{ base: 4, xl: 10 }}
      pt={{ base: 6, xl: 10 }}
      transition="all 1s ease"
      as="header"
      zIndex={999}
      pointerEvents="none"
    >
      <Center>
        {/* Navbar Contents */}
        <Box width={{ base: 900, xl: "100%" }}>
          {/* Signature Logo */}
          <Box
            transition="0.25s cubic-bezier(0.68, -0.6, 0.32, 1.6)"
            _hover={{
              transform: "scale(1.09)",
            }}
          >
            <SignatureLogoAnimated
              stroke="var(--chakra-colors-primary)"
              width="120px"
            />
          </Box>
        </Box>
      </Center>
    </Box>
  );
};
