"use client";

import { Box, Center, css, cssVar } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Keyframe from "./keyframe/InlineKeyframe";

function midpointOf(
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

// Applies rainbow to index range and calculates the rgb based off of the index
function getCssRgbFromIndex(index: number, totalColors: number): string {
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

  return `rgb(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)}`;
}

function weightIndexOf(index: number, total: number) {
  let midPointIndex = midpointOf(0, total, 1)[0];
  return Math.abs(index - midPointIndex) / (total / 2); // 0-1 value
}

// Calculate the weighted scroll threshold using the scroll threshold and midpoint index
function weightedScrollThresholdOf(
  index: number,
  total: number,
  scrollThreshold: number
): number {
  let weightIndex = weightIndexOf(index, total);
  let mobileFriendlyThreshold =
    window.innerWidth <= 768 ? scrollThreshold + 300 : scrollThreshold;
  return mobileFriendlyThreshold * weightIndex;
}

function mirrorPointOf(point: number, midPoint: number, endX: number): number {
  let mirrorPoint;
  if (point > endX / 2) {
    mirrorPoint = midPoint - point + endX;
  } else {
    mirrorPoint = midPoint - point;
  }
  return mirrorPoint;
}

function cssPointValueOf(point: number, r: number) {
  return `calc(${point}% - ${r}px)`;
}

const Circle: React.FC<any> = ({
  index,
  total,
  r,
  point,
  threshold: scrollThreshold,
  startX,
  endX,
}) => {
  let weightedScrollThreshold = weightedScrollThresholdOf(
    index,
    total,
    scrollThreshold
  );

  const [resting, setResting] = useState(true);
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
    if (scrollY > weightedScrollThreshold) {
      setResting(false);
    } else {
      setResting(true);
    }
  }, [scrollY]);

  let weightIndex = weightIndexOf(index, total);

  // Additional Points
  let midPoint = midpointOf(startX, endX, 1)[0];
  let mirrorPoint = mirrorPointOf(point, midPoint, endX);

  let color = getCssRgbFromIndex(index, total);
  let pointValue = cssPointValueOf(point, r);
  let midPointValue = cssPointValueOf(midPoint, r);
  let mirrorPointValue = cssPointValueOf(mirrorPoint, r);

  return (
    <>
      <Keyframe
        name={`move-circle-${index}`}
        animationProps={{
          "0%": { left: `${pointValue}` },
          "50%": { left: `${midPointValue}` },
          "100%": { left: `${mirrorPointValue}` },
        }}
      />

      <Box
        h={`${r * 2}px`}
        w={`${r * 2}px`}
        borderRadius="full"
        position="absolute"
        left={
          pointValue
          // resting ? `calc(${point}% - ${r}px)` : `calc(${midPoint}% - ${r}px)`
        }
        style={{
          animation: resting
            ? `move-circle-${index} 1s ease-in-out`
            : `move-circle-${index} 1s ease-in-out reverse`,
          outline: resting
            ? "1px solid var(--chakra-colors-secondary)"
            : `1px solid ${color}`,
          transition: `all ${weightIndex * 1000}ms ease-in-out`,
        }}
      />
    </>
  );
};

export const Circles: React.FC = () => {
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
