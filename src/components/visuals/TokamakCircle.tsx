"use client";
import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Keyframe from "../keyframe/InlineKeyframe";
import {
  weightedScrollThresholdOf,
  weightIndexOf,
  midpointOf,
  getCssRgbFromIndex,
  cssPointValueOf,
  mobileFriendlyThresholdOf,
} from "../../lib/tokamak";

export const TokamakCircle: React.FC<any> = ({
  index,
  circleCount,
  r,
  point,
  scrollThreshold,
  startX,
  endX,
}) => {
  const [resting, setResting] = useState(true);
  const [revert, setRevert] = useState(false);
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
    const mobileFriendlyThreshold = mobileFriendlyThresholdOf(
      window,
      scrollThreshold
    );
    const weightedScrollThreshold = weightedScrollThresholdOf(
      index,
      circleCount,
      mobileFriendlyThreshold
    );

    if (scrollY > weightedScrollThreshold) {
      setResting(false);
    } else {
      setResting(true);
    }

    if (scrollY > mobileFriendlyThreshold) {
      setRevert(true);
    } else {
      setRevert(false);
    }
  }, [scrollY, scrollThreshold, index, circleCount]);

  let weightIndex = weightIndexOf(index, circleCount);

  // Additional Points
  let midPoint = midpointOf(startX, endX, 1)[0];

  let color = getCssRgbFromIndex(index, circleCount);
  let pointValue = cssPointValueOf(point, r);
  let midPointValue = cssPointValueOf(midPoint, r);

  return (
    <>
      <Keyframe
        name={`move-circle-${index}`}
        animationProps={{
          "0%": { left: `${pointValue}` },
          "50%": { left: `${midPointValue}` },
          "100%": { left: `${pointValue}` },
        }}
      />

      <Box
        h={`${r * 2}px`}
        w={`${r * 2}px`}
        borderRadius="full"
        position="absolute"
        left={pointValue}
        style={{
          animation: revert ? `` : `move-circle-${index} 1s ease-in-out`,
          outline: resting
            ? "1px solid var(--chakra-colors-secondary)"
            : `1px solid ${color}`,
          transition: `all ${weightIndex * 1000}ms ease-in-out`,
        }}
      />
    </>
  );
};
