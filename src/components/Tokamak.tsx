"use client";

import { Box, Center } from "@chakra-ui/react";
import { midpointOf } from "../utils/tokamak";
import { TokamakCircle } from "./TokamakCircle";

export const Tokamak: React.FC = () => {
  const r = 100; // Circle radius

  const startX = 0;
  const endX = 100;
  const numIntervals = 20; // Adjust the number of intervals
  const midpoints = midpointOf(startX, endX, numIntervals);

  return (
    <>
      <Center h="100%">
        <Box position="relative" w="50%" display="flex" h={`${r * 2}px`}>
          {midpoints.map((point, index) => (
            <TokamakCircle
              key={index}
              index={index}
              total={midpoints.length}
              point={point}
              r={r}
              threshold={200}
              startX={startX}
              endX={endX}
            />
          ))}
        </Box>
      </Center>
    </>
  );
};
