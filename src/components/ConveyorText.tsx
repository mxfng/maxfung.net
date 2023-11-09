"use client";

import { Box, Heading } from "@chakra-ui/react";
import { BigHeadingConveyor } from "./animation/BigHeadingConveyor";
import { useEffect, useRef } from "react";
import { useAnimation, useInView } from "framer-motion";

export const ConveyorText = ({ line1, line2, line3, mainControls }) => {
  return (
    <>
      <BigHeadingConveyor animate={mainControls}>
        <Heading variant="big">{line1}</Heading>
      </BigHeadingConveyor>
      {line2 && (
        <BigHeadingConveyor delay={0.15} animate={mainControls}>
          <Heading variant="big">{line2}</Heading>
        </BigHeadingConveyor>
      )}
      {line3 && (
        <BigHeadingConveyor delay={0.3} animate={mainControls}>
          <Heading variant="big">{line3}</Heading>
        </BigHeadingConveyor>
      )}
    </>
  );
};
