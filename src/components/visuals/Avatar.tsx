"use client";

import { Box, Flex, Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export const Avatar = ({ ...props }) => {
  const [hotBg, setHotBg] = useState<string>();
  const [cachedBg, setCachedBg] = useState<string>();
  const [showBg, setShowBg] = useState(true);
  const [imageLoading, setImageLoading] = useState(true);
  const [imageLoaded, setimageLoaded] = useState(false);

  useEffect(() => {
    const getRandomBg = (): string => {
      const randomInteger = Math.floor(Math.random() * 10) + 1;
      const randomBg = `/gifs/${randomInteger}.gif`;
      return randomBg === hotBg ? getRandomBg() : randomBg;
    };

    if (imageLoading) {
      setShowBg(false);
      setimageLoaded(false);
      setHotBg(getRandomBg);
      setCachedBg(hotBg);
    }
  }, [imageLoading]);

  useEffect(() => {
    setShowBg(true);
    setimageLoaded(true);
    setImageLoading(false);
  }, [imageLoaded]);

  const bgSrc = hotBg;
  const bgSrcCache = cachedBg ? cachedBg : "/checkers.jpg";

  const baseSize = 65;
  const mdSize = 121;

  return (
    <>
      <Box
        h={{ base: `${baseSize}px`, md: `${mdSize}px` }}
        w={{ base: `${baseSize}px`, md: `${mdSize}px` }}
        onClick={() => {
          setImageLoading(true);
        }}
        borderRadius="full"
        outline="1px solid var(--chakra-colors-tertiary)"
        css={{
          ":after": {
            content: '""',
            backgroundColor: "transparent",
            backgroundImage: "url(/bgs/grain.svg)",
            backgroundSize: "182px",
            backgroundRepeat: "repeat",
            borderRadius: "100%",
            opacity: 0.3,
            top: 0,
            left: 0,
            position: "absolute",
            width: "100%",
            height: "100%",
            pointerEvents: "none",
            zIndex: 5,
          },
        }}
        {...props}
      >
        <Flex alignItems="center" justifyContent="center" position="relative">
          <Image
            borderRadius="full"
            w={{ base: "100%" }}
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
              w={{ base: "100%" }}
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
            w={{ base: "100%" }}
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
