import React from "react";
import {
  Text,
  Grid,
  GridItem,
  Image,
  Box,
  Flex,
  LinkBox,
} from "@chakra-ui/react";
import { ArrowUp } from "./svg/ArrowUp";

export const Experience: React.FC<any> = ({
  side,
  title,
  company,
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
          templateColumns="repeat(2, 1fr)"
          mb={[10, 20]}
          {...props}
        >
          <GridItem colSpan={2}>
            {image && (
              <Image
                width="100%"
                h="222"
                objectFit="cover"
                src={image}
                alt={title}
              />
            )}
          </GridItem>
          {side && (
            <GridItem colSpan={2}>
              <Text variant="darker" mb={1} mr={1}>
                {side}
              </Text>
            </GridItem>
          )}
          <GridItem colSpan={1} mt={2}>
            <Flex display="inline-flex">
              <Text variant="experience" className="text" width="max-content">
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
          </GridItem>
          <GridItem colSpan={1}>
            <Box w="fit-content" mr={0} ml="auto">
              <Text variant="experience">{company}</Text>
            </Box>
          </GridItem>
          <GridItem colSpan={2}>
            {desc && (
              <Box textAlign="justify">
                <Text mb={[2, 2]}>{desc}</Text>
              </Box>
            )}
            {stack && <Text variant="darker">{formatStack(stack)}</Text>}
          </GridItem>
        </Grid>
      </Box>
    </>
  );
};
