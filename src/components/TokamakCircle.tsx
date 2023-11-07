"use client";
import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Keyframe from "./keyframe/InlineKeyframe";
import {
  weightedScrollThresholdOf,
  weightIndexOf,
  midpointOf,
  mirrorPointOf,
  getCssRgbFromIndex,
  cssPointValueOf,
} from "../utils/tokamak";

export const TokamakCircle: React.FC<any> = ({
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
