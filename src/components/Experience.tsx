import React from "react";
import {
  Text,
  Grid,
  GridItem,
  Image,
  Box,
  Flex,
  Spacer,
  Center,
} from "@chakra-ui/react";
import { ArrowUp } from "./svg/ArrowUp";
import { Line } from "./Line";

export const Experience: React.FC<any> = ({
  from,
  to,
  title,
  company,
  desc,
  stack,
  image,
  href,
  long = false,
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
          {...props}
        >
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
          <GridItem
            id="experienceTitle"
            colSpan={long ? { base: 2, md: 1 } : { base: 1 }}
          >
            <Flex display="inline-flex">
              <Text variant="experience" className="text" width="max-content">
                {title}
              </Text>
              <ArrowUp
                stroke="var(--chakra-colors-primary)"
                width={["16px", "24px"]}
                ml={[1, 2]}
                className="icon"
              />
            </Flex>
          </GridItem>
          <GridItem
            id="experienceCompany"
            colSpan={long ? { base: 2, md: 1 } : { base: 1 }}
          >
            <Box
              w="fit-content"
              mr={long ? { base: "auto", md: 0 } : { base: 0 }}
              ml={long ? { base: 0, md: "auto" } : { base: "auto" }}
            >
              <Text variant={long ? "experienceSub" : "experience"}>
                {company}
              </Text>
            </Box>
          </GridItem>
          {desc && (
            <GridItem colSpan={2} my={2}>
              <Box textAlign="justify">
                <Text>{desc}</Text>
              </Box>
            </GridItem>
          )}
          {stack && (
            <GridItem colSpan={2} my={2}>
              <Grid templateColumns={`repeat(${stackLength}, 1fr)`} gap={2}>
                {stack.map((stackItem: string) => (
                  <GridItem key={stackItem} overflow="hidden">
                    <Text variant="tiny">{stackItem}</Text>
                    <Line />
                  </GridItem>
                ))}
              </Grid>
            </GridItem>
          )}
        </Grid>
      </Box>
    </>
  );
};
