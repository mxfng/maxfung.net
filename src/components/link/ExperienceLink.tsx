import { Flex } from "@chakra-ui/react";
import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import { ArrowUp } from "../svg/ArrowUp";

export const ExperienceLink: React.FC<any> = ({ title, href, ...props }) => {
  return (
    <>
      <Box {...props}>
        <Flex
          as="a"
          href={href}
          target="_blank"
          direction="row"
          __css={{
            "& .external-arrow": {
              transform: "translateX(0) translateY(3px)",
              transition: "all 0.2s ease",
            },
            "& a": {
              textDecoration: "underline transparent",
              transition: "text-decoration 500ms ease",
            },
          }}
          _hover={{
            "& .external-arrow": {
              transform: "translateX(3px)",
            },
            "& a": {
              textDecorationColor: "palette.900",
            },
          }}
        >
          <Heading
            variant="link"
            as="a"
            style={href ? { cursor: "pointer" } : { textDecoration: "none" }}
          >
            {title}
          </Heading>
          {href && (
            <ArrowUp
              stroke="var(--chakra-colors-palette-900)"
              width="16px"
              ml={[1, 2]}
              my="auto"
              display="inline-flex"
              className="external-arrow"
            />
          )}
        </Flex>
      </Box>
    </>
  );
};
