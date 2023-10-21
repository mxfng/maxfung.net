"use client";

import { Box, Flex, Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export const Avatar = () => {
  const [avatarState, setAvatarState] = useState<string>();

  const toggleAvatar = () => {
    setAvatarState(randomGif());
  };

  const randomGif = () => {
    const randomAvatarNumber = Math.floor(Math.random() * (10 -1 + 1)) + 1;
    return `/gifs/${randomAvatarNumber}.gif`
  }

  useEffect(() => {
    setAvatarState(randomGif);
  }, [])


  const bgSrc = avatarState;

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
            backgroundImage={bgSrc}
            backgroundSize="cover"
            style={{transition: "background-image 0.5s"}}
          />
        </Flex>
      </Box>
    </>
  );
};
