import React from "react";
import { Text, Grid, GridItem, Flex } from "@chakra-ui/react";
import { ArrowUp } from "../svg/ArrowUp";

export const SocialLink: React.FC<any> = ({
  icon,
  side,
  title,
  href,
  ...props
}) => {
  return (
    <>
      <Flex as="a" href={href} mr={0} ml="auto" w="fit-content">
        <Text variant="link" my="auto">
          {side}
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
