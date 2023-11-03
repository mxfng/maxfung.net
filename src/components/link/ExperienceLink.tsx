import { Flex, HStack, Image, Text } from "@chakra-ui/react";
import { Box, Heading } from "@chakra-ui/react";
import React from "react";

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
            "& img": {
              transform: "translateX(0) translateY(3px)",
              transition: "all 0.2s ease",
            },
            "& a": {
              textDecoration: "underline transparent",
              transition: "text-decoration 500ms ease",
            },
          }}
          _hover={{
            "& img": {
              transform: "translateX(3px)",
            },
            "& a": {
              textDecorationColor: "white",
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
            <Image
              ml={[1, 2]}
              my="auto"
              boxSize={4}
              src="/arrow-link.svg"
              alt={`↗`}
              display="inline-flex"
              className="external-arrow"
            />
          )}
        </Flex>
      </Box>
    </>
  );
};
