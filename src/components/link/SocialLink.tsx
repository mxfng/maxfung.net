import React from "react";
import { Text, Flex } from "@chakra-ui/react";
import { ArrowUp } from "../svg/ArrowUp";

export const SocialLink: React.FC<any> = ({ title, href }) => {
  return (
    <>
      <Flex as="a" href={href} target="_blank" className="linkify">
        <Text variant="link" fontSize={["0.9rem", "1.2rem"]}>
          {title}
        </Text>
        <ArrowUp
          stroke="var(--chakra-colors-primary)"
          w={["12px", "16px"]}
          ml={[1, 2]}
          className="icon"
        />
      </Flex>
    </>
  );
};
