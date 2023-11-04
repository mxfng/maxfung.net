import React from "react";
import { Text, Flex, Center } from "@chakra-ui/react";
import { ArrowUp } from "../svg/ArrowUp";

export const SocialLink: React.FC<any> = ({ title, href }) => {
  return (
    <>
      <Flex as="a" href={href} mr={0} ml="auto">
        <Text variant="link" fontSize={["1.0rem", "1.2rem"]}>
          {title}
        </Text>
        <ArrowUp
          stroke="var(--chakra-colors-primary)"
          width="16px"
          ml={[1, 2]}
          my="auto"
          className="icon"
        />
      </Flex>
    </>
  );
};
