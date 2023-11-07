"use client";

import { Box, Center } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export const Circles: React.FC = () => {
  const maxRadius = 100; // Adjust the maximum radius as needed
  const initialCircleCount = 8;
  const maxAdditionalCircles = 30; // Maximum additional circles
  const [circleCount, setCircleCount] = useState(initialCircleCount);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Calculate the number of additional circles based on scroll position
    const additionalCircles = Math.min(
      maxAdditionalCircles,
      Math.ceil(scrollY / 40)
    );

    // Add the additional circles
    if (additionalCircles > 0) {
      setCircleCount(
        Math.min(initialCircleCount + additionalCircles, maxAdditionalCircles)
      );
    }
  }, [scrollY]);

  return (
    <Center h="100%">
      <Box position="relative" w="100%" display="flex" h={`${maxRadius * 2}px`}>
        {Array.from({ length: circleCount + 1 }).map((_, index) => (
          <Box
            key={index}
            transition="all 500ms ease"
            position="absolute"
            h={`${maxRadius * 2}px`}
            w={`${maxRadius * 2}px`}
            outline="1px solid white"
            borderRadius="full"
            left={`calc(50% - ${maxRadius}px * ${Math.cos(
              (Math.PI / circleCount) * index
            )} - 100px)`}
          />
        ))}
      </Box>
    </Center>
  );
};
