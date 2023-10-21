"use client";

import { Box, Flex, Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export const Avatar = () => {
  const [avatarBg, setAvatarBg] = useState<string>();

  const toggleAvatar = () => {
    setAvatarBg(getRandomBg());
  };

  const getRandomBg = (): string => {
    const randomInteger = Math.floor(Math.random() * 10) + 1;
    const randomBg = `/gifs/${randomInteger}.gif`;
    return randomBg === avatarBg ? getRandomBg() : randomBg;
  };

  useEffect(() => {
    setAvatarBg(getRandomBg);
  }, []);

  const bgSrc = avatarBg;

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
          <Image
            borderRadius="full"
            src={bgSrc}
            width={{ base: "80%" }}
            alt="Background Image"
            objectFit="cover"
            position="absolute"
            zIndex={0}
            style={{
              transition: "opacity 0.5s"
            }}
          />
          <Image
            borderRadius="full"
            src={bgSrc}
            width={{ base: "80%" }}
            alt="Background Image"
            objectFit="cover"
            zIndex={0}
            style={{
              transition: "opacity 0.5s"
            }}
          />
        </Flex>
      </Box>
    </>
  );
};
