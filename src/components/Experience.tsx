import React from "react";
import { Text, Heading, Grid, GridItem, Image } from "@chakra-ui/react";

export const Experience: React.FC<any> = ({
  side,
  title,
  desc,
  stack,
  image,
  href,
  ...props
}) => (
  <Grid templateColumns="repeat(4, 1fr)" mb={10} {...props}>
    <GridItem colSpan={{ base: 4, sm: 1 }}>
      <Text opacity={0.5} mb={2}>
        {side}
      </Text>
    </GridItem>
    <GridItem colSpan={{ base: 4, sm: 3 }}>
      {image && <Image width="36px" mb={4} src={image} alt={title} />}
      <Heading
        as="a"
        href={href}
        target="_blank"
        size="md"
        display="flex"
        alignItems="center"
      >
        {title}
        {href && (
          <Image
            ml={2}
            mb={1}
            boxSize="15px"
            src="/arrow-link.svg"
            alt={`link to ${title}`}
            transform="translateY(1px)"
          />
        )}
      </Heading>
      {desc && <Text my={2}>{desc}</Text>}
      {stack && <Text opacity={0.5}>{stack}</Text>}
    </GridItem>
  </Grid>
);
