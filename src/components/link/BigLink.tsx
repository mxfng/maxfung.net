import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import { ArrowForward } from "../svg/ArrowForward";

export const BigLink: React.FC<any> = ({ title, href }) => {
  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        __css={{
          "& .arrow-forward": {
            transform: "translateX(0)",
            transition: "all 0.2s ease",
          },
        }}
        _hover={{
          cursor: "pointer",
          "& .arrow-forward": {
            transform: "translateX(8px)",
          },
        }}
        w="fit-content"
        pl={[3, 5]}
      >
        <Heading variant="bigLink" as="a" href={href} target="_blank">
          {title}
        </Heading>
        <ArrowForward
          stroke="var(--chakra-colors-palette-900)"
          width={["18px", "25px"]}
          ml={2}
          className="arrow-forward"
        />
      </Box>
    </>
  );
};
