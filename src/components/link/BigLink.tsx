import { Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import { ArrowForward } from "../svg/ArrowForward";

export const BigLink: React.FC<any> = ({ title, href, children }) => {
  return (
    <>
      <Box
        h="100%"
        outline="1px solid var(--chakra-colors-tertiary)"
        p={8}
        css={{
          "& .icon": {
            transform: "translateX(0)",
            transition: "all 0.2s ease",
          },
        }}
        _hover={{
          cursor: "pointer",
          "& .icon": {
            transform: "translateX(8px)",
          },
        }}
        position="relative"
      >
        {children}
        <Box position="absolute" bottom="8" right="8">
          <ArrowForward
            stroke="var(--chakra-colors-primary)"
            width={["36px", "48px"]}
            ml={2}
            className="icon"
          />
        </Box>
      </Box>
    </>
  );
};
