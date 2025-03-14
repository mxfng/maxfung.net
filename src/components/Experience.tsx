"use client";

import React, { useEffect, useRef, useState } from "react";
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
import { AnimationControls, useAnimation, useInView } from "framer-motion";

interface DateRangeProps {
  from: string;
  to: string;
  mainControls: AnimationControls;
}

const DateRange: React.FC<DateRangeProps> = ({ from, to, mainControls }) => (
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

interface ExperienceHeadlineProps {
  title: string;
  company: string;
  long?: boolean;
}

const ExperienceHeadline: React.FC<ExperienceHeadlineProps> = ({
  title,
  company,
  long,
}) => (
  <>
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
  </>
);

interface ExperienceStackProps {
  stack: string[];
  mainControls: AnimationControls;
  from?: string;
}

const ExperienceStack: React.FC<ExperienceStackProps> = ({
  stack,
  mainControls,
  from,
}) => (
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

export interface ExperienceProps {
  from?: string;
  to?: string;
  title: string;
  company: string;
  desc?: string;
  stack?: string[];
  image?: string;
  href: string;
  long?: boolean;
}

export const Experience: React.FC<ExperienceProps> = ({
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

  const [descLines, setDescLines] = useState<string[]>([]);

  useEffect(() => {
    if (desc) {
      setDescLines(desc.split("\n"));
    }
  }, [desc]);

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <Box ref={ref}>
      <Grid
        as="a"
        href={href}
        target="_blank"
        className="linkify"
        templateColumns="repeat(2, 1fr)"
        {...props}
      >
        {from && <DateRange from={from} to={to} mainControls={mainControls} />}
        <GridItem colSpan={2}>
          {image && (
            <Image w="100%" h="222" objectFit="cover" src={image} alt={title} />
          )}
        </GridItem>
        <ExperienceHeadline title={title} company={company} long={long} />
        {desc && (
          <GridItem colSpan={2} my={[2, 4]}>
            <Flex flexDirection="column" gap={4}>
              {descLines.map((line, index) => (
                <Text key={index}>{line}</Text>
              ))}
            </Flex>
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
  );
};
