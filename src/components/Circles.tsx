"use client";

import { Box, Center } from "@chakra-ui/react";
import { useEffect, useState } from "react";

function midpointMethod(
  startX: number,
  endX: number,
  numIntervals: number
): number[] {
  // Calculate the width of each subinterval
  const intervalWidth = (endX - startX) / numIntervals;

  const midpoints: number[] = [];

  // Iterate through the subintervals and calculate the midpoints
  for (let i = 0; i < numIntervals; i++) {
    const midpointX = startX + (i + 0.5) * intervalWidth;

    midpoints.push(midpointX);
  }

  return midpoints;
}

function getRainbowColor(index: number, totalColors: number): string {
  const hue = (index / totalColors) * 360; // Calculate hue based on the index
  const saturation = 100; // Adjust saturation and brightness if needed
  const lightness = 70;

  // Convert HSL (Hue, Saturation, Lightness) to RGB
  const h = hue / 60;
  const c = ((1 - Math.abs((2 * lightness) / 100 - 1)) * saturation) / 100;
  const x = c * (1 - Math.abs((h % 2) - 1));
  const m = lightness / 100 - c / 2;

  let r: number, g: number, b: number;

  if (h >= 0 && h < 1) {
    r = (c + m) * 255;
    g = (x + m) * 255;
    b = m * 255;
  } else if (h >= 1 && h < 2) {
    r = (x + m) * 255;
    g = (c + m) * 255;
    b = m * 255;
  } else if (h >= 2 && h < 3) {
    r = m * 255;
    g = (c + m) * 255;
    b = (x + m) * 255;
  } else if (h >= 3 && h < 4) {
    r = m * 255;
    g = (x + m) * 255;
    b = (c + m) * 255;
  } else if (h >= 4 && h < 5) {
    r = (x + m) * 255;
    g = m * 255;
    b = (c + m) * 255;
  } else {
    r = (c + m) * 255;
    g = m * 255;
    b = (x + m) * 255;
  }

  // Convert the RGB values to an RGB string
  return `rgb(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)}`;
}

const Circle: React.FC<any> = ({
  index,
  total,
  r,
  point,
  threshold,
  startX,
  endX,
}) => {
  let rainbowColor = getRainbowColor(index, total);
  let aboveHalfway = point > endX / 2;
  let midPoint = midpointMethod(startX, endX, 1);
  let restPoint;
  if (aboveHalfway) {
    restPoint = midPoint[0] - point + endX;
  } else {
    restPoint = midPoint[0] - point;
  }

  const [scrollY, setScrollY] = useState(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [resting, setResting] = useState(true);

  let mobileFriendlyThreshold =
    window.innerWidth <= 768 ? threshold + 300 : threshold;

  useEffect(() => {
    if (scrollY > mobileFriendlyThreshold) {
      setResting(false);
    } else {
      setResting(true);
    }
  }, [scrollY]);

  return (
    <Box
      h={`${r * 2}px`}
      w={`${r * 2}px`}
      borderRadius="full"
      position="absolute"
      left={`calc(${point}% - ${r}px)`}
      style={
        resting
          ? {
              outline: "1px solid var(--chakra-colors-secondary)",
              transition: "all 1s ease-in-out",
              left: `calc(${restPoint}% - ${r}px)`,
            }
          : {
              outline: `1px solid ${rainbowColor}`,
              transition: "all 1s ease-in-out",
              left: `calc(${point}% - ${r}px)`,
            }
      }
    />
  );
};

export const Circles: React.FC = () => {
  const r = 100; // Circle radius

  const startX = 0;
  const endX = 100;
  const numIntervals = 20; // Adjust the number of intervals
  const midpoints = midpointMethod(startX, endX, numIntervals);

  return (
    <>
      <Center h="100%">
        <Box position="relative" w="50%" display="flex" h={`${r * 2}px`}>
          {midpoints.map((point, index) => (
            <Circle
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
