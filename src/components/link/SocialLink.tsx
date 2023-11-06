import React from "react";
import { Text, Flex } from "@chakra-ui/react";
import { ArrowUp } from "../svg/ArrowUp";

export const SocialLink: React.FC<any> = ({ title, href }) => {
  return (
    <>
      <Flex as="a" href={href}>
        <Text variant="link" fontSize={["0.8rem", "1.2rem"]}>
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
