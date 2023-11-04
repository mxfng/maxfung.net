"use client";
//should figure out how to go SSR later

import React from "react";
import {
  Text,
  Grid,
  GridItem,
  Image,
  Box,
  Flex,
  LinkBox,
  Spacer,
  Center,
} from "@chakra-ui/react";
import { ArrowUp } from "./svg/ArrowUp";
import { SP } from "next/dist/shared/lib/utils";
import { Line } from "./Line";

export const Experience: React.FC<any> = ({
  side,
  from,
  to,
  title,
  company,
  desc,
  stack,
  image,
  href,
  ...props
}) => {
  const stackLength = stack.length;

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
          {side && (
            <GridItem colSpan={2}>
              <Text variant="darker" mb={1} mr={1}>
                {side}
              </Text>
            </GridItem>
          )}
          {from && (
            <GridItem colSpan={2}>
              <Flex>
                <Box w="fit-content">
                  <Text variant="wide">{from}</Text>
                </Box>
                <Spacer />
                <Box px={4} overflow="hidden">
                  <Center h="100%">
                    <Line my="auto" />
                  </Center>
                </Box>
                <Spacer />
                <Box w="fit-content">
                  <Text variant="wide">{to}</Text>
                </Box>
              </Flex>
            </GridItem>
          )}
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
          <GridItem colSpan={{ base: 2, md: 1 }}>
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
          <GridItem colSpan={{ base: 2, md: 1 }}>
            <Box
              w="fit-content"
              mr={{ base: "auto", md: 0 }}
              ml={{ base: 0, md: "auto" }}
            >
              <Text variant="experience">{company}</Text>
            </Box>
          </GridItem>
          <GridItem colSpan={2}>
            {desc && (
              <Box my={4} textAlign="justify">
                <Text mb={[2, 2]}>{desc}</Text>
              </Box>
            )}
            <Grid templateColumns={`repeat(${stackLength}, 1fr)`} gap={2}>
              {stack.map((stackItem: string) => (
                <GridItem key={stackItem} overflow="hidden">
                  <Text variant="tiny">{stackItem}</Text>
                  <Line />
                </GridItem>
              ))}
            </Grid>
          </GridItem>
        </Grid>
      </Box>
    </>
  );
};
