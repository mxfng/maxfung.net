"use client";

import { Box, Flex, Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export const Avatar = ({ ...props }) => {
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
        height={["100px", "160px"]}
        width={["100px", "160px"]}
        transition="0.25s cubic-bezier(0.68, -0.6, 0.32, 1.6)"
        _hover={{
          transform: "scale(1.03)",
        }}
        onClick={() => {
          onImageLoading();
        }}
        borderRadius="full"
        outline="1px solid var(--chakra-colors-tertiary)"
        {...props}
      >
        <Flex alignItems="center" justifyContent="center" position="relative">
          <Image
            borderRadius="full"
            width={{ base: "100%" }}
            src="/avatar.png"
            alt=""
            position="absolute"
            top="0px"
            left="0px"
            zIndex={4}
          />
          {showBg ? (
            <Image
              src={bgSrc}
              alt=""
              borderRadius="full"
              width={{ base: "100%" }}
              objectFit="cover"
              position="absolute"
              top="0px"
              left="0px"
              zIndex={3}
              css={{
                maskImage:
                  "radial-gradient(circle, rgba(0,0,0, 1) 70%, rgba(0, 0, 0, 0) 71%)",
              }}
              style={{
                animation: "fadeIn 1s linear",
              }}
              onLoad={() => setimageLoaded(true)}
            />
          ) : null}
          <Image
            borderRadius="full"
            src={bgSrcCache}
            alt=""
            width={{ base: "100%" }}
            objectFit="cover"
            position="absolute"
            top="0px"
            left="0px"
            zIndex={2}
            css={{
              maskImage:
                "radial-gradient(circle, rgba(0,0,0, 1) 69.5%, rgba(0, 0, 0, 0) 70.5%)",
            }}
          />
        </Flex>
      </Box>
    </>
  );
};
