"use client";

import { Box, Center } from "@chakra-ui/react";
import { midpointOf } from "../../lib/tokamak";
import { TokamakCircle } from "./TokamakCircle";

export const Tokamak: React.FC = () => {
  const circleCount = 20; // number of circles displayed
  const scrollThreshold = 200; // threshold for final color effect in px
  const r = 100; // radii in px

  const startX = 0; // percent
  const endX = 100; // percent
  const midpoints = midpointOf(startX, endX, circleCount);

  return (
    <>
      <Center h="100%">
        <Box position="relative" w="50%" display="flex" h={`${r * 2}px`}>
          {midpoints.map((point, index) => (
            <TokamakCircle
              key={index}
              index={index}
              circleCount={circleCount}
              r={r}
              scrollThreshold={scrollThreshold}
              point={point}
              startX={startX}
              endX={endX}
            />
          ))}
        </Box>
      </Center>
    </>
  );
};
