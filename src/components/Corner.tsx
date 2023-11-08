"use client";

import { Box, Center, useMediaQuery } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export const Corner = ({ which = "left", children, ...params }) => {
  const [isBelowThreshold] = useMediaQuery("(max-width: 1000px)");
  const [isVisible, setIsVisible] = useState(!isBelowThreshold);

  let styleParams;
  if (which === "right") {
    styleParams = {
      right: 0,
    };
  } else {
    styleParams = {
      left: 0,
    };
  }

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
        <Box h="100%" w={{ base: 900, xl: "100%" }}>
          <Box
            transition="0.25s cubic-bezier(0.68, -0.6, 0.32, 1.6)"
            _hover={{
              transform: "scale(1.04)",
            }}
            position="absolute"
            style={styleParams}
          >
            {children}
          </Box>
        </Box>
      </Center>
    </Box>
  );
};
