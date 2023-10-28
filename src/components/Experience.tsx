import React from "react";
import { Text, Grid, GridItem, Image } from "@chakra-ui/react";
import { ExperienceLink } from "./ExperienceLink";

export const Experience: React.FC<any> = ({
  side,
  title,
  desc,
  stack,
  image,
  href,
  ...props
}) => {
  const descParagraphs =
    desc && typeof desc === "string"
      ? desc.split("<br />").map((paragraph, index) => (
          <Text key={index} mb={3}>
            {paragraph}
          </Text>
        ))
      : null;

  return (
    <>
      <Grid templateColumns="repeat(5, 1fr)" mb={[10, 20]} {...props}>
        <GridItem colSpan={{ base: 5, md: 1 }}>
          <Text opacity={0.5} mb={1} mr={1}>
            {side}
          </Text>
        </GridItem>
        <GridItem colSpan={{ base: 5, md: 4 }} mt={1}>
          {image && <Image width="36px" mb={4} src={image} alt={title} />}
          <ExperienceLink title={title} href={href} />
          {descParagraphs}
          {stack && <Text opacity={0.5}>{stack}</Text>}
        </GridItem>
      </Grid>
    </>
  );
};
