"use client";

import { Box, Flex, Image } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";

export const Avatar = () => {
  const [hotBg, setHotBg] = useState<string>();
  const [cachedBg, setCachedBg] = useState<string>();
  const [loaded, setLoaded] = useState(true);
  const imageRef = useRef<HTMLImageElement>(null);

  const toggleAvatar = () => {
    // set hot-bg to new bg image
    setHotBg(getRandomBg());
  };

  const getRandomBg = (): string => {
    const randomInteger = Math.floor(Math.random() * 10) + 1;
    const randomBg = `/gifs/${randomInteger}.gif`;
    return randomBg === hotBg ? getRandomBg() : randomBg;
  };

  // on page load
  useEffect(() => {
    setHotBg(getRandomBg);
  }, []);

  const bgSrc = hotBg;
  const bgSrcCache = "/checkers.jpg";

  return (
    <>
      <Box
        transition="0.25s cubic-bezier(0.68, -0.6, 0.32, 1.6)"
        _hover={{
          transform: "scale(1.03)",
        }}
        onClick={toggleAvatar}
      >
        <Flex alignItems="center" justifyContent="center" position="relative">
          <Image
            borderRadius="full"
            width={{ base: "80%" }}
            src="/avatar.png"
            alt="Max Fung"
            position="absolute"
            zIndex={1}
          />
          {loaded ? (
            <Image
            ref={imageRef}
              id="hot-bg"
              borderRadius="full"
              src={bgSrc}
              width={{ base: "80%" }}
              objectFit="cover"
              position="absolute"
              zIndex={0}
              style={{ animation: "fade-in 1s linear" }}
              onLoad={() => {
                //toggleAvatar();
              }}
            />
          ) : null}
          <Image
            id="cached-bg"
            borderRadius="full"
            src={bgSrcCache}
            width={{ base: "80%" }}
            alt="Background Image"
            objectFit="cover"
            zIndex={0.1}
          />
        </Flex>
      </Box>
    </>
  );
};
