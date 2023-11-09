"use client";

import { Center, Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { SignatureLogoAnimated } from "./svg/SignatureLogoAnimated";

const SplashScreen = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Simulating an async operation
    const asyncOperation = async () => {
      // Simulate a delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Hide the splash screen after the async operation is complete
      setIsVisible(false);
    };

    asyncOperation();
  }, []);

  return (
    <Flex
      h="100vh"
      w="100vw"
      position="fixed"
      bg="bg"
      zIndex={9999}
      opacity={isVisible ? 1 : 0}
      transition="opacity 2s ease-in-out"
      pointerEvents={isVisible ? "all" : "none"}
    >
      <Center w="100%">
        <motion.div
          animate={{
            filter: "blur(6px)",
            opacity: 0,
            transform: "scale(1.2)",
          }}
          initial={{ filter: "blur(0px)", opacity: 1, transform: "scale(1)" }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <SignatureLogoAnimated
            size="150px"
            stroke="var(--chakra-colors-primary)"
          />
        </motion.div>
      </Center>
    </Flex>
  );
};

export default SplashScreen;
