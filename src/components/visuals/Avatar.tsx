"use client";

import { Box, Center, Flex, Image } from "@chakra-ui/react";
import { useEffect, useReducer } from "react";
import { ShuffleIcon } from "../svg/ShuffleIcon";

const staticBg = "/gifs/8.gif";

const initialState = {
  hotBg: staticBg,
  cachedBg: staticBg,
  showBg: true,
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_IMAGE_LOADING":
      const getRandomBg = () => {
        const randomInteger = Math.floor(Math.random() * 10) + 1;
        const randomBg = `/gifs/${randomInteger}.gif`;
        return randomBg === state.hotBg ? getRandomBg() : randomBg;
      };

      return {
        ...state,
        cachedBg: state.hotBg,
        showBg: false,
        hotBg: getRandomBg(),
      };
    case "SET_IMAGE_LOADED":
      return {
        ...state,
        showBg: true,
      };
    default:
      return state;
  }
}

export const Avatar = ({ ...props }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const baseSize = 65;
  const mdSize = 121;

  useEffect(() => {
    dispatch({ type: "SET_IMAGE_LOADING" });
  }, []);

  return (
    <Box
      h={{ base: `${baseSize}px`, md: `${mdSize}px` }}
      w={{ base: `${baseSize}px`, md: `${mdSize}px` }}
      onClick={() => {
        dispatch({ type: "SET_IMAGE_LOADING" });
      }}
      borderRadius="full"
      outline="1px solid var(--chakra-colors-tertiary)"
      _hover={{
        outline: "4px solid var(--chakra-colors-primary)",
        cursor: "pointer",
        "& .icon": {
          opacity: 1,
        },
      }}
      transition="all 200ms ease"
      __css={{
        "& .icon": {
          opacity: 0,
        },
      }}
      position="relative"
      {...props}
    >
      <Center
        className="icon"
        transition="all 300ms ease-in-out"
        zIndex={6}
        position="absolute"
        h="100%"
        w="100%"
      >
        <ShuffleIcon size="30px" fill="var(--chakra-colors-primary)" />
      </Center>
      <Flex
        alignItems="center"
        justifyContent="center"
        position="absolute"
        h="100%"
        w="100%"
      >
        <Image
          id="grain"
          w={{ base: "100%" }}
          src="/bgs/grain.svg"
          alt=""
          position="absolute"
          top="0px"
          left="0px"
          borderRadius="full"
          opacity="0.3"
          zIndex={5}
        />

        <Image
          id="avatar"
          w={{ base: "100%" }}
          src="/avatar.png"
          alt=""
          position="absolute"
          top="0px"
          left="0px"
          borderRadius="full"
          zIndex={4}
        />

        <Image
          id="hot-bg"
          src={state.hotBg}
          alt=""
          w={{ base: "100%" }}
          objectFit="cover"
          position="absolute"
          top="0px"
          left="0px"
          zIndex={3}
          animation={state.showBg ? "fadeIn 400ms linear" : ""}
          css={{
            maskImage:
              "radial-gradient(circle, rgba(0,0,0, 1) 70%, rgba(0, 0, 0, 0) 71%)",
          }}
          onLoad={() => dispatch({ type: "SET_IMAGE_LOADED" })}
        />

        <Image
          id="cache-bag"
          src={state.cachedBg}
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
  );
};
