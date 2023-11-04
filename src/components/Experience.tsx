import React from "react";
import { Text, Grid, GridItem, Image, Box, Flex } from "@chakra-ui/react";
import { ArrowUp } from "./svg/ArrowUp";

export const Experience: React.FC<any> = ({
  side,
  title,
  desc,
  stack,
  image,
  href,
  ...props
}) => {
  function formatStack(stack: string[]): string {
    return stack.join(" • ");
  }

  return (
    <>
      <Box>
        <Grid
          as="a"
          href={href}
          target="_blank"
          className="linkify"
          templateColumns="repeat(5, 1fr)"
          mb={[10, 20]}
          {...props}
        >
          <GridItem colSpan={{ base: 5, md: 1 }}>
            <Text variant="darker" mb={1} mr={1}>
              {side}
            </Text>
          </GridItem>
          <GridItem colSpan={{ base: 5, md: 4 }} mt={1}>
            {image && (
              <Image
                width="48px"
                mb={4}
                src={image}
                alt={title}
                borderRadius="full"
              />
            )}
            <Flex display="inline-flex" mb={[1, 5]}>
              <Text variant="link" className="text" width="max-content">
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
            <Text mb={[3, 5]}>{desc}</Text>
            {stack && <Text variant="darker">{formatStack(stack)}</Text>}
          </GridItem>
        </Grid>
      </Box>
    </>
  );
};
