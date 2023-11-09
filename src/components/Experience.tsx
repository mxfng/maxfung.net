"use client";

import React, { useEffect, useRef } from "react";
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
import { Line } from "./visuals/Line";
import { SlideIn } from "./animation/SlideIn";
import { useAnimation, useInView } from "framer-motion";

const DateRange = ({ from, to, mainControls }) => (
  <GridItem colSpan={2}>
    <Flex>
      <Box w="fit-content">
        <Text variant="wide">{from}</Text>
      </Box>
      <Spacer />
      <Box px={4} w="100%" overflow="hidden">
        <SlideIn animate={mainControls}>
          <Center h="100%" position="relative">
            <Line position="absolute" left="0" />
          </Center>
        </SlideIn>
      </Box>
      <Spacer />
      <Box w="fit-content">
        <Text variant="wide">{to}</Text>
      </Box>
    </Flex>
  </GridItem>
);

const ExperienceImage = ({ image, title }) => (
  <GridItem colSpan={2}>
    {image && (
      <Image w="100%" h="222" objectFit="cover" src={image} alt={title} />
    )}
  </GridItem>
);

const ExperienceTitle = ({ title, long }) => (
  <GridItem
    id="experienceTitle"
    colSpan={long ? { base: 2, md: 1 } : { base: 1 }}
  >
    <Flex display="inline-flex">
      <Text variant="experience" className="text" w="max-content">
        {title}
      </Text>
      <ArrowUp
        stroke="var(--chakra-colors-primary)"
        w={["16px", "24px"]}
        ml={[1, 2]}
        className="icon"
      />
    </Flex>
  </GridItem>
);

const ExperienceCompany = ({ company, long }) => (
  <GridItem
    id="experienceCompany"
    colSpan={long ? { base: 2, md: 1 } : { base: 1 }}
  >
    <Box
      w="fit-content"
      mr={long ? { base: "auto", md: 0 } : { base: 0 }}
      ml={long ? { base: 0, md: "auto" } : { base: "auto" }}
    >
      <Text variant={long ? "experienceSub" : "experience"}>{company}</Text>
    </Box>
  </GridItem>
);

const ExperienceStack = ({ stack, mainControls, from }) => (
  <GridItem colSpan={2} my={2}>
    <Grid templateColumns={`repeat(${stack.length}, 1fr)`} gap={2}>
      {stack.map((stackItem: string, index) => (
        <GridItem key={stackItem} overflow="hidden">
          <Text variant="tiny">{stackItem}</Text>
          <SlideIn
            delay={from ? index * 0.15 : index * 0.15 + 0.5}
            animate={mainControls}
          >
            <Line />
          </SlideIn>
        </GridItem>
      ))}
    </Grid>
  </GridItem>
);

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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-200px" });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <>
      <Box ref={ref}>
        <Grid
          as="a"
          href={href}
          target="_blank"
          className="linkify"
          templateColumns="repeat(2, 1fr)"
          {...props}
        >
          {from && (
            <DateRange from={from} to={to} mainControls={mainControls} />
          )}
          <ExperienceImage image={image} title={title} />
          <ExperienceTitle title={title} long={long} />
          <ExperienceCompany company={company} long={long} />
          {desc && (
            <GridItem colSpan={2} my={[2, 4]}>
              <Text>{desc}</Text>
            </GridItem>
          )}
          {stack && (
            <ExperienceStack
              stack={stack}
              mainControls={mainControls}
              from={from}
            />
          )}
        </Grid>
      </Box>
    </>
  );
};
