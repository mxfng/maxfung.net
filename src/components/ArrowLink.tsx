import { Image } from "@chakra-ui/react";
import { Box, Heading } from "@chakra-ui/react";
import React from "react";

export const ArrowLink: React.FC<any> = ({ title, href }) => {
  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        __css={{
          "& img": {
            transform: "translateX(0)",
            transition: "all 0.2s ease",
          },
        }}
        _hover={{
          cursor: "pointer",
          "& img": {
            transform: "translateX(8px)",
          },
        }}
        mb={[20, 40]}
        w="fit-content"
      >
        <Heading
          variant="bigLink"
          as="a"
          href={href}
          target="_blank"
        >
          {title}
        </Heading>
        <Image ml={2} boxSize="20px" src="/arrow-forward.svg" alt={`→`} />
      </Box>
    </>
  );
};
