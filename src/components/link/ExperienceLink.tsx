import { Flex, Text } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
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
          className="linkify"
        >
          <Text variant="link">{title}</Text>
          {href && (
            <ArrowUp
              stroke="var(--chakra-colors-palette-900)"
              width="16px"
              ml={[1, 2]}
              my="auto"
              display="inline-flex"
              className="icon"
            />
          )}
        </Flex>
      </Box>
    </>
  );
};
