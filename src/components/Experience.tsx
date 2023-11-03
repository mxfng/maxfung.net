import React from "react";
import { Text, Grid, GridItem, Image } from "@chakra-ui/react";
import { ExperienceLink } from "./link/ExperienceLink";

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
      <Grid templateColumns="repeat(5, 1fr)" mb={[10, 20]} {...props}>
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
          <ExperienceLink title={title} href={href} mb={[1, 5]} />
          <Text mb={[3, 5]}>{desc}</Text>
          {stack && <Text variant="darker">{formatStack(stack)}</Text>}
        </GridItem>
      </Grid>
    </>
  );
};
