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
      <Grid templateColumns="repeat(5, 1fr)" mb={[3, 6]} {...props}>
        <GridItem colSpan={{ base: 1 }} my="auto">
          <Text variant="darker" mr={1}>
            {side}
          </Text>
        </GridItem>
        <GridItem
          as="a"
          href={href}
          target="_blank"
          colSpan={{ base: 4 }}
          className="linkify"
          my="auto"
          width="fit-content"
        >
          <Flex display="inline-flex">
            <Text variant="link" className="text" width="max-content">
              {title}
            </Text>
            <ArrowUp
              stroke="var(--chakra-colors-palette-900)"
              width="16px"
              ml={[1, 2]}
              my="auto"
              className="icon"
            />
          </Flex>
        </GridItem>
      </Grid>
    </>
  );
};
