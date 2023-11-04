import { Box, Grid, GridItem, Heading } from "@chakra-ui/react";
import React from "react";
import { Line } from "./Line";
import { SocialLink } from "./link/SocialLink";

export const Links: React.FC<any> = () => {
  return (
    <>
      <Box mb={[8, 10]} overflow="hidden">
        <Line mb={[4, 4]} />
        <Grid px={3} templateColumns="repeat(5, 1fr)">
          <GridItem colSpan={1}>
            <Heading variant="section">Links</Heading>
          </GridItem>
          <GridItem colSpan={1}>
            <SocialLink
              title="Email"
              href="mailto:maxhfung@gmail.com?subject=Hello Max"
            />
          </GridItem>
          <GridItem>
            <SocialLink title="GitHub" href="https://github.com/mxfng" />
          </GridItem>
          <GridItem>
            <SocialLink
              title="LinkedIn"
              href="https://www.linkedin.com/in/maxfung/"
            />
          </GridItem>
          <GridItem>
            <SocialLink
              title="Instagram"
              href="https://www.instagram.com/fungkadelic/"
            />
          </GridItem>
        </Grid>
      </Box>
    </>
  );
};
