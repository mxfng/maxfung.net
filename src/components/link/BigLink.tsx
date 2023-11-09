"use client";

import { Box, Heading, useMediaQuery } from "@chakra-ui/react";
import React, { useEffect, useRef } from "react";
import { ArrowForward } from "../svg/ArrowForward";
import { useAnimation, useInView } from "framer-motion";
import { BigLinkSlide } from "../animation/BigLinkSlide";

export const BigLink: React.FC<any> = ({
  href,
  line1,
  line2,
  line3,
  children,
  ...params
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-200px" });
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  const mainControls = useAnimation();

  useEffect(() => {
    if (!isMobile) return;

    if (isInView) {
      mainControls.start("up");
    } else {
      mainControls.start("down");
    }
  }, [isInView, mainControls]);

  return (
    <>
      <Box ref={ref} as="a" href={href}>
        <Box
          onMouseEnter={() => {
            if (!isMobile) mainControls.start("up");
          }}
          onMouseLeave={() => {
            if (!isMobile) mainControls.start("down");
          }}
          h="100%"
          p={8}
          bg="rgb(6 6 6)"
          position="relative"
          outline="1px solid var(--chakra-colors-tertiary)"
          transition="all 0.25s cubic-bezier(0.68, -0.6, 0.32, 1.6)"
          css={{
            ":before": {
              content: '""',
              backgroundColor: "transparent",
              backgroundImage: "url(/bgs/grain.svg)",
              backgroundSize: "182px",
              backgroundRepeat: "repeat",
              opacity: 0.12,
              top: 0,
              left: 0,
              position: "absolute",
              width: "100%",
              height: "100%",
            },
            "& .icon": {
              transform: "translateX(0)",
              transition: "all 0.2s ease",
            },
          }}
          _hover={{
            cursor: "pointer",
            outline: "4px solid var(--chakra-colors-primary)",
            transform: "scale(1.03)",
            "& .icon": {
              transform: "translateX(8px)",
            },
          }}
          {...params}
        >
          <BigLinkSlide animate={mainControls}>
            <Heading variant="big">{line1}</Heading>
          </BigLinkSlide>
          {line2 && (
            <BigLinkSlide delay={0.15} animate={mainControls}>
              <Heading variant="big">{line2}</Heading>
            </BigLinkSlide>
          )}
          {line3 && (
            <BigLinkSlide delay={0.3} animate={mainControls}>
              <Heading variant="big">{line3}</Heading>
            </BigLinkSlide>
          )}
          {children}
          <Box position="absolute" bottom="8" right="8">
            <ArrowForward
              stroke="var(--chakra-colors-primary)"
              w={["36px", "48px"]}
              ml={2}
              className="icon"
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};
