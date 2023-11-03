import React from "react";
import { Text, Grid, GridItem } from "@chakra-ui/react";
import { ExperienceLink } from "./ExperienceLink";

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
        <GridItem colSpan={{ base: 4 }} my="auto">
          <ExperienceLink title={title} href={href} />
        </GridItem>
      </Grid>
    </>
  );
};
