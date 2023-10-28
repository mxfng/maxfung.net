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
        mb={[10, 20]}
        w="fit-content"
      >
        <Heading
          as="a"
          href={href}
          target="_blank"
          size="md"
          style={{ fontWeight: 800 }}
        >
          {title}
        </Heading>
        <Image ml={2} boxSize="20px" src="/arrow-forward.svg" alt={`→`} />
      </Box>
    </>
  );
};
