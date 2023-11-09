"use client";

import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

export const BigHeadingConveyor: React.FC<any> = ({
  duration = 0.5,
  delay = 0,
  animate,
  children,
}) => {
  return (
    <>
      <Box position="relative" overflow="hidden">
        <motion.div
          variants={{
            top: { y: 0 },
            bottom: { y: -43 }, // super specific to the "big" variant heading
          }}
          initial="top"
          animate={animate}
          transition={{
            duration: duration,
            delay: delay,
          }}
          style={{
            position: "absolute",
          }}
        >
          {children}
          {children}
        </motion.div>

        {/* hack to preserve dimensions */}
        <Box opacity="0">{children}</Box>
      </Box>
    </>
  );
};
