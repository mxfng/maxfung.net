"use client";

import { Box, Flex, Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export const Avatar = () => {
  const [hotBg, setHotBg] = useState<string>();
  const [cachedBg, setCachedBg] = useState<string>();
  const [showBg, setShowBg] = useState(true);
  const [imageLoaded, setimageLoaded] = useState(false);

  const onImageLoaded = () => {
    setShowBg(true);
    setimageLoaded(true);
  };

  const onImageLoading = () => {
    setShowBg(false);
    setimageLoaded(false);
    setHotBg(getRandomBg);
    setCachedBg(hotBg);
  };

  const getRandomBg = (): string => {
    const randomInteger = Math.floor(Math.random() * 10) + 1;
    const randomBg = `/gifs/${randomInteger}.gif`;
    return randomBg === hotBg ? getRandomBg() : randomBg;
  };

  // on page load
  useEffect(() => {
    setHotBg(getRandomBg);
    onImageLoading();
  }, []);

  useEffect(() => {
    onImageLoaded();
  }, [imageLoaded]);

  const bgSrc = hotBg;
  const bgSrcCache = cachedBg ? cachedBg : "/checkers.jpg";

  return (
    <>
      <Box
        height={["150px", "210px"]}
        width={["150px", "210px"]}
        transition="0.25s cubic-bezier(0.68, -0.6, 0.32, 1.6)"
        _hover={{
          transform: "scale(1.03)",
        }}
        onClick={() => {
          onImageLoading();
        }}
      >
        <Flex alignItems="center" justifyContent="center" position="relative">
          <Image
            borderRadius="full"
            width={{ base: "100%" }}
            src="/avatar.png"
            alt="avatar"
            position="absolute"
            top="0px"
            left="0px"
            zIndex={4}
          />
          {showBg ? (
            <Image
              alt="hot-bg"
              borderRadius="full"
              src={bgSrc}
              width={{ base: "100%" }}
              objectFit="cover"
              position="absolute"
              top="0px"
              left="0px"
              zIndex={3}
              style={{ animation: "fadeIn 1s linear" }}
              onLoad={() => setimageLoaded(true)}
            />
          ) : null}
          <Image
            borderRadius="full"
            src={bgSrcCache}
            alt="cached-bg"
            width={{ base: "100%" }}
            objectFit="cover"
            position="absolute"
            top="0px"
            left="0px"
            zIndex={2}
          />
        </Flex>
      </Box>
    </>
  );
};
